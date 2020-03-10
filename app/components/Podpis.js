import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledPodpis = styled.div`
  color: var(--mainColor1);
  font-size: 2vh;
  margin: auto;
  flex: 1;
  text-align: center;
`

function Podpis () {
  return(
    <StyledPodpis>{'SPEED MAILER 2000 (made by Zoran & Klemen for VPK)'}</StyledPodpis>
  )
}


export default Podpis
