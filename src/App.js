import React, { Component } from 'react';
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from 'styled-components';
import theme from './theme';

// ver4에 맞춰 변경
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`
// mixin
const awsomeCard= css`
  box-shadow: 0 4px 10px #ccc, 0 2px 10px #f7f7f7;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
`
// attribute 
const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
  ${awsomeCard}
`;

const Card = styled.div`
  background-color: white;
  //nesting
  ${Button} {
    border: 4px solid green;
  }
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Form />
          {/* <Input placeholder="hello"/> */}
          {/* <Button>haha</Button>
          <Button danger rotationTime={5}>hi</Button>
          <Anchor as="a" href="http://google.com">Go to google</Anchor> */}
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card><Button></Button></Card>
)

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eee;
`

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600px;
//   -webkit-apperance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => (props.danger ? 'red': 'black')};
//   ${props => {
//     if (props.danger){
//       // ver 4에 따라 css 추가
//       return css `animation: ${rotation} ${props.rotationTime}s linear infinite`;
//     }
//   }};
// `
// // ver 4에 따라 수정
// const Anchor = styled(Button)`
//   text-decoration: none;
// `;

// const rotation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `


export default App;
