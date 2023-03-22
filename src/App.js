import './App.css'
import Header from './containers/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' exact element={<ProductDetail />} />
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
