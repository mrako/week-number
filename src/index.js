import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { getWeekNumber, formatDate } from './weeknumber';

const App = () => {
  const [date, setDate] = useState();
  const [format, setFormat] = useState('ISO');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const dateParam = Date.parse(searchParams.get('date'));
    const formatParam = searchParams.get('format') || 'ISO';

    setDate(isNaN(dateParam) ? new Date() : new Date(dateParam));
    setFormat(formatParam);
  }, []);

  const handleFormatChange = (e) => {
    const newFormat = e.target.value;
    setFormat(newFormat);
    
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('format', newFormat);
    
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  if (date) {
    return (
      <div>
        <h1>{ getWeekNumber ? getWeekNumber(date) : '-' }</h1>
        <p>{ formatDate(date, format) }</p>
        <div>
          <select value={format} onChange={handleFormatChange}>
            <option value="ISO">ISO (YYYY-MM-DD)</option>
            <option value="US">US (MM/DD/YYYY)</option>
            <option value="EU">EU (DD/MM/YYYY)</option>
          </select>
        </div>
      </div>
    );
  }

  return null;
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
