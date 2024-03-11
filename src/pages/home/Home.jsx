import './home.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/NavBar'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertylist/PropertyList'
import FeaturedProperties from '../../components/featuredproperties/FeaturedProperties'
import MailList from '../../components/maillist/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'> Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home