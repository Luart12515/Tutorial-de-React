import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'
import {superdatos} from './datos.json'

class App extends Component {
  constructor(){
    super(); //Es necesario " super" para poder heredar la funcionalidad de React 
    this.state = { //Estado de los datos en una aplicacion de React
      /* este es un ejemplo de como funciona la  
      titulo: 'Aplicacion de Trabajos', //son los datos del objeto a transmitir 
      NumeroTarea: 10   
      */
    } 

  }
  render() {
    return (
      <div className="App">
        <Navigation titulo="Seccion de pruebas"/>
        <Navigation titulo="Mejorando cada secccion"/> {/* El titulo lo ingreamos desde navigations */}
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tutorial de React fazt</h1>
        
    {/* this.state.titulo  Estrae la informacion de campo state. Titulo*/}  numero de tareas son {/* this.state.numeroTarea */ }
        {3+2}
      </div>
    );
  }
}

export default App;
