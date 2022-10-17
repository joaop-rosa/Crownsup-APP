import '../Login.screen.styles.css'
import './Register.screen.styles.css'
import { useNavigate } from 'react-router-dom'
export function Register() {
    const navigate = useNavigate();

    return (
        <div className="background login-background">
            <div className='div-form div-form-register'>
                <h1>Crowdsup</h1>
                <form action="">
                    <div className='div-form-field'>
                        <label htmlFor="">Nome completo</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='div-form-field'>
                        <label htmlFor="">E-mail</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='div-form-field'>
                        <label htmlFor="">Senha</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='div-form-two-fields'>
                        <div className='div-form-field'>
                            <label htmlFor="">Data de nascimento</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='div-form-field'>
                            <label htmlFor="">Cidade</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='div-form-two-fields'>
                        <div className='div-form-field'>
                            <label htmlFor="">Sexo</label>
                            <div className='div-form-field-radio'>
                                <input type="radio" name="sex" id="" />
                                <label htmlFor="">Masculino</label>
                                <input type="radio" name="sex" id="" />
                                <label htmlFor="">Feminino</label>
                            </div>

                        </div>
                        <div className='div-form-field'>
                            <label htmlFor="">Telefone</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                </form>
                <div className='form-footer'>
                    <button className='button-large button-primary'>Registrar</button>
                    <div className='form-footer-sing-in-up'>
                        <p>Já possui uma conta?</p>
                        <span onClick={() => navigate('/')}>Login</span>
                    </div>
                </div>
            </div>
        </div>
    )
}