import { useSelector } from "react-redux"
import styled from "styled-components"

export const SectionCurriculum = () => {

    const dataIzq = [
        {id: 1,"h4": "Computacion e Informatica", "UniOInst": "Cibertec", "fecha": "2021 - Presente", "description": "Aprendí Java, c#, sql server y mongodb. En este instituto hice 2 proyectos basicos por cada lenguaje(java y c#)"},
    ]
    const dataDer =[
        {id: 1, "Area": "Ninguna por el momento", "CompanyName": "", "fecha": "", "desc": ""}
    ]
    const {DarkMode} = useSelector(e=>e.ui)




  return (
    
    // <!-- SECCION CURRICULUM -->
    <Curriculum DarkModep={DarkMode} id="seccionCurriculum">
        <div className="contenido-seccion">
            <h2>Curriculum</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Educación</h3>
                    {dataIzq.map(i=>{
                        return (
                            <div key={i.id} className="item izq">
                                <h4>{i.h4}</h4>
                                <span className="casa">{i.UniOInst}</span>
                                <span className="fecha">{i.fecha}</span>
                                <p>{i.description}</p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <div className="col derecha">
                    <h3>Experiencia de trabajo</h3>
                    {dataDer.map(d=>{
                        return(
                            <div key={d.id} className="item der">
                                <h4>{d.Area}</h4>
                                <span className="casa">{d.CompanyName}</span>
                                <span className="fecha">{d.fecha}</span>
                                <p>{d.desc}</p>
                                <div className="conectord">
                                    <div className="circulod"></div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    </Curriculum>

  )
}

const Curriculum = styled.div`
/* SECCION CURRICULUM */
background-color: ${prop=>{return prop.DarkModep? '#1e2326': '#eaeaea'}};
color: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
padding: 50px 20px;
.contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.fila{
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    }
}
.fila .col{
    width: 49%;
    
    @media (max-width: 750px){
        width: 100%;
    }
    padding: 0 20px;
}
.fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
    word-break: break-word;
}
.fila .izquierda{
    border-right: 2px solid #252A2E;
}
.fila .derecha{
    border-left: 2px solid #252A2E;
}
.fila .item{
    padding: 25px;
    margin-bottom: 30px;
    background-color: #252A2E;
    position: relative;
    color: ${prop=>{return prop.DarkModep? '#fff': '#fff'}};
}
.fila .item h4{
    font-size: 20px;
    margin-bottom: 10px;
    word-break: break-word;
}
.fila .item .casa{
    color: #1CB698;
    font-size: 22px;
    font-weight: bold;
    display: block;
    word-break: break-word;
}
.fila .item .fecha{
    display: block;
    color: #1CB698;
    margin-bottom: 10px;
    word-break: break-word;
}
.fila .item p{
    line-height: 24px;
}
.fila .izq{
    border-right: 2px solid #1CB698;
    margin-right: 20px;
}
.fila .der{
    border-left: 2px solid #1CB698;
    margin-left: 20px;
}
.fila .item .conectori{
    height: 2px;
    background-color: #1CB698;
    width: 47px;
    position: absolute;
    top: 50%;
    right: -47px;
    z-index: 5;
}
.fila .item .conectori .circuloi{
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1CB698;
    float: right;
    position: relative;
    bottom: 4px;
}
.fila .item .conectord{
    height: 2px;
    background-color: #1CB698;
    width: 47px;
    position: absolute;
    top: 50%;
    left: -47px;
    z-index: 5;
}
.fila .item .conectord .circulod{
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1CB698;
    float: left;
    position: relative;
    bottom: 4px;
}
`