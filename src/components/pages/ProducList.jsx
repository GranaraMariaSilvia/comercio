import React, { useState } from "react";
import styled from "styled-components";
import Anuncio from "../Anuncio";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import Productos from "../Productos";
import Topbar from "../Topbar";
import { mobile } from "../../responsive";
import { useLocation } from "react-router-dom";
import { SettingsRemoteOutlined } from "@material-ui/icons";

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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };
  console.log(filter);

  return (
    <Container>
      <Topbar />
      <Anuncio />
      <Title> {cat}</Title>
      <FilterContainer>
        <Filter>
          {" "}
          <FilterText>Filtro de productos:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option defaultValue>Color</Option>
            <Option> blanco</Option>
            <Option> negro</Option>
            <Option> rojo </Option>
            <Option> azul</Option>
            <Option> amarillo</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option defaultValue>Size</Option>
            <Option> S</Option>
            <Option> M</Option>
            <Option> L </Option>
            <Option> XL</Option>
            <Option> XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort de productos:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc"> Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Productos cat={cat} filters={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProducList;
