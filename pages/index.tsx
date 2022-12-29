import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag, Button, P, Rating } from '../components';
import { Tag } from '../components/Tag/Tag';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Layout, withLayout } from '../layout/Layout'
import { API } from '../helpers/ap';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='s' color='red'>Red</Tag>
			<Tag size='m' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			{/*<<Input placeholder='Тест' />
	<TextArea placeholder='Тест area' />*/}
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	/*const { data: menu } = await axios.post<MenuItem[]>('https://courses-top.ru/api/top-page/find', {
		firstCategory
	});*/


	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;


}
