import ProfileCard from "./components/ProfileCard";

import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "bulma/css/bulma.css";

//Componente principal de mi App
function App(){

    return (

        <div>
            <section className="hero is-success">
                <div className="hero-body">
                    <h1 className="title">Asistentes</h1>
                    <NavBar />
                    <p className="subtitle">Success subtitle</p>
                    <ItemListContainer greeting={'Bienvenido/a'}/>
                </div>
            </section>

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