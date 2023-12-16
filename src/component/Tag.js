import React, {  useState } from 'react';
import Spinner from './Spinner';
import UseGif from './useGif';


const Tag = () => {

  const [tag,setTag]=useState('');

   const {gif,fetchData,loading}= UseGif(tag); 

    // const [loading,setLoading]=useState(false);
    // const [gif,setGif]=useState('');

    // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  
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
          fetchData(tag);
      }
      

      function changeHandler(e){
            const data=e.target.value;
            setTag(data);
      }
      


      return (
          <div className='bgi w-full mx-auto flex justify-center'>
            <div className=' flex flex-col justify-center w-1/2 max-w-[70%] items-center bg-blue-500   rounded-lg border border-black gap-y-5'>
              <h1 className='text-2xl underline uppercase font-bold text-center'>A Random {tag} Gif</h1>

             {loading?(<Spinner/>):(<img src={gif} width="450px" height="500px" alt='img'></img>)} 
              

              <input type='text' className='w-10/12 text-lg py-2 rounded-lg  mb-[4px] text-center' onChange={changeHandler}></input>
              <button className='w-10/12 bg-orange-400 text-lg py-2 rounded-lg font-bold mb-3'
               onClick={clickHandler}>Generate</button>
          </div>

          </div>
            
        
      );
}

export default Tag;
