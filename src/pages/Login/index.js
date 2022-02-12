import React, { useState } from 'react';

import { useNavigate } from "react-router";
import { Mail } from "@styled-icons/entypo";
import { Lock } from "@styled-icons/boxicons-solid";

import logo from '../../images/logoLight.png'
import InputLogin from '../../components/InputLogin'
import ButtonLogin from '../../components/ButtonLogin'
import * as S from './elements'

const Login = () => {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const navigate = useNavigate();

  function handleSubmit(event) {
      event.preventDefault();

      let LoginOK = false
      let user = email.substring(0, email.indexOf("@"));
      let domain = email.substring(email.indexOf("@") + 1, email.length);

      if ((user.length >= 1) &&
          (domain.length >= 3) &&
          (user.search("@") === -1) &&
          (domain.search("@") === -1) &&
          (user.search(" ") === -1) &&
          (domain.search(" ") === -1) &&
          (domain.search(".") !== -1) &&
          (domain.indexOf(".") >= 1) &&
          (domain.lastIndexOf(".") < domain.length - 1)) {
      } else {
          setEmailError(true)
          LoginOK = true
      }

      if (password.length < 6) {
          setPasswordError(true)
          LoginOK = true
      }

      const navigation = () => {
          navigate("/agendamento")
      }

      if (!LoginOK) {
          navigation()
      }

  }
  return (
      <S.Container>
          <S.ContainerLogin>
              <S.ContainerInfo>
                  <img src={logo} alt='Logo' />
                  <h1>Seja bem vindo</h1>
              </S.ContainerInfo>
              <S.Form onSubmit={handleSubmit}>
                  <InputLogin
                      errorMessage={emailError}
                      icon={<Mail />}
                      errorText='E-mail Inválido'
                      onChange={(e) => {
                          setEmail(e.target.value)
                          setEmailError(false)
                          setPasswordError(false)
                      }}
                      value={email}
                      type='text'
                      placeholder='E-mail'
                  />
                  <InputLogin
                      errorMessage={passwordError}
                      icon={<Lock />}
                      errorText='Senha Inválida'
                      onChange={(e) => {
                          setPassword(e.target.value)
                          setPasswordError(false)
                          setEmailError(false)
                      }}
                      value={password}
                      type='password'
                      placeholder='Senha'
                  />
                  <ButtonLogin />
              </S.Form>
          </S.ContainerLogin>
      </S.Container>
  )
};

export default Login;
