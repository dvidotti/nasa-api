import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [pic, handlePic] = useState('');
  const [date, handleDate ] = useState('');
  const [moveDays, handleMoveDays ] = useState(0);
  const today = new Date()
  const day = today.toString().split(' ')[2];
  const year = today.toString().split(' ')[3];
  console.log(pic)

  const formatDate = () => {
    const monthText = today.toString().split(' ')[1];
    const monthTextArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthNumber = monthTextArr.indexOf(monthText) + 1 ;
    const newDay = parseInt(day) + moveDays;
    return year + '-' + monthNumber  + "-" + newDay;
  }

  const moveDayBack = () => {
    handleMoveDays(moveDays - 1)
    handleDate(formatDate())
  }

  const moveDayAfter = () => {
    handleMoveDays(moveDays + 1)
    handleDate(formatDate())
  }


  // useEffect(() => {
  //   if (pic === '') {
  //     moveDayBack();
  //   }
  // })

  useEffect(() => {
    const  getPic = async () => {
      try {
        const day_pic_href = await axios.get(`https://api.nasa.gov/planetary/apod?date=${formatDate() + "&"}api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        handlePic(day_pic_href);
      }
      catch(error) { 
        console.log(error);
        //setDayBeforeMessage();
        moveDayBack() ;
      }
    } ;
    getPic();
  },[date])

  return (
    <section className="container-home">

      { pic !== '' ? 
      <div className="container-home-info">

        <div className="picture-top-legend float-right">
          <h1 id="picture-title-right-position">{pic.data.title}</h1>
          <div class="legend-right-block">
            <button id="move-back" onClick={moveDayBack}>{"<"}</button>
            {moveDays < 0 &&
            <button id="move-foward" onClick={moveDayAfter}>{">"}</button>
            }
            <h1 id="date-info">{pic.data.date}</h1>
          </div>
        </div>
        
        <div className="big-picture-box float-right">
          <img src={pic.data.url}></img>
        </div>

      
        <div className="block-absolute-position">
          <div className="inner-block-absolute-position" >
            <div className="block-info">
              <p className="text-inside-block">{pic.data.explanation}</p>
              <p>Copyright: {pic.data.copyright}</p>
            </div>
          </div>
        </div> 
      </div> : null }
     
    </section>
  );
}

export default withRouter(Home);
