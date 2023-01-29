import React from "react";
import styled from "styled-components";

export const BoxProyect = ({
  id,
  img,
  name,
  desc,
  tec,
  urlCode,
  urlView,
  existBackend,
}) => {
  return (
    <Box trasImg={img}>
        <img src={img} />
        <div className="proyectDetails">
            <h3>{name}</h3>
            <span>
            <p className="descrip">{desc}</p>
            <p className="tec">Las tecnologias utilizadas son: {tec}</p>
            <a className={"txtCodigo"} target={"_blank"} href={urlCode}>
                Codigo
            </a>
            <a className={"txtVisualizacion"} target={"_blank"} href={urlView}>
                Visualizar
            </a>
            </span>
            {existBackend && (
            <span>
                <h3 className="parteBackend">{existBackend.nameBackend}</h3>
                <p className="descrip">{existBackend.descBackend}</p>
                <p className="tec">
                Las tecnologias utilizadas son: {existBackend.tecBackend}{" "}
                </p>
                <a
                className={"txtCodigo"}
                target={"_blank"}
                href={existBackend.urlCodeBackend}
                >
                Codigo
                </a>
            </span>
            )}
        </div>
    </Box>
  );
};
const Box = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 10px;


  .proyectDetails{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1));
    display: flex;
    flex-direction: column;
    transition: 1s;
    font-size: 18px;
    opacity: 0;
    overflow: auto;
    padding: 10px;
  }
  .proyectDetails:hover{
    opacity: 1;
  }
    position: relative;
    max-width: 470px;
    height: fit-content;
    margin: 10px;
    cursor: pointer;
  img{
    width: 100%;
    display: block;
  }
  
    a {
        text-decoration: none;
        color: #fff;
        background-color: purple;
        padding: 10px 20px;
        border-radius: 10px;
        margin: 10px 5px 20px 5px;
        display: inline-block;
        &:hover {
          background-color: #ae2cae;
        }
      }

//   .proyectDetails {
//       display: flex;
//       flex-direction: column;
//       padding: 5px;
//     h3 {
//       font-size: 16px;
//     }
//     p {
//       font-size: 10px;
//     }
//     span{
        
//     }
//   }
//   img {
//     margin-right: 20px;
//     width: 40%;
//     height: 300px;
//   }

`;
