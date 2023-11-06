import { Link, NavLink } from "react-router-dom"

export default function SideNav({className}) {
    const links = [
        {name: 'Home', to: '/'},
        {name: 'Add', to: '/add'},
        {name: 'Fire', to: '/fire'},
        {name: 'Water', to: '/water'},
        {name: 'Grass', to: '/grass'},
    ]


  return (
    <nav className={`p-6 bg-white border-r-2 border-slate-200 ${className}`}>
            <Link className="text-xl font-light">Pokedex</Link>
            <div className="mt-4 flex flex-col gap-2 links-container">
                {links.map((link, i) => (
                    <NavLink key={i} to={link.to} className='p-2 rounded-md'>{link.name}</NavLink>
                ))}
            </div>
    </nav>
  )
}
