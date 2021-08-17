import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { message } from 'antd';

import api from '../../services/api';
import { login } from '../../services/auth';
import { useUser } from '../../contexts/User';

import Input from '../../components/Input';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const { setUser } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    message.loading({
      key: "logging",
      content: "Logando...",
      duration: 9999
    });
    try {
      const response = await api.post('login', {
        email,
        password
      });
      if (response.status === 200) {
        login(response.data.token);
        setUser(response.data.user);
        message.destroy("logging");
        history.push("/");
        message.success(`Bem-vindo, ${response.data.user.name} :)`)
      }
    } catch (error) {
      console.log(error);
      message.destroy("logging");
      message.error("Erro ao efetuar login, tente novamete...");
    }
  }

  return (
    <div className="login-container">
      <a href="/"><FiArrowLeft /> Voltar</a>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input
          title="Email"
          type="email"
          id="email"
          masked={false}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          title="Senha"
          type="password"
          id="password"
          masked={false}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <a href="/register">Quero criar uma conta</a>
      </form>
    </div>
  );
}

export default Login;