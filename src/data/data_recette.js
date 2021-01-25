const recettes = [
    {
        id_recette: 1,
        nom_recette: "Boeuf Bourguignon",
        note_utilisateur: 4,
        difficulte: 2,
        text_recette: "Dans une cocotte en fonte, faire fondre le beurre. Mettre les lardons à rissoler et au bout de quelques minutes ajouter la viande dégraissée et coupée en très gros cubes. Laisser roussir la viande. Quand elle a bien doré sur toutes ses faces, saupoudrer une cuiller à soupe rase de farine, mélanger. Ajouter ensuite le bouillon cube de bœuf dissous dans 250 ml d’eau, le vin, la branche de thym et le laurier. La viande doit être entièrement couverte. Saler, poivrer.\n" +
            "Amener à ébullition et laisser à faible bouillonnement pendant 1h.\n" +
            "Au bout d’une heure de cuisson ajouter les carottes coupées en rondelles assez épaisses. Puis au bout d’une ½ heure de plus ajouter les oignons grelots. Laisser encore cuire une bonne ½ heure (on est à 2h de cuisson en tout) voire 1 heure ou plus si vous trouvez que votre viande est encore un peu dure.\n" +
            "10 minutes avant de servir ajouter un carré de chocolat noir ; je mets quelques fois un chocolat noir à l’orange, ce n’est pas mal du tout => mettre un tout petit carré dans ce cas ou ½ carré car le goût de l’orange est sinon trop prononcé. On peut également mettre 1/4 de cuiller à café de 4 épices."
    },
    {
        id_recette: 2,
        nom_recette: "Gratin Dauphinois",
        note_utilisateur: 4,
        difficulte: 3,
        text_recette: "Eplucher, laver et couper les pommes de terre en rondelles fines (NB : ne pas les laver APRES les avoir coupées, car l'amidon est nécessaire à une consistance correcte).\n" +
            "Hacher l'ail très finement.\n" +
            "Porter à ébullition dans une casserole le lait, l'ail, le sel, le poivre et la muscade puis y plonger les pommes de terre et laisser cuire 10 à 15 min, selon leur fermeté.\n" +
            "Préchauffer le four à 180°C (thermostat 6) et beurrer un plat à gratin.\n" +
            "Placer les pommes de terre égouttées dans le plat. Les recouvrir de crème, puis disposer des petites noix de beurre sur le dessus.\n" +
            "Enfourner pour 50 min à 1 heure de cuisson."
    }
];

export function getRecettes() {
    return recettes;
}

export function getName(id) {
    //return recettes.filter(item => item.id_recette.includes(id));
    return recettes.find(m => m.id_recette === id);
}

export function getNote(id) {
    return recettes[id][3];
}

export function getDifficulte(id) {
    return recettes[id][4];
}

export function getRecette(id) {
    return recettes[id][5]
}