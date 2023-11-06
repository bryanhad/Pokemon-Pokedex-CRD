import { useState } from "react"
import Container from "../components/Container"
import Title from "../components/Title"
import FormInput from "../components/form/FormInput"
import Label from "../components/form/Label"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { PokemonAction } from "../store/pokemonAction"
import { useNavigate } from "react-router-dom"

export default function AddPokemon() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        description: "",
        weight: "",
        image: "",
        type: "water",
    })

    function handleChange(e) {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        for (const key in form) {
            if (!form[key]) return toast.error('Please fill all the fields')
        }
        try {
            dispatch(await PokemonAction.addNew(form))
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    const formInputs = [
        {
            id: "name",
            label: "Name",
            type: "text",
            placeholder: "Please enter your pokemon name...",
        },
        {
            id: "description",
            label: "Description",
            type: "textArea",
            placeholder: "Please describe your pokemon...",
        },
        {
            id: "weight",
            label: "Weight",
            type: "text",
            placeholder: `Please enter pokemon's weight...`,
        },
        {
            id: "image",
            label: "Image",
            type: "text",
            placeholder: "https://...(jpg/png)",
        },
    ]

    const types = [
        { name: "Water", value: "water" },
        { name: "Fire", value: "fire" },
        { name: "Grass", value: "grass" },
    ]

    return (
        <>
            <Title>Add Pokemon</Title>
            <Container>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {formInputs.map((input) => (
                        <FormInput
                            key={input.id}
                            input={input}
                            onChange={handleChange}
                        />
                    ))}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="type">Pokemon Type</Label>
                        <select
                            id="type"
                            name="type"
                            className="select select-bordered w-full"
                            defaultValue={types[0].value}
                            onChange={(e) => handleChange(e)}
                        >
                            {types.map((type) => (
                                <option key={type.name} value={type.value}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="btn btn-success text-white">
                                ADD NEW POKEMON
                    </button>
                </form>
            </Container>
        </>
    )
}
