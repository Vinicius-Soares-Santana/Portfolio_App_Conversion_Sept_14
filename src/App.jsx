import { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './assets/Presentational/Root';
import ContactPage from './assets/Presentational/ContactPage';
import GameDevPage from './assets/Presentational/GameDevPage';
import IntroductionScreen from './assets/Presentational/IntroductionScreen';
import NavBar from './assets/Presentational/NavBar';
import SoftwareDevPage from './assets/Presentational/SoftwareDevPage';
import AboutMe from './assets/Presentational/AboutMe';
import AllProjects from './assets/Presentational/AllProjects';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={  <Root /> }>
      <Route index element={ <IntroductionScreen /> } />
      <Route path='main' element={<NavBar />}>
          <Route index element={ <SoftwareDevPage /> } />
          <Route path='gamedev' element={ <GameDevPage /> } />
          <Route path='contactpage' element={<ContactPage />} />
          <Route path='aboutme' element={ <AboutMe /> } />
          <Route path='allprojects' element={ <AllProjects /> } />
      </Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
