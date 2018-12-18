import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Agregar from './components/Agregar'
import {superdatos} from './datos.json'

class App extends Component {
  constructor(){
    super();
    
    this.state = { 
      superdatos 
    } 
  }
  render() { //El render solo te sirve para en si, compilar tu programa no para mostrar  
    console.log(this.state.superdatos );
    //El comando "map" sirve para indicar que el array se lera por completo y se guardara en la variable "dato", mientras que la "i" incrementara asta al ultima posicion
    const datosAVer= this.state.superdatos.map((dato, i)=>{
      return( //usando boostrap le daremos un diseño a la informacion
        <div className="col-md-4">    
          <div className="card mt-4 recuadro bordes">
            <div className="card-header">
              <h3>
                hola a todos 
              </h3>
              <div className="badge badge-pill badge-danger" >
                {dato.priority}
              </div>
            </div>
            <div className="card-body">
              <p>{dato.description}</p>
              <p> Persona responsable: </p>
              {dato.responsable}
              
            </div>   
          </div>
        </div>
      )
    })

    
    return ( // Seccion donde te permite visualizar en la pagina web los cambios que has realizado 
      <div className="App">
          <Navigation titulo="Seccion de pruebas" cardcount = {datosAVer.length} /> {/* El titulo lo ingreamos desde navigations */}  
          <h1>Tutorial de React fazt</h1><h2>Con midificaciones personales</h2>   
          {/* this.state.titulo  Estrae la informacion de campo state. Titulo }  numero de tareas son { this.state.numeroTarea */ }
          <div className="container">
            <div className="row">
              {datosAVer}  
            </div>
          </div>

      </div>
    );
  }
}

export default App;
