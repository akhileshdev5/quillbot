import "./style.scss"
import React,{useState,useEffect} from 'react'

const ProgressBar = ({width,height,percent}) => {
    const [value, setValue] = useState(0);

 useEffect(() => {
    setValue(percent * width);
  });
  return (
    <>
     
      <div className="progress-div" style={{width: width,height:height}}>
           <div style={{width: `${value}px`,height:`${height}px`}} className="progress"/>
      </div>
    </>
  )
}

export default ProgressBar
