import React from 'react';
import cam from "../images/cam.png";
import add from "../images/add.png";
import more from "../images/more.png";
import Messages from  "./Messages";
import Input from  "./Input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>jane</span>
        <div className="chaticons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat;
