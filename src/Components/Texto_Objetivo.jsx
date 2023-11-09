import React from 'react'
import Navbar from './Navbar'
import Car3 from '../Imagens/car3.png'
import Car4 from '../Imagens/car4.png'
import '../Styles/Texto-Imagem.css'

const Texto_Objetivo = () => {
  return (
    <section>
        <div className='Texto-lancamento'>
        <h2>Objetivo</h2>
        </div>
        
        <div className='texto'>
            <p>
            Nosso projeto tem como <span>
            objetivo revolucionar a maneira como os motoristas estacionam seus veículos em garagens, proporcionando uma experiência mais fácil e segura. Para isso, criamos um dispositivo inovador, dotado de tecnologia avançada, que utiliza um sensor altamente preciso para medir com exatidão a distância entre o veículo e a parede onde o dispositivo está fixado.
            </span>
            </p>
        </div>
        <div className="textoImagem">
            <img src={Car3} alt="Carro vermelho com duas pessoas" />
            <p>
            A partir dessa medição precisa, o dispositivo desempenha um papel crucial ao fornecer informações claras e instantâneas para auxiliar o motorista durante o processo de estacionamento. Isso é feito por meio de uma faixa de LEDs estrategicamente posicionados, visíveis no painel frontal do dispositivo. Essa faixa de LEDs é projetada de forma inteligente, utilizando uma variedade de cores e padrões que representam diferentes distâncias entre o veículo e a parede.
            </p>
        </div>
        <div className="texto">
            <p>
            Ao se aproximar da parede, o motorista á observar a mudança nas cores dos LEDs, permitindo-lhe avaliar rapidamente a distância restante. Por exemplo, a <span className="verde"> cor verde indica uma distância segura
            </span>, <span className="verde">
            a cor amarela sinaliza uma aproximação moderada </span>, enquanto a <span className="vermelho"> cor vermelha alerta sobre a proximidade iminente da parede
            </span>. Além disso, podemos incorporar recursos adicionais, como piscar os LEDs em caso de aproximação perigosa ou a ativação de LEDs laterais para indicar o alinhamento correto do veículo em relação à parede
            </p>
        </div>
        <div className="textoImagem">
            <img src={Car4} alt="dois carros, um amarelo e outro verde" />
            <p>
            Além da representação visual intuitiv a, nosso dispositivo também oferece funcionalidades sonoras para complementar a informação visual. Um comando de som inteligente é acionado de acordo com a distância medida, emitindo uma frequência sonora que varia proporcionalmente à distância restante. Isso proporciona ao motorista uma percepção auditiva adicional sobre a proximidade da parede, permitindo uma maior consciência situacional e reação rápida.
            </p>
        </div>
        <div className="texto">
            <p>
            Para garantir a máxima usabilidade, nosso dispositivo é projetado <strong>
            com uma interface intuitiva e amigável ao usuário. Isso inclui botões táteis de fácil acesso, permitindo que o motorista ajuste as configurações de acordo com suas preferências pessoais, como a sensibilidade do sensor, os níveis de brilho dos LEDs e as configurações sonoras.
            </strong>
            </p>
        </div>
    </section>
  )
}

export default Texto_Objetivo