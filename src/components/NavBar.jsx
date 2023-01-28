import styled from "styled-components"

export const NavBar = () => {
  return (
    //MENU ENCABEZADO 
    <ContenedorHeader>
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
            <div className="nav-responsive">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </ContenedorHeader>
  )
}


const ContenedorHeader = styled.div`
background: #1e2326;
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 99;

header{
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}
header .logo a{
    font-family: 'Righteous';
    font-size: 36px;
    color: #1CB698;
    text-decoration: none;
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
.nav-responsive{
    background-color: #1CB698;
    color:#fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
}
`