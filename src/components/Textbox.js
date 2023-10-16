import React, { Component } from 'react';
class MessageTextBoxContainer extends Component{
    render(){
      return(
        <div className="message_input_wrapper">
          <input id="msg_input" 
                 className="message_input" 
                 placeholder="Type your messages here..."/> 
        </div>
      );
    }
  }
  export default Textbox;