// import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import UseGif from './useGif';



const Random = () => {

  const {gif,loading,fetchData}=UseGif();
  console.log("Printing Gif",gif);


  //   const [gif,setGif]=useState('');
  //   const [loading,setLoading]=useState(false);


  // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

  //   async function fetchData(){
  //     setLoading(true);
  //     const {data}= await axios.get(url);
  //     const pathData=data.data.images.downsized_medium.url;
  //     console.log(setGif(pathData));
  //     setLoading(false);
  //   }

  //   useEffect(()=>{
  //   fetchData();
  //   },[])


    function clickHandler(){
        fetchData();
    }

    return (
        <>
          <div className='flex flex-col justify-center w-1/2 max-w-[70%] items-center bg-green-500   rounded-lg border border-black gap-y-5'>
            <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
            {loading?(<Spinner/>):(<img src={gif} width="450px" height="500px" alt='img'></img>)} 

            <button className='w-10/12 bg-orange-400 text-lg py-2 rounded-lg font-bold mb-3'
             onClick={clickHandler}>Generate</button>
        </div>
        </>
      
    );
}

export default Random;
