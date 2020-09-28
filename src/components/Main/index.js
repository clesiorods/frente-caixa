import React from 'react';
import './style.css';

function Main() {
   return(
      <div id='main'>
         <section>
            <section id='dinamic_list'>
               <div id='d1' className='dinamic_block' >
                  2254  Estoque
                  <footer className='updated'>
                     Atualizado às 12:49
                  </footer>
               </div>

               <div id='d2' className='dinamic_block' >
                  1645 Vendas
                  <footer className='updated'>
                     Atualizado às 12:49
                  </footer>
               </div>

               <div id='d3' className='dinamic_block' >
                  55 Entregas
                  <footer className='updated'>
                     Atualizado às 12:49
                  </footer>
               </div>

               <div id='d4' className='dinamic_block' >
                  928 Clientes
                  <footer className='updated'>
                     Atualizado às 12:49
                  </footer>
               </div>
            </section>
         </section>
      </div>
   );
}

export default Main;