import type { NextPage } from 'next'
import { Articles } from '../Components/Article'
import { GoodOmunga } from '../Components/Good_OMUNGA'
import {Container} from "../styles/Container"

const Home: NextPage = () => {
  return (
    <section>
      <Container>
        <h1>Hello World</h1>
        <Articles />
      </Container>
      <GoodOmunga />
    </section>
  )
}

export default Home
