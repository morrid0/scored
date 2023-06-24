"use client";
import { Button, TextField } from "@mui/material";

export default function LoginForm() {
  return (
    <form>
      <fieldset>
        <legend>Insira seus dados para Login</legend>

        <div>
          <TextField
            label={"Email"}
            inputProps={{
              type: "email",
              placeholder: "Email",
              required: true,
            }}
          />
        </div>
        <div>
          <TextField type="password" placeholder="Senha" required label={"Password"} />
        </div>
      </fieldset>
      <Button variant={"contained"} size={"large"} color={"success"} type={"submit"}>
        <a>Entrar</a>
      </Button>
    </form>
  );
}
