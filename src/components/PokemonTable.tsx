import { Pokemon } from '@/types'
const PokemonTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((p) => {
          return (
            <tr key={p.name}>
              <td>{p.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PokemonTable
