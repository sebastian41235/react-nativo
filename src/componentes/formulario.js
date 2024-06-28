import React from "react";

const formulario2 = ({onChange,formu,onSubmit}) =>(
       
            <React.Fragment>
                <form onSubmit={onSubmit}>
                    <React.Fragment>
                        <label>Nombre:</label>
                        <input type="text" name="title" placeholder="name plis" onChange={onChange} value={formu.title}/>
                    </React.Fragment>
                    <React.Fragment>
                        <label>Descripcionxd:</label>
                        <input type="text" name="descripcion" placeholder="escriba la descripcion xd" onChange={onChange} value={formu.descripcion}/>
                    </React.Fragment>
                    <React.Fragment>
                        <label>enlace de la imagen:</label>
                        <input type="text" name="img" placeholder="Img :v" onChange={onChange} value={formu.img}/>
                    </React.Fragment>
                    <button type="submit">Enviar:D</button>
                </form>
            </React.Fragment>
)

export default formulario2