import React from 'react';
import './NavBar.css'
import { Outlet, Link } from 'react-router-dom';

function NavBar(props){
  return(<>
    <nav id="navigation" className="hidden">
                <div className="stars"></div>
                  <Link id="gameDevNav" className="navButton" to="gameDev"><h2 className="navButtonHead">Game Dev</h2></Link>
                  <Link id="softwareDevNav" className="navButton" to="/main/"><h2 className="navButtonHead">Software Dev</h2></Link>
                  <Link id="aboutme" className="navButton secondary" to="aboutme"><h2 className="navButtonHead">About me</h2></Link>
                  <Link id="projectsbutton" className="navButton secondary" to="allprojects"><h2 className="navButtonHead">Projects</h2></Link>
                  <Link id="contact" className="navButton secondary" to="contactpage"><h2 className="navButtonHead">Contact</h2></Link>
            </nav>
          <Outlet />
        </>
  )
}

export default NavBar;