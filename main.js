let villeChoisie = "Mulhouse";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=e5a36c96e4f919768a9401a2b23e702e&units=metric';

    let requete = new XMLHttpRequest(); // Objet qui nous permettra de faire des requêtes
    requete.open('GET', url); // Récupére les données
    requete.responseType = 'json'; // JSON
    requete.send(); // Envoyer notre requête

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            // console.log(reponse);
            let temperature = reponse.main.temp;
            let ville       = reponse.name;
            // console.log(temperature);
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
        }
        else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
        }
        }
    }
}