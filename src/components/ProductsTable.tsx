import { FC } from 'react';
import { Product } from './Interfaces';

interface ProductsTableProps {
  products: Product[];
  removeProduct: (id: number) => void
  setProductInEdition: (product: Product) => void
}

export const ProductsTable: FC<ProductsTableProps> = ({products, removeProduct, setProductInEdition}) => {
  return (
    <div className='Product-table'>
      <h2>Produtos cadastrados</h2>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => setProductInEdition(product)}>Editar</button>
                <button onClick={() => removeProduct(product.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
