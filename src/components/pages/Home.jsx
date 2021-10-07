import React from "react";
import Anuncio from "../Anuncio";
import Topbar from "../Topbar";
import Slider from "../Slider";
import Categorias from "../Categorias";
import Productos from "../Productos";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Anuncio />
      <Topbar />
      <Slider />
      <Categorias />
      <Productos />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
