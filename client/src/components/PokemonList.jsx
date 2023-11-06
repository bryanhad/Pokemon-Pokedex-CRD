import { useSelector } from "react-redux"
import Loading from "./Loading"
import Container from "./Container"
import PokemonCard from "./PokemonCard"

export default function PokemonList({ isLoading }) {
    const { pokemons } = useSelector((state) => state.pokemonStore)
    return (
        <Container className="flex-[1]">
            {isLoading ? (
                <Loading className="mt-[150px] mx-auto" />
            ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </section>
            )}
        </Container>
    )
}
