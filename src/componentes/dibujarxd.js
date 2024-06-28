import React from "react";
import Formulario from "./formulario";
import Card from "./Tarjeta";

const dibujar = ({formu,onChange,onSubmit})=>
(<React.Fragment>
        <Card
            {...formu}
        />
        <Formulario
            onSubmit= {onSubmit}
            onChange = {onChange}
            formu={formu}
        />
    </React.Fragment>)

export default dibujar