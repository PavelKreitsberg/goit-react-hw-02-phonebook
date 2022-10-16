import React from 'react';

export const Filter = ({ list, query, onClick }) => {
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
            <button id={id} onClick={onClick}>
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};
