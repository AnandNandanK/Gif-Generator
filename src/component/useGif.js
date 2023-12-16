import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_KEY



const UseGif = (tag) => {
    console.log("Printing Tag in useGif ",tag);
// const url1=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    

    const [loading,setLoading]=useState(false);
    const [gif,setGif]=useState('');

    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    console.log("Printing URL",url);

  
      async function fetchData(){
        setLoading(true);
        const {data}= await axios.get(tag?(`${url}&tag=${tag}`):(url));
        const pathData=data.data.images.downsized_medium.url; 
        setGif(pathData);
        setLoading(false);
      }
  
      useEffect(()=>{
      fetchData();
      },[])

    return {loading,gif,fetchData};
}

export default UseGif;
