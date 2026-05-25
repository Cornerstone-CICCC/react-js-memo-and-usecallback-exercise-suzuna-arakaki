import { useState, useCallback } from "react";
import GetProductsButton from "./GetProductsButton";

type Product = {
  id: number;
  title: string;
  price: number;
};

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // fetchData();

  return (
    <div>
      <h1>ProductsList</h1>
      <GetProductsButton onFetch={fetchProducts} />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
