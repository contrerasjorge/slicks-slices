import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. Create some state to hold our order
  // got rid of this line because moved useState to the provider
  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);

  // 2. Make a function add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  // 3. Make a function remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }

  // 4. Send this data to a serverless function when they check out

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
