import Label from "./Label"

export default function FormInput({ input, onChange }) {
    if (input.type === "textArea")
        return (
            <div className="flex flex-col gap-2">
                <Label htmlFor={input.id}>{input.label}</Label>
                <textarea
                id={input.id}
                name={input.id}
                    onChange={(e) => onChange(e)}
                    className="textarea textarea-bordered w-full"
                    placeholder={input.placeholder}
                ></textarea>
            </div>
        )
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={input.id}>{input.label}</Label>
            <input
                onChange={(e) => onChange(e)}
                id={input.id}
                name={input.id}
                type={input.type}
                placeholder={input.placeholder}
                className="input input-bordered w-full"
            />
        </div>
    )
}
