export type ThemeType = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface WalletBalance {
  amount: string;
  currency: string;
}