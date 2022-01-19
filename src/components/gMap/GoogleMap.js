import React,{Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            //initial position
            mapCenter:{
                lat:53.2788865,
                lng:-9.0607038
            }
        };
    }


    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.setState({ address });
                this.setState({ mapCenter: latLng});
            })
            .catch(error => console.error('Error', error));
    };

    render() {

        const style = {
            width:'1240px',
            height:'1000px',
            border:'none'
        }

        return (
            <div id='googleMap'>
                {/*<PlacesAutocomplete*/}
                {/*    value={this.state.address}*/}
                {/*    onChange={this.handleChange}*/}
                {/*    onSelect={this.handleSelect}*/}
                {/*>*/}
                {/*    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (*/}
                {/*        <div>*/}
                {/*            <input*/}
                {/*                {...getInputProps({*/}
                {/*                    placeholder: ' Search Places ...',*/}
                {/*                    className: 'location-search-input',*/}
                {/*                })}*/}
                {/*                style={searchStyle}*/}
                {/*            />*/}
                {/*            <div className="autocomplete-dropdown-container">*/}
                {/*                {loading && <div>Loading...</div>}*/}
                {/*                {suggestions.map(suggestion => {*/}
                {/*                    const className = suggestion.active*/}
                {/*                        ? 'suggestion-item--active'*/}
                {/*                        : 'suggestion-item';*/}
                {/*                    // inline style for demonstration purpose*/}
                {/*                    const style = suggestion.active*/}
                {/*                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }*/}
                {/*                        : { backgroundColor: '#ffffff', cursor: 'pointer' };*/}
                {/*                    return (*/}
                {/*                        <div*/}
                {/*                            {...getSuggestionItemProps(suggestion, {*/}
                {/*                                className,*/}
                {/*                                style,*/}
                {/*                            })}*/}
                {/*                        >*/}
                {/*                            <span>{suggestion.description}</span>*/}
                {/*                        </div>*/}
                {/*                    );*/}
                {/*                })}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</PlacesAutocomplete>*/}

                <Map

                    google={this.props.google}
                    // onClick={this.onMapClicked}
                    style={style}
                    initialCenter={{
                         lat: this.state.mapCenter.lat,
                         lng: this.state.mapCenter.lng
                    }}

                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                >
                    <Marker
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }}
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB3I9a7hzY__lLQhcN8lVg3xLRKYOX_Fsk')
})(MapContainer)