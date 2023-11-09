import React from 'react'
import WhiteBox from "../Imagens/WhiteBox.png"
import Cartoes from "../Imagens/Cartoes.png"
import ShopIcon from "../Imagens/ShopIcon.png"
import '../Styles/Motivos.css'

const Motivos = () => {
  return (
    <section className='Motivos'>
        <div className='Titulo-motivos'>
                <p>Na TCC Store é diferente <br />
                Ainda mais motivos para comprar com a gente</p>
            </div>
            <div className="quadrados">
                <div className="item1">
                    <img src={WhiteBox} alt="" />
                    <p>
                        <strong> Frete grátis</strong> em todos os pedidos.
                    </p>
                </div>
                <div className="item2">
                <img src={Cartoes} alt="" />
                    <p>
                        <strong> Várias opções</strong> em parcelamento.
                    </p>
                </div>
                <div className="item3">
                <img src={ShopIcon} alt="" />
                    <p>
                        <strong> Opções de retirada</strong> na própria loja.
                    </p>
                </div>
            </div>
    </section>
  )
}

export default Motivos