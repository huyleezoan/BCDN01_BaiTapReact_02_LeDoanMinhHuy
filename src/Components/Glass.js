import React, { Component } from 'react'

export default class Glass extends Component {
    render() {
        let { glass, changeGlassChild } = this.props;
        return (
            <div className="col-4 pb-5">
                <img onClick={() => {
                    changeGlassChild(glass)
                }} className="ml-2 p-2 border border-width-1" src={glass.url} style={{ width: 110, cursor: 'pointer' }} alt="..." />
            </div>
        )
    }
}
