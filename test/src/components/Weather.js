import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.weatherData=0
    }
    componentWillMount() {
        fetch("http://api.weatherstack.com/current? access_key={{36a1f0de93b4424b2dde9b653eb8a824}}&query ={{props.capital}}").then((res) => {
             this.weatherData = res;
        }).catch(err => console.log(err))

    }
    returnTableData() {
        return this.weatherData.map((weatherData, index) => {
            const { temperature, weather_icons, wind_speed, precip } = weatherData
            return (
                <tr key={index}>
                    <td>{temperature}</td>
                    <td><img src={weather_icons}/></td>
                    <td>{wind_speed}</td>
                    <td>{precip}</td>
                </tr>
            )


        }

        )
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>temperature</th>
                            <th>weather_icons</th>
                            <th> wind_speed</th>
                            <th>precip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.returnTableData()}
                    </tbody>
                </table>

            </div>
        )
    }




}

export default Weather;