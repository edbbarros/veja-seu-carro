import Background from '../assets/Background-Home.png';
import textIcons from '../assets/text-icons.png';
import Background1 from '../assets/Abelha-Vsc.png';

const Home = () => {
  return (
    <>
      <img src={Background1} alt="" style={{
        width: '33rem',
        position: 'absolute',
        top: '10%',
      }} />
      <section style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#22324a',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '86.7vh'
      }}>
        <div>
          <h1 style={{
            position: 'absolute',
            top: '40%',
            color: "orange",
            fontSize: '2.5rem',
            fontWeight: 'bold',
            width: '35rem',
          }}>Rastreador veicular, Gestão de frota e Telemetria.
          </h1>
          <p style={{
            position: 'relative',
            top: '50%',
            color: 'white',
            marginTop: '2rem'
          }}>Entregamos informações ao controle do seu negócio!</p>
        </div>

        <div>
          <img src={textIcons} alt="" style={{
            width: '40rem',
            marginTop: '20%'

          }} />
          <img src={Background} alt="" style={{
            position: 'absolute',
            height: '25rem',
            zIndex: '1',
            right: '9%',
            bottom: '15%',
          }} />
        </div >

      </section>

      <div style={{
        position: 'absolute',
        bottom: '5.8%',
        right: '8%',
        width: '45rem',
        height: '21rem',
        background: 'white',
        borderRadius: '100rem 100rem 0px 0px',
      }}>
      </div>

      <hr style={{
        width: '100%',
        color: 'red'
      }} />

      <h1>Nosso serviço</h1>

    </>
  )
}

export default Home;