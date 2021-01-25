import React, { Component } from "react";
import '../Recette.css';
/*import { getRecettes } from '../data/data_recette';
import { getName } from "../data/data_recette";
import { getNote } from "../data/data_recette";
import { getDifficulte } from "../data/data_recette";
import { getRecette } from "../data/data_recette";*/
import Image from "../Images/recette/0.jpg";

class Recette extends Component {
    state = {
        list_recettes: [1, 2]
    };
    afficheRecette() {
        let nom_recette = "Boeuf Bourguignon";//getName(id);
        let note = "Note des utilisateurs : 4";//getNote(id);
        let difficulte = "Difficulté de la recette : 2";//getDifficulte(id);
        let text_recette = "Dans une cocotte en fonte, faire fondre le beurre. Mettre les lardons à rissoler et au bout de quelques minutes ajouter la viande dégraissée et coupée en très gros cubes. Laisser roussir la viande. Quand elle a bien doré sur toutes ses faces, saupoudrer une cuiller à soupe rase de farine, mélanger. Ajouter ensuite le bouillon cube de bœuf dissous dans 250 ml d’eau, le vin, la branche de thym et le laurier. La viande doit être entièrement couverte. Saler, poivrer. Amener à ébullition et laisser à faible bouillonnement pendant 1h. Au bout d’une heure de cuisson ajouter les carottes coupées en rondelles assez épaisses. Puis au bout d’une ½ heure de plus ajouter les oignons grelots. Laisser encore cuire une bonne ½ heure (on est à 2h de cuisson en tout) voire 1 heure ou plus si vous trouvez que votre viande est encore un peu dure. 10 minutes avant de servir ajouter un carré de chocolat noir ; je mets quelques fois un chocolat noir à l’orange, ce n’est pas mal du tout => mettre un tout petit carré dans ce cas ou ½ carré car le goût de l’orange est sinon trop prononcé. On peut également mettre 1/4 de cuiller à café de 4 épices.";//getRecette(id);
        return(<div className='box'>
            <div className='sub-box'>
                <h2 className='titre_recette'>{nom_recette}</h2>
                <img className="image_recette" src={Image} alt="recette"/>
                <p className='avis'>{note}</p>
                <p className='difficulte'>{difficulte}</p>
            </div>
            <p className='recette_content'>{text_recette}</p>
        </div>)
    }
    render() {
        //let data = getRecettes();
        return(this.afficheRecette(2));
        /*this.state.list_recettes.forEach(function (value){
                let nom_recette = getName(value);
                let note = getNote(value);
                let difficulte = getDifficulte(value);
                return (
                    <div className="recette_result">
                        <a className="link_recette" onClick={this.afficheRecette(value)}>
                            <h3 className="titre_recette">{nom_recette}</h3>
                            <img className="image_recette" src={`../Images/recette/${value}`} alt="photo de la recette"/>
                            <div className="notes_recette">
                                <p className='avis'>{note}</p>
                                <p className='difficulte'>{difficulte}</p>
                            </div>
                        </a>

                    </div>
                )
        });*/
        /*for (let i=0; i < this.state.list_recettes.length; i++) {
            let nom_recette = getName(i);
            let note = getNote(i);
            let difficulte = getDifficulte(i);
            return (
                <div className="recette_result">
                    <a className="link_recette" onClick={this.afficheRecette()}>
                        <h3 className="titre_recette">{nom_recette}</h3>
                        <img className="image_recette" src={Image} alt="photo de la recette"/>
                        <div className="notes_recette">
                            <p className='avis'>{note}</p>
                            <p className='difficulte'>{difficulte}</p>
                        </div>
                    </a>

                </div>
            )
        }*/
    }
}

export default Recette;