import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from 'redux';
import {fetchRequest, getWeather, requestError} from './actions/getWeather'
import Form from "./Components/Form";

class App extends Component {
    render() {
      //  const {weather} = this.props;
        return (
          <div className="App">
                <Form
                    fetchRequestAction={this.props.fetchRequestAction}
                    getWeatherAction={this.props.getWeatherAction}
                    requestErrorAction={this.props.requestErrorAction}
                />
              {/*<ul>*/}
                  {/*{weather.map(param => <li key={param}>{}</li>)}*/}
              {/*</ul>*/}
          </div>
        );
    }
}
const mapStateToProps = store => {
    return {
        weather: store.weather,
        //map: store.map
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchRequestAction: bindActionCreators(fetchRequest, dispatch ),
        getWeatherAction: bindActionCreators(getWeather, dispatch ),
        requestErrorAction: bindActionCreators(requestError, dispatch ),
    }};
export default connect(mapStateToProps,mapDispatchToProps)(App);
