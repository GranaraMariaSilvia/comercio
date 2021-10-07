import React from "react";
import styled from "styled-components";
import { productosElegidos } from "../data";
import Producto from "./Producto";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Productos = () => {
  return (
    <Container>
      {productosElegidos.map((item) => (
        <Producto item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Productos;
