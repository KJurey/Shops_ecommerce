import styled, { createGlobalStyle } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import { ItemsContextProvider } from './context/ItemsContext';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SignupSuccess from './pages/SignupSuccess';
import ProductDetails from './pages/ProductDetails';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fffcfa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ItemsContextProvider>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Home />
              </>
            }
            />
            <Route path='/product/:productId' element={
              <>
                <Header />
                <ProductDetails />
              </>
            }
            />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signup/success' element={<SignupSuccess />} />
          </Routes>
        </ItemsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App