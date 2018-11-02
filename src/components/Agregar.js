import React, {Component} from 'react';

class Agregar extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h4>Agregar tarea</h4>
                        </div>
                        <form id="newcard" className="card-body">
                            <div className="form-group">
                                <label>Titulo: </label>
                                <input type="text" name="titulo" placeholder="Tarea Titulo" className="form-control"/>                  
                            </div>
                            <div className="form-group">
                                <label>Responsable</label>
                                <input type="text" name="responsable" placeholder="Nombre" className="form-control"/>                                 
                            </div>
                            <div className="form-group">
                                <label>Descripsion</label>
                                <input type="area-text" name="description" placeholder="" className="form-control"/>                                 
                            </div>
                            <div className="form-group">
                                <label>Responsable</label>
                                <input type="text" name="responsable" placeholder="Nombre" className="form-control"/>                                 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}