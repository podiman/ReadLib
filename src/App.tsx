import React from 'react';
import Button from './components/Button/Button';
import TextField from './components/TextField';
import NavBar from './components/NavBar/NavBar';

import './sass/base.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TextField text='something' />
      <Button text='Login' landingPage={false} />
    </div>
  );
}

export default App;
