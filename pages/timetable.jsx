import page_style from '../styles/page.module.scss';
import Tab, { TabItem, TabHead, TabBody } from '../components/tab';
import Link from 'next/link';

export default function Timetable() {
	return (
		<>
			<div className={page_style.page}>
				<div className={page_style.page__wrap}>
					<h1
						className={`${page_style.title} ${page_style['title--centered']} ${page_style['title--uppercase']}`}
					>
						РОЗКЛАД ВІДБІРНИХ ЕТАПІВ
					</h1>
					<Tab boxed centered margin>
						<TabItem active>
							<TabHead>1 етап</TabHead>
							<TabBody>
								<h2
									className={`${page_style.subtitle} ${page_style['subtitle--centered']} ${page_style['mb-5']}`}
								>
									1 етап (07.02.22-01.04.22)
								</h2>
								<div className={page_style.page__row}>
									<div className={page_style.page__col}>
										<div className={page_style.page__content}>
											<p>
												Бартендери!
												<br /> Оберіть одне з двох завдань для виконання:
												ОПОВІДАЧ або ДІАЛЕКТИКА ДРАМУ
											</p>
											<p>
												<b>ОПОВІДАЧ</b>
											</p>
											<p>
												Ми хочемо, щоб ви створили «історичний» коктейль на
												основі Talisker або Singleton, натхненний одним із 4
												відомих шотландських діячів або 4 історичними пам’ятками
												Шотландії.
											</p>
											<p>
												<Link href='https://drive.google.com/file/d/1I1MGkqaEDf7U_ItJtGZO9YUagoHniDTn/view?usp=sharing'>
													<a className={page_style.link} target='_blank'>
														Повні умови завдання за посиланням
													</a>
												</Link>
											</p>
											<p>
												<b>ДІАЛЕКТИКА ДРАМУ / DRAM DIALECTICS</b>
											</p>
											<p>
												Ми б хотіли, щоб ви придумали новий коктейль Talisker
												або Singleton, натхненний одним із ваших місцевих
												ритуалів, або ритуалом, про який ви дізналися під час
												подорожі і який запам’ятали.
											</p>
											<p>
												<Link href='https://drive.google.com/file/d/1-0fJQMObQbff4caPqGgOW8QKeS6rEpDn/view?usp=sharing'>
													<a className={page_style.link} target='_blank'>
														Повні умови завдання за посиланням
													</a>
												</Link>
											</p>
										</div>
									</div>
									<div className={page_style.page__col}>
										<div className={page_style.page__content}>
											<p>
												<b>До 07 березня</b> – РЕЄСТРАЦІЯ через бот
												<br />
												<Link href='https://t.me/WorldClassUkraine2022_bot?start=ZGw6NzY0NjY'>
													<a className={page_style.link} target='_blank'>
														https://t.me/WorldClassUkraine2022_bot?start=ZGw6NzY0NjY
													</a>
												</Link>
											</p>
											<p>
												<b>До 23:59 07 березня</b> – завантаження РЕЦЕПТУР та
												ФОТО через бот
											</p>
											<p>
												<b>З 08 березня по 27 березня</b> – ОЦІНКА рецептур
											</p>
											<p>
												<b>З 10 по 17 Березня</b> - пройти тестування на знання
												брендів через телеграм-бот
											</p>
											<p>
												<Link href='/rules1.docx'>
													<a className={page_style.link} download>
														Правила 1 етапу
													</a>
												</Link>
											</p>
										</div>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>2 етап</TabHead>
							<TabBody>
								<h2
									className={`${page_style.subtitle} ${page_style['subtitle--centered']} ${page_style['mb-5']}`}
								>
									2 етап (18.04.22-19.04.22)
								</h2>
								<div className={page_style.page__row}>
									<div className={page_style.page__content}>
										<p>Офлайн-брифінг для ТОП-10 INFORMATION TBA</p>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>3 етап, (фінал)</TabHead>
							<TabBody>
								<h2
									className={`${page_style.subtitle} ${page_style['subtitle--centered']} ${page_style['mb-5']}`}
								>
									3 етап (25.05.22-26.05.22)
								</h2>
								<div className={page_style.page__row}>
									<div className={page_style.page__content}>
										<p>ФІНАЛ INFORMATION TBA</p>
									</div>
								</div>
							</TabBody>
						</TabItem>
					</Tab>
				</div>
			</div>
		</>
	);
}
