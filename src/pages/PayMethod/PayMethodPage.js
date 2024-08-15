import React from 'react'
import { Container  } from 'react-bootstrap'
import PayMethodContainer from '../../components/PayMethodContainer/PayMethodContainer'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const PayMethodPage = () => {
  return (
    <div>
 <NavBarLogin />
    <Container style={{minHeight:'670px'}}>
           <PayMethodContainer />
        </Container>
    </div>
  )
}

export default PayMethodPage
