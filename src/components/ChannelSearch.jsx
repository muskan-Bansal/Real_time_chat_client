import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';


const ChannelSearch = () => { 
  
    const { client, setActiveChannel } = useChatContext();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [teamChannels, setTeamChannels] = useState([])
    const [directChannels, setDirectChannels] = useState([]);


    const getChannels=async (text)=>{
    try{

    }catch(err){
      setQuery('')}

    }

     const onSearch=(e)=>{
   e.preventDefaullt();
   setLoading(true);
   setQuery(e.target.value)
   getChannels(e.target.value)
 }


  return (
    <div className="channel-search-container">
      <div className="channel-search__input__wrapper">
        <div className="hannel-serach__input__icon">
          <SearchIcon/>
        </div>
          <input 
            className="channel-search__input__text" 
            placeholder="Search" 
            type="text" 
            value={query}  
            onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
