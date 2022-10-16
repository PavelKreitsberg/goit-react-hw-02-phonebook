import React from 'react';

export const Filter = ({ list, query }) => {
  return (
    <ul className="contactList">
      {list
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter(contact =>
          contact.name.toUpperCase().includes(query.toUpperCase())
        )
        .map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button>delete</button>
          </li>
        ))}
    </ul>
  );
};
