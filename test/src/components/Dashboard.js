import React, { Component } from 'react';
import Weather from './Weather';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.data=0;
    }
    componentWillMount() {
      
        fetch("https://restcountries.eu/rest/v2/name/{{this.props.contry}}").then((res)=>{
            this.data=res
            
          
        }).catch(err=>console.log(err))
    }
    returnTableData() {
        return this.data.map((data, index) => {
            const { Capital, Population, Latlng, flag } = data
            return (
                <tr key={index}>
                    <td>{Capital}</td>
                    <td>{Population}</td>
                    <td>{Latlng}</td>
                    <td>{flag}</td>
                </tr>
            )


        }

        )
    }
    routingtoCityComponent(){
        this.props.history.push('/Weather',{country:this.state.country});
    }

    render() {
        return (
            <div>
                <button onClick="routingtoCityComponent()"> CapitalWeather</button>
                <table>
                    <thead>
                        <tr>
                            <th>Capital</th>
                            <th>Population</th>
                            <th> latlng</th>
                            <th>Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.returnTableData()
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Dashboard;