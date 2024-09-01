type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

type FilterProduct = {
  [x: string]: string | number[] | any;
  category: string;
  priceRange: number[];
};

type ProductState = {
  [x: string]: string | FilterProduct | any;
  filter: FilterProduct;
  products: Product[];
  selectedProduct: Product | null;
  isProductVisible: boolean;
};
