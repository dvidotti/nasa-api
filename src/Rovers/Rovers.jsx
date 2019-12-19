import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Rovers = () => {

  // CONSTANTS
  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const curiosityYears = ["","2012","2013", "2014", "2015", "2016", "2017", "2018", "2019"];

  const oportunityYears = ["", "2005","2006", "2007", "2008", "2009", "2010", "2011","2012", "2013", "2014", "2015", "2016", "2017", "2018"];

  const spiritYears = ["","2004", "2005", "2006", "2007", "2008", "2009", "2010"];
  



  // HOOKS
  const [data] = useState({curiosity:"curiosity",opportunity:"opportunity",spirit:"spirit"});
  const [ pics, handlePics ] = useState(false);
  const [ rover, handleRover ] = useState('curiosity');
  const [ year, handleYear ] = useState('');
  const [ month, handleMonth ] = useState('');
  const [ monthsArray, handleMonthArray ] = useState(months);
  const [ monthText, handleMonthText] = useState('');
  

  
  
  

  const giveRoverYearsList = () => {
    switch (rover) {
      case 'curiosity':
        return curiosityYears;
      case 'opportunity':
        return oportunityYears;
      case 'spirit':
        return spiritYears;
      default:
        return curiosityYears
    }
  }



  const monthsFromTextToNumbers = (monthText) => {
    switch (monthText) {
      case 'January':
        handleMonthText('1');
        break;
      case 'February':
        handleMonthText('2');
        break;
      case 'March':
        handleMonthText('3');
        break;
      case 'April':
        handleMonthText('4');
        break;
      case 'May':
        handleMonthText('5');
        break;
      case 'June':
        handleMonthText('6');
        break;
      case 'July':
        handleMonthText('7');
        break;
      case 'August':
        handleMonthText('8');
        break;
      case 'September':
        handleMonthText('9');
        break;
      case 'October':
        handleMonthText('10');
        break;
      case 'November':
        handleMonthText('11');
        break;
      case 'December':
        handleMonthText('12');
        break;
    }
  }

  const helpHandleRover = (e) => {
    handleRover(e.target.value)
    handleYear(year)
    console.log("aqui")
  }

  
  const helpHandleMonth = (e) => {
    handleMonth(e.target.value)
  }

  
  const helpHandleYear = (e) => {
    handleYear(e.target.value);
  }

  // curiosity 2012-08-06 to 2019-09-28
  // opportunity 2004-01-25 to 2018-06-11
  // spirit 2004-01-04 to 2010-03-21

  const giveRoverMonthsList = () => {
    switch(rover) {
      case 'curiosity':
        if (year === '2012') {
          let monthArr = months.slice(8)
          monthArr.unshift('');
          return monthArr
        } else if (year === '2019') {
          let monthArr = months.slice(1, 10)
          monthArr.unshift('');
          return monthArr;
        } else return months;
      case 'opportunity':
        if (year === '2004') {
          let monthArr = months.slice(1)
          monthArr.unshift('');
          return monthArr;
        } else if (year === '2018') {
          let monthArr = months.slice(1, 7)
          monthArr.unshift('');
          return monthArr;
        } else return months;
      case 'spirit':
        if (year === '2004') {
          let monthArr = months.slice(1)
          monthArr.unshift('');
          return monthArr;
        } else if (year === '2010') {
          let monthArr = months.slice(1, 4)
          monthArr.unshift('');
          return monthArr;
        } else return months;;
    }
  }

  


  useEffect(() => {
    handleYear(giveRoverYearsList());
    handleMonthArray(giveRoverMonthsList())
  }, [rover])

  useEffect(() => {
    console.log(giveRoverMonthsList())
    
    handleMonthArray(giveRoverMonthsList()); 
  }, [year])
  

  useEffect(() => {
    console.log(monthsArray)
    monthsFromTextToNumbers(month); 
  }, [month, monthsArray])

  const getRoverPic = async (rover) => {
    try {
      const picsRover = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${year}-${monthText}-3&api_key=${process.env.REACT_APP_NASA_API_KEY}`);
      console.log(picsRover)
      handlePics(picsRover)
    }
    catch(error) { console.log(error) }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (year === "") {
      console.log("Please select a year")
    // } else if (month === "") {
    //   console.log("Please select a month")
    // } 
    } else getRoverPic(rover)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>

        <div className="rover-selector">
          <label htmlFor={ data.curiosity } >Curiosity</label>
          <input type="radio" name="rovers" id={data.curiosity} value={ data.curiosity } onChange={ helpHandleRover} checked={ data.curiosity === rover }/>
          <label htmlFor={ data.opportunity }>Opportunity</label>
          <input type="radio" name="rovers" id={data.opportunity} value={data.opportunity}  onChange={ helpHandleRover } checked={ data.opportunity === rover } />
          <label htmlFor={data.spirit}>Spirit</label>
          <input type="radio" name="rovers" id={data.spirit} value={data.spirit} onChange={ helpHandleRover } checked={ data.spirit === rover } />
        </div>

        <div>
          <select type="text" id="select-year" value={year} onChange={helpHandleYear}>
            {giveRoverYearsList().map((year,idx) => {
              if (idx === 0) {
                return <option selected="selected" key={idx} value={year}>{year}</option> 
                } else return <option key={idx} value={year}>{year}</option>  
            })}
          </select>
        </div>
        
        <div>
          <select type='text' id="select-month" onChange={helpHandleMonth}>
            {monthsArray.map((month, idx) => {
              console.log(month)
              if (idx === 0) {
                return <option  key={idx} value={month}>{month}</option> 
                } else return <option key={idx} value={month}>{month}</option>  
            })}

          </select>
        </div>
          <button type="submit">GET PICS</button>
      </form>
      <div>
        {pics && 
          pics.data.photos.map((pic,idx) => {
            return (
                <img src={pic.img_src} key={idx}/>
              
            )
          })
        } 
      </div>
    </div>
  );
};

export default Rovers;