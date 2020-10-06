import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker/Marker.component';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 49.2246,
      lng: -123.1087,
    },
    zoom: 11,
  };

  state = {
    apiKey: {
      development: "",
      product: "AIzaSyBeNxnshtVO9hcgIacX_gHmqtFEY2nm49o"
    },
    markers: [
      {
        id: "frrafra",
        name: "UBC",
        lat: 49.2606,
        lng: -123.2460,
      },
      {
        id: "efaefa",
        name: "Columbia Collage",
        lat: 49.2718,
        lng: -123.0953,
      },
      {
        id: "moijorm",
        name: "Douglas College",
        lat: 49.2036,
        lng: -122.9127,
      },
    ]
  };

  // const Markers = this.markers &&
  //   this.props.markers.filter((m, index) => index >= rowFrom && index <= rowTo)
  //     .map((marker, index) => (
  //       <MarkerExample
  //         // required props
  //         key={marker.get('id')}
  //         lat={marker.get('lat')}
  //         lng={marker.get('lng')}
  //         // any user props
  //         showBallon={index + rowFrom === this.props.openBallonIndex}
  //         onCloseClick={this._onBalloonCloseClick}
  //         hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
  //         scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
  //         {...markerDescriptions[marker.get('type')]}
  //         marker={marker} />
  //     ));
  
  render() {
    const Markers = this.state.markers
        .map((marker, index) => (
          <Marker
            key={marker.id}
            lat={marker.lat}
            lng={marker.lng}
            // any user props
            text={marker.name} />
        ));

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.state.apiKey.development }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={49.2246} lng={-123.1087} text="Langara College!!" />
          {Markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;

        //   <AnyReactComponent lat={49.2246} lng={-123.1087} text="My Marker" />;
