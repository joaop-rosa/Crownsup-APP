import './Login.screen.styles.css'
export function Login() {
    return (
        <div className="background login-background">
            <div className='div-form-login'>
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
                        <span>Registre-se</span>
                    </div>
                </div>
            </div>
        </div>
    )
}