import React, { useState } from 'react';
import styled from 'styled-components'
import fs from 'fs'

function SendMailButton (props) {
  

  const [emailContent, setEmailContent] = useState('')
  const getEmailContent = () => {
    return  fs.readFileSync(props.content, 'utf8');
  }
  const sendEmail = (sendTo) => {
    let myHtml = getEmailContent()
    console.log(myHtml)
    var nodeoutlook = require('nodejs-nodemailer-outlook')
    nodeoutlook.sendEmail({
      auth: {
          user: props.myEmail,
          pass: props.myPassword
      },
      from: props.myEmail,
      to: sendTo,
      subject: 'Milijonar Vabilo',
      html: myHtml,
      //text: 'This is text version!',
     // replyTo: 'receiverXXX@gmail.com',
     // attachments: [],
      onError: (e) => {
        props.setConsoleMessage(props.consoleMessage + sendTo + ' ni poslalo \n')
        console.log(e)
      },
      onSuccess: (i) => {
        props.setConsoleMessage(props.consoleMessage + sendTo + ' je poslalo \n')
        console.log(i)

      }
    });
  }

  const Button = styled.button`
    flex: 1; 
    width: 100%;
    background-color: var(--backgroundColor); 
    border: 1px solid var(--backgroundDarkerColor); 
    font-size: 1em; 
    font-weight: bold;
    color: var(--textColor);
    outline: none;
    flex-grow: 1;
    padding: 5px;
    max-height: 100px;
    max-width: 300px;
    margin: auto;

    &: hover { 
      background-color: var(--backgroundDarkerColor);
    }
    &: active {
      background-color: var(--textColor);
      color: var(--backgroundColor);
      box-shadow: none;
    }
  `

  return (
    <Button 
      onClick={() => {
        let offset = 0
        props.sendToEmails.grid.map((row, iter) => {
          setTimeout(()=>{
            sendEmail(row[0].value)
            console.log(`sent to ${row[0].value}`)
            console.log(`offset is ${offset}`)
          }, offset)
          offset = offset + 3000
        })
      }}
    >send mail</Button>
  )


}

export default SendMailButton
