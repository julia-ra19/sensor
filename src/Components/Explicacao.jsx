import React from 'react'
import semaforo from '../Imagens/semaforo.png'
import '../Styles/Lancamento.css'

const Explicacao = () => {
  return (
    <section>
        <h2 className='Subtitulo'>
            Como Funciona?
        </h2>
        <div className="texto">
            <p>
            A faixa de LEDs é projetada para fornecer uma representação visual intuitiva da distância medida. Ela é composta por uma série de LEDs coloridos que se acendem em diferentes cores (Vermelho, Verde e amarelo), cada uma representando uma faixa específica de distância. 
            </p>
            <p>
                
            Por exemplo, a <span className='verde'>cor verde</span> pode indicar que o veículo está em uma distância segura, enquanto a <span className='amarelo'>cor amarela</span> pode indicar que o veículo está se aproximando da parede e a <span className='vermelho'>cor vermelha</span> pode alertar que o veículo está muito próximo e requer ação imediata do motorista.
            </p>
            <p>
            Além da representação visual, também implementamos um recurso de comando de som que atua de acordo com a distância medida. Esse recurso emite um som cuja frequência é proporcional à medida de distância. Por exemplo, quando o veículo está mais distante da parede, o som emitido será de baixa frequência, e à medida que o veículo se aproxima, a frequência do som aumenta. Isso fornece ao motorista uma percepção auditiva adicional sobre a distância do veículo em relação à parede, ajudando a complementar a informação visual fornecida pelos LEDs.
            </p>
            <p>
            Com essa combinação de indicações visuais e sonoras, nosso dispositivo proporciona aos motoristas uma assistência abrangente durante o estacionamento em garagens, permitindo-lhes tomar decisões informadas e evitar colisões acidentais.
            </p>
            <p>
               <span className='azul'>
               O diferencial do nosso projeto reside na combinação inovadora de indicações visuais e sonoras para fornecer aos motoristas uma assistência abrangente durante o processo de estacionamento em garagens.
               </span> 
            </p>
        </div>
        <div className="semaforo">
            <img src={semaforo} alt="Tres circulos na ordem: vermelho, amarelo e verde" />
        </div>
    </section>
  )
}

export default Explicacao