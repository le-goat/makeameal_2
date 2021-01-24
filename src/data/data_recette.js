const recettes = [
    {
        id_recette: 1,
        nom_recette: "Boeuf Bourguignon",
        note_utilisateur: 4,
        dificulte: 2
    },
    {
        id_recette: 2,
        nom_recette: "Gratin Dauphinois",
        note_utilisateur: 4,
        dificulte: 3
    }
];

export function getRecettes() {
    return recettes;
}

export function getName(id) {
    return recettes.find(m => m.id_recette === id);
}