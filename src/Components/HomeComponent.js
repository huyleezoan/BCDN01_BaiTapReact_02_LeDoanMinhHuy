import React, { Component } from 'react'
import dataGlass from "./Data/dataGlasses.json"
import Glass from './Glass'
export default class HomeComponent extends Component {
    state = {
        glass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    changeGlass = (newGlass) => {
        this.setState({
            glass: newGlass
        })
    }
    renderListGlass = () => {
        return dataGlass.map((item, index) => {
            return <Glass glass={item} changeGlassChild={this.changeGlass} />
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row py-5" style={{
                    height: "50vh",
                }}>
                    <div className="col-3">
                        <div className="position-relative">
                            <img src="./glassesImage/model.jpg" style={{ height: "auto", width: "100%" }} alt="..." className="position-absolute" />
                            <img className="position-absolute" src={this.state.glass.url} alt="..." style={{ width: "150px", opacity: "0.7", top: "77px", left: "54px" }} />
                            <div className="position-relative text-center" style={{ top: "220px", backgroundColor: "rgba(255, 127, 0, 0.5)", height: "90px" }}>
                                <p style={{ color: "rgb(171, 130, 255)", fontSize: "17px" }}>{this.state.glass.name}</p>
                                <p>MADE IN VIET NAM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src="./glassesImage/model.jpg" style={{ height: "auto", width: "100%" }} alt="..." />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            {this.renderListGlass()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
