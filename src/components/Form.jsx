const Form = () => {
  return (
    <>
      <section class="bg-orange-500 mt-5 mb-5" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{
          color: "white",
          fontSize: '2.5rem',
        }}> Agende uma demonstração ou bate-papo on-line </h1>
        <p
          style={{
            color: "white",
            fontSize: '1.2rem',
          }}> Preencha o formulário e em seguida escolha o horário </p>
      </section >

      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

      }}>

        <form action="" class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Nome Completo</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Nome Completo" />
          </div>

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="seu@email.com" />
          </div>

          <div className="mb-6">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Telefone</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="DDD + Número" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>

          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Nome da empresa *</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Nome da empresa" />
          </div>

          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Como podemos lhe ajudar? *</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 ">
          </textarea>

          <button type="submit" class="text-white bg-orange-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center">Enviar</button>

        </form>
      </section >
    </>

  )
}

export default Form;