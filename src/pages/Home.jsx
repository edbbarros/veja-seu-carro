import { useState } from 'react';
import '../App.css';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import EletronicFence from '../assets/image6.jpg';
import Form from '../components/Form';

import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

import post1 from '../assets/post1.jpg'
import post2 from '../assets/post2.jpg'
import post3 from '../assets/post3.jpg'
import FloatMenu from '../components/FloatMenu';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {

  const [activeItemId, setActiveItemId] = useState(null);
  const toggleItem = (itemId) => {
    setActiveItemId(prevActiveItemId => prevActiveItemId === itemId ? null : itemId);
  };
  const openItem = (itemId) => {
    setActiveItemId(itemId);
  };
  const closeItem = (itemId) => {
    setActiveItemId(prevActiveItemId => prevActiveItemId === itemId ? null : prevActiveItemId);
  };

  return (
    <>
      <section className='bg-mobile bg-desktop flex flex-col items-center justify-start lg:items-start '>
        <h1 class='text-white font-bold text-4xl lg:text-7xl mt-10  mb-10 mx-5 lg:my-20 lg:mx-20 lg:w-[38rem] animate-left-to-center'> Seu patrimônio protegido <span className='text-[#f2910e]'>24h</span> por dia!
        </h1>

        <a class="text-white bg-[#f2910e] font-medium rounded-lg text-2xl py-3 inline-flex justify-center w-3/4 lg:h-[4rem] lg:w-[33rem] text-center mx-20" href="https://bit.ly/WhatsappVSC">Eu quero</a>

        <div className='flex items-center space-x-4 text-3xl my-10 '>
          <i className="fab fa-whatsapp  bg-green-500 rounded-full text-white"></i>
          <h1 className='text-white'>
            0800 081 3312
          </h1>
        </div>

      </section >

      <section class='DadosCTA'>
        <div class="border-t border-gray-200 justify-items-center my-2">
          <div class=" p-4 bg-orange-500 rounded-lg md:p-8 ">
            <dl class="grid grid-cols-3 gap-5 justify-items-center text-center max-[480px]:flex max-[480px]:flex-col m-4 ">
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-7xl font-extrabold contador contador-1"></dt>
                <dd class="text-white ">de redução de combustível logo no primeiro mês de uso da nossa plataforma.</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-7xl  font-extrabold contador contador-2 "></dt>
                <dd class="text-white ">de aumento na produtividade dos colaboradores da sua empresa.</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-7xl font-extrabold contador contador-3"></dt>
                <dd class="text-white ">de redução em quilômetros percorridos pela sua frota.</dd>
              </div>
            </dl>
            <p className='text-white text-xs text-center'>*Números aproximados, baseado em relatórios de nossos clientes.</p>
          </div>
        </div>
      </section>

      <section id='vantagens' className='flex flex-col text-center items-center my-10 mx-5'>
        <h1 class="text-orange-500 font-bold text-2xl">Com o que podemos te ajudar hoje?</h1>
      </section>

      <section class="grid grid-cols-3 my-10 gap-5 justify-items-center text-center max-[480px]:flex max-[480px]:flex-col m-4">
        <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col  ">
          <img class="rounded-t-lg" src={img1} alt="" />
          <div class="p-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">Relatório de paradas em pontos mapeados
            </h5>
            <p class=" font-normal text-gray-700 "> Acompanhe todos os locais por onde seu veiculo parou e o tempo que ficou em cada lugar.
            </p>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <img class="rounded-t-lg" src={img2} alt="" />
          <div class="p-2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">Tempo de viagem
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">Saiba quanto tempo leva seu colaborador em cada trajeto e melhore a sua gestão de frotas.
            </p>
          </div>
        </div>

        <div class="  max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

          <img class="rounded-t-lg" src={img3} alt="" />

          <div class="p-2">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">Localização do seu veiculo em tempo real
            </h5>

            <p class="mb-3 font-normal text-gray-700 ">Saiba onde seus veiculos estão agora e veja a imagem do local ( Google Street View) de onde eles estão.
            </p>
          </div>
        </div>

        <div class="  max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

          <img class="rounded-t-lg" src={img5} alt="" />

          <div class="p-2">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">Análise do trajeto dos veiculos
            </h5>

            <p class="mb-3 font-normal text-gray-700 ">Faça a gestão de frotas também através do historico dos trajetos percorridos por seu veiculo.
            </p>
          </div>
        </div>

        <div class="  max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

          <img class="rounded-t-lg" src={img4} alt="" />

          <div class="p-2">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">Tempo com o motor ligado
            </h5>

            <p class="mb-3 font-normal text-gray-700 ">Consiga saber, através da telemetria, quanto tempo o veiculo da sua frota ficou parado e com o motor ligado.
            </p>
          </div>
        </div>

        <div class="  max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

          <img class="rounded-t-lg" src={EletronicFence} alt="" />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

          }} class="p-2">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">Cerca eletrônica</h5>

            <p style={{
              width: '20rem'
            }} class="mb-3 font-normal text-gray-700 ">Receba alertas caso seu veiculo saia de determinada área ou rota.</p>

          </div>
        </div>
      </section >

      <section className=" bg-[#112e49] flex justify-evenly items-center h-screen  flex-col lg:flex-row" id='valores'>
        <div className='mx-2'>

          <h1 className='text-3xl text-center lg:text-4xl font-bold  max-w-2xl text-orange-500 my-5'>Descomplique a sua gestão</h1>

          <p className='text-xl text-center  max-w-2xl text-white'>Reduza custos, melhore a produtividade e otimize jornadas de trabalho com uma plataforma que gera informações detalhadas a cada 05 segundos.</p>
        </div>

        <div class="lg:w-full mx-2  max-w-xl text-center p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <h5 class="mb-4 text-xl font-medium text-orange-500">A partir de:</h5>
          <div class=" text-orange-500 ">
            <span class="text-2xl font-semibold">R$</span>
            <span class="text-7xl font-extrabold tracking-tight">1,00</span>
            <span class="ml-1 text-xl font-normal text-gray-500">/dia</span>
          </div>

          <ul role="list" class="space-y-5 my-7" style={{
            alignItems: 'center'
          }}>
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500">Relatório de paradas em pontos mapeados</span>
            </li>
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500">Tempo de viagem
              </span>
            </li>
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500">Localização do seu veiculo em tempo real
              </span>
            </li>
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500">Análise do trajeto dos veiculos

              </span>
            </li>
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500">Tempo com o motor ligado

              </span>
            </li>
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500 ">Cerca eletrônica

              </span>
            </li>
          </ul>
          <a class="text-white bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" href="https://bit.ly/WhatsappVSC">Eu quero</a>
        </div>

      </section >

      <section className='Faq mx-5 lg:mx-72'>
        <h1 className='font-bold text-2xl my-5'>Duvidas Frequentes:</h1>
        <div className=' w-full lg:max-w-7xl'>
          <div id="accordion-flush" data-accordion="collapse" data-active-classes=" bg-white  text-gray-900 " data-inactive-classes="text-gray-500">
            <h2 id="accordion-flush-heading-1">
              <button type="button" className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeItemId === 'accordion-flush-body-1' ? 'text-gray-900 border-b border-gray-200' : 'text-gray-500'}`} data-accordion-target="#accordion-flush-body-1" aria-expanded={activeItemId === 'accordion-flush-body-1'} aria-controls="accordion-flush-body-1" onClick={() => toggleItem('accordion-flush-body-1')}>
                <span>O que é o rastreador veicular?</span>
                <svg data-accordion-icon className={`w-6 h-6 ${activeItemId === 'accordion-flush-body-1' ? 'transform rotate-180' : 'transform'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>

              </button>
            </h2>
            <div id="accordion-flush-body-1" className={`${activeItemId === 'accordion-flush-body-1' ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">Um rastreador veicular é um dispositivo eletrônico instalado em um veículo, como um carro,
                  caminhão, moto ou outro tipo de veículo, com o objetivo de monitorar e rastrear sua
                  localização e outros dados relacionados em tempo real.
                </p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-2">
              <button type="button" className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeItemId === 'accordion-flush-body-2' ? 'text-gray-900 border-b border-gray-200' : 'text-gray-500'}`} data-accordion-target='#accordion-flush-body-2' aria-expanded={activeItemId === 'accordion-flush-body-2'} aria-controls="accordion-flush-body-2" onClick={() => toggleItem('accordion-flush-body-2')}>
                <span>Para que serve o rastreador?</span>
                <svg data-accordion-icon className={`w-6 h-6 ${activeItemId === 'accordion-flush-body-2' ? 'transform rotate-180' : 'transform'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-2 " className={`${activeItemId === 'accordion-flush-body-2' ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-2">
              <div class="py-5 border-b border-gray-200 ">
                <p class="mb-2 text-gray-500 ">Os rastreadores veiculares são usados para uma variedade de possibilidades, incluindo
                  segurança, gerenciamento de frotas, monitoramento de veículos pessoais, recuperação de
                  veículos roubados, controle de produtividade de motoristas, entre outros.</p>
                <p class="text-gray-500 ">Eles permitem que os proprietários ou gestores de frotas acompanhem a localização dos
                  veículos em tempo real, monitorem o comportamento de direção, registrem informações de
                  viagem, recebam alertas em caso de violação de limites de velocidade, áreas geográficas prédeterminadas
                  ou outras condições específicas configuradas no sistema, e gerenciem
                  eficientemente suas operações de transporte.</p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button type="button" className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeItemId === 'accordion-flush-body-3' ? 'text-gray-900 border-b border-gray-200' : 'text-gray-500'}`} data-accordion-target='#accordion-flush-body-3' aria-expanded={activeItemId === 'accordion-flush-body-3'} aria-controls="accordion-flush-body-3" onClick={() => toggleItem('accordion-flush-body-3')}>
                <span>Por que usar um rastreador veicular?</span>
                <svg data-accordion-icon className={`w-6 h-6 ${activeItemId === 'accordion-flush-body-3' ? 'transform rotate-180' : 'transform'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-3" className={`${activeItemId === 'accordion-flush-body-3' ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-3">
              <div class="py-5 border-b border-gray-200 ">
                <p class="mb-2 text-gray-500">Para operações de frotas, o rastreamento pode ser bastante útil. Isso porque ele gera
                  informações precisas sobre as rotas feitas pelos veículos, que podem dar uma compreensão
                  maior e melhor de toda operação ao gestor.</p>
                <p class="mb-2 text-gray-500">Assim, é possível determinar diretrizes para combater problemas, identificar tempo em
                  trânsito, evitando jornadas de trabalho excessivas, paradas não programadas, possíveis
                  complicações mecânicas, entre outras ocorrências que podem atrasar uma viagem. Fora isso,
                  como o veículo é rastreado ativamente durante o dia a identificação de situações de risco é
                  muito mais rápida.</p>
                <p class="mb-2 text-gray-500">Com essas informações, as empresas conseguem tomar decisões rápidas e também é possível
                  saber se o motorista está respeitando os limites de velocidade e as paradas recomendadas
                  também é importante para garantir a segurança.</p>
                <p class="mb-2 text-gray-500">Além disso, esses dados ajudam a avaliar com precisão o trabalho do motorista e auxiliam na
                  elaboração de rotas mais eficientes. O uso do rastreador veicular permite que as empresas
                  tomem decisões mais certeiras, o que pode tornar os processos mais econômicos.</p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-4">
              <button type="button" className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeItemId === 'accordion-flush-body-4' ? 'text-gray-900 border-b border-gray-200' : 'text-gray-500'}`} data-accordion-target="#accordion-flush-body-4" aria-expanded={activeItemId === 'accordion-flush-body-4'} aria-controls="accordion-flush-body-4" onClick={() => toggleItem('accordion-flush-body-4')}>
                <span>O que é telemetria veicular?</span>
                <svg data-accordion-icon className={`w-6 h-6 ${activeItemId === 'accordion-flush-body-4' ? 'transform rotate-180' : 'transform'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-1" className={`${activeItemId === 'accordion-flush-body-4' ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-4">
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">A telemetria veicular é uma tecnologia que permite a coleta, análise e transmissão de dados
                  em tempo real de veículos para uma central de controle. Esses dados podem incluir
                  informações sobre o desempenho do veículo, comportamento do motorista, condições de
                  trânsito, localização, consumo de combustível, emissões de gases poluentes, entre outros.
                </p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-5">
              <button type="button" className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeItemId === 'accordion-flush-body-5' ? 'text-gray-900 border-b border-gray-200' : 'text-gray-500'}`} data-accordion-target="#accordion-flush-body-5" aria-expanded={activeItemId === 'accordion-flush-body-5'} aria-controls="accordion-flush-body-5" onClick={() => toggleItem('accordion-flush-body-5')}>
                <span>Quais são os principais benefícios da telemetria veicular?</span>
                <svg data-accordion-icon className={`w-6 h-6 ${activeItemId === 'accordion-flush-body-5' ? 'transform rotate-180' : 'transform'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-5" className={`${activeItemId === 'accordion-flush-body-5' ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-5">
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">Um rastreador veicular é um dispositivo eletrônico instalado em um veículo, como um carro,
                  caminhão, moto ou outro tipo de veículo, com o objetivo de monitorar e rastrear sua
                  localização e outros dados relacionados em tempo real.
                </p>
              </div>
            </div>

            <h2 id="accordion-flush-heading-6">
              <button type="button" className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeItemId === 'accordion-flush-body-6' ? 'text-gray-900 border-b border-gray-200' : 'text-gray-500'}`} data-accordion-target="#accordion-flush-body-6" aria-expanded={activeItemId === 'accordion-flush-body-6'} aria-controls="accordion-flush-body-6" onClick={() => toggleItem('accordion-flush-body-6')}>
                <span>Como contratar o sistema?</span>
                <svg data-accordion-icon className={`w-6 h-6 ${activeItemId === 'accordion-flush-body-6' ? 'transform rotate-180' : 'transform'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-6" className={`${activeItemId === 'accordion-flush-body-6' ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-6">
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">Clique no botão abaixo para preencher o formulário. Nossos especialistas entrarão em contato dentro do horário comercial, de segunda à sexta.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section >

      <hr className='my-10' />

      <div className='flex flex-row justify-center p-2  text-gray-900 '>
        <div className='flex bg-transparent border-[#f2910e] border-2 text-[#f2910e] p-5 items-center rounded-lg '>

          <svg class="w-10 h-10 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
          <a href="https://www.instagram.com/vejaseucarrogps/">
            <h1 className='font-bold text-xl mx-3'>
              /vejaseucarrogps</h1>
          </a>
        </div>
      </div>

      <section className='instagram-posts lg:grid lg:grid-cols-3 flex flex-col justify-items-center items-center mx-2 gap-5 lg:mx-5 my-5 py-24'>



        <div className='max-w-sm'>
          <a href="https://www.instagram.com/p/CrKGUdQLkAL/">
            <img src={post1} alt="" />
          </a>

        </div>
        <div className='max-w-sm'>
          <a href="https://www.instagram.com/p/Cq-SA20uczp/">
            <img src={post2} alt="" />
          </a>
        </div>
        <div className='max-w-sm'>
          <a href="https://www.instagram.com/p/CrORRcrrG3V/">
            <img src={post3} alt="" />
          </a>

        </div>



      </section>

      <section id='depoimentos' className='my-10 flex flex-col items-center h-20 justify-center  bg-[#f2910e]'>
        <h1 className='font-bold text-white text-2xl lg:text-4xl '>Veja o que estão falando da gente</h1>
      </section>

      <section className='lg:grid lg:grid-cols-3 text-center flex flex-col justify-items-center mx-5 gap-5 lg:mx-5 my-10' >

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-center ">
          <div class="px-5 pb-5 mt-5">
            <img className='w-full lg:mb-3
            ' src={person1} alt="" />
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-5">Eu nunca tive problemas com meu rastreador! O serviço que a Veja seu carro entrega, é sensacional! Parabéns ❤️
            </h5>
            <p class="text-sm font-semibold tracking-tight text-gray-900 ">Marilia Gonzaga</p>

            <div class="flex justify-center items-center mt-5 mb-5 w-full  ">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">5.0</span>
            </div>

          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-center ">
          <div class="px-5 pb-5 mt-5">
            <img className='w-full lg:mb-10' src={person2} alt="" />
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-5 ">Empresa Top, rastreamento de veículos de confiança e de primeira qualidade. Satisfeita com o serviço.👏🏻👏🏻👏🏻
            </h5>
            <p class="text-sm font-semibold tracking-tight text-gray-900 ">Ana Queiroz</p>

            <div class="flex justify-center items-center mt-5 mb-5 w-full  ">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">5.0</span>
            </div>

          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-center ">
          <div class="px-5 pb-5 mt-5">
            <img className='w-full lg:mb-10' src={person3} alt="" />
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 mb-5 ">Empresa nota 1000,  atendimento excelente e prestação de serviço ótima! Recomendo de olhos fechados!
            </h5>
            <p class="text-sm font-semibold tracking-tight text-gray-900 ">Pedro Santos</p>

            <div class="flex justify-center items-center mt-5 mb-5 w-full  ">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">5.0</span>
            </div>

          </div>
        </div>
      </section >


      <FloatMenu />
      <Form />

      <section className='my-5'>
        <div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.6195373567543!2d-34.887634085220235!3d-8.038103094211987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19b3ae7027d5%3A0x328499595eb83de2!2sVEJA%20SEU%20CARRO%20-%20RASTREAMENTO%20VEICULAR%20A%20PARTIR%20DE%20UM%20REAL%20POR%20DIA!5e0!3m2!1spt-BR!2sbr!4v1681778869321!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
            style={{ width: '100%' }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

    </ >
  )
}

export default Home;