import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Banner />
      <ItemListContainer texto={"El carrito esta vacío."}/>
      <Footer />
    </>

  )
}

export default App
