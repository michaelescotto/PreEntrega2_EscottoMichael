import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Banner />
      <ItemListContainer/>
      <ItemDetailContainer />
      <Footer />
    </>

  )
}

export default App
