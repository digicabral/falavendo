const TtsService = {
  speak(text: string) {
    if (!("speechSynthesis" in window)) {
      console.warn("Text-to-Speech não suportado neste navegador");
      return;
    }

    // Cancela fala anterior (evita sobreposição)
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  },
};

export default TtsService;
