import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ query, list, onClick }) => {
  return (
    <ul className="contactList">
      {query
        ? list
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(contact =>
              contact.name.toUpperCase().includes(query.toUpperCase())
            )
            .map(({ id, name, number }) => (
              <li key={id} className={css.item}>
                <p className={css.item__text}>
                  {name}: {number}
                </p>
                <button id={id} onClick={onClick}>
                  delete
                </button>
              </li>
            ))
        : list
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => (
              <li key={id} className={css.item}>
                <p className={css.item__text}>
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

ContactList.propTypes = {
  query: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
