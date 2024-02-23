import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import permesso from "../assets/permesso.png";
import menu from "../assets/menu.png";
import ordinare from "../assets/ordinare.png";

export default function Cameriere() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen grow Image_lg-sfondo">
        <div className="absolute shadow_login bg-stupisci_b w-screen h-40 flex justify-center">
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-row justify-around text-stupisci_y-500 font-bold items-center  w-full bg-sfondo_cm bg-cover">
          <div
            onClick={() => {
              Navigate("/cameriere/Ordinazioni");
            }}
            className="hover:bg-stupisci_b bg-stupisci_b w-2/12 h-4/12 rounded-3xl p-3  flex justify-around flex-col items-center text-2xl hover:cursor-[url(fish.png),_pointer] hover:scale-110 transform duration-300 hover:opacity-95"
          >
            <img src={ordinare} className="h-48" alt="" />
            <button className="flex">Pronti per Ordinare</button>
          </div>

          <div
            onClick={() => {
              Navigate("/cameriere/Menu");
            }}
            className="hover:bg-stupisci_b  bg-stupisci_b w-2/12 h-4/12 rounded-3xl p-3 flex justify-around flex-col items-center text-2xl  hover:cursor-fish hover:scale-110 transform duration-300 hover:opacity-95"
          >
            <img src={menu} className="h-48" alt="" />
            <button className="flex font-bold ">Menù Ordinazione</button>
          </div>
          <div
            onClick={() => {
              Navigate("/cameriere/Permesso");
            }}
            className="hover:bg-stupisci_b bg-stupisci_b w-2/12 h-4/12 rounded-3xl p-3 flex justify-around flex-col items-center text-2xl hover:cursor-fish hover:scale-110 transform duration-300 hover:opacity-95"
          >
            <img src={permesso} className="h-48 font-bold text-9xl" alt="" />
            <button className="flex">Richiedi Permesso</button>
          </div>
        </div>
      </div>
    </>
  );
}
