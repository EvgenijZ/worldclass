import footer_style from '../styles/footer.module.scss';
import Logotype from './logotype';
import Link from 'next/link';

const Footer = function () {
	return (
		<footer className={footer_style.footer}>
			<div className={footer_style.footer__wrap}>
				<div className={footer_style.company}>
					<Logotype
						className={footer_style.company__logotype}
						width='120'
						height='28'
					/>
					<p className={footer_style.company__copyright}>
						ООО &quot;Баядера Логистик&quot;
					</p>
				</div>
				<nav className={footer_style.navigation}>
					<div className={footer_style.navigation__block}>
						<div className={footer_style.navigation__title}>Стеж за нами</div>
						<ul className={footer_style.navigation__list}>
							<li className={footer_style.navigation__item}>
								<a className={footer_style.navigation__link} href='#'>
									Facebook
								</a>
							</li>
							<li className={footer_style.navigation__item}>
								<a className={footer_style.navigation__link} href='#'>
									#WorldClassUA
								</a>
							</li>
							<li className={footer_style.navigation__item}>
								<a className={footer_style.navigation__link} href='#'>
									#Diageo
								</a>
							</li>
							<li className={footer_style.navigation__item}>
								<a className={footer_style.navigation__link} href='#'>
									Напиши нам
								</a>
							</li>
						</ul>
					</div>

					<div className={footer_style.navigation__block}>
						<div className={footer_style.navigation__title}>
							Корисні посилання
						</div>
						<ul className={footer_style.navigation__list}>
							<li className={footer_style.navigation__item}>
								<Link href='/rules.docx'>
									<a className={footer_style.navigation__link} download>
										Правила конкурсу
									</a>
								</Link>
							</li>
							<li className={footer_style.navigation__item}>
								<a className={footer_style.navigation__link} href='#'>
									Політика конфіденційності
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
