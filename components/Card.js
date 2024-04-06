import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const Card = ({ word, origin, meaning, user_name, user_social_link, sentence_usage }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.card}
         onClick={handleClick}>
      <h3>{word} - {origin}</h3>
      <p>{meaning}</p>
      <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejA5MXV0eXpsc3g5MjZhcmY4ZWJibmlwbXd4b3M2dWg4ZTNrY2V4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eekpWrGjGZAxSXIasH/giphy.gif' />
      <p> {user_name} - {user_social_link}</p>
      <p>{sentence_usage}</p>
    </div>
  );
};

export default Card;