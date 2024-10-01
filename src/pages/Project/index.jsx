import React from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
  const { id } = useParams();
  return (
    <div>
      <h1>Project</h1>
      <p>Project ID: {id}</p>
    </div>
  );
}
