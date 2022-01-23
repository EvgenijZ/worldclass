import page_style from '../styles/page.module.scss';
import Tab, { TabItem, TabHead, TabBody } from '../components/tab';

export default function Timetable() {
  return (
    <>
      <div className={page_style.page}>
        <div className={page_style.page__wrap}>
          <h1
            className={`${page_style.title} ${page_style['title--centered']} ${page_style['title--uppercase']}`}
          >
            Расписание отборочных этапов
          </h1>
          <Tab boxed centered margin>
            <TabItem active>
              <TabHead>1 этап</TabHead>
              <TabBody>
                <h2
                  className={`${page_style.subtitle} ${page_style['subtitle--centered']} ${page_style['mb-5']}`}
                >
                  ПЕРВЫЙ ЭТАП. "BULLEIT: Finishing Moves" [21.01.2019 –
                  18.03.2019]
                </h2>
                <div className={page_style.page__row}>
                  <div className={page_style.page__col}>
                    <div className={page_style.page__content}>
                      <p>
                        Задача первого этапа FINISHING MOVES - выразить с
                        помощью авторского коктейля философию бренда
                        американского виски Bulleit и его связь с деятельностью
                        человека: искусством, музыкой, ремеслом и т.д. Подумайте
                        о восприятии этого напитка, что именно привлекает вас,
                        какие ассоциации возникают, когда о нём заходит речь?
                      </p>
                      <p>
                        Ведь Bulleit, это не только виски. Что нравится вам? Что
                        больше всего привлекает и задевает внутри? Что делает
                        особенным вас или ваше заведение и что связывает с
                        брендом Bulleit? Выразите это в подаче, аромате или во
                        вкусе. Не стоит себя ограничивать, ведь Bulleit, это не
                        о границах дозволенного, а о том, как их расширить или
                        перешагнуть.
                      </p>
                      <p>
                        Задача FINISHING MOVES создать коктейль, а при помощи
                        финальных штрихов, о которых мы рассказываем в брифинге
                        этапа, довести его до совершенства!
                      </p>
                    </div>
                  </div>
                  <div className={page_style.page__col}>
                    <div className={page_style.page__content}>
                      <p>
                        <b>22 января</b> - БРИФИНГ первого этапа (Киев).
                        Мастер-класс от международного спикера WORLD CLASS.
                      </p>
                      <p>
                        <b>С 22 января по 18 февраля</b> – РЕГИСТРАЦИЯ на сайте
                        www.worldclass.in.ua.
                      </p>
                      <p>
                        Встречи с победителем World Class 2018 в 5 городах
                        Украины.
                      </p>
                      <p>
                        <b>До 23:59 18 февраля</b> – загрузка РЕЦЕПТУР.
                      </p>
                      <p>
                        <b>С 18 февраля по 16 марта</b> – проверка наличия в
                        баре конкурсного КОКТЕЙЛЯ, а также ОБЯЗАТЕЛЬНЫХ позиций
                        резервного портфеля DIAGEO. ЦЕНКА рецептур.
                      </p>
                      <p>
                        <b>18 марта</b> - подведение ИТОГОВ 1 этапа.
                      </p>
                      <p>
                        <a className={page_style.link} href='#'>
                          Детальные правила 1 этапа
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </TabBody>
            </TabItem>
            <TabItem>
              <TabHead>2 этап</TabHead>
              <TabBody>ЭТАП КОНТЕНТА2!!!</TabBody>
            </TabItem>
            <TabItem>
              <TabHead>3 этап, ФИНАЛ</TabHead>
              <TabBody>ЭТАП КОНТЕНТА3!!!</TabBody>
            </TabItem>
          </Tab>
        </div>
      </div>
    </>
  );
}
