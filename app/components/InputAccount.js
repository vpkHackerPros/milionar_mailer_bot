import React, {useState, useReducer, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  width: 100%;
  margin: 20px;
`
const Title = styled.div`
  flex: 1;
  font-size: 3vh; 
  color: var(--textColor);
  vertical-align: middle;
  margin:auto;

`
const Input = styled.input`
  border: 1px solid var(--backgroundDarkColor);
  border-radius: 4000px;
  text-align : center;
  font-size: 3vh; 
  color: var(--textColor);
  flex: 4;
  text-align: left;
  background-color: var(--backgroundColor);
  outline: none;
  padding-left: 10px;
  max-height: 50px;
  margin:auto;

  &:focus {
    background-color: var(--mainColor1);
    border-color: var(--mainColor1);
    color: white;
  }
`


function InputAccount (props) {
  const [temp, setTemp] = useState('')
  return (
    <Container>
      <Title>{props.title}</Title>
      <Input 
        onChange={(event) => {setTemp(event.target.value)}}
        onBlur={(event) => {
          props.setAccount(event.target.value)
          console.log(event.target.value)
        }}
        value={temp}
      />
    </Container>
  )
}

export default InputAccount
