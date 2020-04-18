import React from 'react';
import { FiLogIn } from 'react-icons/fi' // feather icons
import { FiLock } from 'react-icons/fi' // feather icons
import './styles.css';
import dogImg from '../../assets/image 2.png';
import logo from '../../assets/logo.png';
export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
               
                <form action="">
                    <img className="logoImg" src={logo} alt="Logo Pet Guardian" />
                    <div className="inputUser">
                        <FiLogIn className="icon" size={20} color="#01D2A7" />
                        <input placeholder=" exemploemail@gmail.com" type="text" />

                    </div>
                    <div className="inputUser">
                        <FiLock className="icon" size={20} color="#01D2A7" />
                        <input placeholder=" *******" type="password" />

                    </div>
                    <div className="links">
                    <div className="lembre-me">
                        <input type="checkbox" />
                        <a href="https://www.google.com"> Lembrar</a>
                    </div>
                    <a href="">Esqueceu sua senha?</a>

                    </div>
                    
                    <button className="button" type="submit">Entrar</button>
                </form>

            </section>

            <img className="dogImg" src={dogImg} alt="Dog" />
        </div>

    )
}