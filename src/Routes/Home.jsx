import React from 'react'

import CentroInicial from '../Components/CentroInicial'
import Propaganda from '../Components/Propaganda'
import LinkTcc from '../Components/LinkTcc'
import Motivos from '../Components/Motivos'
import Rodape from '../Components/Rodape'
import NavBarMobile from '../Components/NavBarMobile'


const Home = () => {
  return (
    <>
      <NavBarMobile/>
      <CentroInicial/>
      <Propaganda/>
      <LinkTcc/>
      <Motivos/>
      <Rodape/>
      </>
  )
}

export default Home