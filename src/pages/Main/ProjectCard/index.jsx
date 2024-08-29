import PropTypes from 'prop-types';
import React from 'react';

import styles from './style.module.css';

export default function ProjectCard({ title, description }) {
  return (
    <div className={styles.all}>
      <h2 className={styles.title}>{title}</h2>
      <div>{description}</div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
