// Importing React
import React from 'react';

// Importing app specific components
import { AppNavbar } from './Navbar';
import { AppCarousel } from './Carousel';
import { ProjectGrid } from './ProjectGrid';

export const App = () => {
  return (
    <div>
      <AppNavbar />
      <AppCarousel />
      <br />
      <ProjectGrid />
    </div>
  );
}
