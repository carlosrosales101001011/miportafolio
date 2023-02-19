import { useSelector } from "react-redux";
import styled from "styled-components";
import { ButtonCom } from "./ButtonCom";
import { SvgsIcons } from "./SvgsIcons";

export const SectionSobreMi = () => {

    function downloadDocument() {
        var link = document.createElement("a");
        //ACA VA MI CURRICULUM
        link.href = `https://drive.google.com/drive/folders/10J9XjmlHZDY9mibCqkLMls9JXrwQoUmM?usp=share_link`;
        link.target = "_blank";
        link.click();
    }
    const {DarkMode} = useSelector(e=>e.ui)



  return (
    // <!-- SECCION SOBRE MI -->
    <SobreMi DarkModep={DarkMode} id="seccionSobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p>
          <span>Hola, soy Carlos Rosales.</span>
          Tengo mas de 2 años de experiencia desarrollando proyectos en react, Nodejs
          Actualmente, tengo 1 año de experiencia en el desarrollo de sistemas webs con Asp.net MVC
        </p>
        <div className="fila">
          {/* <!-- datos personales --> */}
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <strong>Nacimiento</strong>
                21-09-2002
              </li>
              <li>
                <strong>Teléfono</strong>
                933 102 718
              </li>
              <li>
                <strong>Email</strong>
                carlosrosales21092002@hotmail.com
              </li>
              <li>
                <strong>Ubicacion</strong>
                Jesus Maria / Lima / Peru
              </li>
              <li>
                <strong>Cargo</strong>
                <span>Web Developer</span>
              </li>
            </ul>
          </div>
        </div>
        <ButtonCom  onClick={downloadDocument} textoButton={"Ver Curriculum"} icon={<SvgsIcons className={"iconDowload"} download/>}/>
      </div>
    </SobreMi>
  );
};
const SobreMi = styled.div`
  /*SOBRE MI*/
  background: ${prop=>{return prop.DarkModep? '#1e2326': '#eaeaea'}};
  color: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
  padding: 50px 20px;
  .contenido-seccion {
    max-width: 1100px;
    margin: auto;
  }
  .contenido-seccion p {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 20px;
    word-break: break-word;
  }
  .contenido-seccion p span {
    color: #1cb698;
    font-weight: bold;
  }
  .fila {
    display: flex;
    justify-content: center;
  }
  .fila .col {
    width: 90%;
    
    @media (min-width: 670px){
        width: 70%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fila .col h3 {
    font-size: 28px;
    font-family: "Righteous";
    margin-bottom: 25px;
    word-break: break-word;
  }
  .fila .col ul {
    list-style: none;
  }
  .fila .col ul li {
    margin: 12px 0;
    word-break: break-word;
  }
  .fila .col ul li strong {
    display: inline-block;
    color: #1cb698;
    width: 130px;
  }
  .fila .col ul li span {
    background-color: #1cb698;
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
  }
  .fila .col .contenedor-intereses {
    display: flex;
    flex-wrap: wrap;
  }
  .fila .col .contenedor-intereses .interes {
    width: 100px;
    height: 100px;
    background-color: #252a2e;
    border-radius: 10px;
    margin: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  .fila .col .contenedor-intereses .interes:hover {
    background-color: #1cb698;
  }
  .fila .col .contenedor-intereses .interes i {
    font-size: 30px;
    margin-bottom: 10px;
  }
    .iconDowload {
      fill: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
      margin-left: 10px;
    }
  // }
  // button:hover .overlay {
  //   width: 100%;
  // }
`;
