import React from 'react'
import '../Styles/Rodape.css'

const Rodape = () => {
  return (
    <section className='rodape'>
        <div className="rodape">
          <div className='hr-container'>
          <p>
          Copyright © 2023 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CPNJ: 00.623.904/0003-35
          </p>
          <hr className='hr-text'/>
          </div>
          <ul>
            <li>Política de privacidade</li>
            <li>Política de vendas</li>
            <li>Avisos legais</li>
          </ul>
        </div>
    </section>
  )
}

export default Rodape