import React, { Component } from "react";
import { getRecettes } from '../data/data_recette';
import { getName } from "../data/data_recette";
import { getNote } from "../data/data_recette";
import { getDifficulte } from "../data/data_recette";
import { getRecette } from "../data/data_recette";

class Recette extends Component {
    state = {
        list_recettes: [1, 2]
    };
    afficheRecette(id) {
        let nom_recette = getName(id);
        let note = getNote(id);
        let difficulte = getDifficulte(id);
        let text_recette = getRecette(id);
        return(<div className='box'>
            <h2 className='titre-recette'>{nom_recette}</h2>
            <img className="image_recette" src={`.../public/recette/${id}`} alt="photo de la recette"/>
            <div className="notes_recette">
                <p className='avis'>{note}</p>
                <p className='difficulte'>{difficulte}</p>
            </div>
            <p className='recette_content'>{text_recette}</p>
        </div>)
    }
    render() {
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
        for (let i=0; i < this.state.list_recettes.length; i++) {
            let nom_recette = getName(i);
            let note = getNote(i);
            let difficulte = getDifficulte(i);
            return (
                <div className="recette_result">
                    <a className="link_recette" onClick={this.afficheRecette(i)}>
                        <h3 className="titre_recette">{nom_recette}</h3>
                        <img className="image_recette" src={`../Images/recette/${i}`} alt="photo de la recette"/>
                        <div className="notes_recette">
                            <p className='avis'>{note}</p>
                            <p className='difficulte'>{difficulte}</p>
                        </div>
                    </a>

                </div>
            )
        }
    }
}

export default Recette;