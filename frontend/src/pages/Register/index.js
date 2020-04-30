import React, { useState } from 'react';
import { Container, DadosBancarios, DadosPessoais, DadosContato, ConexaoSite, Formulario, Servicos, Link, Title, SectionTitle, SectionServicos } from './styles'
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Botao from '../../components/button/Botao';
import Footer from '../../components/footer/Footer';
import { FiArrowRight } from 'react-icons/fi';
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
export default function Register(props) {
    const [nomeCompleto, setNome] = useState("");
    const [RG, setRG] = useState("");
    const [CPF, setCPF] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [genero, setGenero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [CEP, setCEP] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nomeBanco, setNomeBanco] = useState("");
    const [agencia, setAgencia] = useState("");
    const [numeroConta, setNumeroConta] = useState("");
    const [senha, setSenha] = useState("");


    function handleSubmit(e) {
        console.log(e);

    }
    function handleChange(e) {
        setNome(e.target.value)

    }
    return (
        <Container>
            <Header />
            <Title><span>Guardião</span> em andamento</Title>
            <Formulario onSubmit={handleSubmit}>
                <div>
                    <section>
                        <DadosPessoais>
                            <SectionTitle>Dados <span>Pessoais</span></SectionTitle>
                            <Input name="Nome completo" texto="Nome completo" placeholder="maria de sousa nery" width={300} />

                            <div >
                                <Input name="RG" texto="RG" placeholder="0000000-0" width={140} />
                                <Input name="CPF" texto="CPF" placeholder="000-000-000-00" width={140} />
                            </div>

                            <div>
                                <Input name="Data Nascimento" texto="Data Nascimento" placeholder="dd/mm/aaaa" width={140} />
                                <Input name="Gênero" texto="Gênero" placeholder="Nenhum" width={140} />
                            </div>
                            <div>
                                <Input name="Estado" texto="Estado" placeholder="Nenhum" width={140} />
                                <Input name="Cidade" texto="Cidade" placeholder="Nenhum" width={140} />
                            </div>
                            <div>
                                <Input name="Rua" name="texto" placeholder="Rua agostinho..." width={240} />
                                <Input name="Nº" name="texto" placeholder="0000" width={50} />
                            </div>
                            <div>
                                <Input name="Bairro" texto="Bairro" placeholder="vila nova" width={140} />
                                <Input name="CEP" texto="CEP" placeholder="00000-000" width={140} />
                            </div>

                        </DadosPessoais>

                    </section>
                    <section>
                        <DadosContato>
                            <SectionTitle>Dados para <span>Contato</span></SectionTitle>
                            <Input name="E-mail" texto="E-mail" placeholder="abcdfghij@gmail.com" width={300} />
                            <Input name="Telefone" texto="Telefone" placeholder="(88) 99999999" width={150} />
                        </DadosContato>
                        <br />
                        <DadosBancarios>
                            <SectionTitle>Dados <span>Bancários</span></SectionTitle>
                            <div>
                                <Input name="Nome do banco" texto="Nome do banco" placeholder="banco do brasil" width={140} />
                                <Input name="Agência" texto="Agência" placeholder="0000-0" width={140} />
                            </div>
                            <Input name="Número da conta" texto="Número da conta" placeholder="0000000-0" width={140} />
                        </DadosBancarios>
                        <br />

                        <ConexaoSite>
                            <SectionTitle><span>Conexão</span> com o site</SectionTitle>
                            <div>
                                <Input name="Definir Senha" texto="Definir Senha" placeholder="********" width={140} />
                                <Input name="Confirmar Senha" texto="Confirmar Senha" placeholder="********" width={140} />
                            </div>

                        </ConexaoSite>

                    </section>
                </div>
                <SectionServicos>
                    <Title>Selecione os <span>serviços</span> que você deseja oferecer</Title>
                    <div>
                        <Servicos>
                            <li>
                                <img src={s2} alt="" />
                                <div>
                                    <input type="checkbox" /><p>Hospedagem</p>
                                </div>

                            </li>
                            <li>
                                <img src={s1} alt="" />
                                <div>
                                    <input type="checkbox" /><p>Passeio</p>
                                </div>

                            </li>
                            <li>
                                <img src={s3} alt="" />
                                <div>
                                    <input type="checkbox" /><p>Babá</p>
                                </div>

                            </li>
                        </Servicos>

                    </div>
                    <Link>
                        <a href="">Quero apenas utilizar os serviços prestados</a><FiArrowRight size={16} color="#01D2A7" />
                    </Link>
    
                </SectionServicos>
                <Botao text="Finalizar cadastro" type="submit" />
            </Formulario>
            <Footer />
        </Container>
        
    )
}
