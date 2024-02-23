import React from 'react';
import styles from './index.module.scss';

const DynamicToggle = ({ switchStates, handleToggle, page }) => {
  return (
    <div className={styles.dynamicToggle}>
      {switchStates.map((item) => {
        return (
          <button
            key={item}
            className={item === page ? styles.selected:''}
            onClick={() => {
              handleToggle(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default DynamicToggle;
