import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interfase';
import { ProductModel } from '../../interfaces/product.interfase';

export interface TopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];


}