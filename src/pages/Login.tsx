import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute shadow_login bg-stupisci_b w-screen h-40 flex justify-center">
        <img src={logo} alt="StuPisci" />
      </div>
      <div className="font-font_login  text-white h-screen bg-white flex justify-center items-center">
        <h1 className="absolute right-0 text-stupisci_lb text-7xl verticaltext ">
          StuPisci
        </h1>
        <form className="shadow_Login w-1/3 h-2/6 bg-stupisci_b flex-col flex justify-around items-center">
          <h1 className="text-4xl">BENVENUTO</h1>
          <input
            className="text-black rounded-3xl p-3"
            type="password"
            placeholder="Inserisci codice"
          />
          <button
            className="hover:bg-stupisci_y-700 py-3 w-52 bg-stupisci_y-500 rounded-2xl text-2xl"
            onClick={() => {
              navigate("/manager");
            }}
          >
            Accedi
          </button>
          <div className="flex flex-row-reverse w-full gap-3 items-center justify-start px-10">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Ricorda il mio accesso</p>
          </div>
        </form>
      </div>
    </>
  );
}
