import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Parentcontext from '../Usecontext/Parentcontext.jsx'


const colors = {
  blue: "#3182CE"
}
const theme = extendTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Parentcontext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Parentcontext>
  </ChakraProvider>
)
