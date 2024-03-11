import "../../index.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.json";
import Ordinazioni from "./Ordinazioni";
import { useState } from "react";
interface OrderType {
  isSpecial: false;
  id: number;
  name: string;
  price: string;
  type: string;
}

export default function Menu() {
  const [order, setOrder] = useState<OrderType[]>([]);
  function addItem(item: OrderType) {
    setOrder([...order, item]);
  }
  return (
    <>
      <div className="shadow_login bg-stupisci_b w-screen h-40 flex justify-center">
        {" "}
        <img src={logo} alt="StuPisci" />
      </div>
      <div className="text-menu text w-full flex flex-col items-center">
        <h1 className="text-7xl font-bold m-16 dancing-script">M E N U</h1>
        <div className="w-full">
          <h1 className="text-stupisci_y-500 text-5xl font-bold text-center mt-20 mb-16 dancing-script">
            ANTIPASTI
          </h1>
          {menu.antipasti.map((menuElement) => {
            return (
              <div className="items-center justify-center flex flex-col">
                <button
                  className="hover:underline outline-none text-2xl hover:scale-125 transform duration-300"
                  onClick={() => addItem(menuElement)}
                >
                  <b>{menuElement.name}</b>
                </button>
                <h1 className="mt-4 text-xl">{menuElement.price}</h1>

                <h1 className="my-6"></h1>
              </div>
            );
          })}
        </div>

        <div>
          <h1 className="text-stupisci_y-500 text-5xl font-bold text-center m-16 dancing-script">
            PRIMI PIATTI
          </h1>
          {menu.primi.map((menuElement) => {
            return (
              <div className="items-center justify-center flex flex-col">
                <button
                  className="text-2xl hover:underline outline-none hover:scale-125 transform duration-300"
                  onClick={() => addItem(menuElement)}
                >
                  <b>{menuElement.name}</b>
                </button>
                <h1 className="mt-4 text-xl ">{menuElement.price}</h1>

                <h1 className="my-6"></h1>
              </div>
            );
          })}
          <h1 className="text-stupisci_y-500 text-5xl font-bold text-center m-16 dancing-script">
            SECONDI PIATTI
          </h1>
          {menu.secondi.map((menuElement) => {
            return (
              <div className="items-center justify-center flex flex-col">
                <button
                  className="hover:underline outline-none text-2xl hover:scale-125 transform duration-300"
                  onClick={() => addItem(menuElement)}
                >
                  <b>{menuElement.name}</b>
                </button>
                <h1 className="mt-4 text-xl">{menuElement.price}</h1>

                <h1 className="my-6"></h1>
              </div>
            );
          })}
          <div>
            <h1 className="text-stupisci_y-500 text-5xl font-bold text-center m-16 dancing-script">
              DESSERT
            </h1>
            {menu.dessert.map((menuElement) => {
              return (
                <div className="items-center justify-center flex flex-col">
                  <button
                    className="hover:underline outline-none text-2xl hover:scale-125 transform duration-300 "
                    onClick={() => addItem(menuElement)}
                  >
                    <b>{menuElement.name}</b>
                  </button>
                  <h1 className="mt-4 text-xl">{menuElement.price}</h1>

                  <h1 className="my-6"></h1>
                </div>
              );
            })}
            <button className="hover:bg-stupisci_lb py-3 w-52 bg-stupisci_b rounded-2xl text-2xl hover:scale-90 transform duration-300 text-white my-16 self-end w-full ">
              invia ordinazione
              {order.length}
            </button>
            <div>
          <h1 className="text-stupisci_y-500 text-5xl font-bold text-center m-16 dancing-script">
            PRIMI PIATTI
          </h1>
          {menu.bevande.map((menuElement) => {
            return (
              <div className="items-center justify-center flex flex-col">
                <button
                  className="text-2xl hover:underline outline-none hover:scale-125 transform duration-300"
                  onClick={() => addItem(menuElement)}
                >
                  <b>{menuElement.name} {menuElement.capacity}</b>
                </button>

                <h1 className="mt-4 text-xl ">{menuElement.price}</h1>

                <h1 className="my-6"></h1>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}
