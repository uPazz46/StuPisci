export default function Login() {
  return (
    <div className="  text-white h-screen bg-white flex justify-center items-center ">
      <div className="bg-stupisci_b w-screen h-80"></div>
      <form className="font-font_login shadow_Login w-96 h-1/3 bg-stupisci_b flex-col flex justify-around items-center">
        <h1>BENVENUTO</h1>
        <input
          className="text-black rounded-3xl p-3"
          type="password"
          placeholder="Inserisci codice"
          border-yellow-500
        />
        <button className="py-3 w-52 bg-stupisci_y rounded-2xl">Accedi</button>
      </form>
    </div>
  );
}
