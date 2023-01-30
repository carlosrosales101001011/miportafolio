
import './App.css'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { SectionSobreMi } from './components/SectionSobreMi'
import { SectionSkills } from './components/SectionSkills'
import { SectionCurriculum } from './components/SectionCurriculum'
import { SectionProyectos } from './components/SectionProyectos'
import { SectionContact } from './components/SectionContact'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Header/>
      <SectionSobreMi/>
      <SectionSkills/>
      <SectionCurriculum/>
      <SectionProyectos/>
      <SectionContact/>
    </Provider>
  )
}

export default App
