import React from 'react'
import Car from '../Imagens/Car.png'
import '../Styles/Biblio.css'

const Texto_Biblio = () => {
  return (
    <section>
        <div className='Texto-lancamento'>
        <h2>
            Bibliografia
        </h2>
        </div>
        
        <div>
            <ul className='Lista-vertical'>
                <li>
                    <a href="https://projecthub.arduino.cc/Bcjams/garage-parking-assistant-55c22c">https://projecthub.arduino.cc/Bcjams/garage-parking-assistant-55c22c</a>
                </li>
                <li>
                    <a href="https://www.instructables.com/Arduino-Parking-Sensor/ 
                    ">https://www.instructables.com/Arduino-Parking-Sensor/ </a>
                </li>
                <li>
                    <a href="https://projecthub.arduino.cc/ " >https://projecthub.arduino.cc/ </a>
                </li>
                <li>
                    <a href="https://www.instructables.com/ ">https://www.instructables.com/ </a>
                </li>
                <li>
                    <a href="https://www.arduinoecia.com.br/sensor-de-estacionamento-re-com-arduino/">https://www.arduinoecia.com.br/sensor-de-estacionamento-re-com-arduino/</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=jzPZ0N-Zels ">https://www.youtube.com/watch?v=jzPZ0N-Zels </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=f8ibn6UkfvY ">https://www.youtube.com/watch?v=f8ibn6UkfvY </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=q1NAqFh5nLY  ">https://www.youtube.com/watch?v=q1NAqFh5nLY  </a>
                </li>
                <li>
                    <a href="https://youtu.be/mMWcB-vFYZs - ">https://youtu.be/mMWcB-vFYZs - </a>
                </li>
            </ul>
        </div>
        <div className='Carro-final'>
            <img src={Car} alt="" />
        </div>
    </section>
  )
}

export default Texto_Biblio