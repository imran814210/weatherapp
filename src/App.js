import { useState } from 'react';
import './App.css';
import { FaSearch } from "react-icons/fa";
import Rain from './Asset/rain.png';
import Windspeed from './Asset/windspeed.png';
import Humidity from './Asset/humidity.png'
import Sun from './Asset/sun.png';
function App() {
  const [temperature, setTemperature]=useState();
  const [humidity,setHumidity]=useState();
  const [cityname, setCityname]=useState('');
  const [windspeed,setWindspeed]=useState('');
  let apikey='dd15e45a39980ebd3473fb88fee341bb';
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=Metric&appid=${apikey}`;
  const handleinput=async()=>{
    if(cityname==='')
    {
      setCityname('');
      setHumidity('');
      setTemperature('');
      setWindspeed('');
      return;
    }
 
      try{
        let response=await fetch(url);
      let data=await response.json();
 
    setHumidity(data.main.humidity);
    setTemperature(data.main.temp);
    setWindspeed(data.wind.speed);
      }catch{

      }
  }
  return (
  <>
    <div className='flex justify-center flex-col border-2 w-[500px] rounded-xl my-10 shadow-lg bg-slate-300'>
          <div className="flex flex-row justify-center px-3 mx-3 my-3"> 
              <input type='text' placeholder='Type City name' className='border-2 rounded-lg p-2' value={cityname} onChange={(e)=>setCityname(e.target.value.toUpperCase())} onKeyUp={handleinput}/>
              <div className='mx-2 w-10 flex justify-center items-center rounded-md'>
                <FaSearch style={{color:'blue', width:'30px',height:'30px', cursor:'pointer'}} onClick={handleinput}/> 
              </div>
          </div>
          <div className='p-10 flex flex-row justify-between'>
             <div className='flex justify-start flex-col'>
                  <div className='flex justify-between items-center my-4 gap-3 font-mono text-xl'><img src={Sun} className='rounded-full w-[100px] h-[100px]'/><span>{temperature}<sup> o</sup>C</span></div>
                  <div className='flex justify-between items-center my-4 gap-3 font-mono text-xl'><img src={Humidity} className='rounded-full w-[100px] h-[100px]'/><span>{humidity} %</span></div>
                  <div className='flex justify-between items-center my-4 gap-3 font-mono text-xl'><img src={Windspeed} className='rounded-full w-[100px] h-[100px]'/><span>{windspeed} Km/hr</span></div>
             </div>
             <div className='flex '>
                    {/* <img src={Rain} className='rounded-full'/> */}
              </div>
             
          </div>
    </div>
  </>


  );
}

export default App;
