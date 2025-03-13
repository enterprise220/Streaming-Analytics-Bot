export interface Asset {
  id: string;
  symbol: string;
  name: string;
  type: 'commodity' | 'token' | 'derivative';
  decimals: number;
  network: 'liquid' | 'polygon' | 'solana';
}

export interface Order {
  id: string;
  assetId: string;
  type: 'buy' | 'sell';
  price: string;
  amount: string;
  total: string;
  status: 'pending' | 'filled' | 'cancelled';
  createdAt: string;
  userId: string;
}

export interface Trade {
  id: string;
  orderId: string;
  price: string;
  amount: string;
  total: string;
  timestamp: string;
  buyer: string;
  seller: string;
}

export interface Market {
  baseAsset: Asset;
  quoteAsset: Asset;
  lastPrice: string;
  volume24h: string;
  priceChange24h: string;
}