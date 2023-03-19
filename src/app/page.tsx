import SSRPokemonTable from '@/components/SSRPokemonTable'
import PokemonTable from '@/components/PokemonTable'
import { store } from '@/store'
import { setStartupPokemon } from '@/store/searchSlice'

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
  store.dispatch(setStartupPokemon(data))
  return (
    <main>
      <SSRPokemonTable />
      {/* <PokemonTable pokemons={data} /> */}
    </main>
  )
}
