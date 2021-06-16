import React, { useState, useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../../global";
import { findDuration } from "./Time";
import { Link, useParams } from "react-router-dom";
import "./tweet.css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { Helmet } from "react-helmet";

export function changetoK(x)  {
  if(x > 1e6) {
      return Math.floor(x / 1e6) + "M";
  }
  else if (x > 1e3) {
      return Math.floor(x / 1e3) + "K";
  }
  return x;
}

export function Tweet() {
  const {data,setData}= useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  const  country =  useParams().country?.replace(/_/g,' ');
  const city  = useParams().city?.replace(/_/g,' ');

  useEffect(()=>{
    setData([])
  },[country,setData]);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft += 400;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  if(data.length){
      return (
      <>  
      <Helmet>
          <title>Twitter Trends {city === undefined ? country : city + ', ' + country} 🕊️ Top Trending Hashtags 🕊️ Todayaa </title>
          <meta name="description" content= {`Latest top twitter trends and hashtags in ${city === undefined ? country : city + ', ' + country}. 
            Currently twitter trends and hashtags today are ${data[0].trends.map((d) => d.name)}`}/>
          <meta name="title" content={`Top trends in ${country} ${city || ''}are  ${data[0].trends.map((d) => d.name)}`}/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://alldaytrends.com/"/>
          <meta property="og:title" content={`Top trends in ${country} ${city || ''}are ${data[0].trends.map((d) => d.name).toString().replace(',','')}`}/>
          <meta property="og:description"
            content= {`Latest top twitter trends and hashtags in ${city === undefined ? country : city + ', ' + country}. 
            Currently twitter trends and hashtags today are ${data[0].trends.map((d) => d.name)}`}/>
          <meta property="og:image"
            content="%PUBLIC_URL%/logo.png"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@alldaytrends1" />
          <meta property="twitter:url" content="https://alldaytrends.com/"/>
          <meta property="twitter:title" content={`Top trends in ${country} ${city || ''}are ${data[0].trends.map((d) => d.name).toString().replace(',','')}`}/>
          <meta property="twitter:description"
            content= {`Find more details about Top trending hashtags in ${country} ${city}. 
            Find more information on ${data[0].trends.map((d) => d.name).toString().replace(',','')}`}/>
          <meta property="twitter:image"
            content="%PUBLIC_URL%/logo.png"/>
      </Helmet>
        <div className="scroll-buttons">
          <FaArrowCircleLeft onClick={scrollRight} className="left-button" />
          <FaArrowCircleRight onClick={scrollLeft} className="right-button" />
        </div>
        <div className="trends-cont" ref={scrollRef}>
          {data.map((d, index) => {
            return (
                <div className="card" key={d.as_of}>
                  <h4 data-time={d.as_of}>{findDuration(d.as_of)}</h4>
                  <ol className="tweets">
                    {d.trends.map((t) => {
                      if (t.tweet_volume > 0) {
                        return (
                          <Link
                            to={`/${country}${
                              city === undefined ? "" : "/" + city
                            }/trend/${window.encodeURIComponent(t.name)}`}
                            className={`tweet-names tweet-names-${t.index} ${
                              open ? `open` : `close-${t.index}`
                            }`}
                            key={t.index}
                          >
                            {" "}
                            {t.name}{" "}
                            <span className="tweet-volume">
                              {changetoK(t.tweet_volume)} tweets
                            </span>{" "}
                          </Link>
                        );
                      }
                      return (
                        <Link
                          to={`/${country}${
                            city === undefined ? "" : "/" + city
                          }/trend/${window.encodeURIComponent(t.name)}`}
                          className={`tweet-names tweet-names-${t.index} ${
                            open ? `open` : `close-${t.index}`
                          }`}
                          key={t.index}
                        >
                          {" "}
                          {t.name}{" "}
                        </Link>
                      );
                    })}
                  </ol>
                  <div className="tweet-btn">
                    {open ? (
                      <IoMdArrowDropupCircle onClick={() => setOpen(!open)} />
                    ) : (
                      <IoMdArrowDropdownCircle onClick={() => setOpen(!open)} />
                    )}
                  </div>
                </div>
            );
          })}
        </div>
      </>
    );
  }
  return null;
}

  
