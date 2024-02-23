import React from 'react';
import styles from './index.module.scss';

const Button = ({ text, icon, type, onClickFunction }) => {
  let nameOfClass =
    type === 'danger'
      ? 'button_component_red'
      : type === 'safe'
      ? 'button_component_green'
      : 'button_component';
  return (
    <button
      className={`${styles[nameOfClass]} flex-align-center`}
      onClick={onClickFunction}
    >
      {icon && <div>{icon}</div>}
      <div>{text}</div>
    </button>
  );
};

export default Button;
