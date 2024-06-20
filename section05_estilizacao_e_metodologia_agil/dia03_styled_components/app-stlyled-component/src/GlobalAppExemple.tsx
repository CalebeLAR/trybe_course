/* App.tsx */

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

function App() {
    return (
      <>
      <GlobalStyle />
      <h1>Meu estilo global está aplicado!</h1>
    </>
  )
}


export default App;