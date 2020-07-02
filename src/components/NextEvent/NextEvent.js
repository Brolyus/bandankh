import React, { useState } from "react";
import Countdown from "./Countdown/Countdown";
import NextEventMap from "./NextEventMap/NextEventMap";
import './NextEvent.css'

const NextEvent = () => {
  const [eventDate, setEventDate] = useState(`2020-08-17T21:15:00`)

  const changeDateFormat = (eventDateInput) => {
    eventDateInput = eventDateInput.split('T')
    let dateInput = eventDateInput[0]
    let timeInput = eventDateInput[1]

    // timeInput[0] is hours / timeInput[1] is minutes / timeInput[2] is seconds
    timeInput = timeInput.split(':')
    dateInput = dateInput.split('-')
    const contentToReturn = `${dateInput[2]}/${dateInput[1]}/${dateInput[0]} à ${timeInput[0]}H${timeInput[1]}`

    return contentToReturn
  }
  changeDateFormat(eventDate)
  return (
    <div className="nextEvent">
      <h2>
        Prochain concert dans: <Countdown date={eventDate} />
      </h2>
      <h3>Rendez-vous au Dropkick le {changeDateFormat(eventDate)}</h3>
      <div className="eventPlace">
        <img src="/images/dropkick.png" alt="logo du bar" className="eventPlaceImg"/>
        <NextEventMap />
      </div>
    </div>
  );
};

export default NextEvent;
