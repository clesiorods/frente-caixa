import React from 'react';
import './style.css';

function SideBar() {
   return(
      <nav>
         <ul id='side_bar'>
            <li>Vendas</li>
            <li>Estoque</li>
            <li>Cadastro</li>
            <li>Entrenas</li>
         </ul>
      </nav>
   );
}

export default SideBar;