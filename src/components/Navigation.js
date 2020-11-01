import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import Memories from '../components/Memories'
import Profile from '../components/Profile'
import FriendsMemories from '../components/FriendsMemories';


import logo from '../iternal-logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'



const Navigation = () => {
  return ( 
      <div className="columns">
          <aside className="side-nav column ">

            <ul className="menu-list">

            <div className="top-nav">
                <img src={logo} alt="Logo" />
            </div>

            <div className="middle-nav">
              <li>
                <Link to="/">
                  <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
                </Link>
              </li>
              <li>
                <Link to="/memories">
                  <span className="icon"><FontAwesomeIcon icon={faImages} /></span>
                </Link>
              </li>
              <li>
                <Link to="/profile"> 
                  <span className="icon"><FontAwesomeIcon icon={faUserCircle} /></span>
                </Link>
              </li>
              <li>
                <Link to="/friends-memories"> 
                  <span className="icon"><FontAwesomeIcon icon={faUserFriends} /></span>
                </Link>
              </li>
            </div>


              <div className="bottom-nav">
                <li>
                    <span className="icon"><FontAwesomeIcon icon={faQuestionCircle} /></span>
                </li>
                <li>
                    <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
                </li>
              </div>
            </ul>
          </aside>

          <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/Memories" component={Memories}  /> 
            <Route path="/Profile" component={Profile}  /> 
            <Route path="/friends-memories" component={FriendsMemories}  /> 


            <Route component={Error} />
          </Switch>
      </div>
   );
}
 
export default Navigation;