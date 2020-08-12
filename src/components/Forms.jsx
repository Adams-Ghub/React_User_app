import React from 'react';
import Users from '../components/Users';


class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            phone:'',
            users: []
        };

        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleNameChange(e){
        this.setState({name:e.target.value})
        console.log(this.state.name)
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})
        console.log(this.state.email)
    }

    handlePhoneChange(e){
        this.setState({phone:e.target.value});
        console.log(this.state.phone)
    }

    handleSubmit(e){
        e.preventDefault();
       let newClient = {name:this.state.name, email:this.state.email, phone:this.state.phone}
        this.setState({users:[...this.state.users, newClient]});
    }

    
    
    render(){
       
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={this.handleNameChange}></input><br/>

                        <label>Phone:</label>
                        <input type="phone" name="phone" onChange={this.handlePhoneChange}></input><br/>

                        <label>Email:</label>
                        <input type="email" name="name" onChange={this.handleEmailChange}></input><br/>

                        <button type="submit">Submit</button>
                    </form>
                        <br/>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                        {this.state.users.map((user,index) => (<Users name={user.name} phone={user.phone} email={user.email} key={index} />)
                        )}
                    </div>
                </div>    
            </div>
        );
    }
}
export default Forms;