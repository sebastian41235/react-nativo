import React from "react";
import "./CSS/style.css";

const Tarjeta = ({title,descripcion,img})=>(
    <div className="todo">
            
            <div className="contenido">
                <div className="font">
                    <h1>wenas {title}</h1>
                    <p>{descripcion}</p>
                </div>
                <div>
                    <img src={img} className="logo" alt=""/>
                </div>
            </div>

        </div>
)
export default Tarjeta