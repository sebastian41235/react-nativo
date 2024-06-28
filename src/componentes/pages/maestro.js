import React from "react";
import Dibujar2xd from "../dibujar2xd";
import useFetch from "../../Hook/hook";
import url from "../../config";

const Maestro =()=>{
    
    const {data} = useFetch(`${url}/info`)

    return(
        <Dibujar2xd
            data = {data}
        />
    )
}

export default Maestro