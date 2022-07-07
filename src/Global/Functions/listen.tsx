import { utterance } from "./utterance";

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new speechRecognition();

mic.continue = true;
mic.interimResults = true;
mic.lang = "en-US";

export function listen() {
  utterance("hello");
  try {
    mic.start();
    mic.onend = () => {
      // console.log("Continuing to listen.");
      mic.start();
    };
    mic.onStart = () => {
      console.log("listening");
    };
    mic.onresult = (event: any) => {
      Array.from(event.results).map((result: any) => {
        if (result?.isFinal) {
          const transcript = result[0].transcript;
          console.log(transcript);
          utterance("hello");
        }
      });
    };
    mic.onerror = (event: any) => {
      throw event.error;
    };
  } catch (error) {
    console.log(error);
  }
}
