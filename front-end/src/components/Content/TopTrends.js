import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../global";
import { HashLoader } from "react-spinners";
import { Link, useParams } from "react-router-dom";

function changetoK(x) {
  if (x > 1000) {
    return Math.floor(x / 1000) + "k";
  }
  return x;
} 

function TopTrends() {
  const { data, selectedTime, selectedData, setSelectedData } = useContext(GlobalContext);

  const { country, city } = useParams();

  useEffect(() => {
    setSelectedData(undefined);
    const x = data.find((d) => d.as_of === selectedTime);
    setSelectedData(x);
  },[data, selectedTime, setSelectedData])
  
  if (selectedData) {
    return (
      <div id="Trends-container">
        <ol className="ol-list">
          {[selectedData].map((trend) =>
            trend.trends.map((t) => {
              if (t.tweet_volume > 0) {
                return (
                  <li key={t.index}>
                  <Link
                    to={`/${country}${ city === undefined ? "" : "/" + city
                    }/trend/${window.encodeURIComponent(t.name)}`}
                    key={t.index}
                  >
                    {t.name} <span>{changetoK(t.tweet_volume)}</span>
                  </Link>
                  </li>
                );
              }
              return (
                <li key={t.index}>
                <Link
                  to={`/${country}${
                    city === undefined ? "" : "/" + city
                  }/trend/${window.encodeURIComponent(t.name)}`}
                  key={t.index}
                >
                  {t.name} 
                </Link>
                </li>
                
              );
            })
          )}
        
        </ol>
      </div>
    );
  } else {
    return (
      <div className="hash-loader-mobile">
        <HashLoader color="#00a2f5" size={35} />
      </div>
    );
  }
}

export default TopTrends;
