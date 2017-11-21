// Importing React
import React from 'react';

//Importing different page components
import { AppNavbar } from './Navbar';
import { Home } from './Home';

export const App = () => {
  return (
    <div>
      <AppNavbar />
      <Home />
    </div>
  )
}
