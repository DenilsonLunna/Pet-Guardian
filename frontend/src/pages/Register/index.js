import React from 'react';
import { Container, DadosBancarios, DadosPessoais, DadosContato, ConexaoSite, DivDir, DivEsq, Formulario,Servicos,Link } from './styles'
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Botao from '../../components/button/Botao';
import Footer from '../../components/footer/Footer';
import {FiArrowRight} from 'react-icons/fi';
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
export default function Register(props) {

    return (
        <Container>
            <Header />
            <h1><span>Guardião</span> em andamento</h1>
            <Formulario>
                <DivEsq>
                    <DadosPessoais>
                        <h1>Dados <span>Pessoais</span></h1>
                        <Input texto="Nome completo" placeholder="maria de sousa nery" width={300} />

                        <div>
                            <Input texto="RG" placeholder="0000000-0" width={140} />
                            <Input texto="CPF" placeholder="000-000-000-00" width={140} />
                        </div>

                        <div>
                            <Input texto="Data Nascimento" placeholder="dd/mm/aaaa" width={140} />
                            <Input texto="Gênero" placeholder="Nenhum" width={140} />
                        </div>
                        <div>
                            <Input texto="Estado" placeholder="Nenhum" width={140} />
                            <Input texto="Cidade" placeholder="Nenhum" width={140} />
                        </div>
                        <div>
                            <Input texto="Rua" placeholder="Rua agostinho..." width={240} />
                            <Input texto="Número" placeholder="0000" width={60} />
                        </div>
                        <div>
                            <Input texto="Bairro" placeholder="vila nova" width={140} />
                            <Input texto="CEP" placeholder="00000-000" width={140} />
                        </div>

                    </DadosPessoais>

                </DivEsq>
                <DivDir>
                    <DadosContato>
                        <h1>Dados para <span>Contato</span></h1>
                        <Input texto="E-mail" placeholder="abcdfghij@gmail.com" width={300} />
                        <Input texto="Telefone" placeholder="(88) 99999999" width={150} />
                    </DadosContato>
                    <br/>
                    <DadosBancarios>
                        <h1>Dados <span>Bancários</span></h1>
                        <div>
                            <Input texto="Nome do banco" placeholder="banco do brasil" width={140} />
                            <Input texto="Agência" placeholder="0000-0" width={140} />
                        </div>
                        <Input texto="Número da conta" placeholder="0000000-0" width={140} />
                    </DadosBancarios>
                    <br/>

                    <ConexaoSite>
                        <h1><span>Conexão</span> com o site</h1>
                        <Input texto="Senha" placeholder="********" width={140} />
                    </ConexaoSite>

                </DivDir>

            </Formulario>


            <Servicos>
                <h1>Selecione os serviços que você deseja oferecer</h1>
                <div>
                    <ul>
                        <li>
                            <img src={s2} alt=""/>
                            <div>
                            <input type="checkbox"/><p>Hospedagem</p>
                            </div>
                            
                        </li>
                        <li>
                            <img src={s1} alt=""/>
                            <div>
                            <input type="checkbox"/><p>Passeio</p>
                            </div>
                            
                        </li>
                        <li>
                            <img src={s3} alt=""/>
                            <div>
                            <input type="checkbox"/><p>Babá</p>
                            </div>
                            
                        </li>
                    </ul>

                </div>
                <Link>
                <a href="">Quero apenas utilizar os serviços prestados</a><FiArrowRight size={16} color="#01D2A7"/>
                </Link>
                <Botao text="Finalizar cadastro"/>
                <Footer/>
            </Servicos>







        </Container>

    )
}
