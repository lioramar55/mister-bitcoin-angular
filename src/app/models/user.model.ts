export interface User {
  name: string;
  balance: number;
  moves: move[];
}

export interface move {
  at: number;
  toId: string;
  to: string;
  amount: number;
}
