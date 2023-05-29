import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const FloatMenu = () => {
  return (
    <Link
      to={`https://wa.me/55${8000813312}?text=Adorei%20seu%20artigo`}
      className="fixed bottom-24 right-4 z-50 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full text-white lg:text-4xl bg-green-500 hover:bg-green-600 focus:bg-green-600 transition-colors duration-300"
      target="_blank"
    >
      <i className="fab fa-whatsapp "></i>
    </Link>
  )
}

export default FloatMenu;