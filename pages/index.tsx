import type { NextPage } from 'next'
import { Articles } from '../Components/Articles'
import { Features } from '../Components/Langing_Page/Features'
import Header from '../Components/Header'
import { Experimente } from '../Components/Langing_Page/Experimente'
import { Footer } from '../Components/Footer'
import { useAuth } from '../context/AppContext'
import { ForumPublicationPage } from '../Components/ForumPublicationPage'
import SearchResult from './Search_Result'
import ForumsCards from '../Components/ForumsCrads'


const Home: NextPage = () => { 
const {user} = useAuth()
  return (
    <>
      {/* <ForumPublicationPage /> */}
      <SearchResult />
      {/* <ForumsCards /> */}
    </>
  )
}

export default Home
