"use client";
import React from 'react';
import Card from "./CardPessoas";
import { useState } from 'react';
import CardPessoas from './CardPessoas';

export default function Home(){ 
  const [pessoas, setPessoas] = useState([
    {nome: "Marcelo", email: "map@gmail.com", idade: 88},
    {nome: "Thiago"},
    {nome: "Luiza", idade:17},
    {nome: "Julia", email: "juguar@gmail.com", idade:17},
    {nome: "Ana Julia"},  

  ])
  return (
    <div>
      {pessoas.map((pessoa, index) => (
        <CardPessoas
        key={index}
        nome={pessoa.nome}
        email={pessoa.email}
        idade={pessoa.idade}
        />
      ))}    
    </div>
  );
}