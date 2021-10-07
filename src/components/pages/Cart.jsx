import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Anuncio from "../Anuncio";
import Footer from "../Footer";
import Topbar from "../Topbar";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;

  margin: 0px 10px;
  cursor: pointer;
`;

const Botton = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;

const Detalles = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const Hr = styled.hr`
  background-color: #dbd5d5;
  border: none;
  height: 1px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Sumary = styled.div`
  flex: 1;
  border: 0.5px solid lightslategrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SumaryTitle = styled.h1`
  font-weight: 200;
`;

const SumaryItem = styled.span`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SumaryItemText = styled.span``;
const SumaryItemPrice = styled.span``;

const Boton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Topbar />
      <Anuncio />
      <Wrapper>
        <Title>Tu carrito</Title>
        <Top>
          <TopButton> CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText> Shopping Bag (2)</TopText>
            <TopText> Lista de Compras (0)</TopText>
          </TopTexts>

          <TopButton type="filled"> Checkout</TopButton>
        </Top>

        <Botton>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/31890fc8a64c4704aa89a9c300d00ea3_9366/Zapatillas_U_Path_Run_Negro_G27639_01_standard.jpg" />

                <Detalles>
                  <ProductName>
                    {" "}
                    <b>producto: </b> Zapatillas Running
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID: </b> 47687474300{" "}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>talle: </b> 37
                  </ProductSize>
                </Detalles>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> 2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$5000</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvOVUuCFBsX5RVFP15LW8xfziryovNLtd3A&usqp=CAU" />

                <Detalles>
                  <ProductName>
                    {" "}
                    <b>producto: </b> Short Hombre
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID: </b> 476874749990{" "}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>talle: </b> 42
                  </ProductSize>
                </Detalles>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> 2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$2500</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Sumary>
            <SumaryTitle>Resumen de Compra</SumaryTitle>
            <SumaryItem>
              <SumaryItemText> Subtotal</SumaryItemText>
              <SumaryItemPrice> $80 </SumaryItemPrice>
            </SumaryItem>

            <SumaryItem>
              <SumaryItemText> Envio estimado</SumaryItemText>
              <SumaryItemPrice> $150 </SumaryItemPrice>
            </SumaryItem>

            <SumaryItem>
              <SumaryItemText> Descuento de Envio</SumaryItemText>
              <SumaryItemPrice> $ -47 </SumaryItemPrice>
            </SumaryItem>

            <SumaryItem type="total">
              <SumaryItemText> Total</SumaryItemText>
              <SumaryItemPrice> $7500 </SumaryItemPrice>
            </SumaryItem>

            <Boton> CHECKOUT</Boton>
          </Sumary>
        </Botton>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
