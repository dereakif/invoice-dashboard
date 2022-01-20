import { Space, Tag } from "antd";
import { TagT } from "../interfaces/filter.interfaces";
import { DataItemT, SchemaT } from "../interfaces/schema.interfaces";
import { formatDate } from "../utils";

export const Schema: SchemaT = {
  service: {
    name: "Service",
    type: "multiselect",
    ops: ["eq", "neq"],
    values: ["DMP", "Exchange", "SSP", "Verification", "DSP"],
  },
  date: {
    name: "Date",
    type: "datetime",
    ops: ["eq", "neq", "gt", "lt", "ge", "le"],
  },
  amount: {
    name: "Amount",
    type: "money",
    ops: ["eq", "neq", "gt", "lt", "ge", "le"],
  },
  status: {
    name: "Status",
    type: "multiselect",
    ops: ["eq", "neq"],
    values: ["Odendi", "Bekliyor", "Odenmedi"],
  },
};

export const initialTag: TagT = { id: "", name: "", value: "", op: "" };

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

export const initialRows = [
  {
    id: 1,
    service: "DMP",
    invoice_id: 521,
    date: new Date("2019-8-2"),
    amount: 292.15,
    status: "notPaid",
  },
  {
    id: 2,
    service: "Exchange",
    invoice_id: 514,
    date: new Date("2019-2-12"),
    amount: 146.15,
    status: "pending",
  },
  {
    id: 3,
    service: "Verification",
    invoice_id: 561,
    date: new Date("2018-12-2"),
    amount: 191.11,
    status: "pending",
  },
  {
    id: 4,
    service: "DSP",
    invoice_id: 666,
    date: new Date("2018-9-2"),
    amount: 166.72,
    status: "pending",
  },
  {
    id: 5,
    service: "SSP",
    invoice_id: 261,
    date: new Date("2018-2-10"),
    amount: 141.32,
    status: "pending",
  },
  {
    id: 6,
    service: "Exchange",
    invoice_id: 511,
    date: new Date("2019-2-5"),
    amount: 193.11,
    status: "pending",
  },
  {
    id: 7,
    service: "DSP",
    invoice_id: 461,
    date: new Date("2020-7-3"),
    amount: 196.15,
    status: "paid",
  },
  {
    id: 8,
    service: "DMP",
    invoice_id: 521,
    date: new Date("2018-2-2"),
    amount: 296.15,
    status: "notPaid",
  },
  {
    id: 9,
    service: "Exchange",
    invoice_id: 514,
    date: new Date("2018-2-1"),
    amount: 246.15,
    status: "pending",
  },
  {
    id: 10,
    service: "Verification",
    invoice_id: 561,
    date: new Date("2018-1-2"),
    amount: 192.11,
    status: "pending",
  },
  {
    id: 11,
    service: "DSP",
    invoice_id: 666,
    date: new Date("2018-4-2"),
    amount: 166.72,
    status: "pending",
  },
  {
    id: 12,
    service: "SSP",
    invoice_id: 261,
    date: new Date("2018-2-5"),
    amount: 143.32,
    status: "pending",
  },
  {
    id: 13,
    service: "Exchange",
    invoice_id: 511,
    date: new Date("2019-2-2"),
    amount: 183.11,
    status: "pending",
  },
  {
    id: 14,
    service: "DSP",
    invoice_id: 461,
    date: new Date("2020-7-3"),
    amount: 196.15,
    status: "paid",
  },
];
