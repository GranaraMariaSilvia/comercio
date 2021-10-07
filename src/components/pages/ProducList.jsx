import React from "react";
import styled from "styled-components";
import Anuncio from "../Anuncio";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import Productos from "../Productos";
import Topbar from "../Topbar";
import { mobile } from "../../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProducList = () => {
  return (
    <Container>
      <Topbar />
      <Anuncio />
      <Title> vestidos</Title>
      <FilterContainer>
        <Filter>
          {" "}
          <FilterText>Filtro de productos:</FilterText>
          <Select>
            <Option defaultValue>Color</Option>
            <Option> Blanco</Option>
            <Option> Negro</Option>
            <Option> Rojo </Option>
            <Option> Azul</Option>
            <Option> Amarillo</Option>
          </Select>
          <Select>
            <Option defaultValue>Size</Option>
            <Option> S</Option>
            <Option> M</Option>
            <Option> L </Option>
            <Option> XL</Option>
            <Option> XXL</Option>
          </Select>
        </Filter>
        <Filter>
          {" "}
          <FilterText>Sort de productos:</FilterText>
        </Filter>
      </FilterContainer>
      <Productos />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProducList;
