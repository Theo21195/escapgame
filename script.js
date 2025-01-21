// Variables pour le jeu
const startGameButton = document.getElementById('startGame');
const gameSection = document.getElementById('game');
const endGameSection = document.getElementById('endGame');
const submitCodeButton = document.getElementById('submitCode');
const inputCode = document.getElementById('inputCode');
const feedback = document.getElementById('feedback');

// Code correct pour la première énigme (année de la Révolution Française)
const correctCode = "1789";

// Démarrer le jeu
startGameButton.addEventListener('click', () => {
    document.getElementById('introduction').style.display = 'none';
    gameSection.style.display = 'block';
});

// Vérifier le code
submitCodeButton.addEventListener('click', () => {
    if (inputCode.value === correctCode) {
        feedback.textContent = "Bravo ! Vous avez réussi l'énigme.";
        feedback.style.color = "green";
        setTimeout(() => {
            gameSection.style.display = 'none';
            endGameSection.style.display = 'block';
        }, 2000);
    } else {
        feedback.textContent = "Code incorrect. Réessayez.";
        feedback.style.color = "red";
    }
});
