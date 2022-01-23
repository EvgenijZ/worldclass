import header_style from '../styles/header.module.scss';
import button_style from '../styles/button.module.scss';
import Logotype from './logotype';
import Link from 'next/link';

const Header = function() {
  return (
    <header className={header_style.header}>
      <div className={header_style.header__wrap}>
        <nav className={header_style.navigation}>
          <ul className={header_style.navigation__list}>
            <li className={header_style.navigation__item}>
              <Link href='/'>
                <a className={header_style.navigation__link}>О программе</a>
              </Link>
            </li>
            <li className={header_style.navigation__item}>
              <Link href='/timetable'>
                <a className={header_style.navigation__link}>Расписание</a>
              </Link>
            </li>
            <li className={header_style.navigation__item}>
              <Link href='/judges'>
                <a className={header_style.navigation__link}>Судьи</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Logotype width='150' height='36' />
        <nav className={header_style.navigation}>
          <ul className={header_style.navigation__list}>
            <li className={header_style.navigation__item}>
              <Link href='/brands'>
                <a className={header_style.navigation__link}>Бренды</a>
              </Link>
            </li>
            <li className={header_style.navigation__item}>
              <Link href='/'>
                <a className={header_style.navigation__link}>Зал славы</a>
              </Link>
            </li>
            <li className={header_style.navigation__item}>
              <a
                className={`${button_style.button} ${button_style.button__small} ${button_style.button__orange} ${button_style['button__orange-outline']}`}
                href='#'
              >
                Регистрация
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
