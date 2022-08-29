import type { NextPage } from 'next'
import {useRouter } from "next/router";
import { useAuth } from '../../context/AppContext'
import {StyledLogin} from "./styles"


const Login: NextPage = () => { 
  const router = useRouter();
  const { email, password } = router.query;
  const {login, loginErrorMessage} = useAuth()

  login(email, password)

  return (
    <StyledLogin>
      <h2>Login</h2>
      <p>{loginErrorMessage}</p>
    </StyledLogin>
  )
}


export default Login