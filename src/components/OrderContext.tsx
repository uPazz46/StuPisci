import { createContext, useContext, useEffect, useState } from "react";
import { OrderType } from "../types/types";

const OrderContext = createContext([]);

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrder] = useState<OrderType[]>([]);

  const addItemToOrder = (item: OrderType) => {
    const existingItemIndex = order.findIndex(
      (orderItem) => orderItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingItemIndex].quantity += 1;
      updatedOrder[existingItemIndex].totalPrice += item.price;
      setOrder(updatedOrder);
    } else {
      setOrder([...order, { ...item, quantity: 1, totalPrice: item.price }]);
    }
  };

  useEffect(() => {
    setOrder([]);
  }, []);
  return (
    <OrderContext.Provider value={{ order, addItemToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
