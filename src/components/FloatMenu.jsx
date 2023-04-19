import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const FloatMenu = () => {
  return (

    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow lg:justify-around md:flex md:items-center md:justify-between md:p-6 ">
      <ul class="flex items-center text-sm font-medium my-3 justify-around  text-gray-500">
        <li>
          <Link to='/form' class=" text-white bg-orange-500 rounded p-2 md:hover:bg-transparent md:hover:text-orange-500 hover:border-2 border-orange-500">Agendar demonstração</Link>
        </li>
        {/* <li class="text-center hidden lg:block">
          <Link to='/form' class=" text-white bg-orange-500 rounded p-2 md:hover:bg-transparent md:hover:text-orange-500 hover:border-2 border-orange-500">Agendar demonstração</Link>
        </li> */}
        <Link
          to={`https://wa.me/55${81988656767}?text=Adorei%20seu%20artigo`}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 transition-colors duration-300"
          target="_blank"
        >
          <i className="fab fa-whatsapp"></i>
        </Link>
      </ul>
    </footer >


  )
}

export default FloatMenu;