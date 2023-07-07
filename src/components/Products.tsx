import { FC, useState } from 'react';
import { CreateProduct } from './CreateProduct';
import { UpdateProduct } from './UpdateProduct';
import { NewProduct, Product } from './Interfaces';
import { ProductsTable } from './ProductsTable';

export const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Farinha de milho",
      description: "Saco 1kgs",
      price: 4
    },
    {
      id: 2,
      name: "Farinha de arroz",
      description: "Saco 1kgs",
      price: 7
    },
    {
      id: 3,
      name: "Farinha de trigo",
      description: "Saco 5kgs",
      price: 25
    }
  ]);
  const [productInEdition, setProductInEdition] = useState<Product | null>(null)

  const removeProduct = (id: number) => {
    const indexToSplice = products.findIndex(product => product.id === id)
    console.log('indexToSplice', indexToSplice)
    if (indexToSplice > -1) {
      setProducts(
        products.filter(p =>
          p.id !== id
        )
      );
    }
  }

  const addProduct = (product: NewProduct) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      },
    ])
  }

  const setProductToBeEdited = (product: Product) => {
    setProductInEdition(product)
   }
 

  const updateProduct = (product: Product) => {
    const nextProducts = products.map(p => {
      if (p.id === product.id) {
        return product;
      } else {
        return p;
      }
    });

    setProducts(nextProducts);
    setProductInEdition(null)
  }

  return (
    <div className='Products'>
      {productInEdition 
        ? <UpdateProduct updateProduct={updateProduct} product={productInEdition} />
        : <CreateProduct addProduct={addProduct} />
      }
      <ProductsTable products={products} removeProduct={removeProduct} setProductToBeEdited={setProductToBeEdited} />
    </div>
  );
}
