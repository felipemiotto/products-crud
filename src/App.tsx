import React, {FC} from 'react';
import './App.css';
import { Product } from './components/Product';

const App: FC = () => {
  return (
    <div className="App">
      <header className='App-header'>Produtos</header>
      <Product id={1} name='Nome' description='Descrição' price={10}/>
    </div>
  );
}

export default App;
