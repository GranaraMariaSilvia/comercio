import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/b/mujer-emocionada-se%C3%B1alando-con-el-dedo-%C3%ADndice-al-costado-retrato-feliz-hermosa-un-lado-otra-mano-en-su-cabeza-sorprendida-168098595.jpg")
      center;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "50%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Boton = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Iniciar Sesion</Title>

        <Form>
          <Input placeholder=" username" />

          <Input placeholder="password" />

          <Boton>Login</Boton>

          <Link>No recuerda su contraseña</Link>
          <Link>Crear otra cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
