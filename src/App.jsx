import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { SectionSobreMi } from './components/SectionSobreMi'
import { SectionSkills } from './components/SectionSkills'
import { SectionCurriculum } from './components/SectionCurriculum'
import { SectionProyectos } from './components/SectionProyectos'
import { SectionContact } from './components/SectionContact'

function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <SectionSobreMi/>
      <SectionSkills/>
      <SectionCurriculum/>
      <SectionProyectos/>
      <SectionContact/>
    </>
  )
}

export default App
