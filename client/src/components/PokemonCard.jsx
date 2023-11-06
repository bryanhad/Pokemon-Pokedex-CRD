import { Link } from "react-router-dom";
import PokemonType from "./PokemonType";
import { PokemonAction } from "../store/pokemonAction";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

export default function PokemonCard({pokemon}) {
    const dispatch = useDispatch()
    async function handleDelete(id) {
        Swal.fire({
            title: "Are you sure you want to delete?",
            showCancelButton: true,
            confirmButtonText: "Yeap",
          }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    dispatch(await PokemonAction.deleteById(id))
                    Swal.fire("Deleted!", "", "success");
                } catch (err) {
                    console.log(err)
                }
            }
          });
    }

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
        <button onClick={() => handleDelete(pokemon.id)} className="btn btn-error">
            DELETE
        </button>
    </div>
  )
}
