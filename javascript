function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR'; // Langue française
  synth.speak(utterance);
}
