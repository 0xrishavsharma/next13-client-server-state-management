import { Pokemon } from '@/types'
import PokemonTable from './PokemonTable'

export default function SSRPokemonTable({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div>
      <PokemonTable pokemons={[]} />
    </div>
  )
}
