import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeProvider from './ThemeProvider';
import Header from "./Header"
import Footer from "./Footer"


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Header />        

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height={70} width={70} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
