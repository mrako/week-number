import React from 'react';
import { createRoot } from 'react-dom';

import { getWeekNumber } from './weeknumber';

const App = () => (
  <h1>{ getWeekNumber() }</h1>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
