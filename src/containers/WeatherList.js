import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component{
    renderWeather() {
        return this.props.weather.map(cityData => {
            if(cityData) {
                const temp = cityData.list.map(day =>  day.main.temp - 273.15);
                const humidity = cityData.list.map(day =>  day.main.humidity);
                const pressure = cityData.list.map(day =>  day.main.pressure);
                const {lon, lat} = cityData.city.coord;

                return (
                    <tr key={Math.random()}>
                        <td><GoogleMap lat={lat} lon={lon}/></td>
                        <td><Chart data={temp} color="red" units='°C'/></td>
                        <td><Chart data={humidity} color="blue" units='%' /></td>
                        <td><Chart data={pressure} color="green" units='hPa' /></td>
                    </tr>
                );
            }
            else return null;
        });
    }

    render() {
        const weather = this.props.weather;
        const hadError = () => {
            if(!weather[0]) return true;
            return false;
        };
        const error = hadError();
        if(!weather.length) return null;
        return (
            <div>
                <div className="error">{error ? 'No city found' : ''}</div>
                <table className="table table-hover" style={{marginTop: '20px'}} >
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (°C)</th>
                            <th>Humidity (%)</th>
                            <th>Pressure (hPa)</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderWeather()}</tbody>
                </table>
            </div>
        )
    }
} 

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);