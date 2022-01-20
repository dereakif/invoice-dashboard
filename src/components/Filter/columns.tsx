import { Space, Tag } from "antd";
import { formatDate } from "../../modules/date";
import { DataItemT } from "./schema";

const renderDate = (date: Date) => (
  <span key={date.toISOString()}>{formatDate(date.toISOString())}</span>
);

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
  return <Tag color={color}>{text}</Tag>;
};

export const columns = [
  {
    title: "Servis Adi",
    dataIndex: "service",
    key: "service",
    render: (text: string) => <a>{text}</a>,
    sorter: (a: DataItemT, b: DataItemT) => a.service.localeCompare(b.service),
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
    sorter: (a: DataItemT, b: DataItemT) => a.date.getTime() - b.date.getTime(),
  },
  {
    title: "Tutar",
    dataIndex: "amount",
    key: "amount",
    render: (amount: number) => <span key={amount}>${amount}</span>,
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
