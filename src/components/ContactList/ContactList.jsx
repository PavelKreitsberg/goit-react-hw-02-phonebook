import React from 'react';

export const ContactList = ({ list }) => {
  return (
    <ul className="contactList">
      {list
        .sort((a, b) => a.name.localeCompare(b.name))
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
