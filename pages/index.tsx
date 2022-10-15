import type { NextPage } from 'next'
import { Articles } from '../Components/Articles'
import { Features } from '../Components/Langing_Page/Features'
import Header from '../Components/Header'
import { Experimente } from '../Components/Langing_Page/Experimente'
import { Footer } from '../Components/Footer'
import { useAuth } from '../context/AppContext'
import SingleArticle from './SingleArticle'


const Home: NextPage = () => { 
  const {user} = useAuth()
  return (
    <> 
      <Header/>
      <Articles />
        {
          !user ?
          <>
            <Features />
            <Experimente />
          </>
            : null
        }
      <Footer/>
    </>
  )
}


export default Home
