import React from 'react'
import TCC from '../Imagens/TCC.jpg'
import '../Styles/Lancamento.css'

const ImagemTcc = () => {
  return (
    <section>
        <div className="Texto-lancamento">
            <h2>
                Lançamento
            </h2>
        </div>
        <div className="imagem">
            <img src={TCC} alt="Imagem de como seria do tcc" />
        </div>
    </section>
  )
}

export default ImagemTcc