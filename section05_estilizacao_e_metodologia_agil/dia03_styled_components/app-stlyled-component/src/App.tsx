// src/App.tsx

import { Header, Container } from "./styles.tsx";

// CRIANDO UM COMPONENTE ESTILIZADO
function App() {
  return (
    <>
      <Header>
        <h1>Título</h1>
      </Header>
      <Container>
        <p>Conteúdo</p>
      </Container>
    </>
  )
}


// CRIANDO UM ESTILO GLOBAL
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
/* Aqui criamos um reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
body {
  background-color: #333;
}
 
h1 {
  color: white;
}
`

function AppGlobal() {
  return (
    <>
      <GlobalStyle />
      <h1>Meu estilo global está aplicado!</h1>
    </>
  )
}

// PASSSANDO PROPS PARA UM STRYLED COMPONENT
import { Title } from './styles';

function AppTitle() {
  const titleColor = '#1FB621';

  return (
    <Title color={titleColor}>
      Componente estilizado com props
    </Title>
  )
}

import styled from 'styled-components';

const Card = styled.div`
  background-color: lightgray;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: darkblue;
  }

  p {
    font-size: 16px;
    color: black;
  }
`;

// ALINHAMENTO DE CLASSES
function AppClasse() {
  return (
    <Card>
      <h2>Título do Card</h2>
      <p>Conteúdo do Card</p>
    </Card>
  );
}

// COMPONENTE COM PSEUDOCLASSE
const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    margin: 15px 10px;
    
    &:hover {
      background-color: darkblue;
    }
  `;

function AppPClass() {
  return (
    <Button>
      Clique em mim!
    </Button>
  )
}
// COMPONENTE COM THEMEPROVIDER
import { ThemeProvider } from 'styled-components';
import { TTitle } from './styles';

function AppProvider() {
  const theme = {
    borderColor: '#1A1B1C',
    textColor: '#1FB621',
  }
  return (
    <ThemeProvider theme={theme}>
      <TTitle>
        Styled Components
      </TTitle>
    </ThemeProvider>
  )
}


export default AppProvider;