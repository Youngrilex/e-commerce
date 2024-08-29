import { FC, useState } from 'react';


interface ProductFormProps {
  initialProduct?: Product;
  onSave: (product: Product) => void;
}

const ProductForm: FC<ProductFormProps> = ({ initialProduct, onSave }) => {
  const [product, setProduct] = useState<Product>({
    id: initialProduct?.id || '',
    name: initialProduct?.name || '',
    description: initialProduct?.description || '',
    price: initialProduct?.price || 0,
    category: initialProduct?.category || '',
    image: initialProduct?.image || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(product);
  };

  return (
  <div>sample</div>
  );
};

export default ProductForm;
