

const Form = () => {
  return (
    <>
      <section class="bg-[#112e49] flex flex-col items-center my-5 py-2 px-3">
        <h1 class="text-white text-2xl lg:text-4xl font-bold my-3"> Agende uma demonstração</h1>
        <p class="text-white text-lg"> Preencha o formulário e em seguida aguarde que em breve entraremos em contato.  </p>
      </section >

      <section className="flex flex-col items-center">

        <form action="https://formsubmit.co/95021e4811bfd501aab8aa28a402c031" method="POST" class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Nome Completo</label>
            <input type="text" name="Nome" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Nome Completo" />
          </div>

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" name="email" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="seu@email.com" />
          </div>

          <div className="mb-6">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Telefone</label>
            <input type="number" name="telefone" id="phone" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="DDD + Número" />
          </div>

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Nome da empresa *</label>
            <input type="text" name="empresa" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Nome da empresa" />
          </div>

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Numero de veiculos *</label>
            <input type="number" name="veiculos" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Numero de veiculos" />
          </div>

          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Como podemos lhe ajudar? *</label>
          <textarea id="message" name="mesagem" rows="4" class="block p-2.5 w-full mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 ">
          </textarea>

          <button type="submit" class="text-white bg-orange-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center">Enviar</button>

        </form>
      </section >
    </>

  )
}

export default Form;