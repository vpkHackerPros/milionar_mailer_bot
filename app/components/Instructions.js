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
  background-color: var(--backgroundColor)
`

function Instructions (props) {
  return(
    <Container>{'NAVODILA\n\n1. vpiši se v Outlook račun. Ostali e-mail ponudniki ne delujejo... se pa da narediti.\n'+
      '2. Izberi excel datoteko. Maili na katere hočeš poslati sporočilo morajo biti v prvem stolpcu na sheetu poimenovanem Sheet1\n'+
      '3. Izberi datoteko s tekstom za sporočilo. Datoteka mora biti .txt v html sintaksi.\n'+
      '4. Klikni gumb pošlji. Komu je email uspešno poslalo in komu ne, bo izpisalo pod gumbom.\n'}
    </Container>
  )
}

export default Instructions
