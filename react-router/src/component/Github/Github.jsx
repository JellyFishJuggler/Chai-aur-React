import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect(() =>{
// //kya krta h yeh -> yeh ek api call krta h -> fir -> data fetch krta h -> fir -> data ko display krta h
//         fetch("https://api.github.com/users/JellyFishJuggler")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setData(data)
//         })
//     }, [])

  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img  src={data.avatar_url} alt="git_pic" width={300}/></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await  fetch("https://api.github.com/users/JellyFishJuggler")
   return response.json()
}