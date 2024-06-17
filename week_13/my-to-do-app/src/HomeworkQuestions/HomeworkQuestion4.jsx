import React, { useState } from 'react';

const HomeworkQuestion4 = () => {
  const [items, setItems] = useState(["apple", "orange"]);

  const addItem = () => {
    setItems([...items, "banana"]); // Correct way
  }

  return (
    <div>
      {items.map((item, index) => <p key={index}>{item}</p>)}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default HomeworkQuestion4