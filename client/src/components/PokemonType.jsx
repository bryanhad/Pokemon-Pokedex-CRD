export default function PokemonType({type}) {
    let customStyle = ''

    const grassStyle = 'text-green-500 bg-green-200/50'
    const waterStyle = 'text-blue-500 bg-blue-200/50'
    const fireStyle = 'text-red-500 bg-red-200/50'

    switch(type) {
        case 'grass' : customStyle = grassStyle; break
        case 'water' : customStyle = waterStyle; break
        case 'fire' : customStyle = fireStyle; break
    }

  return (
    <p className={`px-2 rounded-md ${customStyle}`}>{type}</p>
  )
}
