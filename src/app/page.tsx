import PokemonTable from '@/components/PokemonTable'
import React from 'react'

export default async function Home() {
  let data
  try {
    const req = await fetch('http://localhost:3000/api/search', {
      method: 'GET',
    })
    const dataReq = await req.json()
    data = dataReq
  } catch (e) {
    console.log(e)
  }

  return (
    <main>
      <PokemonTable pokemons={data} />
    </main>
  )
}
