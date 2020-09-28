import React from 'react';
import './style.css';

function SideBar() {
   return(
      <nav>
         <ul id='side_bar'>
            <li className='menu_item'>Vendas</li>
            <li className='menu_item'>Estoque</li>
            <li className='menu_item'>Cadastro</li>
            <li className='menu_item'>Entrenas</li>
         </ul>
      </nav>
   );
}

export default SideBar;