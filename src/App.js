import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState([]);
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
        placeholder="Add a new tchnology"
      />
      <button type="button" onClick={handleAdd}>
        Add new tech
      </button>
    </>
  );
}
export default App;
