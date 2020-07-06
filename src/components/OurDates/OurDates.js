import React, { useState } from "react";
import "./OurDates.css";

import datesData from "./OurDates.json";

function OurDates() {
  const [yearSelected, setYearSelected] = useState("");
  function handleYearSelected(year) {
    if (yearSelected === year) {
      setYearSelected("");
    } else {
      setYearSelected(year);
    }
  }

  const yearsArray = Object.keys(datesData[0]);
  const eventsArray = Object.values(datesData[0]).sort((a,b) => b - a) // sorted descending, as we do it also with years (otherwise it wont fit correctly)
  return (
    <div className="OurDates">
        <h2>Toutes nos dates</h2>
      {yearsArray
        .sort((a, b) => b - a) // sort years descending
        .map((year, index) => {
          return (
            <>
              <h2 className="year"
              onClick={() => handleYearSelected(year)}>{year}</h2>
              {yearSelected === year ? 
              <div className="yearEvents">
                  {eventsArray[index].map(event => {
                      return (
                          <>
                      <p><span className="eventDate">Le {event.day} {event.month} :</span> {event.place} {event.other && '-' + event.other} à {event.city}({event.department})<br/>
                      {event.otherGroups !== "" && `avec ${ typeof event.otherGroups === "object" ? 
                        event.otherGroups.map((group,index) => index !== 0 ?` ${group}` : group)
                        :
                        event.otherGroups
                    }`}</p>
                      </>
                      )
                  })}
              </div>
              : null}
            </>
          );
        })}
    </div>
  );
}

export default OurDates;
