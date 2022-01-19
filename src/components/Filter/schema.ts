export interface SchemaItemT {
  name: string;
  type: string;
  ops: string[];
  values?: string[];
}
export interface SchemaT {
  service: SchemaItemT;
  date: SchemaItemT;
  amount: SchemaItemT;
  status: SchemaItemT;
}

export interface DataItemT {
  id: number;
  service: string;
  invoice_id: number;
  date: Date;
  amount: number;
  status: string;
}

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
