import { useContext, useEffect } from "react";
import { GlobalContext } from "../../global";

export function findDuration(date) {
  const now = Date.now();
  const minseconds = 1000 * 60;
  const then = +new Date(date);
  const diff = now - then;
  const min = diff / minseconds;
  if (min > 60) {
    return `${Math.floor(min / 60)} hrs ${Math.floor(min % 60)} mins ago`;
  }
  if (min <= 5) {
    return `few min ago`;
  }
  return `${Math.floor(min)} min ago`;
}

function Time() {
  const {data,setSelectedTime} = useContext(GlobalContext);
  useEffect(() => {}, [data]);

  return (
    <div id="time-container">
      <ul
        className="list-item"
        onClick={(e) => {
          setSelectedTime(e.target.dataset.time);
        }}
      >
        {data.map((d, index) => {
          return (
            <li key={index} data-time={d.as_of}>
              {findDuration(d.as_of)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Time;
