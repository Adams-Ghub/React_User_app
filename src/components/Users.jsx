import React from 'react';

class Users extends React.Component {
    
    render(){
        return(
            <div>
                <div style={{width:'fit-content',backgroundColor:'#eeeeee',padding:'4px',margin:'4px', textAlign:'left'}}>
                    <p>{this.props.name} </p>
                    <p>{this.props.email} </p>
                    <p>{this.props.phone} </p>
                </div>
            </div>
        )
    }
}
export default Users;