import React, {Component} from 'react';
import Node from './Node/Node';

import './Visualizer.css';


export default class Visualizer extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
       
        return (
            <div className="grid">
            <Node></Node>
            </div>
        );
    }
} 
