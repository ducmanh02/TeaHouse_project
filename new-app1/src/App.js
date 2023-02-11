import {useState} from 'react'
import './App.css';
import Text from './components/Text';

function App() {
  const [count, setCount] = useState(10)

  const onIncreaseClick = () => {
    setCount(count + 1)
  }
	const onDecreaseClick = () => {
    setCount(count - 1)
  }

	return <div>
      <h1>Count : </h1>
      <h1>{count}</h1>
      <div>
      <button onClick={onIncreaseClick}>Increase</button>
      <button onClick={onDecreaseClick}>Decrease</button> 
      </div>
      <Text></Text>
  </div>
}

export default App;
