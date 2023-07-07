import React, {FC} from 'react';
import './App.css';
import { Products } from './components/Products';

const App: FC = () => {
  return (
    <div className="App">
      <header className='App-header'>Gerenciar produtos</header>
      <Products />
    </div>
  );
}

export default App;
