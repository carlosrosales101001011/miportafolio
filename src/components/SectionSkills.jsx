import React from 'react'
import styled from 'styled-components'
import { SvgsIcons } from './SvgsIcons'

export const SectionSkills = () => {
    const data = [
        {"id": 1, "name": "Html", "ico": "../../public/svg/HtmlIco.svg", "width": "50px"},
        {"id": 2, "name": "Css", "ico": "../../public/svg/CssIco.svg", "width": "50px"},
        {"id": 3, "name": "Sass", "ico": "../../public/svg/SassIco.svg", "width": "50px"},
        {"id": 4, "name": "Javascript", "ico": "../../public/svg/JavascriptIco.svg", "width": "50px"},
        {"id": 5, "name": "D3.js -", "ico": "../../public/svg/d3Ico.svg", "width": "50px"},
        {"id": 6, "name": "React", "ico": "../../public/svg/ReactIco.svg", "width": "50px"},
        {"id": 7, "name": "Redux", "ico": "../../public/svg/ReduxIco.svg", "width": "50px"},
        {"id": 8, "name": "Vite", "ico": "../../public/svg/VitejsIco.svg", "width": "50px"},
        
        {"id": 9, "name": "C#", "ico": "../../public/svg/CcharpIco.svg", "width": "50px"},
        {"id": 10, "name": ".Net -", "ico": "../../public/svg/netIco.svg", "width": "50px"},
        {"id": 11, "name": "Java", "ico": "../../public/svg/JavaIco.svg", "width": "50px"},
        {"id": 12, "name": "Node.js", "ico": "../../public/svg/NodeJSIco.svg", "width": "50px"},
        {"id": 13, "name": "Spring -", "ico": "../../public/svg/SpringIco.svg", "width": "50px"},

        {"id": 15, "name": "Mysql", "ico": "../../public/svg/MysqlIco.svg", "width": "50px"},
        {"id": 16, "name": "Sql server", "ico": "../../public/svg/SqlServerIco.svg", "width": "50px"},
        {"id": 17, "name": "MongoDB", "ico": "../../public/svg/MongodbIco.svg", "width": "30px"},
    ]
  return (
    // <!-- SECCION SKILLS -->
    <Skills id="seccionSkills">
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
    border: 1px solid white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px;
    p{
        font-size: 1vw;
        margin-top: 20px;
    }
}
/* SECCION S K I L L S */
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
.fila{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
.fila .col{
    width: 50%;
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