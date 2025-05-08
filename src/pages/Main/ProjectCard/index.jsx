import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.css';

export default function ProjectCard({ title, subheading, img, content }) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.cardFront}>
        <h2>{title}</h2>
        <h3>{subheading}</h3>
        <img src={img} />
      </div>
      <div className={styles.cardBack}>
        <div className={styles.cardBackWrap}>
          <h2 className={styles.titleC}>{title}</h2>
          <h3>{subheading}</h3>
          <p className={styles.contents}>{content}</p>
          <div className={styles.button1}>
            <button
              type='button'
              onClick={() => {
                navigate(``);
              }}
            >
              더보기&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
