import React from "react";
import Hola from "../componentes/saludo"
import Iterador from "../componentes/iterante"
import Boton from "../componentes/boton";

const Dibujar2xd = ({data})=>(
    <React.Fragment>
    <Hola
       username = "sebitas alcachofas"
    />
    <Iterador
       chao={data}
    />
    <Boton/>
</React.Fragment>
    
)

export default Dibujar2xd