import React, {useState, useReducer, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import useSpreadsheet from './hooks/useSpreadsheet.js'
import FileSelector from './components/FileSelector.js'
import SendMailButton from './components/SendMailButton.js'
import InputPassword from './components/InputPassword.js'
import SendToDisplay from './components/SendToDisplay.js'
import Console from './components/Console.js'
import Instructions from './components/Instructions.js'
import Podpis from './components/Podpis.js'


import InputAccount from './components/InputAccount.js'

import * as net from 'net'


// za desni klik, da onemogoc od chroma menije
document.addEventListener('contextmenu', function(event){
  event.preventDefault();})

const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundColor: #FFFFFF;
    --backgroundDarkerColor: #eeeeee;
    --backgroundDarkColor: #d9d9d9;
    --mainColor1: #5da399;
    --mainColor2: #011936;
    --secondaryColor1: #8dbfb7;
    --textColor: #757575;
  }
  #root {
    height: 100%
  }
  body {
    font-family: sans-serif;
    background: var(--backgroundColor);;

    height: 100%;
    width: 100%;
    margin: 0;
    flex-direction: column;

    position: relative;
  }
  html {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`
  const Main = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    height: 100%;
    justify-content: center;
`

function MainContainer(props) {
  const [myEmail, setMyEmail] = useState('')
  const [myPassword, setMyPassword] = useState('')
  const [excel, setExcel] = useState('/home/klemen/Desktop/sample.xls')
  const [excelSheet, setExcelSheet] = useState('Sheet1')
  const [content, setContent] = useState(null)
  const [consoleMessage, setConsoleMessage] = useState('')

  const emailsGrid = useSpreadsheet(excel, 'Sheet1')

  return (
    <Main>
      <GlobalStyle />
      <Podpis />
      <InputAccount
        setAccount={setMyEmail}
        title={'input email'}
      />
      <InputAccount
        setAccount={setMyPassword}
        title={'input password'}
      />
      <FileSelector 
        setExcel={setExcel}
        setExcelSheet={setExcelSheet}
        setContent={setContent}
        excel={excel}
      />
      <SendToDisplay 
        emailsGrid={emailsGrid} 
      />
      <SendMailButton 
        consoleMessage={consoleMessage}
        setConsoleMessage={setConsoleMessage}
        content={content}
        myEmail={myEmail}
        myPassword={myPassword}
        sendToEmails={emailsGrid}
      />
      <Console 
        message={consoleMessage}
      />
      <Instructions />
    </Main>

  )
}


export default MainContainer;

