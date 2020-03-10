import React, {useState, useReducer, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1
`
function FileSelector (props) {
  return (
    <Container>
      <Input 
        type={'file'}
        onChange={(event) => {
          props.setExcel(event.target.files[0].path)
          console.log(event.target.files[0].path)
        }}
      />
      <Input 
        type={'file'}
        onChange={(event) => {
          props.setContent(event.target.files[0].path)
          console.log(event.target.files[0].path)
        }}
      />
    </Container>
  )
}

export default FileSelector


