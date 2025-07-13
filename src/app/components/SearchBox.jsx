import { useState } from "react"

export default function SearchBox(){
    const [search, setSearch] = useState("")
    const handleSubmit = () =>{
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="What do you want to learn "
                    className="border-1 p-3 border-grey-500"
                />
            </form>
        </div>
    )
}