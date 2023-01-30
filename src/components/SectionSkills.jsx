import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { SvgsIcons } from './SvgsIcons'

export const SectionSkills = () => {
    const {DarkMode} = useSelector(e=>e.ui)

    const data = [
        {"id": 1, "name": "Html", "ico": "/svg/HtmlIco.svg", "width": "50px"},
        {"id": 2, "name": "Css", "ico": "/svg/CssIco.svg", "width": "50px"},
        {"id": 3, "name": "Sass", "ico": "/svg/SassIco.svg", "width": "50px"},
        {"id": 4, "name": "Javascript", "ico": "/svg/JavascriptIco.svg", "width": "50px"},
        {"id": 5, "name": "D3.js -", "ico": "/svg/d3Ico.svg", "width": "50px"},
        {"id": 6, "name": "React", "ico": "/svg/ReactIco.svg", "width": "50px"},
        {"id": 7, "name": "Redux", "ico": "/svg/ReduxIco.svg", "width": "50px"},
        {"id": 8, "name": "Vite", "ico": "/svg/VitejsIco.svg", "width": "50px"},
        
        {"id": 9, "name": "C#", "ico": "/svg/CcharpIco.svg", "width": "50px"},
        {"id": 10, "name": ".Net -", "ico": "/svg/netIco.svg", "width": "50px"},
        {"id": 11, "name": "Java", "ico": "/svg/JavaIco.svg", "width": "50px"},
        {"id": 12, "name": "Node.js", "ico": "/svg/NodeJSIco.svg", "width": "50px"},
        {"id": 13, "name": "Spring -", "ico": "/svg/SpringIco.svg", "width": "50px"},

        {"id": 15, "name": "Mysql", "ico": "/svg/MySqlIco.svg", "width": "50px"},
        {"id": 16, "name": "Sql server", "ico": "/svg/SqlServerIco.svg", "width": "50px"},
        {"id": 17, "name": "MongoDB", "ico": "/svg/MongodbIco.svg", "width": "30px"},
    ]
  return (
    // <!-- SECCION SKILLS -->
    <Skills DarkModep={DarkMode} id="seccionSkills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">
                {data.map(e=>{
                    return(
                        <div key={e.id} className="box">
                            <img width={e.width} src={e.ico}/>
                            <p>{e.name}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    </Skills>

  )
}
const Skills = styled.div`
.box{
    // border: 1px solid white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px;
    p{
        font-size: 20px;
        margin-top: 20px;
    }
}
/* SECCION S K I L L S */
background-color: ${prop=>{return prop.DarkModep? '#252A2E': '#d6d6d6'}};
color: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
padding: 50px 20px;
.contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.fila{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    
    @media (max-width: 370px){
        display: grid;
        
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
}
.fila .col{
    width: 50%;
    
    @media (min-width: 470px){
        width: 90%;
    }
    padding: 0 20px;
}
.fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}
.skill > span{
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}
.skill .barra-skill{
    height: 8px;
    width: 80%;
    background-color: #131517;
    position: relative;
    margin-bottom: 30px;
}
.skill .progreso{
    background-color: #1CB698;
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
}
.skill .barra-skill span{
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: #1CB698;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    top: -17px;
    right: -15px;
    font-size: 14px;
}
`