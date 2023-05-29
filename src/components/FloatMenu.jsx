import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const FloatMenu = () => {
  return (
    <Link
      to={`https://api.whatsapp.com/send?phone=5508000813312&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20os%20rastreadores!%20 `} target='_blank'
      className="fixed bottom-24 right-4 z-50 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full text-white lg:text-4xl bg-green-500 hover:bg-green-600 focus:bg-green-600 transition-colors duration-300"
    >
      <i className="fab fa-whatsapp "></i>
    </Link>
  )
}

export default FloatMenu;