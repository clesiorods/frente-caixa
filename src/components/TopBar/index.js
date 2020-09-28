import React from 'react';
import IconLogo from './../../assets/icons/icon_t.png';
import './style.css';

function TopBar() {
   return(
      <div id='top_bar'>
         <img src={IconLogo} alt="Icone logo" id='icon_logo'/>
         Restaurante
      </div>
   );
}

export default TopBar;