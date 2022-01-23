import order_style from '../styles/order.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import button_style from '../styles/button.module.scss';
import Step from '../components/step';

const Order = () => {
  return (
    <section className={order_style.order}>
      <div className={order_style.order__wrap}>
        <div className={order_style.order__content}>
          <div className={order_style.order__text}>
            <h2 className={order_style.order__title}>
              Стань лучшим с Diageo Reseve World Class!
            </h2>
            <p className={order_style.order__description}>
              Стартует поиск лучшего бармена Украины – не упустите свой шанс
              представлять страну на мировом финале конкурса WORLD CLASS в
              Глазго в сентябре 2019 года. Уже одиннадцатый год подряд, конкурс
              барменов WORLD CLASS от DIAGEO RESERVE - самое масштабное и
              престижное соревнование в мире барного искусства. WORLD CLASS это
              глобальное событие, в нем более 50 претендентов со всего мира
              соревнуются за звание лучшего бармена планеты демонстрируя свое
              мастерство и креативность.
            </p>
          </div>
          <Step />
        </div>
        <div className={order_style.order__action}>
          <Link href='/'>
            <a
              className={`${button_style.button} ${button_style.button__orange} ${button_style.button__big} ${button_style['button__orange-outline']}`}
            >
              Зарегистрируйся
            </a>
          </Link>
        </div>
      </div>
      <Image
        src='/static/images/order-bg.jpeg'
        alt='Worldclass logotype'
        layout='fill'
        className={order_style.order__bg}
      />
    </section>
  );
};

export default Order;
