import React from 'react'
import { Link } from 'react-router-dom'
import Lupa from '../Imagens/Lupa.png'
import '../Styles/NavBar.css'



const Navbar = () => {
  return (
    <div className='NavBar'>
     
        <ul>
              <li className='Navs'>
              <Link to ="/"  className='listas-sublinhados'>Inicio</Link>
              </li>
              <li className='Navs'>
              <Link to ="/Equipamentos"  className='listas-sublinhados'>Equipamentos</Link>
              </li>
              <li className='Navs'>
              <Link to ="/Objetivo"  className='listas-sublinhados'>Objetivo</Link>
              </li> 
              <li className='Navs'>
              <Link to ="/Publico"  className='listas-sublinhados'>Público</Link>
              </li> 
              <li className='Navs'>
              <Link to ="/Bibliografia"  className='listas-sublinhados'>Bibliografia</Link>
              </li>
              <li>
                  <div class="search-container">
                  <button type="submit" class="search-button">
                      <img src={Lupa} alt="Pesquisar"/>
                  </button>
                  <input type="text" class="search-input" />
                  </div>     
              </li>           
        </ul>

        
    </div>
    
  )
}

export default Navbar