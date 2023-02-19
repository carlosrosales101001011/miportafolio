import React from 'react'
import { useSelector } from 'react-redux'
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
    "name": "Sistema de ventas - FrontEnd", 
    "img": "/assets/proyecto2.png",
    "desc": "Un sistema de ventas donde podras visualizar las categorias y marcas de los productos, y con un panel administrativo", 
    "tec": "bootstrap, jquery/ajax, Razor",
    "urlCode": "https://github.com/carlosrosales101001011/Sistema-web/tree/master/CapaPresentacionAdmin/Views",
    "existBackend": 
      {"nameBackend": "Sistema de ventas - Backend", 
        "descBackend": "Backend de Sistema de ventas, login, register y mas de 5 cruds.",
        "tecBackend": "Asp.net MVC 5, Razor",
        "urlCodeBackend": "https://github.com/carlosrosales101001011/Sistema-web"
      }
  },
  {id: 3, 
    "name": "Sistema de contactos - FrontEnd", 
    "img": "/assets/proyecto3.png",
    "desc": "Un sistema de contactos basico. Puede registrar, editar y eliminar", 
    "tec": "bootstrap, Razor",
    "urlCode": "https://github.com/carlosrosales101001011/Sistema-web-de-contacto--basico/tree/master/Proyecto%20Crud/Views",
    "urlView": "https://www.contact-app.somee.com/",
    "existBackend": 
      {"nameBackend": "Sistema de contactos - Backend", 
        "descBackend": "Backend de Sistema de contactos, 1 crud.",
        "tecBackend": "Asp.net, Razor, sql server",
        "urlCodeBackend": "https://github.com/carlosrosales101001011/Sistema-web-de-contacto--basico"
      }
  }

    
  ]

  const {DarkMode} = useSelector(e=>e.ui)


  return (
    <Proyectos DarkModep={DarkMode} id='sectionProyectos'>
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

  background-color: ${prop=>{return prop.DarkModep? '#252A2E': '#D6D6D6'}};
  color: #fff;
  padding: 50px 20px;
.contenido-seccion{    
  max-width: 1000px;
  margin: auto;
  
}
h2{
  font-size: 48px;
  font-family: 'Righteous';
  text-align: center;
  padding: 20px 0;
  color: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
}
.galeria{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


`