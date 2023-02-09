import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { SvgsIcons } from './SvgsIcons'

export const ButtonCom = ({onClick, onSubmitForEmail, textoButton, icon}) => {
  const {DarkMode} = useSelector(e=>e.ui)

  return (
    <ButtonStyle onClick={onClick} type={onSubmitForEmail} DarkModep={DarkMode}>
        {textoButton} {icon}
        <span className="overlay"></span>
    </ButtonStyle>
  )
}
const ButtonStyle = styled.button`
cursor: pointer;
    background-color: transparent;
    border: 2px solid ${prop=>{return prop.DarkModep? '#fff': 'black'}};
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: ${prop=>{return prop.DarkModep? '#fff': 'black'}};
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: row;
    @media (max-width: 260px){
      padding: 10px 1px;
      display: flex;
      flex-direction: column;
    }
    align-items: center;
    &:hover .overlay{
        width: 100%;
    }
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1cb698;
    z-index: -1;
    transition: 1s;
  }
`