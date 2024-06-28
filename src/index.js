import React from "react";
import ReactDOM from "react-dom/client";
/* import Maestro from "./componentes/pages/maestro"; */
import App from "./componentes/app";


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
  <App/>
)



/* const user = {
  nombre : 'Sebitas',
  apellido: 'goku',
  edad: 18,
  avatar:'https://static.wikia.nocookie.net/dragonball/images/7/7d/Goku_FnF.png/revision/latest/scale-to-width/360?cb=20170704042552&path-prefix=es'
}

function datouser(){
  return user.nombre +""+ user.apellido +""+ user.edad
}

const element = (
<div>
  <h1>hola,{datouser(user.nombre)}</h1>
  <img src={user.avatar}/>
</div>
) */