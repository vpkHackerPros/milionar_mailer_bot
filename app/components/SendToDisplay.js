import React, {useState, useReducer, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
const Receiver = styled.span`
  flex: 1;
  height: 30px;
  width: 60px;
  background-color: var(--mainColor1);
  color: white;
  margin: 5px;
  vertical-align: middle;
  text-align: center;
`
const Input = styled.input`
  flex: 1
`
function SendToEmails (props) {
  return (
    <Container>
      {props.emailsGrid.grid.map((row, iter) => {
        return(
          <Receiver>{row[0].value}</Receiver>
        )
      })}

    </Container>
  )
}

export default SendToEmails


