import React from 'react'
import { Us } from "../components/Us";
import { Uss } from "../components/Uss";
import { Empresas } from "../components/Empresas";
import "../css/Empresas.css";
import "../css/Us.css";
import { Usss } from "../components/Usss";
import "../css/Usss.css";
import "../css/Footer.css";
import { Footer } from "../components/Footer";
import { Destacados } from "../components/Destacados";
import "../css/Destacados.css"
export function Nosotros() {
  return (
    <div>
    <Us></Us>
    <Uss></Uss>
    <Destacados></Destacados>

   
    <Empresas></Empresas>
    <Footer></Footer>
    </div>
  )
}

