import styled from "styled-components"
import { SvgsIcons } from "./SvgsIcons"

export const Header = () => {
  return (
    <SeccionInicio id="seccionInicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <img src={"/assets/Yo.jpg"} alt="Mi foto"/>
            </div>
            <h1>CARLOS ROSALES</h1>
            <h2>Web developer - JUNIOR</h2>
            <ul>
                <li>
                    <a target={"_blank"} href='https://www.linkedin.com/in/carlos-rosales-morales'>
                    <SvgsIcons linkeding className={'redesIcon'}/>
                    </a>
                </li>
                <li>
                    <a target={"_blank"} href='https://mailto:Carlosrosales21092002@hotmail.com'>
                    <SvgsIcons email className={'redesIcon'}/>
                    </a>
                </li>
                <li>
                    <a target={"_blank"} href='https://mailto:carlodl2lzebe@gmail.com'>
                    <SvgsIcons gmail className={'redesIcon'}/>
                    </a>
                </li>
                <li>
                    <a target={"_blank"} href='https://github.com/carlosrosales101001011'>
                    <SvgsIcons github className={'redesIcon'}/>
                    </a>
                </li>
                <li>
                    <a target={"_blank"} href='https://wa.me/51933102718?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20que%20brindas%20como%20developer...'>
                    <SvgsIcons phone className={'redesIcon'}/>
                    </a>
                </li>
            </ul>
        </div>
    </SeccionInicio>
  )
}

const SeccionInicio = styled.div`
/* SECCION I N I C I O */
background: linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1)),
url(../../public/assets/fondo.jpg);
background-size: cover;
height: 100vh;
color: #fff;
display: flex;
align-items: center;
.contenido-banner{
    padding: 20px;
    background-color: #1e2326;
    max-width: 350px;
    margin: auto;
    text-align: center;
    border-radius: 40px;
}
.contenido-banner img{
    margin-top: 40px;
    border: 10px solid #1CB698;
    display: block;
    width: 80%;
    margin: auto;
    border-radius: 100%;
}
.contenido-banner h1{
    margin-top: 40px;
    font-size: 42px;
    font-family: 'Righteous';
}
.contenido-banner h2{
    font-size: 15px;
    font-weight: normal;
}


.redes{
    display: flex;
    justify-content: center;
    width: auto;
    height: 80%;
  }
  ul{
    display: flex;
    justify-content: center;
    width: 100%;
    li{
      margin-right: 10px;
      margin-top: 10px;
      with: auto;
      a{
        background-color: #666;
        border-radius: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        border: 1px solid #0000;
        transition: all .5s;
        &:hover{
          border: 1px solid #ffee10;
          box-shadow: 0 0 10px #ffee10;
          transition: all .5s;
          .redesIcon{
            transition: all .5s;
            fill: #ffee10;
          }
        }
        .redesIcon{
          margin: 0;
          width: 20px;
          height: 20px;
          transition: all .5s;
        }
      }
    }
`