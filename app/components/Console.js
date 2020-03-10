import React, {useState, useReducer, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex: 3;
  width: 100%;
  flex-direction: column;
  font-size: 12px;
  color: var(--textColor); 
  word-break: break-all;
  background-color: var(--backgroundDarkerColor)
`

function Console (props) {
  return(
    <Container>{props.message}</Container>
  )
}

export default Console
