import { useState } from "react";
import "../SearchBar/SearchBar.css";

function SearchBar({enSubmit}){

    const [term , setTerm ] = useState("");

    function handleFormSubmit(e){
        e.preventDefault();
        enSubmit(term);
    }
    function handleChange(e){
        setTerm(e.target.value);
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Ingrese su busqueda</label>
                <input value={term} onChange={handleChange}/>
            </form>   
        </div>
    )
}


export default SearchBar;