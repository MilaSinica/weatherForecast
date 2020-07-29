import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';
import { countryCodes } from '../constants/countryCodes';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            term: '',
            countryCode: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onCountrySelect = this.onCountrySelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchWeather('Sydney', 'AU');
        this.props.fetchWeather('Daugavpils', 'LV');
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term, this.state.countryCode,);
        document.getElementById("select").selectedIndex = 0;
        this.setState({term: '', countryCode: ''});
    }

    onCountrySelect(event) {
        this.setState({countryCode: event.target.value});
    }


    render(){
        return (
            <div className="row" style={{paddingTop: '20px'}}>
                <form onSubmit={this.onSubmit} style = {{width: "100%"}}>
                    <div className="form-group" >
                        <input 
                            placeholder='Add your favorite cities and get a five-day forecast!'
                            className='form-control'
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="select" onChange={this.onCountrySelect}>
                            <option value=''>Select country or believe in luck</option>
                            {countryCodes.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>)
                            )}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);