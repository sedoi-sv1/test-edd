import { TopLevelCategory } from './page.interfase';

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: PageItem[];
}

//типизируем firstLevelMenuItev
export interface firstLevelMenuItem {
	//путь по которому нужно перейти
	route: string;
	//name название отображаемое
	name: string;
	//изображение тип JSX.ELEMENT
	icon: JSX.Element;
	//id по которому ищщем
	id: TopLevelCategory
}



