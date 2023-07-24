
export default function Page() {
  return (<>
  <form className="w-64 text-left">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" >Correo electrónico</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Correo electrónico"/>
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" >Contraseña</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña"/>
  </div>
    <button className="bg-gradient-to-r from-blue-300  to-blue-600 text-white mx-4 px-6 py-1 rounded-3xl text-base">
        Crear Cuenta
    </button>
  <div className="flex ">
 
    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      ¿Olvidaste tu contraseña?
    </a>
  </div>
</form>
</>)
}