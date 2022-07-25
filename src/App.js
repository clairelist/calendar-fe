import { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

function App() {

  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Calendar onChange={setDate} value={date} />
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
