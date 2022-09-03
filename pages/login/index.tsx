import type { NextPage } from 'next'
import { useState } from 'react'
import { useAuth } from '../../context/AppContext'
import Menu from '../../Components/Menu'
import { Footer } from '../../Components/Footer/index'
import { FaAngleRight, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { StyledLogin, Form, DivInput } from "./styles"

const Login: NextPage = () => {
  const { login, loginErrorMessage } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassword] = useState(false)

  return (
    <>
      <Menu />
      <StyledLogin>
        <h2>Entrar</h2>
        <p>Faça login na sua conta Omunga e desfrute já</p>
        <Form>
          <div>
            <DivInput>
              <p>{loginErrorMessage}</p>
              <div>
                <span>
                  <FaUser />
                </span>
                <input
                  name='email'
                  type='email'
                  placeholder='Insira o seu email'
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <span>
                  <FaLock />
                </span>
                <input
                  name='password'
                  placeholder='Insira a sua senha'
                  type={seePassword ? 'text' : 'password'}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  onClick={() => setSeePassword(!seePassword)}
                  type='button'
                >
                  {seePassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </DivInput>
            <a href='#'>Esqueceu sua senha?</a>
            <button onClick={login(email, password)}>Entrar <FaAngleRight /></button>
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
        </Form>
      </StyledLogin>
      <Footer />
    </>
  )
}


export default Login