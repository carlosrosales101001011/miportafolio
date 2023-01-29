import React from 'react'
import styled from 'styled-components'
import { BoxProyect } from './BoxProyect'

export const SectionProyectos = () => {

  const data = [
    {id: 1, 
    "name": "CalendarApp - FrontEnd", 
    "img": "/assets/proyecto1.png",
    "desc": "Un gran calendario que puedes crear, actualizar y eliminar fechas. Cuenta con un login y un register. Desplegado con Vercel", 
    "tec": "redux, react, Vitejs",
    "urlCode": "https://github.com/carlosrosales101001011/calendarapp",
    "urlView": "https://www.rmck-calendarapp.online",
    "existBackend": 
      {"nameBackend": "CalendarApp - Backend", 
        "descBackend": "Backend de calendarapp, login, register y un crud. Desplegado con railway",
        "tecBackend": "Nodejs, mongodb, mongoose, express",
        "urlCodeBackend": "https://github.com/carlosrosales101001011/calendarapp-backend"
      }
  },
  {id: 2, 
    "name": "CalendarApp - FrontEnd", 
    "img": "/assets/proyecto1.png",
    "desc": "Un gran calendario que puedes crear, actualizar y eliminar fechas. Cuenta con un login y un register. Desplegado con Vercel", 
    "tec": "redux, react, Vitejs",
    "urlCode": "https://github.com/carlosrosales101001011/calendarapp",
    "urlView": "https://www.rmck-calendarapp.online"
  },
  {id: 3, 
    "name": "CalendarApp - FrontEnd", 
    "img": "/assets/proyecto1.png",
    "desc": "Un gran calendario que puedes crear, actualizar y eliminar fechas. Cuenta con un login y un register. Desplegado con Vercel", 
    "tec": "redux, react, Vitejs",
    "urlCode": "https://github.com/carlosrosales101001011/calendarapp",
    "urlView": "https://www.rmck-calendarapp.online",
    "existBackend": 
      {"nameBackend": "CalendarApp - Backend", 
        "descBackend": "Backend de calendarapp, login, register y un crud. Desplegado con railway",
        "tecBackend": "Nodejs, mongodb, mongoose, express",
        "urlCodeBackend": "https://github.com/carlosrosales101001011/calendarapp-backend"
      }
  }

    
  ]



  return (
    <Proyectos id='sectionProyectos'>
      <div className="contenido-seccion">
            <h2>PROYECTOS INDEPENDIENTES</h2>
            <div className="galeria">
              {data.map(d=>{
                return(
                  <BoxProyect key={d.id} {...d}/>
                )
              })

              }
            </div>
        </div> 

    </Proyectos>
  )
}
const Proyectos = styled.div`

  background-color: #252A2E;
  color: #fff;
  padding: 50px 20px;
.contenido-seccion{
  max-width: 1100px;
  margin: auto;
}
h2{
  font-size: 48px;
  font-family: 'Righteous';
  text-align: center;
  padding: 20px 0;
}
.galeria{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


`