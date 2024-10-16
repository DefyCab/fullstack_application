import { useEffect, useState } from "react"

export default function GetAnagram() {
    const [anagram, setAnagrams] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/anagrams")
            .then((result) => result.json())
            .then((anagrams) => {
                setAnagrams(anagrams)
            })
    }, [])

    return (
        <div>
            <h1>Your name:</h1>
            <h1>Your Anagrams:</h1>
        </div>
    )
}