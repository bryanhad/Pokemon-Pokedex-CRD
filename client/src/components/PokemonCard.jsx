import { Link } from "react-router-dom";
import PokemonType from "./PokemonType";

export default function PokemonCard({pokemon}) {
  return (
    <div className="relative shadow-md w-full max-h-max flex flex-col gap-4 p-4">
        <Link to={`/pokemon/${pokemon.id}`} className="flex flex-col  gap-4 flex-[1] group">
            <div className="h-[200px]">
                <img className="w-full h-full object-contain group-hover:scale-105 duration-300"  src={pokemon.image} alt="" />
            </div>
            <div className="flex flex-col gap-3 flex-[1]">
                <div className="flex justify-between">
                    <h2 className="font-bold">{pokemon.name}</h2>
                    <PokemonType type={pokemon.type}/>
                </div>
                <p className="text-sm font-light flex-[1]">{pokemon.description}</p>
            </div>
        </Link>
        <button className="btn btn-error">
            DELETE
        </button>
    </div>
  )
}
