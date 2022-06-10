import './App.css';
import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { CartProvider } from './components/store/CartProvider';
import { ModalProvider } from './components/store/ModalProvider';

function App() {
           

  return (
    <div className="App">
      <ModalProvider>
        <CartProvider>
      <Header/>
      <Meals />
      </CartProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
