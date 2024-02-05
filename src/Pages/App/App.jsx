import { useRoutes, BrowserRouter } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import TopCharacters from '../TopCharacters'
import './App.css'
import NotFound from '../NotFound'
import Anime from '../Anime'



function App() {

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/top-animes',
      element: <TopCharacters/>
    },
    {
      path: '/anime/:id',
      element: <Anime/>
    },
    {
      path: '/*',
      element: <NotFound/>
    }
  ])
  return routes
}

  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <Footer/> 
      </BrowserRouter>
      
    </>
  )
}

export default App
