import { useOrder } from "../../components/OrderContext";
import { OrderType } from "../../types/types";

export default function Resoconto() {
  const { order }: { order: OrderType[] } = useOrder();
  let contoFin = 0;
  const calculateTotalPrice = (item: OrderType) => {
    return parseFloat(item.price.replace(",", ".")) * item.quantity;
  };

  // Calcolo del prezzo totale di tutti gli elementi nell'ordine
  const totalOrderPrice = order.reduce(
    (acc, item) => acc + calculateTotalPrice(item),
    0
  );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center justify-center">
        <h1>Resoconto Ordinazione</h1>
        {order && order.length > 0 ? (
          order.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center text-center"
            >
              <span className="flex flex-row gap-5">
                <h2 className="font-semibold text-2xl">{item.name}</h2>
                <h3 className="text-lg ">{item.price}</h3>
                <h3 className="text-lg ">Quantità: {item.quantity}</h3>
                <h3 className="text-lg ">
                  Prezzo Totale: {calculateTotalPrice(item)}
                </h3>
                <h1 className="hidden">
                  {(contoFin = contoFin + calculateTotalPrice(item))}
                </h1>
              </span>
            </div>
          ))
        ) : (
          <p>Nessun ordine selezionato.</p>
        )}
        <h1>{contoFin}</h1>
      </div>
    </div>
  );
}
