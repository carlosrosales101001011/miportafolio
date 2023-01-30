import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ButtonCom } from './ButtonCom'
import { SvgsIcons } from './SvgsIcons'

export const SectionContact = () => {
    const {DarkMode} = useSelector(e=>e.ui)

  return (
    <Contact DarkModep={DarkMode} id='seccionContact'>
        
        <div className="contenido-seccion">
            <h2>CONTACTO</h2>
            <div className="fila">
                {/* <!-- Formulario --> */}
                <div className="col">
                    <form action='https://formsubmit.co/carlosrosales21092002@hotmail.com' method='POST'>
                    <input type="text" placeholder="Dirección de correo"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <ButtonCom onSubmitForEmail='submit' textoButton={"Enviar Mensaje"} icon={<SvgsIcons paperPlane className={"iconPaperPlane"}/>}/>
                    </form>
                </div>
            </div>
        </div>

    </Contact>
  )
}

const Contact = styled.div`
background-image: url(/assets/contact_bg.png);
background-color: ${prop=>{return prop.DarkModep? '#1e2326': '#eaeaea'}};
color: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
padding: 50px 0;
.contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.fila{
    display: flex;
    justify-content: center;
}
.col{
    width: 90%;
    .iconPaperPlane{
        fill: ${prop=>{return prop.DarkModep? '#0000': '#fff0'}};
        stroke: ${prop=>{return prop.DarkModep? '#fff': '#000'}};
    }
    @media (min-width: 670px){
        width: 70%;
    }
    padding: 10px;
    position: relative;
}
.col input, .col textarea{
    display: block;
    width: 100%;
    padding: 18px;
    border: none;
    margin-bottom: 20px;
    background-color: #252A2E;
    color: #fff;
    font-size: 18px;
}
.col img{
    width: 100%;
}
.col .info{
    position: absolute;
    top: 40%;
    background-color: #252A2E;
    padding: 20px;
    max-width: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.col .info ul{
    list-style: none;
}
.col .info ul li{
    margin-bottom: 20px;
}
.col .info ul li i{
    color: #1CB698;
    display: inline-block;
    margin-right: 20px;
}
`