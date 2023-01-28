import styled from "styled-components";
import { SvgsIcons } from "./SvgsIcons";

export const SectionSobreMi = () => {

    function downloadDocument() {
        var link = document.createElement("a");
        //ACA VA MI CURRICULUM
        link.href = "path/to/document.pdf";
        link.download = "document.pdf";
        link.click();
    }



  return (
    // <!-- SECCION SOBRE MI -->
    <SobreMi id="seccionSobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p>
          <span>Hola, soy Carlos Rosales.</span>
          Estudiante trabajador en busca de empleo. preparado para utilizar mis
          habilidades y pasión para impulsar la misión de una compañía.
          Aporto una actitud positiva y la voluntad y
          motivación para aprender nuevos programas.
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
        <button onClick={downloadDocument}>
          Descargar CV
          <SvgsIcons className={"iconDowload"} download />
          <span className="overlay"></span>
        </button>
      </div>
    </SobreMi>
  );
};
const SobreMi = styled.div`
  /*SOBRE MI*/
  background-color: #1e2326;
  color: #fff;
  padding: 50px 20px;
  .contenido-seccion {
    max-width: 1100px;
    margin: auto;
  }
  h2 {
    font-size: 48px;
    font-family: "Righteous";
    text-align: center;
    padding: 20px 0;
  }
  .contenido-seccion p {
    font: 18px;
    line-height: 22px;
    margin-bottom: 20px;
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
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fila .col h3 {
    font-size: 28px;
    font-family: "Righteous";
    margin-bottom: 25px;
  }
  .fila .col ul {
    list-style: none;
  }
  .fila .col ul li {
    margin: 12px 0;
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
  button {
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
    display: flex;
    flex-direction: row;
    align-items: center;
    .iconDowload {
      fill: white;
      margin-left: 10px;
    }
  }
  button .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1cb698;
    z-index: -1;
    transition: 1s;
  }
  button:hover .overlay {
    width: 100%;
  }
`;
