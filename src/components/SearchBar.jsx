import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="flex justify-around" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
      className="text-back"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="font-extrabold text-neutral-50/100 ring-2 ring-neutral-50 ring-inset px-8" type="submit" value="Agregar" />
    </form>
  );
}
