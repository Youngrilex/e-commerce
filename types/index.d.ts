
 interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
  }
  

  type TApiTag = (typeof apiTagTypes)[number];

  type TAppBuilder =EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, TApiTag, 'api'>


 type CreateProduct={
  id:number;
  name: string;
  description: string;
  price: number| null;
  category: string;
  image: string;
 }