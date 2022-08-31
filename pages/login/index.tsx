import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from "next/router";
import { useAuth } from '../../context/AppContext'
import Menu from '../../Components/Menu'
import { Footer } from '../../Components/Footer/index'
import { FaAngleRight, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../../Components/Button/index'
import { StyledLogin, Form, DivInput } from "./styles"



const Login: NextPage = () => {
  const router = useRouter();
  const { email, password } = router.query;
  const { login, loginErrorMessage } = useAuth()

  const [seePassword, setSeePassword] = useState(false)

  login(email, password)

  return (
    <>
      <Menu />
      <StyledLogin>
        <h2>Entrar</h2>
        <p>Faça login na sua conta Omunga e desfrute já</p>
        <Form>
          <div>
            <DivInput>
              <div>
                <span>
                  <FaUser />
                </span>
                <input placeholder='Insira o seu email' type='email' />
              </div>
              <div>
                <span>
                  <FaLock />
                </span>
                <input placeholder='Insira a sua senha' type={seePassword ? 'text' : 'password'} />
                <button
                  onClick={() => setSeePassword(!seePassword)}
                  type='button'
                >
                  {seePassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </DivInput>
            <a href='#'>Esqueceu sua senha?</a>
            <Button Text='Entrar' Icon={<FaAngleRight />} />
          </div>
          <small>Ou</small>
          <header>
            <div>
              <a href="#">
                <img src='/register-with/google.png' />
              </a>
              <a href="#">
                <img src='/register-with/Faceboock.png' />
              </a>
              <a href="#">
                <img src='/register-with/github.png' />
              </a>
            </div>
            <p>Não tem uma conta? <a href='#'>Registrar-se</a></p>
          </header>
          {/* <p>{loginErrorMessage}</p> */}
        </Form>
      </StyledLogin>
      <Footer />
    </>
  )
}


export default Login