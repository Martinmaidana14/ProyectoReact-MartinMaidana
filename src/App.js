import ProfileCard from "./components/ProfileCard";

import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import SearchBar from "./components/SearchBar/SearchBar";
import searchImages from "./components/api/api";
import ImageList from "./components/ImageList/ImageList";
import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes , Route } from "react-router-dom";


import "bulma/css/bulma.css";

//Componente principal de mi App
function App(){

    const [img , setImg] = useState([]);

    const handleSubmit = async (term)=>{
        const resultado = await searchImages(term);
        setImg(resultado);
    }


    return (


        <div>

            <section className="hero is-success">
                <div className="hero-body">
                    <BrowserRouter>
                        <NavBar />

                        <Routes>

                            <Route path="/" element={<ItemListContainer />} />

                            <Route path="/category/:categoryId" element={<ItemListContainer />} />

                            <Route path="/item/:itemId" element={<ItemDetailContainer />} />

                            <Route path="*" element={<h1>404 NOT FOUND</h1>} />  

                        </Routes>

                        <footer>Footer</footer>

                    </BrowserRouter>
                </div>
            </section>

        </div>
    );
}


export default App;



        //Primer enfoque no recomendado
            /* <div>
                <img/>
                <h3>Alexa</h3>
            </div>
            <div>
                <img/>
                <h3>Cortana</h3>
            </div>
            <div>
                <img/>
                <h3>Siri</h3>
            </div> */