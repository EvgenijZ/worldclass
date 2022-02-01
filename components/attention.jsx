import attention_style from '../styles/attention.module.scss';

const Attention = () => {
	return (
		<section className={attention_style.attention}>
			<h6 className={attention_style.attention__text}>
				Надмірне споживання алкоголю шкідливе для вашого здоров&apos;я
			</h6>
		</section>
	);
};

export default Attention;
