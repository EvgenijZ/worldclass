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
							СТАНЬ КРАЩИМ З DIAGEO RESERVE WORLD CLASS!
						</h2>
						<p className={order_style.order__description}>
							Стартує пошук кращого бармена України – не проґав свій шанс
							представляти країну на світовому фіналі конкурсу WORLD CLASS у
							вересні 2022 року. Вже чотирнадцятий рік поспіль, конкурс барменів
							World Class від Diageo Reserve — найбільш масштабне і престижне
							змагання в світі барного мистецтва. World Class це глобальна
							подія, на якій більше 50 претендентів з усього світу змагаються за
							звання кращого бармена планети демонструючи свою майстерність і
							креативність.
						</p>
					</div>
					<Step />
				</div>
				<div className={order_style.order__action}>
					<Link href='https://t.me/WorldClassUkraine2022_bot?start=ZGw6NzY0NjY'>
						<a
							className={`${button_style.button} ${button_style.button__orange} ${button_style.button__big} ${button_style['button__orange-outline']}`}
							target='_blank'
						>
							Зареєструйся
						</a>
					</Link>
				</div>
			</div>
			<Image
				src='/static/images/order-bg-min.jpeg'
				alt='Worldclass logotype'
				layout='fill'
				className={order_style.order__bg}
			/>
		</section>
	);
};

export default Order;
