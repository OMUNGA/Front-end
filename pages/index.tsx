import type { NextPage } from 'next'
import { Articles } from '../Components/Articles'
import { Features } from '../Components/Features'
import {Container} from "../styles/Container"
import Header from '../Components/Header'
import { SingleArticle } from '../Components/SingleArticle'
import { Experimente } from '../Components/Experimente'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Articles />
      <Features />
      <Experimente />
    </>
  )
}


export default Home
