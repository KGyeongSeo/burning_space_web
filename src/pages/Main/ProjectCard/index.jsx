import PropTypes from 'prop-types';
import React from 'react';

import styles from './index.module.css';

export default function ProjectCard({ FrontTitle, BackTitle, subheading, Tayo, contents }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardFront}>
        <h2>{FrontTitle}</h2>
        <h3>{subheading}</h3>
        <img src={Tayo} />
      </div>
      <div className={styles.cardBack}>
        <div className={styles.cardBackWrap}>
          <h2 className={styles.titleC}>{BackTitle}</h2>
          <h3>{subheading}</h3>
          <p className={styles.contents}>{contents}</p>
          <div className={styles.button1}>
            <button>
              <a href=''>더보기&gt;</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  FrontTitle: PropTypes.string.isRequired,
  BackTitle: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  Tayo: PropTypes.string.isRequired,
};
