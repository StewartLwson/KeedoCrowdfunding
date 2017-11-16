// Importing React
import React from 'react';

// Importing app specific components
import { AppNavbar } from './Navbar';
import { AppCarousel } from './Carousel';

export const App = () => {
  return (
    <div>
      <AppNavbar />
      <AppCarousel />
    </div>
  );
}
