import Random from './component/Random';
import Tag from './component/Tag';



function App() {
  return (
    <div className="App5 h-[100vh] w-[100vw] bg-slate-700 flex flex-col bgi">
      
      <div className='w-full rounded-sm '> 
        <h1 className='mx-auto mt-3 bg-white w-[90%] text-center rounded-sm p-2  font-extrabold text-3xl '>RANDOM GIF GENERATOR</h1>    
      </div>

      <div className='flex flex-col justify-center items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
