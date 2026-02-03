import * as Speech from 'expo-speech';

const TtsService = {
  speak: (text) => {
    Speech.speak(text, { language: 'pt-BR' });
  },
};

export default TtsService;
