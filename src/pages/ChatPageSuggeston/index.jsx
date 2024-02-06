import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import arrow from "../ChatPage/imagemChatPage/arrow.left.png";
import bubbleMiddleBottomfill from "../ChatPage/imagemChatPage/bubble.middle.bottom.fill.png";
import micFillBadgePlus from "../ChatPage/imagemChatPage/mic.fill.badge.plus.png";
import personCropCircle from "../ChatPage/imagemChatPage/person.crop.circle.png";
import waveFormAndMagnifyingglass from "../ChatPage/imagemChatPage/waveform.and.magnifyingglass.png";
import waveFormAndMic from "../ChatPage/imagemChatPage/waveform.and.mic.png";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage("");
    }
  };

  // const handlePageSuggeston = () => {
  //   navigate("/ChatSuggeston");
  // };

  const handleChatSintesis = () => {
    navigate("/ChatSintesis");
  };

  const handleChatPage = () => {
    navigate("/ChatPage");
  };

  return (
    <div id="total">
      <div id="chatPage">
        <div id="header">
          <div className="voltar">
            <img className="iconVoltar" src={arrow} alt="voltar" />
            <button className="btnVoltar">Voltar</button>
          </div>
          <div className="nome">
            <h2>nome da lenda</h2>
            <img className="iconName" src={personCropCircle} alt="" />
          </div>
        </div>
        <div className="meio">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className="message-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>enviar</button>
        </div>

        <div className="botoes">
          <button className="btn1">
            {" "}
            <img src={waveFormAndMic} alt="" />
          </button>
          <button className="btn2" onClick={handleChatPage}>
            {" "}
            <img src={bubbleMiddleBottomfill} alt="" />
          </button>
          <button className="btn3 " onClick={handleChatSintesis}>
            {" "}
            <img src={waveFormAndMagnifyingglass} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
