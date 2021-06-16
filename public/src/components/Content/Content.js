import { useEffect, useContext,useState } from "react";
import Time from "./Time.js";
import TopTrends from "./TopTrends.js";
import { GlobalContext } from "../../global";
import { useParams } from 'react-router-dom';
import { Tweet } from "./Tweet.js";
import Header from '../Header/Header.js';
import Page404 from "../404Page/Page404.js";


export const fetchAndSetData = async (place, setData, setTime, setError) => {
  try{
    const res = await fetch(`https://trendsend.herokuapp.com/apis/trends/by-place?placeName=${place}`);
    if(res.ok){
      const jsonData = await res.json();
      if(jsonData.data){
        setData(jsonData.data );
        window.sessionStorage.setItem('data',JSON.stringify(jsonData.data))
        setTime(jsonData.data[0].as_of);
        setError(null)
      }
    } else {
      throw res;
    }
  }catch(error){
    console.log(error);
    setError(error);
  }
};

export function Content() {
  const {setCity, setCountry ,setData, setSelectedTime} = useContext(GlobalContext);

  let country = useParams().country?.replace(/_/g,' ')
  let city = useParams().city?.replace(/_/g,' ')
  const [error,setError] = useState(null);

  useEffect(() => {
    setCity(city);
    setCountry(country);
    sessionStorage.setItem("country", country);
    const query = city === undefined ? country : city;
    fetchAndSetData(query, setData, setSelectedTime,setError)
  }, [setData, setSelectedTime, setCountry, setError ,setCity, country, city]);
  if(error === null){
    return (
      <div id="content">
        <Header />
        <Time />
        <TopTrends />
        <Tweet />
      </div>
    );
  } 
  return <Page404 />
}
