import React from 'react'
import Navbar from '../Components/Navbar'
import Texto_Publico from '../Components/Texto_Publico'
import ImgCanto from '../Components/ImgCanto'
import NavBarMobile from '../Components/NavBarMobile'

const Publico = () => {
  return (
    <>
    <NavBarMobile/>
    <Texto_Publico/>
    <ImgCanto/>
    </>
  )
}

export default Publico