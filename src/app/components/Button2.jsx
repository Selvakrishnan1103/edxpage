export default function ButtonTwo({name}){
    return(
        <div>
            <button className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 border-1 border-orange-600 p-2 rounded-full transition-all duration-300 font-semibold">{name}</button>
        </div>
    )
}