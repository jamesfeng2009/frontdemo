export interface CardData {
  id: number;
  image: string;
  amount: string;
  currency: string;
  merchant: string;
  location?: string;
  cashback?: string;
}