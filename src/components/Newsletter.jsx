import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive"

const Container = styled.div`
height:60vh;
background-color: grey;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`
const Title = styled.h1`
font-size: 40px;
margin-bottom:  20px;

`
const Description = styled.div`
font-size: 24;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: 'center'})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between; 
border: 1px sold lightgrey;
${mobile({ width: '80%'})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    font-color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get Timely updates for your favourite products</Description>
        <InputContainer>
            <Input placeholder="Your Email" />
            <Button><SendIcon /></Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter