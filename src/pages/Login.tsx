import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute shadow_login bg-stupisci_b w-screen h-40 flex justify-center">
        <img src={logo} alt="StuPisci" />
      </div>
      <div className="font-font_login  text-white bg-sfondo bg-cover h-screen flex justify-center items-center">
        <form className="shadow_Login w-4/12 h-5/12 bg-stupisci_b flex-col flex justify-around items-center">
          <h1 className="text-4xl">BENVENUTO!</h1>
          <span className="flex-col flex gap-7 items-center">
            <input
              className="text-black rounded-xl p-3 w-64"
              type="password"
              placeholder="Inserisci codice"
            />
            <button
              className="hover:bg-stupisci_y-700 py-3 w-52 bg-stupisci_y-500 rounded-2xl text-2xl hover:scale-90 transform duration-300"
              onClick={() => {
                navigate("/cameriere");
              }}
            >
              Accedi
            </button>
          </span>

          <div className="flex w-full items-center justify-around px-7 ">
            <button className="text-white hover:underline outline-none text-lg">
              Hai dimenticato il Codice?
            </button>
            <span className="flex items-center gap-3 ">
              {" "}
              <p className="hover:underline text-lg">Ricorda il mio accesso</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
