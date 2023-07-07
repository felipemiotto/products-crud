import React, {FC} from 'react';
import './App.css';
import { ProductForm } from './components/ProductForm';

const App: FC = () => {
  return (
    <div className="App">
      <header className='App-header'>Produtos</header>
      <ProductForm name='Nome' description='Descrição' price={10}/>
    </div>
  );
}

export default App;
