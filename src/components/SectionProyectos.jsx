import React from 'react'
import styled from 'styled-components'

export const SectionProyectos = () => {

  const data = [
    {id: 1, 
    "name": "CalendarApp - FrontEnd", 
    "img": "../../public/assets/proyecto1.png",
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
                  <div key={d.id} className="box">
                    <img src={d.img} width={540}/>
                    <div className="proyectDetails">
                      <h3>{d.name}</h3>
                      <span>
                        <p className="descrip">{d.desc}</p>
                        <p className="tec">Las tecnologias utilizadas son: {d.tec}</p>
                        <a className={"txtCodigo"} target={"_blank"} href={d.urlCode}>Codigo</a>
                        <a className={"txtVisualizacion"} target={"_blank"} href={d.urlView}>Visualizar</a>
                      </span>
                    {d.existBackend&&
                    (
                      <span>
                      <h3 className="parteBackend">{d.existBackend.nameBackend}</h3>
                        <p className="descrip">{d.existBackend.descBackend}</p>
                        <p className="tec">Las tecnologias utilizadas son: {d.existBackend.tecBackend} </p>
                        <a className={"txtCodigo"} target={"_blank"} href={d.existBackend.urlCodeBackend}>Codigo</a>
                      </span>
                    )
                    }
                    </div>
                  </div>
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
.box{
  display: flex;
  flex-direction: row;
  .proyectDetails{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img{
    margin-right: 20px;
  }
  a{
    text-decoration: none;
    color: #fff;
    background-color: purple;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px 5px 20px 5px;
    display: inline-block;
    &:hover{
      background-color: #ae2cae;
    }
  }
}
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
`