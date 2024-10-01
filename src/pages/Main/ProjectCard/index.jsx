import PropTypes from 'prop-types';
import React from 'react';

export default function ProjectCard({ name }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
};
