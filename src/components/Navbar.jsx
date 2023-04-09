import { Link } from "react-router-dom";
import Logo from '../assets/Logo-Vsc.png';

const Navbar = () => {
  return (
    <nav class="bg-white">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/">
          <img src={Logo} class="h-14 mr-3" alt="Logo" />
        </a>
        <div class="flex md:order-2">
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg items-center bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to="/" href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-500"
                aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="#" href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 ">Vantagens</Link>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500   ">Valores</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500   ">Depoimentos</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 ">Contato</a>
            </li>
            <li>
              <Link to='/form' class=" block text-white bg-orange-500 rounded p-2 md:hover:bg-transparent md:hover:text-orange-500 hover:border-2 border-orange-500">Agendar demonstração</Link>
            </li>
            <li>
              <a href="https://www.protrack365.com/mobile/" class=" block  p-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-orange-500 hover:border-2 border-orange-500 ">Acessar Plataforma</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


