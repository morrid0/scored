export default function LoginForm() {
  return (
    <form>
      <fieldset>
        <legend>Insira seus dados para Login</legend>

        <div>
          <input type="email" placeholder="Email" required></input>
          <label>Email</label>
        </div>
        <div>
          <input type="password" placeholder="Senha" required></input>
          <label className="input-label" htmlFor="senha">
            Senha
          </label>
        </div>
      </fieldset>
      <button>
        <a>Entrar</a>
      </button>
    </form>
  );
}
