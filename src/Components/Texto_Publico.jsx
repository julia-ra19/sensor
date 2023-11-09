import React from 'react'
import Car2 from '../Imagens/Car2.png'

const Texto_Publico = () => {
  return (
    <section >
        <div className='Texto-lancamento'>
        <h2>
            Quem é nosso público alvo?
        </h2>

        </div>
        
        <div className="texto">
            <p>
            O público-alvo do nosso projeto abrange uma <strong>
            ampla gama de motoristas </strong> que utilizam garagens para estacionar seus veículos. Considerando a crescente urbanização e o aumento do número de veículos nas cidades, aprimorar a experiência de estacionamento se tornou uma necessidade comum para muitos condutores.
            </p>
        </div>
        <div className="textoImagem">
            <img src={Car2} alt="Carro verelho ao lado de uma pessoa" />
        
            <p>
            <strong>
            Nossa solução é especialmente direcionada para motoristas que enfrentam desafios ao estacionar em espaços limitados </strong>, como garagens residenciais, estacionamentos subterrâneos ou estabelecimentos comerciais com vagas apertadas. 
            <br />Esses motoristas muitas vezes lidam com a dificuldade de estimar com precisão a distância entre o veículo e a parede, o que pode resultar em colisões ou manobras demoradas. Além disso, nosso dispositivo é projetado para ser utilizado por motoristas de diferentes níveis de habilidade. 
            </p>
        </div>
        <div className="texto">
            <p>
            Ele oferece uma solução intuitiva e fácil de usar, permitindo que até mesmo motoristas menos experientes estacionem com confiança e precisão. Motoristas que valorizam a segurança e a proteção de seus veículos também são parte do nosso público-alvo. Nosso dispositivo proporciona uma ferramenta adicional para evitar danos acidentais ao veículo e às estruturas circundantes, tornando-se especialmente útil para aqueles que possuem veículos de alto valor ou desejam evitar custos de reparo desnecessários
            </p>
            <p>
            Além disso, nosso público-alvo inclui motoristas que valorizam a conveniência e a eficiência em suas rotinas diárias. Nosso dispositivo proporciona uma experiência de estacionamento mais rápida e tranquila, permitindo que eles economizem tempo ao evitar manobras repetitivas e incertas.
            </p>
            <p>
            Por fim, nosso projeto também pode ser útil para motoristas com necessidades especiais ou dificuldades de mobilidade. A informação clara e precisa fornecida pelo dispositivo auxilia na orientação espacial, permitindo que eles estacionem com maior facilidade e segurança.
            </p>
        </div>
    </section>
  )
}

export default Texto_Publico