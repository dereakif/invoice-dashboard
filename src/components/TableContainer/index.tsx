import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { initialTag, TagT } from "../../interfaces/filter.interfaces";
import { formatDate } from "../../modules/date";
import Filter from "../Filter";
import opConverter from "../Filter/opConverter";
import { DataItemT, SchemaItemT } from "../Filter/schema";
const { Search } = Input;
interface Props {}

const TableContainer = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const [filters, setFilters] = useState<TagT[]>([]);
  const [tag, setTag] = useState<TagT>(initialTag);

  useEffect(() => {
    console.log({ tag });
  }, [tag]);

  const onSearch = (value: string) => console.log(value);
  const handleCloseTag = (id: string) => {
    const indexToRemove = filters.findIndex((tag) => tag.id === id);
    setFilters((prev) => {
      let current = [...prev];
      current.splice(indexToRemove, 1);
      return current;
    });
  };
  const renderStatus = (status: string) => {
    let color = "";
    let text = "";
    switch (status) {
      case "paid":
        color = "green";
        text = "Odendi";
        break;
      case "pending":
        color = "orange";
        text = "Bekliyor";
        break;
      case "notPaid":
        color = "volcano";
        text = "Odenmedi";
        break;

      default:
        break;
    }
    return (
      <Tag color={color} key={status}>
        {text}
      </Tag>
    );
  };

  const renderDate = (date: Date) => (
    <span>{formatDate(date.toISOString())}</span>
  );

  const columns = [
    {
      title: "Servis Adi",
      dataIndex: "service",
      key: "service",
      render: (text: string) => <a>{text}</a>,
      sorter: (a: DataItemT, b: DataItemT) =>
        a.service.localeCompare(b.service),
    },
    {
      title: "Fatura Numarasi",
      dataIndex: "invoice_id",
      key: "invoice_id",
      sorter: (a: DataItemT, b: DataItemT) => a.invoice_id - b.invoice_id,
    },
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
      render: (date: Date) => renderDate(date),
      sorter: (a: DataItemT, b: DataItemT) =>
        a.date.getTime() - b.date.getTime(),
    },
    {
      title: "Tutar",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => <span>${amount}</span>,
      sorter: (a: DataItemT, b: DataItemT) => a.amount - b.amount,
    },
    {
      title: "Durum",
      key: "status",
      dataIndex: "status",
      render: (status: string) => renderStatus(status),
      sorter: (a: DataItemT, b: DataItemT) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Goster</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      service: "DMP",
      invoice_id: 521,
      date: new Date(2018, 2, 2),
      amount: 196.15,
      status: "notPaid",
    },
    {
      id: 2,
      service: "DMP",
      invoice_id: 514,
      date: new Date(2018, 2, 1),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 3,
      service: "DMP",
      invoice_id: 561,
      date: new Date(2018, 1, 2),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 4,
      service: "DMP",
      invoice_id: 666,
      date: new Date(2018, 4, 2),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 5,
      service: "SSP",
      invoice_id: 261,
      date: new Date(2018, 2, 5),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 6,
      service: "DMP",
      invoice_id: 511,
      date: new Date(2019, 2, 2),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 7,
      service: "SSP",
      invoice_id: 461,
      date: new Date(2020, 7, 3),
      amount: 196.15,
      status: "paid",
    },
  ];
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
                {tag.name === "Date"
                  ? `${tag.name} ${opConverter(tag.op, "asSign")} ${formatDate(
                      tag.value
                    )}`
                  : `${tag.name} ${opConverter(
                      tag.op,
                      "asSign"
                    )} ${tag.value.toString()}`}
              </Tag>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TableContainer;
