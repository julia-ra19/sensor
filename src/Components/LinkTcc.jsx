import React from 'react'
import { Link } from 'react-router-dom'
import TCC from '../Imagens/TCC.jpg'
import '../Styles/LinkTCC.css'

const LinkTcc = () => {
  return (
    <section className='Link-img'>
        <div className="Texto">
            <h2>
                Lançamento
            </h2>
            <p>
                Veja o tcc que acabou de chegar
            </p>
        </div>
        <div className="imagem">
            <img src={TCC} alt="Imagem de como seria do tcc" />
        </div>
        <div className="botao">
            <nav>
              <ul>
              <Link to ="/Lance" className='link-sem-sublinhado'> <strong> Clique aqui  </strong><br />
              para mais informações </Link> 
              </ul>
            </nav>
        </div>
    </section>
  )
}

export default LinkTcc