import page_style from '../styles/page.module.scss';
import brands_style from '../styles/brand.module.scss';
import Tab, { TabItem, TabHead, TabBody } from '../components/tab';
import Image from 'next/image';

export default function Brands() {
	return (
		<>
			<div className={brands_style.brands__header}>
				<h1 className={brands_style.brands__title}>КАТАЛОГ БРЕНДІВ DIAGEO</h1>
			</div>
			<div className={page_style.page}>
				<div className={page_style.page__wrap}>
					<Tab centered>
						<TabItem>
							<TabHead>Усі</TabHead>
							<TabBody>
								<div className={brands_style.brands__list}>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand1.svg'
											alt='Brand 1'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand2.svg'
											alt='Brand 2'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand3.png'
											alt='Brand 3'
											width='160'
											height='60'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand4.svg'
											alt='Brand 4'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand5.png'
											alt='Brand 5'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand6.svg'
											alt='Brand 6'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand7.svg'
											alt='Brand 7'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand8.svg'
											alt='Brand 8'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand9.svg'
											alt='Brand 9'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand10.svg'
											alt='Brand 10'
											width='160'
											height='160'
										/>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>Віскі</TabHead>
							<TabBody>
								<div className={brands_style.brands__list}>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand1.svg'
											alt='Brand 1'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand3.png'
											alt='Brand 3'
											width='160'
											height='60'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand6.svg'
											alt='Brand 6'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand8.svg'
											alt='Brand 8'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand10.svg'
											alt='Brand 10'
											width='160'
											height='160'
										/>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>Ром</TabHead>
							<TabBody>
								<div className={brands_style.brands__list}>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand2.svg'
											alt='Brand 2'
											width='160'
											height='160'
										/>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>Текіла</TabHead>
							<TabBody>
								<div className={brands_style.brands__list}>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand4.svg'
											alt='Brand 4'
											width='160'
											height='160'
										/>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>Горілка</TabHead>
							<TabBody>
								<div className={brands_style.brands__list}>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand5.png'
											alt='Brand 5'
											width='160'
											height='160'
										/>
									</div>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand7.svg'
											alt='Brand 7'
											width='160'
											height='160'
										/>
									</div>
								</div>
							</TabBody>
						</TabItem>
						<TabItem>
							<TabHead>Джин</TabHead>
							<TabBody>
								<div className={brands_style.brands__list}>
									<div className={brands_style.brands__item}>
										<Image
											src='/static/images/brands/brand9.svg'
											alt='Brand 5'
											width='160'
											height='160'
										/>
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
