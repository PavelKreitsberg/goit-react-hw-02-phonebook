import React from 'react';

export const ContactList = ({ list, onClick }) => {
  return (
    <ul className="contactList">
      {list
        .sort((a, b) => a.name.localeCompare(b.name))
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
