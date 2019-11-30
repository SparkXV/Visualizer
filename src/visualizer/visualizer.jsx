import React, {Component} from 'react';
import Node from './Node/Node';

import './visualizer.css';

export default class visualizer extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
            <div>
              foo
            <Node></Node>
            </div>
        );
    }
}