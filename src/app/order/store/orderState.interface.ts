import { OrderInterface } from '../types/order.interface';

export interface OrderStateInterface {
  isLoading: boolean;
  orders: any;
  error: string | null;
}
