import React, {useState, useReducer, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 30px;
`


function InputAccount (props) {
  const [temp, setTemp] = useState('')
  return (
    <Input 
      onChange={(event) => {setTemp(event.target.value)}}
      onBlur={(event) => {
        props.setAccount(event.target.value)
        console.log(event.target.value)
      }}
      value={temp}
    />
  )
}

export default InputAccount
