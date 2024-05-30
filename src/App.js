import PoteCard from './components/PoteCard/PoteCard';
import logo from './logo.svg';
import { Card , Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PoteCard 
          imageSrc="/helados-1-4.jpg" 
          title="1/4 Kilo" 
          subtitle="Máximo 3 gustos" 
        />
      </header>
    </div>
  );
}

export default App;
