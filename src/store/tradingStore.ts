import { create } from 'zustand';
import { Asset, Order, Trade, Market } from '../types/trading';

interface TradingState {
  selectedMarket: Market | null;
  orderBook: {
    bids: Order[];
    asks: Order[];
  };
  userOrders: Order[];
  recentTrades: Trade[];
  setSelectedMarket: (market: Market) => void;
  updateOrderBook: (bids: Order[], asks: Order[]) => void;
  addUserOrder: (order: Order) => void;
  addTrade: (trade: Trade) => void;
}

export const useTradingStore = create<TradingState>((set) => ({
  selectedMarket: null,
  orderBook: {
    bids: [],
    asks: [],
  },
  userOrders: [],
  recentTrades: [],
  
  setSelectedMarket: (market) => set({ selectedMarket: market }),
  
  updateOrderBook: (bids, asks) => set({
    orderBook: {
      bids,
      asks,
    },
  }),
  
  addUserOrder: (order) => set((state) => ({
    userOrders: [order, ...state.userOrders],
  })),
  
  addTrade: (trade) => set((state) => ({
    recentTrades: [trade, ...state.recentTrades].slice(0, 50),
  })),
}));