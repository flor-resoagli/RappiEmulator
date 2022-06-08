import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import {ContextStateProvider} from "./components/context";
import Header from './screens/Header';
import Footer from "./screens/Footer";
import {Router} from "./routing/Router";

const App = () => {
  return (
      <BrowserRouter>
          <ContextStateProvider>
            <Header/>
              <Router/>
            <Footer/>
          </ContextStateProvider>
      </BrowserRouter>
  );
}

export default App;
