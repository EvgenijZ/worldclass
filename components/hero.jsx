import hero_style from '../styles/hero.module.scss';
import button_style from '../styles/button.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../components/modal';
import React, { useState } from 'react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={hero_style.hero}>
      <div className={hero_style.hero__content}>
        <h1 className={hero_style.hero__title}>
          Diageo Reserve
          <br />
          World Class
        </h1>
        <Link href='/'>
          <a
            className={hero_style.hero__link}
            onClick={() => setShowModal(true)}
          >
            Смотреть видео анонс
          </a>
        </Link>
        <Modal onClose={() => setShowModal(false)} show={showModal} />
        <div className={hero_style.hero__action}>
          <Link href='/'>
            <a
              className={`${button_style.button} ${button_style.button__orange} ${button_style.button__big} ${button_style['button__orange-outline']}`}
            >
              Регистрируйся
            </a>
          </Link>
        </div>
        <div className={hero_style.hero__arrow}>
          <Image
            src='/static/images/arrow-bottom.svg'
            alt='Arrow bottom'
            width='38'
            height='18'
          />
        </div>
      </div>

      <iframe
        src='https://www.youtube.com/embed/A_SjnjcfVeI?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;playlist=A_SjnjcfVeI&amp;mute=1'
        frameBorder='0'
        allow='autoplay'
        className={hero_style.hero__video}
      ></iframe>
    </section>
  );
};

export default Hero;
