import React, { useEffect, useState } from "react"
import client from 'services/client';
import { userNodeType } from "typings";
import Search from "components/Search";
import { getUsers } from "querys";

function App() {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(term: string) {
        setSearchTerm(term)
    }
    
    useEffect(()=>{
        if(searchTerm) {
            (async() => {
                const variables = {
                    search: searchTerm
                }
                const data = await client.request(getUsers, variables)
                setUsers(data.search.edges)
            })()
        }
    }, [searchTerm])

    return (
        <div className="App">
            <Search onChange={handleSearch} />
            {users.map((user:userNodeType) => <div key={user.node.id}>{user.node.name}</div>)}
        </div>
    )
}

export default App
