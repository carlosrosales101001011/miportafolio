import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { isDarkMode } from "../store/uiSliceDarkMode";
import { SvgsIcons } from "./SvgsIcons"

export const ToogleButtonMode = () => {

    const [toggleState, settoggleState] = useState(false);
    const dispatch = useDispatch();

    
    const StatusMode = (e)=>{
        dispatch(isDarkMode(toggleState))
        settoggleState(!toggleState)
        return localStorage.setItem("Dark Mode", e.target.checked? true: false);

        
    }
    
    const {DarkMode} = useSelector(e=>e.ui)
    const handleModoNoc = ()=>{
        dispatch(isDarkMode(toggleState))
        settoggleState(!toggleState)
    }

  return (
    <>
    <Label htmlFor="checkbox" DarkModeP={DarkMode}>
        <input type="checkbox" id="checkbox" 
                checked={localStorage.getItem("Dark Mode")==="true"? true: false} 
                onChange={StatusMode}/>
        <span className="ball"></span>
    <SvgsIcons className={"moon"} moon/>
    <SvgsIcons className={"sun"} sun/>
    </Label>
    <DarkModeResponsive>
        <p onClick={handleModoNoc}>Modo Nocturno: <strong>{toggleState?"Desactivado": "Activado"}</strong></p>
    </DarkModeResponsive>
    </>
  )
}
const DarkModeResponsive = styled.div`
@media (min-width: 880px ){
    display: none;
}
p{
    cursor: pointer;
}
`
const Label = styled.label`
@media (max-width: 880px ){
    display: none;
}
display: block;
width: 60px;
height: 31px;
border: 2px solid #4672fe;
border-radius: 30px;
position: relative;
cursor: pointer;
#checkbox{
    display: none;
}
.ball, .sun, .moon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    stroke: ${prop=>{return prop.DarkModeP? 'white': 'black'}};
}
.ball{
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #4672fe;
    border-radius: 50%;
    left: 1px;
    z-index: 10;
    transition: transform .5s ease-in-out;
}
.sun{
    right: 4px;
}
.moon{
    left: 4px;
}
#checkbox:checked + .ball{
    transform: translate(29px, -50%);
}
`