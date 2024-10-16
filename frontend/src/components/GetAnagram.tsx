import { useEffect, useState } from "react";

export default function GetAnagram() {
  const [anagram, setAnagrams]: any = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  const handleVisibility = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    fetch("http://localhost:3000/anagrams")
      .then((result) => result.json())
      .then((anagrams) => {
        setAnagrams(anagrams);
      });
  }, []);

  return (
    <>
      <header>
        <button onClick={handleVisibility}>Show anagrams</button>
      </header>
      <div className={isHidden ? "visible" : "invisible"}>
        {anagram.map((ana: any) => (
          <div key={ana._id}>
            <h1>Your name: {ana.name}</h1>
            <h1>Your anagrams: {ana.anagram}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
