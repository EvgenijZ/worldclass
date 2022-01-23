import page_style from '../styles/page.module.scss';
import brands_style from '../styles/brand.module.scss';
import Tab, { TabItem, TabHead, TabBody } from '../components/tab';

export default function Brands() {
  return (
    <>
      <div className={brands_style.brands__header}>
        <h1 className={brands_style.brands__title}>Каталог брендов Diageo</h1>
      </div>
      <div className={page_style.page}>
        <div className={page_style.page__wrap}>
          <Tab boxed centered>
            <TabItem active>
              <TabHead>1 этап</TabHead>
              <TabBody>1</TabBody>
            </TabItem>
          </Tab>
        </div>
      </div>
    </>
  );
}
