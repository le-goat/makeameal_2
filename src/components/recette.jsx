import React, { Component } from "react";
import { getRecettes } from '../data/data_recette';


class Recette extends Component {
    state = {
        recettes: getRecettes()
    };
    afficheRecette(id) {
        let nom_recette = recettes.find(m => m.id_recette === id);
        let note = ;
        let dificulte = ;
        return(<div className='box'>
            <h2 className='titre-recette'>{nom_recette}</h2>
            <img className="image_recette" src={`.../public/recette/${id}`} alt="photo de la recette"/>
            <div className="notes_recette">
                <p className='avis'>{}</p>
                <p className='dificulte'>{}</p>
            </div>
        </div>)
    }
}