import React, { Component } from 'react'
import './city.css'
export default class City extends Component {
    render() {
        const {icon,name}=this.props.data;
        return (
            <div className="card">
                <div>
                <img  className="citypic"  alt="zoomcar" src={icon}/>
                <h3>{name}</h3>
                </div>
            </div>
        )
    }
}
