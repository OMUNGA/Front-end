import { Footer } from "../../Components/Footer";
import type { NextPage } from 'next'
import { useState } from 'react'
import Menu from "../../Components/Menu";
import { FaUser, FaLock, FaAngleRight, FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { StyledRegistry, Form, InputDiv, InputDivOne, InputPassword } from './styles'
import Button from "../../Components/Button";

const Registry: NextPage = () => {
    const [seePassword, setSeePassword] = useState(false)
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)

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
                        <InputPassword>
                            <div>
                                <span>
                                    <FaLock />
                                </span>
                                <input
                                    type={seePassword ? 'text' : 'password'}
                                    placeholder='Senha'
                                />
                            </div>
                            <button
                                onClick={() => setSeePassword(!seePassword)}
                                type='button'
                            >
                                {seePassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </InputPassword>
                        <InputPassword>
                            <div>
                                <span>
                                    <FaLock />
                                </span>
                                <input
                                    type={seeConfirmPassword ? 'text' : 'password'}
                                    placeholder='Confirmar-Senha'
                                />
                            </div>
                            <button
                                onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                                type='button'
                            >
                                {seeConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </InputPassword>
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