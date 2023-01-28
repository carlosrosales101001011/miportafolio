import React from 'react'
import styled from 'styled-components'

export const SectionContact = () => {
  return (
    <Contact id='seccionContact'>
        
        <div className="contenido-seccion">
            <h2>CONTACTO</h2>
            <div className="fila">
                {/* <!-- Formulario --> */}
                <div className="col">
                    <input type="text" placeholder="Dirección de correo"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button>
                        Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                        <span className="overlay"></span>
                    </button>
                </div>
            </div>
        </div>

    </Contact>
  )
}

const Contact = styled.div`
background-image: url(./src/assets/contact_bg.png);
background-color: #1e2326;
color: #fff;
padding: 50px 0;
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
    display: flex;
    justify-content: center;
}
.col{
    width: 50%;
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
button{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #fff;
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: #fff;
    position: relative;
    z-index: 10;
}
button .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1CB698;
    z-index: -1;
    transition: 1s;
}
button:hover .overlay{
    width: 100%;
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