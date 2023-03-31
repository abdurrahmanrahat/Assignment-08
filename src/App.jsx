import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionAns from './components/QuestionAns/QuestionAns';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <QuestionAns></QuestionAns>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
