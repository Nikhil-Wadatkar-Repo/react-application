import React, { Component } from 'react'

class Userlist extends Component {
    constructor() {  
        super();        
        this.state = { 
            
            name: "true",
            users:[
                {
                    id:12,
                    nam:"ankur"
                },
                {
                    id:13,
                    nam:"nikhl"
                }
            ]
        }  
        }  
  render() {
    return (
      <div>
        userlist<br></br>

        {this.state.name}



      </div>
    )
  }
}
export default Userlist;
