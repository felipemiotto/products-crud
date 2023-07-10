import { FC, useState, useEffect } from 'react';
import { CreateProduct } from './CreateProduct';
import { UpdateProduct } from './UpdateProduct';
import { NewProduct, Product } from './Interfaces';
import { ProductsTable } from './ProductsTable';
import axios from 'axios';

export const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [productInEdition, setProductInEdition] = useState<Product | null>(null)

  const productsApiBaseUrl = 'https://localhost:7086/';

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const result = await axios.get(`${productsApiBaseUrl}Products`)
    setProducts(result.data)
  }

  const removeProduct = async (id: number) => {
    const result = await axios.delete(`${productsApiBaseUrl}DeleteProduct?Id=${id}`)

    result.data
      ? fetchProducts()
      : alert("Ops, algo de errado aconteceu, tente novamente mais tarde =( ")
  }

  const addProduct = async (product: NewProduct) => {
    await axios.post(`${productsApiBaseUrl}CreateProduct`, {
      ...product
    })
    
    fetchProducts()
  }
 
  const updateProduct = async (product: Product) => {
    await axios.put(`${productsApiBaseUrl}UpdateProduct`, {
      ...product
    })
    
    setProductInEdition(null)
    fetchProducts()
  }

  return (
    <div className='Products'>
      {productInEdition 
        ? <UpdateProduct updateProduct={updateProduct} product={productInEdition} />
        : <CreateProduct addProduct={addProduct} />
      }
      <ProductsTable products={products} removeProduct={removeProduct} setProductInEdition={setProductInEdition} />
    </div>
  );
}
