import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WebPage from '../../2024-09-20-react-vite/src/App';
import List from '../../2024-09-19-react-vite/src/App';
import Password from '../../2024-09-18-react-vite/src/App';
import Prekes from '../../2024-09-16.2-react-vite/src/App'
import './App.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/WebPage" element={<WebPage />} />
            <Route path="/List" element={<List />} />
            <Route path="/Password" element={<Password />} />
            <Route path='Prekes' element={<Prekes/>} />
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App