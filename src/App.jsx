import { useState } from "react"
import fivem from "./assets/fivem.gif"
import valorant from "./assets/valorant.gif"
import rocketleague from "./assets/rocketleague.gif"
import fortnite from "./assets/fortnite.gif"
import minecraft from "./assets/minecraft.gif"
import JogoCard from "./componentes/JogoCard/JogoCard"

function App() {

  const [listaJogos] = useState([
    {
      nome: "FiveM",
      genero: "RP",
      empresa: "Rockstar",
      imagem: fivem
    },

    {
      nome: "Valorant",
      genero: "FPS",
      empresa: "Riot Games",
      imagem: valorant
    },

    {
      nome: "Rocket League",
      genero: "Esporte",
      empresa: "Epic Games",
      imagem: rocketleague
      
    },

    {
      nome: "Minecraft",
      genero: "Sandbox",
      empresa: "Mojang",
      imagem: minecraft
    },

    {
      nome: "Fortnite",
      genero: "Battle Royale",
      empresa: "Epic Games",
      imagem: fortnite
    }
    
  ])

  return (
    <>
      <h1>   JOGOS PC    </h1>

      <h2>Total de cards: {listaJogos.length}</h2>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {
          listaJogos.map((jogo, index) => (

            <JogoCard
              key={index}
              nome={jogo.nome}
              genero={jogo.genero}
              empresa={jogo.empresa}
              imagem={jogo.imagem}
            />

          ))
        }

      </section>
    </>
  )
}


export default App