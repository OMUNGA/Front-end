import { Footer } from "../../Components/Footer";
import type { NextPage } from 'next'
import Menu from "../../Components/Menu";
import { FaUser, FaLock, FaAngleRight } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { StyledRegistry, Form, InputDiv, InputDivOne } from './styles'
import Button from "../../Components/Button";

const Registry: NextPage = () => {
    return (
        <>
            <Menu />
            <StyledRegistry>
                <h2>Registrar</h2>
                <p>Crie a sua conta Omunga e desfrute já</p>

                <Form>
                    <InputDiv>
                        <div>
                            <span>
                                <span>
                                    <FaUser />
                                </span>
                            </span>
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div>
                            <span>
                                <FaUser />
                            </span>
                            <input type='text' placeholder='Sobrenome' />
                        </div>
                    </InputDiv>

                    <InputDivOne>
                        <div>
                            <span>
                                <MdEmail />
                            </span>
                            <input type='email' placeholder='Email' />
                        </div>
                        <div>
                            <span>
                                <FaLock />
                            </span>
                            <input type='password' placeholder='Senha' />
                        </div>
                        <div>
                            <span>
                                <FaLock />
                            </span>
                            <input type='password' placeholder='Confirmar-Senha' />
                        </div>
                        <Button Text='Registrar' Icon={<FaAngleRight size={20} />} />
                    </InputDivOne>
                </Form>

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
                    <p>Não tem uma conta? <a href='./login'>Entrar</a></p>
                </header>
            </StyledRegistry>
            <Footer />
        </>
    )
}

export default Registry;