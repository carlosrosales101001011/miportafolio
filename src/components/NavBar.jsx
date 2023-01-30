import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { SvgsIcons } from "./SvgsIcons"
import { ToogleButtonMode } from "./ToogleButtonMode"

export const NavBar = () => {  

    const {DarkMode} = useSelector(e=>e.ui)
    const [isOpen, setisOpen] = useState(false)


    const HandleMenu = ()=>{
        setisOpen(!isOpen)
    }



  return (
    //MENU ENCABEZADO 
    <ContenedorHeader ClickBarr={isOpen} DarkModeP={DarkMode}>
        <header>
            <div className="logo">
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#seccionInicio">INICIO</a></li>
                    <li><a href="#seccionSobremi">SOBRE MI</a></li>
                    <li><a href="#seccionSkills">SKILLS</a></li>
                    <li><a href="#seccionCurriculum">CURRICULUM</a></li>
                    <li><a href="#sectionProyectos">PROYECTOS</a></li>
                    <li><a href="#seccionContact">CONTACTO</a></li>
                </ul>
            </nav>
            <ToogleButtonMode/>
        </header>
        <MenuResponsive isOpen={isOpen}>
            <div className="contentMenu">
            <ul>
                    <li><a onClick={()=>setisOpen(false)} href="#seccionInicio">INICIO</a></li>
                    <li><a onClick={()=>setisOpen(false)} href="#seccionSobremi">SOBRE MI</a></li>
                    <li><a onClick={()=>setisOpen(false)} href="#seccionSkills">SKILLS</a></li>
                    <li><a onClick={()=>setisOpen(false)} href="#seccionCurriculum">CURRICULUM</a></li>
                    <li><a onClick={()=>setisOpen(false)} href="#sectionProyectos">PROYECTOS</a></li>
                    <li><a onClick={()=>setisOpen(false)} href="#seccionContact">CONTACTO</a></li>
                    <li><a onClick={()=>setisOpen(false)}><ToogleButtonMode/></a></li>
                </ul>
            </div>
            <div className="contentIcon">
            <SvgsIcons ClickSvg={HandleMenu} className={"iconMenu"} menu/>
            <SvgsIcons ClickSvg={HandleMenu} arrow className={"iconArrow"}/>
            </div>
        </MenuResponsive>
    </ContenedorHeader>
  )
}
const MenuResponsive = styled.div`
@media (min-width: 880px ){
    display: none;
}
.contentMenu{
    li{
        text-align: center;
        margin: 20px auto;
    }
    a{
        text-decoration: none;
        color: #fff;
        &:hover{
            color: red;
        }
    }
}
.iconArrow{
    cursor: pointer;
    fill: #fff;
    width: 50px;
    display: ${prop=>{return prop.isOpen? 'block': 'none'}};
}
.contentIcon{
    display: flex;
    justify-content: center;
}
.iconMenu{
    display: ${prop=>{return prop.isOpen? 'none': 'block'}};
    cursor: pointer;
    stroke: #fff;
}
`

const ContenedorHeader = styled.div`
background: #1e2326;
-webkit-box-shadow: 0px 5px 11px -3px rgba(0,0,0,0.85);
-moz-box-shadow: 0px 5px 11px -3px rgba(0,0,0,0.85);
box-shadow: 0px 5px 11px -3px rgba(0,0,0,0.85);
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 99;
@media (max-width: 880px){
    transition: transform 1s;
    transform: ${prop=>{return prop.ClickBarr?'translateY(0)': 'translateY(-289px)'}};
    header{
        display: none;
    }
}
@media (min-width: 880px ){
header{
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}
header ul{
    display: flex;
    list-style: none;
}
header nav ul li a{
    text-align: none;
    color: #fff;
    margin: 0 15px;
    padding: 3px;
    transition: .5s;
    text-decoration: none;
}
header nav ul li a:hover{
    color: #1CB698;
}
}
`