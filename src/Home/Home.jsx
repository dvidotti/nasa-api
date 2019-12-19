import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
  const [pic, handlePic] = useState('');
  const [date, handleDate ] = useState('');
  const [moveDays, handleMoveDays ] = useState(0);
  const today = new Date()
  const day = today.toString().split(' ')[2];
  const year = today.toString().split(' ')[3];
  console.log(process.env.REACT_APP_NASA_API_KEY)

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

  useEffect(() => {
    const  getPic = async () => {
      try {
        const day_pic_href = await axios.get(`https://api.nasa.gov/planetary/apod?date=${formatDate() + "&"}api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        handlePic(day_pic_href);
      }
      catch(error) { console.log(error) }
    } ;
    getPic();
  },[date])

  return (
    <div className="Home">
      { pic !== '' ? 
      <div>
      <h1>{pic.data.title}</h1>
      <p>Copyright: {pic.data.copyright}</p>
      <img src={pic.data.url}></img>
      <p>{pic.data.explanation}</p>
      </div> : null }
      <button onClick={moveDayBack}>Day Before Picture</button>
      {moveDays < 0 &&
      <button onClick={moveDayAfter}>Day After</button>
      }
    </div>
  );
}

export default withRouter(Home);
