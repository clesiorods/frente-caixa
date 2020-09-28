import React from 'react';
import Main from '../../Main';
import SideBar from '../../SideBar';
import TopBar from './../../TopBar';
import './style.css';
import BG from './../../../assets/images/fundomesa1920p.png';

function ControlPanel() {
   return(
      <div>
         <img id='fundo' src={BG} alt='Plano de Fundo'/>
         <div id='control_panel'>
         </div>
            <Main/>
            <SideBar/>
            <TopBar/>
      </div>
   );
}

export default ControlPanel;