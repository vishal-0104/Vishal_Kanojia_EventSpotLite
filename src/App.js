import React, { useState } from 'react';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import SearchBar from './components/SearchBar';
import eventsData from './data/eventsData';
import './App.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>EventSpot Lite</h1>
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      <div className="grid-container">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
        ))}
      </div>

      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
}

export default App;
