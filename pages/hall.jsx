import page_style from '../styles/page.module.scss';
import hall_style from '../styles/hall.module.scss';
import Tab, { TabItem, TabHead, TabBody } from '../components/tab';
import Image from 'next/image';

export default function Hall() {
	return (
		<div className={page_style.page}>
			<div className={page_style.page__wrap}>
				<h1
					className={`${page_style.title} ${page_style['title--centered']} ${page_style['title--uppercase']}`}
				>
					Зал славы
				</h1>
				<Tab centered margin>
					<TabItem active>
						<TabHead>2018</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person1-min.jpg'
											alt='Hall person 1'
											width='550'
											height='366'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											ORLANDO MARZO, AUSTRALIA
										</h2>
										<p className={hall_style.hall__description}>
											Орландо начал свою карьеру бармена в Италии. После школы
											он переехал в Лондон, чтобы отточить свое мастерство в
											коктейльной столице мира. Его талант за барной стойкой
											вскоре привлек внимание Rushmore Group, которая пригласила
											его работать в знаменитый бар Milk & Honey и в их закрытом
											клубе в Сохо. Оттуда он переехал в Мельбурн и в конечном
											итоге получил должность бар-менеджера в баре Lûmé, где его
											бесстрашное творчество помогло ему попасть в глобальный
											финал конкурса World Class и выиграть кубок.
										</p>
									</div>
								</div>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person2-min.jpg'
											alt='Hall person 2'
											width='550'
											height='366'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>НАЗАР МАКАРОВ</h2>
										<p className={hall_style.hall__description}>
											Победитель украинского этапа Diageo Reserve World Class
											2018. Бармен с многолетним стажем работы в знаменитых City
											Space Bar, Moscow и Moskovsky BAR Назар Макаров сегодня
											заведует баром ресторана современной украинской кухни
											BARVY в Киеве. Назар уверяет, что он не работает барменом,
											он – бармен. Большинство своего рабочего времени он
											проводит в первой лаборатории украинского коктейля, где со
											своими коллегами создает напитки из локальных продуктов.
											«Не важно, где ты находишься и чем занимаешься,
											мыслительный процесс беспрерывен, ты все время думаешь о
											новых экспериментах в баре», – говорит Назар.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2017</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person3-min.jpg'
											alt='Hall person 3'
											width='550'
											height='366'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Kaitlyn Stewart, Canada
										</h2>
										<p className={hall_style.hall__description}>
											Страсть Кейтлин Стюарт к сфере гостеприимства появилась с
											самого детства, так как она выросла в семье профессионалов
											индустрии. Это помогло ей в 2017 году выиграть глобальный
											конкурс World Class, а также стать директором бара в Royal
											Dinette в Ванкувере, Канада. Бар работает по принципу «от
											корня до стебля», заботясь об окружающей среде на
											постоянной основе, а не только потому что это сейчас в
											тренде.
										</p>
										<p className={hall_style.hall__description}>
											Кейтлин увлечена использованием лучших ингредиентов для
											создания лучших рецептов. Она черпает вдохновение повсюду,
											включая музыку, своих клиентов и своих кошек, так как
											авторский коктейль «Tom Cat Collins, помог ей победить
											чемпионат.
										</p>
									</div>
								</div>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person4-min.jpg'
											alt='Hall person 4'
											width='550'
											height='366'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>НАДИР КУЧКАРОВ</h2>
										<p className={hall_style.hall__description}>
											Надир – первый победитель украинского конкурса World
											Class, он занял почетное 19 место в глобальном финале 2017
											года в Мексике.
										</p>
										<p className={hall_style.hall__description}>
											{`В индустрии HoReCa Надир с 2002 года, бар-менеджер True
											burger bar и Hendrick's bar – лучшего бара по версии
											Национальной ресторанной Премии СОЛЬ 2017. TOP 3 – «Лучший
											барменеджер» и «Лучший бар без вывески» по версии
											международной премии Barproof.`}
										</p>
										<p className={hall_style.hall__description}>
											<b>Комментарий о World Class:</b> Это будет самый
											незабываемый опыт в вашей карьере! Нет ничего не
											возможного, надо верить в себя и свои силы. World Class
											это постоянное развитие на каждом этапе участия в нем.
											Удачи!
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2016</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person5-min.jpeg'
											alt='Hall person 1'
											width='550'
											height='343'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Jennifer Le Nechet, France
										</h2>
										<p className={hall_style.hall__description}>
											Дженнифер Ле Неш - победитель World Class 2016 года.
										</p>
										<p className={hall_style.hall__description}>
											<b>Расскажи нам немного о себе?</b>
										</p>
										<p className={hall_style.hall__description}>
											- Я занимаюсь бартендингом около 5 лет. До этого я изучала
											испанскую и американскую латинскую литературу и культуру.
											Во время учебы у меня была возможность прожить год в
											Испании, где я открыла для себя новую культуру и образ
											жизни. Вернувшись в Париж, я решила заняться гостиничным
											бизнесом. Я начала работать в классическом французском
											ресторане. Это должно было быть временной работой, но я
											чувствовала себя очень комфортно за барной стойкой. Мне
											нравилось, что каждый день был другим, я встречался с
											множеством новых и интересных людей. Я узнала, что Cafe
											Moderne в Париже искали бармена, и решила подать заявку. Я
											была в восторге, когда мне дали возможность работать там.
										</p>
										<p className={hall_style.hall__description}>
											<b>- Что сподвигло вас участвовать в World Class?</b>
										</p>
										<p className={hall_style.hall__description}>
											- Когда я присоединилась к команде Café Moderne, его
											владелец Мидо познакомил меня с целым рядом новых техник
											приготовления коктейлей. На первом интервью Мидо спросил
											хочу ли я учиться, расширить границы, участвуя в
											коктейльных соревнованиях, я ответила «да». Через
											несколько недель Мидо начал делиться со мной своим опытом.
											Мидо участвовал в World Class в 2014 году, где он занял
											третье место - так что ему было чему научить меня! Мне
											было очень любопытно на World Class, потому как я всегда
											хотела бросить себе профессиональный вызов. Я все больше
											вдохновлялась работой за барной стойкой в Cafe Moderne, и
											через 6 месяцев у меня наконец появилась возможность
											проявить себя в World Class. Мидо наставлял меня как
											выразить свое творчество и найти свой стиль. World Class
											был первым коктейльным конкурсом, в котором я участвовала.
											Опыт был потрясающим!
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2015</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person6-min.jpeg'
											alt='Hall person 6'
											width='550'
											height='263'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Michito Kaneko, Japan
										</h2>
										<p className={hall_style.hall__description}>
											Митито Канеко работал разнорабочим на стройке, и
											подрабатывал в баре своего друга, но посещение одного из
											самых известных баров навсегда изменило его жизнь.
											Коктейли были настолько хороши, что он понял, что должен
											стать частью коктейльного мира. В течение месяца он бросил
											свою работу и начал работать в баре, который вдохновил
											его. Митито вырос в семье художников-керамистов высоко в
											горах в городе Нара. Природа, искусство, эстетика, красота
											и мастерство всегда были частью его жизни. Творческий
											потенциал, связанный с приготовлением коктейлей,
											продолжает оставаться самой востребованной частью его
											работы.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2014</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person7-min.jpeg'
											alt='Hall person 7'
											width='550'
											height='412'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Charles Joly, USA
										</h2>
										<p className={hall_style.hall__description}>
											Чарльз работает директором по напиткам бара Aviary в
											Чикаго. Его коктейли простые и сезонные, сам он любит
											наслаждаться правильно сбалансированным daiquiri или
											чистым алкоголем со льдом.
										</p>
										<p className={hall_style.hall__description}>
											<b>- С чего все началось?</b>
										</p>
										<p className={hall_style.hall__description}>
											- Я в барах 17 лет и работал почти во всех стилях, которые
											вы можете себе представить. Я узнавал что-то новое в
											каждом заведении, будь то ночной клуб, бар по соседству
											или лаундж с крафтовыми коктейлями. Было много взлетов и
											падений - от стремительного открытия дверей нового
											заведения до необычного общения с гостями, побед и
											поражений в соревнованиях.
										</p>
										<p className={hall_style.hall__description}>
											<b>- Кто вдохновил тебя стать барменом?</b>
										</p>
										<p className={hall_style.hall__description}>
											- На меня оказали влияние почти все бармены, которых я
											встречал. Что касается крепких напитков и коктейлей, моим
											первым наставником была Бриджит Альберт. Она открыла мне
											глаза на множество возможностей и задала правильное
											направление моей работе.
										</p>
										<p className={hall_style.hall__description}>
											<b>- Что самое лучшее в твоей работе?</b>
										</p>
										<p className={hall_style.hall__description}>
											- Эта отрасль держит напряжении и постоянно бросает вызов.
											Если вам скучно, вы делаете это неправильно. Самая сложная
											часть, это часы и жертвы в плане личной жизни. Время с
											друзьями и семьей стоит очень дорого, и выпадает не так
											часто.
										</p>
										<p className={hall_style.hall__description}>
											<b>
												- Какой твой любимый секрет, причудливый ингредиент?
											</b>
										</p>
										<p className={hall_style.hall__description}>
											- Мне нравится использовать уксусы. Шраб - один из моих
											любимых напитков – я запросто мог бы залпом выпить банку с
											маринадом. Это возможность добавить кислую часть в
											коктейль на используя типичные цитрусовые.
										</p>
										<p className={hall_style.hall__description}>
											<b>- Где вы любите пить?</b>
										</p>
										<p className={hall_style.hall__description}>
											- La Capilla в Текила, Мексика. Владелец, Дон Хавьер,
											является воплощением гостеприимства. Если вы не можете
											хорошо провести там время, проверьте свой пульс. Callooh
											Callay, потому что это весело, персонал дружелюбный и
											напитки вкусные. Artesian за времен Алекса, он такой
											дурашливый джентельмен. Плюс в подпольном гот-клубе, в
											который я попал во время прошлого визита в Лондон. Я завел
											кучу новых знакомств и танцевал часами… красота в том, что
											никогда не увижу этих людей снова.
										</p>
										<p className={hall_style.hall__description}>
											<b>- Какова следующая большая тенденция?</b>
										</p>
										<p className={hall_style.hall__description}>
											- Барное движение из крафтового превратиться в мейнстрим.
											Локальные бары, бары «на районе», в которых можно выпить
											достойный коктейль, где используют свежие ингредиенты,
											станут более распространенным явлением.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2013</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person8-min.png'
											alt='Hall person 8'
											width='550'
											height='418'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: David Rios, Spain
										</h2>
										<p className={hall_style.hall__description}>
											Дэвид начал работать в барах с 18 лет, но одна вечеринка,
											устроенная в баре спучтя два года, все изменила. Хозяин
											заведения заказал коктейлей, и его приготовление восхитило
											Дэвида. Он стал сомелье и matre d, сначала в
											трехзвездочном мишленовском ресторане Mugaritz, а затем
											работал над открытием отеля Sheraton в Бильбао.
										</p>
										<p className={hall_style.hall__description}>
											Любовь к коктейлям не покидает Дэвида, сейчас они вместе с
											братом владеют Caf Kobuk, Jigger Bar и кейтеринговой
											компанией Kobuk Events.
										</p>
										<p className={hall_style.hall__description}>
											О себе Дэвид говорит, что он бармен-самоучка, хотя изучал
											барное дело на многих курсах. Известный своей способностью
											презентовать коктейли гостям и судьям соревнований, он
											является выдающимся барменом.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2012</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person9-min.png'
											alt='Hall person 9'
											width='550'
											height='302'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Tim Phillips, Australia
										</h2>
										<p className={hall_style.hall__description}>
											Тим Филипс начинал работать бартендером в лондонском баре
											Milk & Honey, а также управлял их клубным домом в Шамони.
											Он проходил обучение в лучших нью-йоркских коктейль-барах
											и получил награду «Бармен года» в Великобритании в 2009
											году. Позже, Тим переехал в Австралию и продолжает
											оттачивает свое коктейльное мастерство в баре Hemmesphere
											в сердце Сиднея - одном из ведущих коктейльных заведений
											Австралии.
										</p>
										<p className={hall_style.hall__description}>
											После победы в международном конкурсе World Class 2012
											года Тим Филипс сделал выдающуюся карьеру. Он занял 6-е
											место в глобальном финале прошлого года, а также был
											назван «Австралийским барменом года» журналом Bartender.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2011</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person10-min.jpeg'
											alt='Hall person 10'
											width='550'
											height='825'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Manabu Ohtake, Japan
										</h2>
										<p className={hall_style.hall__description}>
											Манабу работает барменом уже 15 лет, в настоящее время в
											баре Bellovisto на 40 этаже отеля The Cerulean Tower в
											Токио. Манабу - нетипичный японский бармен. Он
											демонстрирует точность, за которую известны японские
											бартендеры, но более расслаблен и не боится привнести свою
											личность в работу.
										</p>
										<p className={hall_style.hall__description}>
											Начав работать в ресторане, он вспоминает как был потрясен
											впервые увидев бармена, готовящего коктейль и одновременно
											удерживающего внимание гостей. На тот момент Манабу было
											всего 19 лет, и ему пришлось ждать целый год, чтоб иметь
											возможность легальную работать в баре. С тех пор он
											никогда не оглядывался назад и не жалел о своем выборе
											профессии.
										</p>
										<p className={hall_style.hall__description}>
											После победы в международном конкурсе World Class 2011
											года, он путешествовал по всему миру вдохновляя новые
											таланты, проводя обучающие семинары в некоторых из самых
											выдающихся баров мира.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2010</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person11-min.jpeg'
											alt='Hall person 11'
											width='550'
											height='366'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Erik Lorinz, UK
										</h2>
										<p className={hall_style.hall__description}>
											Эрик родился в Словакии. Его интерес к миксологии
											зародился еще в детстве, его бабушка была фантастическим
											ботаником. С 16 лет он начал делать свои собственные
											настойки и чаи, и понимание сложных взаимодействий
											химического состава трав заложило основы для великого
											миксолога.
										</p>
										<p className={hall_style.hall__description}>
											Его дорога к позиции бар менеджера бара в The American Bar
											в The Savoy началась с самых низов, из баров Праги и
											Братиславы.
										</p>
										<p className={hall_style.hall__description}>
											После победы в 2010 году Эрик получил множество престижных
											наград, в том числе «Бармен года» от Conde Nast Traveler
											US и «Лучший международный бармен» Tales of the Cocktail,
											всемирно известного отраслевого мероприятия, проводимого в
											Новом Орлеане, Луизиана.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
					<TabItem>
						<TabHead>2009</TabHead>
						<TabBody>
							<div className={hall_style.hall}>
								<div className={hall_style.hall__item}>
									<div className={hall_style.hall__image}>
										<Image
											src='/static/images/hall/person12-min.gif'
											alt='Hall person 12'
											width='550'
											height='332'
										/>
									</div>
									<div className={hall_style.hall__text}>
										<h2 className={hall_style.hall__name}>
											GLOBAL WINNER: Aristotelis Papadopoulos, Greece
										</h2>
										<p className={hall_style.hall__description}>
											Аристотелис стал бармен в 19 лет, когда присоединился к
											команде бара Mediteranee в своем родном городе Салоники,
											Греция. Двадцать пять лет спустя он управляет своим
											собственным баром с замечательным греческим приветливостью
											и фантастическими коктейлями. После победы в международном
											финале World Class в 2009 году жизнь Аристотелиса резко
											изменилась - он объездил пол мира. Стремление Аристотеля к
											совершенству, его внимание к деталям и страсть к созданию
											новых напитков и ингредиентов, делают его барменом уровня
											World Class.
										</p>
									</div>
								</div>
							</div>
						</TabBody>
					</TabItem>
				</Tab>
			</div>
		</div>
	);
}
