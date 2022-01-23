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
          Судьи
        </h1>

        <section className={judge_style.judges}>
          <div className={judge_style.judges__item}>
            <div className={judge_style.judges__image}>
              <Image
                src='/static/images/judges/judge1.jpeg'
                alt='Judge person 1'
                width='550'
                height='366'
              />
            </div>
            <div className={judge_style.judges__text}>
              <h2 className={judge_style.judges__name}>Кевин Патнод</h2>
              <p className={judge_style.judges__description}>
                Лучший бартендер Турции в 2015 и 2017 годах, топ 10 глобального
                финала этапа World Class 2017
              </p>
            </div>
          </div>

          <div className={judge_style.judges__item}>
            <div className={judge_style.judges__image}>
              <Image
                src='/static/images/judges/judge2.jpeg'
                alt='Judge person 2'
                width='550'
                height='366'
              />
            </div>
            <div className={judge_style.judges__text}>
              <h2 className={judge_style.judges__name}>Андрей Казаков</h2>
              <p className={judge_style.judges__description}>
                Андрей занимается программой World Сlass в Эстонии четвертый
                год, постоянно вовлечен в менее крупные проекты Diageo
                регионально. Владеет двумя барами разной направленности в
                Таллинне и последние 10 лет неразрывно связан с индустрией
                гостеприимства.
              </p>
            </div>
          </div>

          <div className={judge_style.judges__item}>
            <div className={judge_style.judges__image}>
              <Image
                src='/static/images/judges/judge3.jpeg'
                alt='Judge person 3'
                width='550'
                height='550'
              />
            </div>
            <div className={judge_style.judges__text}>
              <h2 className={judge_style.judges__name}>Павел Янченко</h2>
              <p className={judge_style.judges__description}>
                Автор первого отечественного блога о коктейлях и спиртных
                напитках Science Of Drink - Наука пить, не испытывая жажды,
                который с 2007 года формирует коктейльную культуру нашей страны.
              </p>
              <p className={judge_style.judges__description}>
                В настоящее время активности Павла не ограничены только блогом,
                он читает лекции по коктейльной истории и культуре, проводит
                мастер-классы и гест-бартендинги по всей стране. Без
                преувеличения, Павел один из самых заметных популяризаторов
                коктейльной культуры в Украине. Любимый алкогольный напиток -
                Джин, коктейль - Мартини, хайбол - Джин и тоник.
              </p>
            </div>
          </div>

          <div className={judge_style.judges__item}>
            <div className={judge_style.judges__image}>
              <Image
                src='/static/images/judges/judge4.jpeg'
                alt='Judge person 4'
                width='550'
                height='550'
              />
            </div>
            <div className={judge_style.judges__text}>
              <h2 className={judge_style.judges__name}>Александр Пушкарев</h2>
              <p className={judge_style.judges__description}>
                Бренд амбассадор Diageo Reserve в Казахстане, в 2018 году вошел
                в топ 3 в номинации Best Ambassador 2018
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
