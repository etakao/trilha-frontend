import React from 'react';
import NumberFormat from 'react-number-format';

import './styles.css';

function Input({ title, id, masked, ...rest }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{title}</label>
      {masked ? (
        <NumberFormat id={id} {...rest} />
      ) : (
        <input id={id} {...rest} />
      )}
    </div>
  );
}

export default Input;