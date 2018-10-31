import React, {Component} from 'react';

class Navigation extends Component{
    render() {
        return (                   
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                
                <a className="navbar-brand" href="#">{ this.props.titulo} {/* "props" es un objeto el cual lo estamos enviando  a traves del "this." para que pueda ser usado mas adelante  */ }</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3</a>
                    </li>
               
                </ul>
            </nav>
        )
    }
}
export default Navigation;



