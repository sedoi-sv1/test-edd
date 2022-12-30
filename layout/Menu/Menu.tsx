import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interfase';
//import { firstLevelMenu } from '../../helpers/helpers';
//import {  motion } from 'framer-motion'

const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];


export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	/*const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeCildren',
				stacerCildern: 0.1
			}
		},
		hidden: { marginBottom: 0 }
	};

	const variantsCildren = {
		visible: {
			opacity: 1,
			height: 29
		},
		hidden: { opacity: 0, height: 0 }
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};*/

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route} >
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActiv]: m.id == firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory}
					</div >
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
		return (
			<div>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened] : m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))};
			</div >
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
				pages.map(p => (
					<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: true
					})}>
						{p.category}
					</a>
					))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div >
	);
};