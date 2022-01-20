import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { initialTag, RowT, TagT } from "../../interfaces/filter.interfaces";
import { formatDate } from "../../modules/date";
import Filter from "../Filter";
import { columns } from "../Filter/columns";
import initialRows from "../Filter/initialRows";
import nameConverter from "../Filter/nameConverter";
import opConverter from "../Filter/opConverter";
import { Query } from "../Filter/query";
import statusConverter from "../Filter/statusConverter";

const { Search } = Input;
interface Props {}
const TableContainer = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [rows, setRows] = useState<RowT[]>(initialRows);
  const [filters, setFilters] = useState<TagT[]>([]);
  const [tag, setTag] = useState<TagT>(initialTag);

  useEffect(() => {
    if (filters.length > 0) {
      let filteredRows: RowT[] = [];
      filters.forEach((condition) => {
        let filteredItem = initialRows.filter((row) => {
          return Query(
            row[condition.name.toLowerCase() as keyof RowT],
            condition.name,
            condition.value,
            condition.op
          );
        });
        filteredRows = filteredRows.concat(filteredItem);
      });
      setRows(filteredRows);
    } else {
      setRows(initialRows);
    }
  }, [filters]);

  const onSearch = (value: string) => console.log(value);
  const handleCloseTag = (id: string) => {
    const indexToRemove = filters.findIndex((tag) => tag.id === id);
    setFilters((prev) => {
      let current = [...prev];
      current.splice(indexToRemove, 1);
      return current;
    });
  };

  return (
    <Row>
      <Col span={24}>
        <Row justify="space-between" style={{ marginBottom: "2rem" }}>
          <Col>
            <Search
              placeholder="Fatura ara"
              onSearch={onSearch}
              style={{ width: 320 }}
            />
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
              title="Filtre ekle"
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
        <Row style={{ background: "white" }} justify="start">
          <Col span={24}>
            {filters.map((tag) => (
              <Tag
                style={{ margin: "5px" }}
                closable
                onClose={() => handleCloseTag(tag.id)}
                key={tag.id}
              >
                {`${nameConverter(tag.name)} ${opConverter(tag.op, "asSign")} `}
                {tag.name === "Date"
                  ? `${formatDate(tag.value)}`
                  : tag.name === "Status"
                  ? ` ${statusConverter(tag.value)}`
                  : ` ${tag.value.toString()}`}
              </Tag>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              rowSelection={{ type: "checkbox" }}
              columns={columns}
              dataSource={rows}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TableContainer;
