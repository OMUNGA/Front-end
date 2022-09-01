import type { NextPage } from 'next'
import { useState, FormEvent } from 'react'
import { useRouter } from "next/router";
import { useAuth } from '../../context/AppContext'
import Menu from '../../Components/Menu'
import { Footer } from '../../Components/Footer/index'
import { FaAngleRight, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { StyledLogin, Form, DivInput } from "./styles"
// import { useForm } from 'react-hook-form'



const Login: NextPage = () => {
  const router = useRouter();
  // const { email, password } = router.query;
  const { login, loginErrorMessage } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassword] = useState(false)
  
  // const { register,  handleSubmit } = useForm()

  function handleInputSubmit(event: FormEvent) {
    event.preventDefault()

    console.log({email, password})

    setEmail('')
    setPassword('')
  }


  return (
    <>
      <Menu />
      <StyledLogin>
        <h2>Entrar</h2>
        <p>Faça login na sua conta Omunga e desfrute já</p>
        <Form onSubmit={handleInputSubmit}>
          <div>
            <DivInput>
              <div>
                <span>
                  <FaUser />
                </span>
                <input
                  required
                  type='email'
                  placeholder='Insira o seu email'
                  onChange={(event) => setEmail(event.target.value)}
                  // ref = { register ({ pattern: /^[A-Za-z]+$/i }) }
                />
              </div>
              <div>
                <span>
                  <FaLock />
                </span>
                <input
                  required
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
            <button type='submit'>Entrar <FaAngleRight /></button>
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