import page_style from '../styles/page.module.scss';
import judge_style from '../styles/judge.module.scss';
import Image from 'next/image';

export default function Judges() {
	return (
		<div className={page_style.page}>
			<div className={page_style.page__wrap}>
				<h1
					className={`${page_style.title} ${page_style['title--centered']} ${page_style['title--uppercase']}`}
				>
					Судді
				</h1>

				<section className={judge_style.judges}>
					<div className={judge_style.judges__item}>
						<div className={judge_style.judges__image}>
							<Image
								src='/static/images/judges/z2-min.jpg'
								alt='Judge person 1'
								width='400'
								height='400'
							/>
						</div>
						<div className={judge_style.judges__text}>
							<h2 className={judge_style.judges__name}>Дмитро Коломієць</h2>
							<p className={judge_style.judges__description}>
								Бренд-Амбасадор Diageo reserve в Україні
							</p>
						</div>
					</div>
					<div className={judge_style.judges__item}>
						<div className={judge_style.judges__image}>
							<Image
								src='/static/images/judges/z1-min.jpg'
								alt='Judge person 2'
								width='400'
								height='400'
							/>
						</div>
						<div className={judge_style.judges__text}>
							<h2 className={judge_style.judges__name}>Дмитро Шовкопляс</h2>
							<p className={judge_style.judges__description}>
								Колишній Бренд-Амбасадор Diageo reserve в Україні
							</p>
						</div>
					</div>
					<div className={judge_style.judges__item}>
						<div className={judge_style.judges__image}>
							<Image
								src='/static/images/judges/z5-min.jpg'
								alt='Judge person 3'
								width='400'
								height='400'
							/>
						</div>
						<div className={judge_style.judges__text}>
							<h2 className={judge_style.judges__name}>Надір Кучкаров</h2>
							<p className={judge_style.judges__description}>
								Фіналіст WORLD CLASS 2017
							</p>
						</div>
					</div>
					<div className={judge_style.judges__item}>
						<div className={judge_style.judges__image}>
							<Image
								src='/static/images/judges/z6-min.jpg'
								alt='Judge person 4'
								width='400'
								height='400'
							/>
						</div>
						<div className={judge_style.judges__text}>
							<h2 className={judge_style.judges__name}>Назар Макаров</h2>
							<p className={judge_style.judges__description}>
								Фіналіст WORLD CLASS 2018
							</p>
						</div>
					</div>
					<div className={judge_style.judges__item}>
						<div className={judge_style.judges__image}>
							<Image
								src='/static/images/judges/z4-min.jpg'
								alt='Judge person 4'
								width='400'
								height='400'
							/>
						</div>
						<div className={judge_style.judges__text}>
							<h2 className={judge_style.judges__name}>Анастасія Гота</h2>
							<p className={judge_style.judges__description}>
								Фіналістка WORLD CLASS 2019
							</p>
						</div>
					</div>
					<div className={judge_style.judges__item}>
						<div className={judge_style.judges__image}>
							<Image
								src='/static/images/judges/z3-min.jpg'
								alt='Judge person 4'
								width='400'
								height='400'
							/>
						</div>
						<div className={judge_style.judges__text}>
							<h2 className={judge_style.judges__name}>Андрій Осипчук</h2>
							<p className={judge_style.judges__description}>
								Фіналіст WORLD CLASS 2021
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
