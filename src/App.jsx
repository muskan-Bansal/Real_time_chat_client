import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer ,Auth} from './components';
import './App.css';

const apiKey = '673ett3pwtrv'; 

const client = StreamChat.getInstance(apiKey);


//  console.log(85)
//  console.log(client)

const authToken=false;

const App = () => { 
if(!authToken)return <Auth/>

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer /> 
      </Chat> 
    </div>
  );
};

export default App;
