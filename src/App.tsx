import React from 'react';
import Nav from './shared/Nav'
import { Outlet } from 'react-router-dom';



const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
