import React from "react";
import styled from "styled-components";
import CategoriaItem from "./CategoriaItem";
import { categorias } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categorias = () => {
  return (
    <Container>
      {categorias.map((item) => (
        <CategoriaItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categorias;
