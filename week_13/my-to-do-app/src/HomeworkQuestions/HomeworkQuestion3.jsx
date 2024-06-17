import React, { useState } from 'react';

const HomeworkQuestion3 = () => {
  const [items, setItems] = useState(["apple", "orange"]);

  const addItem = () => {
    items.push("banana"); // Direct mutation
    setItems(items);
  }

  return (
    <div>
      {items.map((item, index) => <p key={index}>{item}</p>)}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default HomeworkQuestion3