import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Input,
  Popover,
  Row,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { columns, initialRows, initialTag } from "../../constants";
import { RowT, TagT } from "../../interfaces/filter.interfaces";
import {
  formatDate,
  nameConverter,
  opConverter,
  statusConverter,
} from "../../utils";
import Filter from "../Filter";
import { Query } from "../../utils/query";

const { Title } = Typography;
const { Search } = Input;

const TableContainer = () => {
  const [visible, setVisible] = useState(false);
  const [rows, setRows] = useState<RowT[]>(initialRows);
  const [filters, setFilters] = useState<TagT[]>([]);
  const [tag, setTag] = useState<TagT>(initialTag);
  const [useInitial, setUseInitial] = useState(false);

  useEffect(() => {
    if (filters.length > 0) {
      let filteredRows: RowT[] = [];
      let dataToFilter = useInitial ? [...initialRows] : [...rows];
      filters.forEach((condition) => {
        filteredRows = dataToFilter.filter((row) =>
          Query(
            row[condition.name.toLowerCase() as keyof RowT],
            condition.name,
            condition.value,
            condition.op
          )
        );
      });
      setRows(filteredRows);
      setUseInitial(false);
    } else {
      setRows(initialRows);
    }
    // eslint-disable-next-line
  }, [filters]);

  const handleCloseTag = (id: string) => {
    const indexToRemove = filters.findIndex((tag) => tag.id === id);
    setFilters((prev) => {
      let current = [...prev];
      current.splice(indexToRemove, 1);
      return current;
    });
    setUseInitial(true);
  };

  return (
    <Row>
      <Col span={24}>
        <Row justify="space-between" style={{ marginBottom: "2rem" }}>
          <Col>
            <Search placeholder="Fatura ara" style={{ width: 320 }} />
          </Col>
          <Col>
            <Popover
              content={
                <Filter
                  tag={tag}
                  setFilters={setFilters}
                  setTag={setTag}
                  setVisible={setVisible}
                />
              }
              title={() => <Title level={5}>Filtre ekle</Title>}
              placement="leftTop"
              trigger="click"
              visible={visible}
              onVisibleChange={(s) => setVisible(s)}
            >
              <Space>
                <Button icon={<FilterOutlined />}></Button>
                <Button icon={<DownloadOutlined />}></Button>
              </Space>
            </Popover>
          </Col>
        </Row>
        {filters.length > 0 && (
          <Row style={{ background: "white" }} justify="start">
            <Col span={24}>
              {filters.map((tag) => (
                <Tag
                  style={{ margin: "5px" }}
                  closable
                  onClose={() => handleCloseTag(tag.id)}
                  key={tag.id}
                >
                  {`${nameConverter(tag.name)} ${opConverter(
                    tag.op,
                    "asSign"
                  )} `}
                  {tag.name === "Date"
                    ? `${formatDate(tag.value)}`
                    : tag.name === "Status"
                    ? ` ${statusConverter(tag.value)}`
                    : ` ${tag.value.toString()}`}
                </Tag>
              ))}
            </Col>
          </Row>
        )}
        <Row>
          <Col span={24}>
            <Table
              rowSelection={{ type: "checkbox" }}
              columns={columns}
              dataSource={rows}
              rowKey={"id"}
              scroll={{ x: 840 }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TableContainer;
