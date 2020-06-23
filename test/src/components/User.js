import React,{Component} from 'react';
import Dashboard from './Dashboard'

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            country:""
        };
    }
    handleCountrychange = evt =>{
        this.setState({
            country:evt.target.value
        })
    }
      handleSubmit=() =>{
      const {country} =this.state;
           this.props.history.push('/dashboard',{country:country});
      }
    
 
    render(){
        const isEnabled=this.state.country.length>0;
        return(
              <div >
             <form onSubmit={this.handleSubmit}>
                 <input type="text" placeholder="Enter Country" value={this.state.country} onChange={this.handleCountrychange}/>
                 <button disabled={!isEnabled}>Submit</button>
             </form>
              </div>
        );
    }
}

export default User;