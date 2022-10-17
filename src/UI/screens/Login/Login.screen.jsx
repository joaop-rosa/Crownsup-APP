import './Login.screen.styles.css'
import { useNavigate } from 'react-router-dom'
export function Login() {
    const navigate = useNavigate()
    return (
        <div className="background login-background">
            <div className='div-form div-form-login'>
                <h1>Crowdsup</h1>
                <form action="">
                    <div className='div-form-field'>
                        <label htmlFor="">Usuário</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='div-form-field'>
                        <label htmlFor="">Senha</label>
                        <input type="text" name="" id="" />
                    </div>
                </form>
                <div className='form-footer'>
                    <button className='button-large button-primary'>Login</button>
                    <div className='form-footer-sing-in-up'>
                        <p>Não possui uma conta?</p>
                        <span onClick={() => navigate('/register')}>Registre-se</span>
                    </div>
                </div>
            </div>
        </div>
    )
}