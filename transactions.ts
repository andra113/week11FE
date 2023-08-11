export interface Transaction {
  id: number;
  type: string;
  detail: string;
  amount: number;
}

export let transactions: Transaction[] = [];
