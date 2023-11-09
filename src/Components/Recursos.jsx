import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import sensor from '../Imagens/sensor.jpeg'
import jumpers from '../Imagens/Jumpers.jpeg'
import LEDRGB from '../Imagens/LEDRGB.jpeg'
import placa from '../Imagens/placa.jpeg'
import buzzer from '../Imagens/buzzer.jpg'
import arduino from '../Imagens/Arduino.jpeg'
import resistor from '../Imagens/resistor.jpg'
import potenciometro from '../Imagens/potenciometro.jpg'
import button from '../Imagens/Button.png'
import usb from '../Imagens/usb.jpg'
import '../Styles/Recursos.css'

const Recursos = () => {
  return (
    <section className='Recursos'>
  <div className='Texto-lancamento'>
    <h2>Equipamentos Utilizados</h2>
  </div>

  <div className='Blocos'>
    {/* Seção 1 */}
    <div className='bloquinho'>
      <img src={sensor} alt="sensor arduino" />
      <p className='Blocos-text'>Sensor ultrassônico R$ 19,00</p>
    </div>
    <div className='bloquinho'>
      <img src={jumpers} alt="fjumpers" />
      <p className='Blocos-text'>Fios R$ 19,00</p>
    </div>
    <div className='bloquinho'>
      <img src={LEDRGB} alt="led RGB" />
      <p className='Blocos-text'>Fita de Led R$ 37,00</p>
    </div>
    {/* Seção 2 */}
    <div className='bloquinho'>
      <img src={placa} alt="placa de ensaio" />
      <p className='Blocos-text'>Protoboard R$ 27,00</p>
    </div>
    <div className='bloquinho'>
      <img className="buzzer" src={buzzer} alt="buzzer" />
      <p className='Blocos-text'> Buzzer R$ 25,00</p>
    </div>
    <div className='bloquinho'>
      <img src={arduino} alt="placa arduino" />
      <p className='Blocos-text'>Arduino R$ 130,00</p>
    </div>
    {/* Seção 3 */}
    <div className='bloquinho'>
      <img src={resistor} alt="resistor" />
      <p className='Blocos-text'>Resistor R$ 0,05 cada</p>
    </div>
    <div className='bloquinho'>
      <img src={potenciometro} alt="potenciometro" />
      <p className='Blocos-text'>Potenciômetro R$ 2,50 cada</p>
    </div>
    <div className='bloquinho'>
      <img src={button} alt="botao" />
      <p className='Blocos-text'>Botão R$ 0,27 cada</p>
    </div>
  </div>
</section>

  )
}

export default Recursos