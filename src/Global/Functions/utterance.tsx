type UtteranceProps = {
  text: string;
};

export function utterance({ text }: UtteranceProps) {
  try {
    const allVoices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    // utterance.rate = 1;
    utterance.volume = 1;
    utterance.voice = allVoices[51];
    speechSynthesis.speak(utterance);
    //   };
  } catch (error) {
    throw error;
  }
}
