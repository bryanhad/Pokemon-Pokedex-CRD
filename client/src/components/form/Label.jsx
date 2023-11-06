export default function Label({ children, htmlFor }) {
    return (
        <label className="font-semibold text-slate-500" htmlFor={htmlFor}>
            {children}
        </label>
    )
}
