import step_style from '../styles/step.module.scss';

const Step = () => {
	const step_items = [
		'Зареєструйся',
		'Виконай усі завдання',
		'Представ Україну у глобальному фіналі',
	];

	return (
		<div className={step_style.step}>
			{step_items.length &&
				step_items.map((item, index) => {
					return (
						<div className={step_style.step__item} key={index}>
							<div className={step_style.step__count}>{++index}</div>
							<div className={step_style.step__text}>{item}</div>
						</div>
					);
				})}
		</div>
	);
};

export default Step;
