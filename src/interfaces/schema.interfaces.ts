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
