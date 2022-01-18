import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from "antd";
import { useState } from "react";
import Filter from "../Filter";
const { Search } = Input;

interface Props {}

const TableContainer = (props: Props) => {
  const onSearch = (value: string) => console.log(value);

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
    <span>
      {date.toLocaleString("default", { month: "long" }) +
        " " +
        date.getDate() +
        ", " +
        date.getFullYear()}
    </span>
  );

  const columns = [
    {
      title: "Servis Adi",
      dataIndex: "service",
      key: "service",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Fatura Numarasi",
      dataIndex: "invoice_id",
      key: "invoice_id",
    },
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
      render: (date: Date) => renderDate(date),
    },
    {
      title: "Tutar",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => <span>${amount}</span>,
    },
    {
      title: "Durum",
      key: "status",
      dataIndex: "status",
      render: (status: string) => renderStatus(status),
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
      date: new Date(),
      amount: 196.15,
      status: "notPaid",
    },
    {
      id: 2,
      service: "DMP",
      invoice_id: 514,
      date: new Date(),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 3,
      service: "DMP",
      invoice_id: 561,
      date: new Date(),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 4,
      service: "DMP",
      invoice_id: 666,
      date: new Date(),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 5,
      service: "SSP",
      invoice_id: 261,
      date: new Date(),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 6,
      service: "DMP",
      invoice_id: 511,
      date: new Date(),
      amount: 196.15,
      status: "pending",
    },
    {
      id: 7,
      service: "SSP",
      invoice_id: 461,
      date: new Date(),
      amount: 196.15,
      status: "paid",
    },
  ];
  const [visible, setVisible] = useState(false);
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
              content={<Filter setVisible={setVisible} />}
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
