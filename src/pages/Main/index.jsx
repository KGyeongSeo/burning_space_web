import React from 'react';
import { useEffect } from 'react';

import PROJECT from '/src/resources/project.json';

import Carrosel from './Carrosel';
import styles from './index.module.css';
import ProjectCard from './ProjectCard';

const handleScroll = (e) => {
  if (scrollY < innerHeight - 50 && e.deltaY > 0) {
    scrollTo({
      top: innerHeight,
      behavior: 'smooth',
    });
  }
};

export default function Main() {
  useEffect(() => {
    addEventListener('wheel', handleScroll);
    return () => {
      removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <img src='/src/images/logo.png' alt='logo' />
        <h1>Burning Space</h1>
      </header>
      <Carrosel />
      {PROJECT.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
