import logoVsc from '../assets/Logo-Vsc.png'
import playStore from '../assets/playstore.png'
import appstore from '../assets/AppStore.svg'

import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer class="bg-white mt-5 border border-black w-full">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase ">Contato</h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                Executive Plaza - R. Mal. Deodoro, 300 - Torreão, Encruzilhada, Recife - PE, 52030-172
              </li>
              <li class="mb-4">
                0800 081 3312
              </li>
              <li class="mb-4">
                contatovejaseucarro@gmail.com
              </li>
              <li class="mb-4">
                CNPJ:32.520.797/0001-44
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase ">Home</h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <a href="#vantagens" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 ">Vantagens </a>
              </li>
              <li class="mb-4">
                <a href="#valores" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">Valores</a>
              </li>
              <li class="mb-4">
                <a href="#depoimentos" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">Depoimentos</a>
              </li>
              <li class="mb-4">
                <Link to={`https://wa.me/55${8000813312}?text=Adorei%20seu%20artigo`} href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 ">Contato</Link>
              </li>
              <li class="mb-4">
                <Link to='/form' class="block  p-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-orange-500 hover:border-2 border-orange-500 ">Agendar demonstração</Link>
              </li>
              <li class="mb-4">
                <a href="https://www.protrack365.com/mobile/" class=" block  p-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-orange-500 hover:border-2 border-orange-500 ">Acessar Plataforma</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase ">Aplicativo</h2>
            <ul class="text-gray-500 font-medium">

              <li class="flex flex-col mb-4">
                <div className='mb-3'>
                  <a href="https://play.google.com/store/apps/details?id=com.itrybrand.tracker"><img className='w-52' src={playStore} alt="Logo Playstore" /></a>
                </div>

              </li>
              <li>

                <div className='mb-3'>
                  <a href="https://apps.apple.com/br/app/protrack-gps/id974137774"><img className='w-52' src={appstore} alt="Logo App Store" /></a>
                </div>

              </li>
            </ul>
          </div>
          <div>
            <img src={logoVsc} alt="" />
          </div>

        </div>
        <div class="px-4 py-6 bg-orange-500  md:flex md:items-center md:justify-between">
          <span class="text-sm text-white sm:text-center">© 2023 <a href="https://www.instagram.com/agenciapumadi/">Agencia Pumadi</a> - Todos os direitos reservados.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" class="text-gray-900 ">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-900 ">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
              <span class="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer