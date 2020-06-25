import React, {Component } from 'react';
import { connect } from 'react-redux';

import './Mode.css';

class Mode extends Component  {
    
    render() {
        let style;
        console.log(this.props.dark.payload)
      let  toggle = () => {
            if (this.props.dark.payload === true){
                 style = {
                    background: "white"
                 }
                return style;
            }
           style = {
                    background: "dark"
                 }
                return style;
        }
        return (
            <div className="toggle-container" >
                <i style={{ background: this.props.dark ? "white": "red"}} className="fas fa-moon"></i>
                <span className="toggle">
                    <input
                        // checked={() => console.log(this.props.light)}
                        onChange={() => toggle}
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                    />
                    <label htmlFor="checkbox" />
                </span>
                <i style={{ background: "white" }} className="far fa-sun"></i>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        light: state.light,
        dark: state.dark

    }
}
                

export default connect(mapStateToProps)(Mode);