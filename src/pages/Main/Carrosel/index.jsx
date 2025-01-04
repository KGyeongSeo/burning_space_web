import { useEffect, useRef, useState } from 'react';
import React from 'react';

import PROJECT from '/src/resources/project.json';

import styles from './index.module.css';

//https://github.com/Cassianosch/programador.cs-reels/tree/master/114-carrossel-3d
const distanceZ = (widthElement, length, gap) => {
  return widthElement / 2 / Math.tan(Math.PI / length) + gap; // Distancia Z de los items
};
const gap = 20;

export default function Carrosel() {
  const carrossel_len = Object.keys(PROJECT).length;
  const tz = distanceZ(300, carrossel_len, gap);

  const timerRef = useRef();
  const [orderPrefix, setOrderPrefix] = useState(0);
  const handleNextCarrosel = () => {
    setOrderPrefix((prev) => prev + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(handleNextCarrosel, 2000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <section className={styles.conteudo_geral}>
      <div className={styles.container}>
        <div
          className={styles.container_carrossel}
          style={{ '--tz': `${tz}px`, '--gap': '20px', '--num': carrossel_len }}
        >
          <div className={styles.carrossel}>
            {PROJECT.map((project) => (
              <CarroselItem key={project.id} img={project.img} carrossel_index={orderPrefix + 1 + Number(project.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CarroselItem = ({ carrossel_index, img }) => {
  return (
    <div className={styles.carrossel_item} style={{ '--index': `${carrossel_index}` }}>
      <img src={img} />
    </div>
  );
};
