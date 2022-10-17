import React from 'react';
import { Input } from 'components/Input/Input';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ list, query, onClick }) => {
  return (
    <ul className="contactList">
      {list
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
        ))}
    </ul>
  );
};

Filter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
