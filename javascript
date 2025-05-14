function launchAlbertai() {
  const phrase = "Connexion à Albert-AI.X établie. Le système cérébral est opérationnel.";
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "fr-FR";

  // Stop previous speech if any
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);

  // Lecture du son de démarrage
  const sound = document.getElementById('startupSound');
  sound.currentTime = 0;
  sound.play();

  logToConsole("🧠 Activation initiale du cerveau...");
  activateNeurons();
}
