import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <img src={event.image} alt={event.name} className="event-image" />
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventCard;
