import Counter from './components/Counter.jsx';
import { formatCurrency } from './utils/math.js';

export default function App() {
  return (
    <main>
      <h1>CI/CD Assignment Demo</h1>
      <p>Sample price: {formatCurrency(19.99)}</p>
      <Counter />
    </main>
  );
}
