import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [props, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{props.length} birthdays today</h3>
        <List props={props} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}
export default App;
