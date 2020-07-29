import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    document.body.style.backgroundColor = '#def2fa';
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
