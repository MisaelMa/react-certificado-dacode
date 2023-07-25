
export default function Page() {
  return (<>
   <h1 className="text-white text-4xl font-bold mb-1">Login</h1>
        <p className="text-white text-lg mb-12">¡Bienvenido!</p>
  <form className="w-[30rem] text-left">
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" >Correo electrónico</label>
    <input className="shadow appearance-none border bg-[#5141EA] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"/>
  </div>
  <div className="mb-6">
    <label className="block text-white text-sm font-bold mb-2" >Contraseña</label>
    <input className="shadow appearance-none border bg-[#5141EA] rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
  </div>
  <div className="flex my-4">
            <input type="checkbox" className="h-5 w-5 text-purple-600 rounded mr-2" />
            <label className="text-white text-sm" htmlFor="remember">
              Recordarme
            </label>
          </div>
    <button className="bg-gradient-to-r from-blue-300  to-blue-600 text-white mx-4 ml-0 px-6 py-1 rounded-3xl text-base">
        Crear Cuenta
    </button>
 
</form>
</>)
}