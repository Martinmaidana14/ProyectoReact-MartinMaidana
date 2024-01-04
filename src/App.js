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
                    <h1 className="title">Asistentes</h1>
                    <BrowserRouter>
                        <NavBar />

                        <Routes>

                            <Route path="/" element={<ItemListContainer/>}/>

                            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>

                            <Route path="/item/:itemId" element={<ItemListContainer/>} />

                            <Route path="*" element={<h1>404 NOT FOUND</h1>} />  

                        </Routes>

                        <footer>Footer</footer>

                    </BrowserRouter>
                    <p className="subtitle">Success subtitle</p>
                    <ItemListContainer greeting={'Bienvenido/a'}/>
                    <ItemDetailContainer />
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                </div>
            </section>

            <div>
                <SearchBar enSubmit={handleSubmit}/>
                <ImageList images={img}/>
            </div>
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" arroba="@Alexa22" img={AlexaImg} />
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" arroba="@Cortana66" img={CortanaImg} />
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" arroba="@Siri77" img={SiriImg} />
                    </div>
                </div>
            </div>
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