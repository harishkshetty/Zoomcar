import React, { Component } from 'react'

export default class Checkbox extends Component {
    render() {
        const{val,_onChange}=this.props;
        return (
            <div className="checklist">
                <label >
                    {val}
                <input type="checkbox" value={val} onChange={_onChange}/>

                </label>


            </div>
        )
    }
}
