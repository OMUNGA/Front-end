import { Footer } from "../../Components/Footer";
import type { NextPage } from 'next'
import { useState, FormEvent } from 'react'
import Menu from "../../Components/Menu";
import { FaUser, FaLock, FaAngleRight, FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { StyledRegistry, Form, InputDiv, InputDivOne, InputPassword } from './styles'
import Button from "../../Components/Button";
import Link from 'next/link'

interface RegistryProps {
    name: string,
    email: string,
    surname: string,
    password: string,
    passwordConfirm: string
}

const Registry: NextPage = () => {
    const [seePassword, setSeePassword] = useState(false)
    const [seePasswordConfirm, setseePasswordConfirm] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [newUserData, setNewUserData] = useState<RegistryProps []>([])

    function handleNewUserRegistration(event: FormEvent) {
        event.preventDefault()

        setNewUserData([...newUserData, {
            name,
            email,
            surname,
            password,
            passwordConfirm
        }])

        setName("")
        setEmail("")
        setSurname("")
        setPassword("")
        setPasswordConfirm("")
    }

    console.log(newUserData)

    return (
        <>
            <Menu />
            <StyledRegistry>
                <h2>Registrar</h2>
                <p>Crie a sua conta Omunga e desfrute já</p>

                <Form onSubmit={handleNewUserRegistration}>
                    <InputDiv>
                        <div>
                            <span>
                                <span>
                                    <FaUser />
                                </span>
                            </span>
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder='Nome'
                            />
                        </div>
                        <div>
                            <span>
                                <FaUser />
                            </span>
                            <input
                                type='text'
                                value={surname}
                                onChange={(event) => setSurname(event.target.value)}
                                placeholder='Sobrenome'
                            />
                        </div>
                    </InputDiv>

                    <InputDivOne>
                        <div>
                            <span>
                                <MdEmail />
                            </span>
                            <input
                                type='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='Email'
                            />
                        </div>
                        <InputPassword>
                            <div>
                                <span>
                                    <FaLock />
                                </span>
                                <input
                                    value={password}
                                    placeholder='Senha'
                                    onChange={(event) => setPassword(event.target.value)}
                                    type={seePassword ? 'text' : 'password'}
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
                                    value={passwordConfirm}
                                    placeholder='Confirmar-Senha'
                                    onChange={(event) => setPasswordConfirm(event.target.value)}
                                    type={seePasswordConfirm ? 'text' : 'password'}
                                />
                            </div>
                            <button
                                onClick={() => setseePasswordConfirm(!seePasswordConfirm)}
                                type='button'
                            >
                                {seePasswordConfirm ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </InputPassword>
                        <Button
                            Text='Registrar'
                            type='submit'
                            Icon={<FaAngleRight size={20} />}
                        />
                    </InputDivOne>
                </Form>

                <small>Ou</small>
                <header>
                    <div>
                        <Link href="#">
                            <img src='/register-with/google.png' />
                        </Link>
                        <Link href="#">
                            <img src='/register-with/Faceboock.png' />
                        </Link>
                        <Link href="#">
                            <img src='/register-with/github.png' />
                        </Link>
                    </div>
                    <p>Não tem uma conta? <Link href='./login'>Entrar</Link></p>
                </header>
            </StyledRegistry>
            <Footer />
        </>
    )
}

export default Registry;