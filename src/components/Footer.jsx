import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  ${mobile({ fontSize: "30px", textAlign: "center" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: "14px", textAlign: "center" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  ${mobile({ fontSize: "12px", textAlign: "center" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f8eeee" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> Sustentable</Logo>
        <Desc>
          dhdhhfhfh jgjgjg ojjgg jfjfjgjhkh nfnf hf djesh mjdjfbshmn nhn hdhd
          kj.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Utiles</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Womam Fashion</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Orden </ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Lista</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>

        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Avenida Avellaneda 775, San
          Miguel de Tucuman
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +54 9 3815894589
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          silviagranara10@gmail.com
        </ContactItem>

        <Payment src="https://www.adidas.mx/on/demandware.static/-/Sites-adidas-MX-Library/es_MX/dw0dfebf7a/usp/MX_PAGOS_EN_LINEA.png" />
      </Right>
    </Container>
  );
};

export default Footer;
