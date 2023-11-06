import { useEffect, useState } from "react";
import Title from "../components/Title";
import { PokemonAction } from "../store/pokemonAction";
import { useParams } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch()
    const {type} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            try {
                dispatch(await PokemonAction.fetchAll())
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [type, dispatch])
  return (
    <>
        <Title>Pokemon List</Title>
        <PokemonList isLoading={isLoading}/>
    </>
  )
}
