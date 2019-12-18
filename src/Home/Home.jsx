import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { apod } from '../service/service'

const Home = () => {
  const [pic, handlePic] = useState('')
  console.log(pic)

  useEffect(() => {
    const  getPic = async () => {
      try {
        const day_pic_href = await apod;
        handlePic(day_pic_href);
      }
      catch(error) { console.log(error) }
    } ;
    getPic();
  })

  return (
    <div className="Home">
      { pic !== '' ? 
      <div>
      <h1>{pic.data.title}</h1>
      <p>Copyright: {pic.data.copyright}</p>
      <img src={pic.data.url}></img>
      <p>{pic.data.explanation}</p>
      </div> : null }
    </div>
  );
}

export default withRouter(Home);
