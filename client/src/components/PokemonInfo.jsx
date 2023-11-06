import PokemonType from "./PokemonType"
import Label from "./form/Label"

export default function PokemonInfo({ label, info }) {
    return (
        <div className="flex flex-col gap-2 items-start">
            <Label>{label}</Label>
            {label.includes("Type") ? (
                <PokemonType type={info} />
            ) : (
                <p className="font-semibold">{info}</p>
            )}
        </div>
    )
}
