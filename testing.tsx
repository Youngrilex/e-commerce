const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:3001/products');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const handleSaveProduct = (product: Product) => {
    const newProduct = {
      ...product,
      id: product.id, // Ensure ID is present
    };
    console.log('Saving product:', product);  // Debug log
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      console.log('Updated products:', updatedProducts);  // Debug log
      return updatedProducts;
    });
    setFilteredProducts((prevFilteredProducts) => {
      const updatedFilteredProducts = [...prevFilteredProducts, newProduct];
      console.log('Updated filtered products:', updatedFilteredProducts);  // Debug log
      return updatedFilteredProducts;
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        (category === 'all' || product.category === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      )
    );
  }, [category, priceRange, products]);
