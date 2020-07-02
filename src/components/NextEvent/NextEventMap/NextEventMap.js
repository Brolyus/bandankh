import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "./NextEventMap.css";

import "./NextEventMap.css";

class NextEventMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // position: {
      //   name: "",
      //   city: "Reims",
      //   adresse: "",
      //   zipcode: "51100",
      //   pays: "France",
      // },
      lat: 49.2496252,
      lng: -0.09,
      zoom: 19,
    };
  }

  componentDidMount() {}

  render() {
    const position = [49.2496252, 4.0184101];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Dropkick
            <br/>
            15 Rue du Colonel Fabien
            <br/>
            51100 Reims
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default NextEventMap;
