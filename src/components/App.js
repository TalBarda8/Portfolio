import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Intro from './Intro';
import ProjectsList from './ProjectList';
import Footer from './Footer';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Intro />
      {/* <ProjectsList />
      <Footer /> */}
    </div>
  );
}

export default App;
