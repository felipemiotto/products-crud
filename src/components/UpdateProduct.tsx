import { FC, useEffect } from 'react';
import { useForm } from "react-hook-form"
import { Product } from './Interfaces';

interface ProductsFormProps {
  updateProduct: (product: Product) => void
  product: Product;
}

export const UpdateProduct: FC<ProductsFormProps> = ({ updateProduct, product }) => {
  const { register, handleSubmit, formState: {errors}, setValue } = useForm<Product>();

  useEffect(() => {
    setValue('id', product.id)
    setValue('name', product.name)
    setValue('description', product.description)
    setValue('price', product.price)
  }, [product])

  const onSubmit = (data: Product) => {
    updateProduct(data)
  }

  return (
    <div className='Product-form'>
        <h2>Edição do produto: {product.name}</h2>

        <label>Nome:</label>
        <input 
          type="text" 
          className={errors?.name && 'input-error' }
          placeholder='Nome do produto' 
          {...register("name", {required: true, minLength: 3})}
        />
        {errors?.name?.type === "required" && <p className='error-message'>O campo nome é obrigatório</p>}
        {errors?.name?.type === "minLength" && <p className='error-message'>O campo nome precisa ter pelo menos 3 caracteres</p>}

        <label>Descrição:</label>
        <input 
          type="text" 
          placeholder='Descrição do produto' 
          {...register("description")}
        />
        
        <label>Valor:</label>
        <input 
          type="number" 
          placeholder='Valor do produto' 
          {...register("price", {required: true, minLength: 1})}
        />
        {errors?.price?.type === "required" && <p className='error-message'>O campo valor é obrigatório</p>}
        {errors?.price?.type === "minLength" && <p className='error-message'>O campo valor precisa ter pelo menos 1 caractere</p>}

        <button onClick={() => handleSubmit(onSubmit)()}>Atualizar</button>
    </div>
  );
}
