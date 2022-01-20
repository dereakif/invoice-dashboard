export interface TagT {
  id: string;
  name: string;
  op: string;
  value: string;
}

export const initialTag: TagT = { id: "", name: "", value: "", op: "" };

export interface RowT {
  id: number;
  service: string;
  invoice_id: number;
  date: Date;
  amount: number;
  status: string;
}
