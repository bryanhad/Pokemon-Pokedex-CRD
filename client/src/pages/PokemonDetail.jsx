import { useParams } from "react-router-dom"
import Container from "../components/Container"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import { PokemonAction } from "../store/pokemonAction"
import { useDispatch, useSelector } from "react-redux"
import Loading from "../components/Loading"
import PokemonInfo from "../components/PokemonInfo"

export default function PokemonDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const { pokemonDetail } = useSelector((state) => state.pokemonStore)
    useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            try {
                dispatch(await PokemonAction.fetchById(id))
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [dispatch, id])
    return (
        <>
            <Title>Pokemon Detail</Title>
            <Container className="">
                {isLoading ? (
                    <Loading className="my-[100px] mx-auto" />
                ) : (
                    <section className="flex gap-6">
                        <div className="flex-[1] group cursor-pointer">
                            <img
                                src={pokemonDetail.image}
                                className="w-full h-full object-cover scale-75 group-hover:scale-[80%] duration-300"
                                alt=""
                            />
                        </div>
                        <div className="flex-[2] flex flex-col gap-4 p-4">
                            <div className="grid grid-cols-3">
                                <PokemonInfo
                                    label="Pokemon Name"
                                    info={pokemonDetail.name}
                                />
                                <PokemonInfo
                                    label="Pokemon Weight"
                                    info={pokemonDetail.weight}
                                />
                                <PokemonInfo
                                    label="Pokemon Type"
                                    info={pokemonDetail.type}
                                />
                            </div>
                            <PokemonInfo
                                label="Pokemon Description"
                                info={pokemonDetail.description}
                            />
                        </div>
                    </section>
                )}
            </Container>
        </>
    )
}
