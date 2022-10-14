import React from 'react';
import './style.css';

import wallpaperSignos01 from '../../images/wallpaper-signos01.png';

export function Home() {

   return (
      <div id="container">
         <main>
            <img src={wallpaperSignos01} />

            <form id="formSigno" action="">
               <div id="box1">
                  <label for="txtNome">Nome Completo: </label>
                  <label for="dataNasc">Data de Nascimento:</label>   
               </div>

               <div id="box2">
                  <input id="txtNome" name="txtNome" type="text" />
                  <input id="dataNasc" name="dataNasc" type="date" />
               </div>

               <div id="btn">
                  <button form="formSigno" type="submit">Verificar Signo</button>
               </div>
            </form>
         </main>

         <footer>
            
            <a href="https://br.freepik.com/vetores-gratis/circulo-do-zodiaco-com-signos-do-horoscopo-peixe-pisces-scorpio-aquarius-zodiak-aries-virgo-ilustracao-vetorial_11059329.htm#query=signos&position=15&from_view=search&track=sph">Imagem de macrovector</a> no Freepik
         </footer>
      </div>
   )
}
