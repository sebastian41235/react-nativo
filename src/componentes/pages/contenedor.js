import React from "react";
import "../CSS/style.css";
import Dibujar from "../dibujarxd";

export default class Contenedor extends React.Component{
    state={
        formularioxd:{
            title:'',
            descripcion:'',
            img:''
        }
    }
    
    handleChange=e=>{
        this.setState({
            formularioxd:{
                ...this.state.formularioxd,
                [e.target.name]:e.target.value
            }
        })
    }
    
    handleSubmit= async e=>{
        e.preventDefault()
        this.props.navigate('/cartas')
        try{
            let config ={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(this.state.formularioxd)
            }
            let res = await fetch('http://localhost:8000/api/info',config)
            let json = await res.json()
            console.log(json)
        }
    
        catch(error){
    
        }
        console.log(this.state)
    }
   render(){
    return(
        <Dibujar
            formularioxd = {this.state.formularioxd}
            onChange= {this.handleChange}
            onSubmit = {this.handleSubmit}
        />
    )
   }

}