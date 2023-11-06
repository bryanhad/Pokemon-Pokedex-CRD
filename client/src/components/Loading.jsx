import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading({className}) {
    return (
            <AiOutlineLoading3Quarters className={`animate-spin text-7xl text-slate-300 ${className}`} />
    )
}
