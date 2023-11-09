
import { useState } from "react"
import "../Styles/NavBarMobile.css"
import { Link } from "react-router-dom"
import Lupa from '../Imagens/Lupa.png'

import {List, XCircle } from "@phosphor-icons/react"

function NavBarMobile() {
    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

  return (
    
    
    <>
        <div className='NavBar'>
     
     <ul className="ul-nav">
           <li className='Navs'>
           <Link to ="/"  className='listas-sublinhados'>Inicio</Link>
           </li>
           <li className='Navs'>
           <Link to ="/Equipamentos"  className='listas-sublinhados' >Equipamentos</Link>
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
        
        <div className="menu-mobile">
            <div className="botao-menu">
                <button className="Botao-Menu" onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <XCircle size={32} color="#fdfdfc" /> : <List size={32} color="#fdfdfc" />}</button>
            </div>
            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                    
              <Link to ="/"  className='listas-sublinhados' >Início</Link>

              <Link to ="/Lance"  className='listas-sublinhados'>Lançamento</Link>
              
              <Link to ="/Equipamentos"  className='listas-sublinhados'>Equipamentos</Link>
              
              <Link to ="/Objetivo"  className='listas-sublinhados'>Objetivo</Link>

              
              <Link to ="/Publico"  className='listas-sublinhados'>Público</Link>
              
              <Link to ="/Bibliografia"  className='listas-sublinhados'>Bibliografia</Link>
              
                  <div class="search-container">
                  <button type="submit" class="search-button">
                      <img src={Lupa} alt="Pesquisar"/>
                  </button>
                  <input type="text" class="search-input" />
                  </div>     
                  

                   
                </nav>
            </div>
        </div>
    </>

  )
}

export default NavBarMobile