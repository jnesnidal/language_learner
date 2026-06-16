const LETTERS = [
  { id: "a", char: "अ", roman: "a", family: "Vowel", stage: 0 },
  { id: "aa", char: "आ", roman: "ā", family: "Vowel", stage: 0 },
  { id: "i", char: "इ", roman: "i", family: "Vowel", stage: 0 },
  { id: "ii", char: "ई", roman: "ī", family: "Vowel", stage: 0 },
  { id: "u", char: "उ", roman: "u", family: "Vowel", stage: 0 },
  { id: "uu", char: "ऊ", roman: "ū", family: "Vowel", stage: 1 },
  { id: "r-vowel", char: "ऋ", roman: "ṛ", family: "Vowel", stage: 1 },
  { id: "e", char: "ए", roman: "e", family: "Vowel", stage: 1 },
  { id: "ai", char: "ऐ", roman: "ai", family: "Vowel", stage: 1 },
  { id: "o", char: "ओ", roman: "o", family: "Vowel", stage: 1 },
  { id: "au", char: "औ", roman: "au", family: "Vowel", stage: 1 },
  { id: "anusvara", char: "अं", roman: "aṃ", family: "Vowel", stage: 1 },
  { id: "visarga", char: "अः", roman: "aḥ", family: "Vowel", stage: 1 },

  { id: "matra-a", char: "क", roman: "ka", family: "Vowel mātrā", stage: 2 },
  { id: "matra-aa", char: "का", roman: "kā", family: "Vowel mātrā", stage: 2 },
  { id: "matra-i", char: "कि", roman: "ki", family: "Vowel mātrā", stage: 2 },
  { id: "matra-ii", char: "की", roman: "kī", family: "Vowel mātrā", stage: 2 },
  { id: "matra-u", char: "कु", roman: "ku", family: "Vowel mātrā", stage: 2 },
  { id: "matra-uu", char: "कू", roman: "kū", family: "Vowel mātrā", stage: 2 },
  { id: "matra-r", char: "कृ", roman: "kṛ", family: "Vowel mātrā", stage: 2 },
  { id: "matra-e", char: "के", roman: "ke", family: "Vowel mātrā", stage: 2 },
  { id: "matra-ai", char: "कै", roman: "kai", family: "Vowel mātrā", stage: 2 },
  { id: "matra-o", char: "को", roman: "ko", family: "Vowel mātrā", stage: 2 },
  { id: "matra-au", char: "कौ", roman: "kau", family: "Vowel mātrā", stage: 2 },

  { id: "ka", char: "क", roman: "ka", family: "Velar consonant", stage: 3 },
  { id: "kha", char: "ख", roman: "kha", family: "Velar consonant", stage: 3 },
  { id: "ga", char: "ग", roman: "ga", family: "Velar consonant", stage: 3 },
  { id: "gha", char: "घ", roman: "gha", family: "Velar consonant", stage: 3 },
  { id: "nga", char: "ङ", roman: "nga", family: "Velar consonant", stage: 3 },

  { id: "ca", char: "च", roman: "ca", family: "Palatal consonant", stage: 4 },
  { id: "cha", char: "छ", roman: "cha", family: "Palatal consonant", stage: 4 },
  { id: "ja", char: "ज", roman: "ja", family: "Palatal consonant", stage: 4 },
  { id: "jha", char: "झ", roman: "jha", family: "Palatal consonant", stage: 4 },
  { id: "nya", char: "ञ", roman: "ña", family: "Palatal consonant", stage: 4 },

  { id: "tta", char: "ट", roman: "ṭa", family: "Retroflex consonant", stage: 5 },
  { id: "ttha", char: "ठ", roman: "ṭha", family: "Retroflex consonant", stage: 5 },
  { id: "dda", char: "ड", roman: "ḍa", family: "Retroflex consonant", stage: 5 },
  { id: "ddha", char: "ढ", roman: "ḍha", family: "Retroflex consonant", stage: 5 },
  { id: "nna", char: "ण", roman: "ṇa", family: "Retroflex consonant", stage: 5 },

  { id: "ta", char: "त", roman: "ta", family: "Dental consonant", stage: 6 },
  { id: "tha", char: "थ", roman: "tha", family: "Dental consonant", stage: 6 },
  { id: "da", char: "द", roman: "da", family: "Dental consonant", stage: 6 },
  { id: "dha", char: "ध", roman: "dha", family: "Dental consonant", stage: 6 },
  { id: "na", char: "न", roman: "na", family: "Dental consonant", stage: 6 },

  { id: "pa", char: "प", roman: "pa", family: "Labial consonant", stage: 7 },
  { id: "pha", char: "फ", roman: "pha", family: "Labial consonant", stage: 7 },
  { id: "ba", char: "ब", roman: "ba", family: "Labial consonant", stage: 7 },
  { id: "bha", char: "भ", roman: "bha", family: "Labial consonant", stage: 7 },
  { id: "ma", char: "म", roman: "ma", family: "Labial consonant", stage: 7 },

  { id: "ya", char: "य", roman: "ya", family: "Approximant", stage: 8 },
  { id: "ra", char: "र", roman: "ra", family: "Approximant", stage: 8 },
  { id: "la", char: "ल", roman: "la", family: "Approximant", stage: 8 },
  { id: "va", char: "व", roman: "va", family: "Approximant", stage: 8 },

  { id: "sha", char: "श", roman: "śa", family: "Sibilant", stage: 9 },
  { id: "ssa", char: "ष", roman: "ṣa", family: "Sibilant", stage: 9 },
  { id: "sa", char: "स", roman: "sa", family: "Sibilant", stage: 9 },
  { id: "ha", char: "ह", roman: "ha", family: "Glottal consonant", stage: 9 },
];

const STAGES = [
  { title: "First steps", subtitle: "Short vowels", family: "Vowel", icon: "अ" },
  { title: "Vowel set", subtitle: "Complete the vowels", family: "Vowel", icon: "ए" },
  { title: "Vowel mātrās", subtitle: "Vowels attached to क", family: "Vowel mātrā", icon: "का" },
  { title: "The ka row", subtitle: "Velar sounds", family: "Velar consonant", icon: "क" },
  { title: "The ca row", subtitle: "Palatal sounds", family: "Palatal consonant", icon: "च" },
  { title: "The ṭa row", subtitle: "Retroflex sounds", family: "Retroflex consonant", icon: "ट" },
  { title: "The ta row", subtitle: "Dental sounds", family: "Dental consonant", icon: "त" },
  { title: "The pa row", subtitle: "Labial sounds", family: "Labial consonant", icon: "प" },
  { title: "Flowing sounds", subtitle: "Approximants", family: "Approximant", icon: "य" },
  { title: "Final sounds", subtitle: "Sibilants and ha", family: "Final consonants", icon: "श" },
];

const FAMILY_INFO = {
  Vowel: {
    label: "Vowels",
    summary: "Open vocal-tract sounds that can form syllables by themselves.",
  },
  "Vowel mātrā": {
    label: "Vowel mātrās",
    summary: "Vowel signs attached to a consonant, replacing its inherent a.",
  },
  "Velar consonant": {
    label: "Velar",
    summary: "Made with the back of the tongue against or near the soft palate.",
  },
  "Palatal consonant": {
    label: "Palatal",
    summary: "Made with the tongue raised toward the hard palate.",
  },
  "Retroflex consonant": {
    label: "Retroflex",
    summary: "Made by curling the tongue tip back toward the roof of the mouth.",
  },
  "Dental consonant": {
    label: "Dental",
    summary: "Made with the tongue touching or approaching the upper teeth.",
  },
  "Labial consonant": {
    label: "Labial",
    summary: "Made primarily with the lips.",
  },
  Approximant: {
    label: "Approximants",
    summary: "Made by narrowing the vocal tract without creating turbulent friction.",
  },
  Sibilant: {
    label: "Sibilants",
    summary: "Fricative sounds made by directing a narrow stream of air along the tongue.",
  },
  "Glottal consonant": {
    label: "Glottal",
    summary: "Made at the glottis, the opening between the vocal folds.",
  },
  "Final consonants": {
    label: "Sibilants + h",
    summary: "Friction sounds श, ष, स plus glottal ह.",
  },
  "Consonant mātrā": {
    label: "Consonant mātrās",
    summary: "Known consonants combined with explicit vowel signs.",
  },
};

const STORAGE_KEY = "akshara-progress-v1";
const MASTERY_ATTEMPTS = 4;
const MASTERY_ACCURACY = 0.75;
const BLACKOUT_ATTEMPTS = 8;
const BLACKOUT_ACCURACY = 0.9;
const DERIVED_MATRA_CHANCE = 0.35;
const CLUSTER_ONLY_CONSONANT_IDS = new Set(["nga", "nya"]);

const DERIVED_MATRAS = [
  { id: "aa", sign: "\u093e", vowel: "\u0101", ipaVowel: "a\u02d0" },
  { id: "i", sign: "\u093f", vowel: "i", ipaVowel: "\u026a" },
  { id: "ii", sign: "\u0940", vowel: "\u012b", ipaVowel: "i\u02d0" },
  { id: "u", sign: "\u0941", vowel: "u", ipaVowel: "\u028a" },
  { id: "uu", sign: "\u0942", vowel: "\u016b", ipaVowel: "u\u02d0" },
  { id: "r", sign: "\u0943", vowel: "\u1e5b", ipaVowel: "r\u026a" },
  { id: "e", sign: "\u0947", vowel: "e", ipaVowel: "e\u02d0" },
  { id: "ai", sign: "\u0948", vowel: "ai", ipaVowel: "\u025b\u02d0" },
  { id: "o", sign: "\u094b", vowel: "o", ipaVowel: "o\u02d0" },
  { id: "au", sign: "\u094c", vowel: "au", ipaVowel: "\u0254\u02d0" },
];

const LETTER_DISPLAY = {
  a: { char: "\u0905", roman: "a", ipa: "\u0259" },
  aa: { char: "\u0906", roman: "\u0101", ipa: "a\u02d0" },
  i: { char: "\u0907", roman: "i", ipa: "\u026a" },
  ii: { char: "\u0908", roman: "\u012b", ipa: "i\u02d0" },
  u: { char: "\u0909", roman: "u", ipa: "\u028a" },
  uu: { char: "\u090a", roman: "\u016b", ipa: "u\u02d0" },
  "r-vowel": { char: "\u090b", roman: "\u1e5b", ipa: "r\u026a" },
  e: { char: "\u090f", roman: "e", ipa: "e\u02d0" },
  ai: { char: "\u0910", roman: "ai", ipa: "\u025b\u02d0" },
  o: { char: "\u0913", roman: "o", ipa: "o\u02d0" },
  au: { char: "\u0914", roman: "au", ipa: "\u0254\u02d0" },
  anusvara: { char: "\u0905\u0902", roman: "a\u1e43", ipa: "\u0259\u0303" },
  visarga: { char: "\u0905\u0903", roman: "a\u1e25", ipa: "\u0259h" },
  "matra-a": { char: "\u0915", roman: "ka", ipa: "k\u0259" },
  "matra-aa": { char: "\u0915\u093e", roman: "k\u0101", ipa: "ka\u02d0" },
  "matra-i": { char: "\u0915\u093f", roman: "ki", ipa: "k\u026a" },
  "matra-ii": { char: "\u0915\u0940", roman: "k\u012b", ipa: "ki\u02d0" },
  "matra-u": { char: "\u0915\u0941", roman: "ku", ipa: "k\u028a" },
  "matra-uu": { char: "\u0915\u0942", roman: "k\u016b", ipa: "ku\u02d0" },
  "matra-r": { char: "\u0915\u0943", roman: "k\u1e5b", ipa: "kr\u026a" },
  "matra-e": { char: "\u0915\u0947", roman: "ke", ipa: "ke\u02d0" },
  "matra-ai": { char: "\u0915\u0948", roman: "kai", ipa: "k\u025b\u02d0" },
  "matra-o": { char: "\u0915\u094b", roman: "ko", ipa: "ko\u02d0" },
  "matra-au": { char: "\u0915\u094c", roman: "kau", ipa: "k\u0254\u02d0" },
  ka: { char: "\u0915", roman: "ka", ipa: "k\u0259" },
  kha: { char: "\u0916", roman: "kha", ipa: "k\u02b0\u0259" },
  ga: { char: "\u0917", roman: "ga", ipa: "\u0261\u0259" },
  gha: { char: "\u0918", roman: "gha", ipa: "\u0261\u02b1\u0259" },
  nga: { char: "\u0919", roman: "nga", ipa: "\u014b\u0259" },
  ca: { char: "\u091a", roman: "ca", ipa: "t\u0361\u0283\u0259" },
  cha: { char: "\u091b", roman: "cha", ipa: "t\u0361\u0283\u02b0\u0259" },
  ja: { char: "\u091c", roman: "ja", ipa: "d\u0361\u0292\u0259" },
  jha: { char: "\u091d", roman: "jha", ipa: "d\u0361\u0292\u02b1\u0259" },
  nya: { char: "\u091e", roman: "\u00f1a", ipa: "\u0272\u0259" },
  tta: { char: "\u091f", roman: "\u1e6da", ipa: "\u0288\u0259" },
  ttha: { char: "\u0920", roman: "\u1e6dha", ipa: "\u0288\u02b0\u0259" },
  dda: { char: "\u0921", roman: "\u1e0da", ipa: "\u0256\u0259" },
  ddha: { char: "\u0922", roman: "\u1e0dha", ipa: "\u0256\u02b1\u0259" },
  nna: { char: "\u0923", roman: "\u1e47a", ipa: "\u0273\u0259" },
  ta: { char: "\u0924", roman: "ta", ipa: "t\u032a\u0259" },
  tha: { char: "\u0925", roman: "tha", ipa: "t\u032a\u02b0\u0259" },
  da: { char: "\u0926", roman: "da", ipa: "d\u032a\u0259" },
  dha: { char: "\u0927", roman: "dha", ipa: "d\u032a\u02b1\u0259" },
  na: { char: "\u0928", roman: "na", ipa: "n\u032a\u0259" },
  pa: { char: "\u092a", roman: "pa", ipa: "p\u0259" },
  pha: { char: "\u092b", roman: "pha", ipa: "p\u02b0\u0259" },
  ba: { char: "\u092c", roman: "ba", ipa: "b\u0259" },
  bha: { char: "\u092d", roman: "bha", ipa: "b\u02b1\u0259" },
  ma: { char: "\u092e", roman: "ma", ipa: "m\u0259" },
  ya: { char: "\u092f", roman: "ya", ipa: "j\u0259" },
  ra: { char: "\u0930", roman: "ra", ipa: "r\u0259" },
  la: { char: "\u0932", roman: "la", ipa: "l\u0259" },
  va: { char: "\u0935", roman: "va", ipa: "\u028b\u0259" },
  sha: { char: "\u0936", roman: "\u015ba", ipa: "\u0283\u0259" },
  ssa: { char: "\u0937", roman: "\u1e63a", ipa: "\u0282\u0259" },
  sa: { char: "\u0938", roman: "sa", ipa: "s\u0259" },
  ha: { char: "\u0939", roman: "ha", ipa: "\u0266\u0259" },
};

const elements = {
  navButtons: document.querySelectorAll(".nav-button"),
  views: document.querySelectorAll(".view"),
  stageList: document.querySelector("#stage-list"),
  stageTitle: document.querySelector("#stage-title"),
  practiceModeLabel: document.querySelector("#practice-mode-label"),
  cardPrompt: document.querySelector("#card-prompt"),
  flashcard: document.querySelector("#flashcard"),
  questionLetter: document.querySelector("#question-letter"),
  speakQuestion: document.querySelector("#speak-question"),
  speechStatus: document.querySelector("#speech-status"),
  questionFamily: document.querySelector("#question-family"),
  answerOptions: document.querySelector("#answer-options"),
  feedback: document.querySelector("#feedback"),
  nextButton: document.querySelector("#next-button"),
  keyboardHint: document.querySelector("#keyboard-hint"),
  sessionStreak: document.querySelector("#session-streak"),
  overallProgressLabel: document.querySelector("#overall-progress-label"),
  overallProgressBar: document.querySelector("#overall-progress-bar"),
  progressTrack: document.querySelector(".progress-track"),
  masteredCount: document.querySelector("#mastered-count"),
  masteredTotal: document.querySelector("#mastered-total"),
  accuracyValue: document.querySelector("#accuracy-value"),
  bestStreak: document.querySelector("#best-streak"),
  progressGroups: document.querySelector("#letter-progress-groups"),
  resetProgress: document.querySelector("#reset-progress"),
  synesthesiaToggle: document.querySelector("#synesthesia-toggle"),
  unlockDialog: document.querySelector("#unlock-dialog"),
  unlockTitle: document.querySelector("#unlock-title"),
  unlockCopy: document.querySelector("#unlock-copy"),
  unlockClose: document.querySelector("#unlock-close"),
};

let state = loadState();
let currentLetter = null;
let currentOptions = [];
let answered = false;
let lastLetterId = null;
let hindiVoice = null;
let hindiTts = null;
let hindiTtsReadyPromise = null;
let activeSpeechPlayback = null;
let speechRequestId = 0;
let currentMode = "choice";

const IAST_KEYS = ["ā", "ī", "ū", "ṛ", "ñ", "ṭ", "ḍ", "ṇ", "ś", "ṣ", "ṃ", "ḥ"];
const SYNESTHESIA_COLORS = [
  "#e6194b",
  "#f58231",
  "#ffe119",
  "#3cb44b",
  "#42d4f4",
  "#4363d8",
  "#911eb4",
  "#f032e6",
  "#bfef45",
  "#fabed4",
  "#469990",
];
const SPEAKER_ICON_SVG = `
  <svg class="speaker-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 9v6h4l5 4V5L8 9H4Z"></path>
    <path d="M16 9.5a4 4 0 0 1 0 5"></path>
    <path d="M18.5 7a7 7 0 0 1 0 10"></path>
  </svg>
`;
function initializeHindiTts() {
  if (hindiTtsReadyPromise) return hindiTtsReadyPromise;

  hindiTtsReadyPromise = (async () => {
    if (location.protocol === "file:") return false;

    const { pipeline } = await import(
      "./vendor/transformers/transformers.min.js"
    );
    hindiTts = await pipeline(
      "text-to-speech",
      "Xenova/mms-tts-hin",
      {
        quantized: true,
      },
    );
    return true;
  })().catch((error) => {
    console.error("Hindi MMS TTS failed to load:", error);
    hindiTts = null;
    return false;
  });

  return hindiTtsReadyPromise;
}

function stopSpeechPlayback() {
  activeSpeechPlayback?.stop();
  activeSpeechPlayback?.context?.close();
  activeSpeechPlayback = null;
  window.speechSynthesis?.cancel();
}

function playAudioData(audioData, sampleRate = 24000) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;

  const context = new AudioContext();
  const buffer = context.createBuffer(1, audioData.length, sampleRate);
  buffer.getChannelData(0).set(audioData);

  const source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start();

  return {
    context,
    source,
    stop() {
      try {
        source.stop();
      } catch {
        // Playback already ended.
      }
    },
  };
}

function loadHindiVoice() {
  if (!("speechSynthesis" in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  hindiVoice =
    voices.find((voice) => voice.lang.toLowerCase() === "hi-in") ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("hi")) ??
    null;
  return hindiVoice;
}

function speakWithBrowserFallback(
  letter,
  button,
  { ipaStatus = "", revealIpa = false } = {},
) {
  if (!("speechSynthesis" in window)) {
    button?.classList.remove("speaking");
    if (revealIpa) {
      elements.speechStatus.textContent =
        `${ipaStatus} Speech playback is not supported in this browser.`.trim();
    }
    return;
  }

  const text = speechPromptFor(letter);
  if (!text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "hi-IN";
  utterance.rate = letter.family === "Vowel" ? 0.62 : 0.68;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.voice = hindiVoice ?? loadHindiVoice();

  if (button) button.classList.add("speaking");
  if (revealIpa) {
    elements.speechStatus.textContent =
      `${ipaStatus} Using browser speech fallback.`.trim();
  }

  utterance.onend = () => button?.classList.remove("speaking");
  utterance.onerror = () => {
    button?.classList.remove("speaking");
    if (revealIpa) {
      elements.speechStatus.textContent =
        `${ipaStatus} No Hindi voice is installed in this browser.`.trim();
    }
  };

  window.speechSynthesis.speak(utterance);
}

async function speakHindi(letter, button = null, { revealIpa = false } = {}) {
  const ipa = letterIpa(letter);
  const ipaStatus = revealIpa && ipa ? `IPA target: /${ipa}/.` : "";
  const text = letterSpeech(letter);
  const requestId = ++speechRequestId;

  stopSpeechPlayback();
  button?.classList.add("speaking");
  if (revealIpa) {
    elements.speechStatus.textContent =
      `${ipaStatus} Loading Hindi voice...`.trim();
  }

  const ready = text && (await initializeHindiTts());
  if (requestId !== speechRequestId) return;

  if (!ready) {
    speakWithBrowserFallback(letter, button, { ipaStatus, revealIpa });
    return;
  }

  try {
    const result = await hindiTts(text);
    if (requestId !== speechRequestId) return;

    const audioData = result.audio;
    const sampleRate = result.sampling_rate;
    activeSpeechPlayback = playAudioData(audioData, sampleRate);
    if (!activeSpeechPlayback) {
      speakWithBrowserFallback(letter, button, { ipaStatus, revealIpa });
      return;
    }

    if (revealIpa) elements.speechStatus.textContent = ipaStatus;
    activeSpeechPlayback.source.onended = () => {
      if (requestId === speechRequestId) {
        button?.classList.remove("speaking");
        activeSpeechPlayback?.context?.close();
        activeSpeechPlayback = null;
      }
    };
  } catch (error) {
    console.error("Hindi MMS synthesis failed:", error);
    if (requestId === speechRequestId) {
      speakWithBrowserFallback(letter, button, { ipaStatus, revealIpa });
    }
  }
}

function autoSpeakIfNew(letter) {
  if (progressFor(letter).attempts > 0) return;

  window.requestAnimationFrame(() => {
    if (!answered && currentLetter?.id === letter.id) {
      speakHindi(letter, elements.speakQuestion);
    }
  });
}

function defaultLetterProgress() {
  return { attempts: 0, correct: 0, streak: 0 };
}

function validDisplayValue(value) {
  if (typeof value !== "string") return "";
  const normalized = value.trim();
  if (!normalized || normalized === "undefined" || normalized === "null") {
    return "";
  }
  return normalized;
}

function letterDisplay(letter) {
  const canonical = LETTER_DISPLAY[letter?.id] ?? {};
  const char =
    validDisplayValue(canonical.char) ||
    validDisplayValue(letter?.char) ||
    validDisplayValue(letter?.letter) ||
    validDisplayValue(letter?.character) ||
    validDisplayValue(letter?.glyph);

  return {
    char,
    roman:
      validDisplayValue(canonical.roman) ||
      validDisplayValue(letter?.roman) ||
      validDisplayValue(letter?.romanization) ||
      validDisplayValue(letter?.iast) ||
      validDisplayValue(letter?.iAst),
    ipa:
      validDisplayValue(canonical.ipa) ||
      validDisplayValue(letter?.ipa) ||
      validDisplayValue(letter?.phoneme) ||
      validDisplayValue(letter?.phonemes),
    speech: validDisplayValue(canonical.speech) || char,
  };
}

function letterChar(letter) {
  return letterDisplay(letter).char;
}

function letterRoman(letter) {
  return letterDisplay(letter).roman;
}

function letterSpeech(letter) {
  return letterDisplay(letter).speech;
}

function letterIpa(letter) {
  return letterDisplay(letter).ipa;
}

function speechPromptFor(letter) {
  return letterSpeech(letter);
}

function synesthesiaOwner(letter) {
  if (letter?.family === "Consonant mātrā" && letter.baseId) {
    return (
      LETTERS.find((candidate) => candidate.id === letter.baseId) ??
      letter
    );
  }
  return letter;
}

function rowLettersFor(letter) {
  const owner = synesthesiaOwner(letter);
  if (!owner) return [];
  return LETTERS.filter((candidate) => candidate.family === owner.family);
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function mixWithBlack(hex, amount) {
  const color = hexToRgb(hex);
  const factor = 1 - Math.min(Math.max(amount, 0), 1);
  return `rgb(${Math.round(color.r * factor)}, ${Math.round(
    color.g * factor,
  )}, ${Math.round(color.b * factor)})`;
}

function blackoutPercent(letter) {
  const progress = progressFor(letter);
  if (progress.attempts === 0) return 0;

  const practiceScore = Math.min(progress.attempts / BLACKOUT_ATTEMPTS, 1);
  const accuracy = progress.correct / progress.attempts;
  const accuracyScore = Math.min(accuracy / BLACKOUT_ACCURACY, 1);
  return practiceScore * accuracyScore;
}

function synesthesiaBaseColor(letter) {
  const owner = synesthesiaOwner(letter);
  const row = rowLettersFor(owner);
  const index = Math.max(
    row.findIndex((candidate) => candidate.id === owner?.id),
    0,
  );
  return SYNESTHESIA_COLORS[index % SYNESTHESIA_COLORS.length];
}

function synesthesiaColor(letter) {
  const owner = synesthesiaOwner(letter);
  return mixWithBlack(
    synesthesiaBaseColor(owner),
    blackoutPercent(owner),
  );
}

function applySynesthesiaAccent(element, letter) {
  if (!element) return;
  if (state.synesthesiaMode) {
    element.style.setProperty("--synesthesia-accent", synesthesiaColor(letter));
    element.classList.add("has-synesthesia-accent");
  } else {
    element.style.removeProperty("--synesthesia-accent");
    element.classList.remove("has-synesthesia-accent");
  }
}

function familyInfo(family) {
  return (
    FAMILY_INFO[family] ?? {
      label: family,
      summary: "A related group of Hindi sounds.",
    }
  );
}

function makeFamilyTerm(family, label = null, focusable = true) {
  const info = familyInfo(family);
  const term = document.createElement("span");
  term.className = "family-term";
  term.textContent = label ?? info.label;
  term.dataset.tooltip = info.summary;
  term.title = info.summary;
  if (focusable) {
    term.tabIndex = 0;
    term.setAttribute("aria-label", `${term.textContent}: ${info.summary}`);
  }
  return term;
}

function loadState() {
  const fallback = {
    unlockedStage: 0,
    selectedStage: 0,
    sessionStreak: 0,
    bestStreak: 0,
    synesthesiaMode: false,
    letters: {},
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...fallback,
      ...saved,
      letters: saved?.letters ?? {},
      synesthesiaMode: Boolean(saved?.synesthesiaMode),
      unlockedStage: Math.min(saved?.unlockedStage ?? 0, STAGES.length - 1),
      selectedStage: Math.min(
        saved?.selectedStage ?? saved?.unlockedStage ?? 0,
        saved?.unlockedStage ?? 0,
        STAGES.length - 1,
      ),
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderSynesthesiaMode() {
  document.body.classList.toggle("synesthesia-mode", state.synesthesiaMode);
  elements.synesthesiaToggle.checked = state.synesthesiaMode;
  applySynesthesiaAccent(elements.flashcard, currentLetter);
}

function safeCount(value) {
  const count = Number(value);
  return Number.isFinite(count) && count >= 0 ? Math.floor(count) : 0;
}

function progressFor(letter) {
  const saved = state.letters[letter.id] ?? {};
  return {
    attempts: safeCount(saved.attempts),
    correct: safeCount(saved.correct),
    streak: safeCount(saved.streak),
    matraCount: safeCount(saved.matraCount),
  };
}

function isMastered(letter) {
  const progress = progressFor(letter);
  return (
    progress.attempts >= MASTERY_ATTEMPTS &&
    progress.correct / progress.attempts >= MASTERY_ACCURACY
  );
}

function masteryPercent(letter) {
  const progress = progressFor(letter);
  if (progress.attempts === 0) return 0;

  const practiceScore = Math.min(progress.attempts / MASTERY_ATTEMPTS, 1);
  const accuracy = progress.correct / progress.attempts;
  const accuracyScore = Math.min(accuracy / MASTERY_ACCURACY, 1);
  return Math.round(practiceScore * accuracyScore * 100);
}

function isBaseConsonant(letter) {
  return (
    !letter.derived &&
    letter.family !== "Vowel" &&
    letter.family !== "Vowel mātrā"
  );
}

function supportsDerivedMatras(letter) {
  return (
    isBaseConsonant(letter) &&
    !CLUSTER_ONLY_CONSONANT_IDS.has(letter.id)
  );
}

function matraCountForProgress(progress) {
  if (progress.correct < 2 || progress.attempts === 0) return 0;

  const practiceScore = Math.min(progress.attempts / MASTERY_ATTEMPTS, 1);
  const accuracy = progress.correct / progress.attempts;
  const accuracyScore = Math.min(accuracy / MASTERY_ACCURACY, 1);
  const mastery = Math.round(practiceScore * accuracyScore * 100);
  if (progress.correct < 2 || mastery < 50) return 0;
  if (mastery >= 100) return DERIVED_MATRAS.length;
  if (mastery >= 75) return 6;
  return 3;
}

function unlockedMatraCount(letter) {
  if (!supportsDerivedMatras(letter)) return 0;

  const progress = progressFor(letter);
  return Math.max(
    progress.matraCount,
    matraCountForProgress(progress),
  );
}

function derivedMatraItemsFor(letter) {
  const count = unlockedMatraCount(letter);
  if (count === 0) return [];

  const consonantStem = letterRoman(letter).replace(/a$/, "");
  const ipaStem = letterIpa(letter)?.replace(/\u0259$/, "");
  return DERIVED_MATRAS.slice(0, count).map((matra) => ({
    id: `${letter.id}--matra-${matra.id}`,
    char: `${letterChar(letter)}${matra.sign}`,
    roman: `${consonantStem}${matra.vowel}`,
    ipa: ipaStem ? `${ipaStem}${matra.ipaVowel}` : "",
    speech: `${letterChar(letter)}${matra.sign}`,
    family: "Consonant mātrā",
    stage: letter.stage,
    baseId: letter.id,
    derived: true,
  }));
}

function unlockedDerivedMatraItems() {
  return LETTERS.filter(
    (letter) =>
      supportsDerivedMatras(letter) && letter.stage <= state.unlockedStage,
  ).flatMap(derivedMatraItemsFor);
}

function lettersInStage(stageIndex) {
  return LETTERS.filter((letter) => letter.stage === stageIndex);
}

function derivedMatraItemsInStage(stageIndex) {
  return lettersInStage(stageIndex).flatMap(derivedMatraItemsFor);
}

function isStageComplete(stageIndex) {
  return lettersInStage(stageIndex).every(isMastered);
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function weightedLetterChoice(letters) {
  const weighted = letters.flatMap((letter) => {
    const progress = progressFor(letter);
    let weight = 2;
    if (progress.attempts === 0) weight = 5;
    else if (!isMastered(letter)) weight = 4;
    else if (progress.streak < 2) weight = 3;
    return Array(weight).fill(letter);
  });

  const alternatives = weighted.filter((letter) => letter.id !== lastLetterId);
  const pool = alternatives.length ? alternatives : weighted;
  return pool[Math.floor(Math.random() * pool.length)];
}

function makeOptions(letter) {
  const unlockedLetters = [
    ...LETTERS.filter((candidate) => candidate.stage <= state.unlockedStage),
    ...unlockedDerivedMatraItems(),
  ].filter(
    (candidate) =>
      candidate.id === letter.id ||
      letterRoman(candidate) !== letterRoman(letter),
  );
  const sameFamily = unlockedLetters.filter(
    (candidate) =>
      candidate.id !== letter.id && candidate.family === letter.family,
  );
  const sameStage = unlockedLetters.filter(
    (candidate) =>
      candidate.id !== letter.id &&
      candidate.stage === letter.stage &&
      !sameFamily.some((item) => item.id === candidate.id),
  );
  const allOthers = unlockedLetters.filter(
    (candidate) =>
      candidate.id !== letter.id &&
      !sameFamily.some((item) => item.id === candidate.id) &&
      !sameStage.some((item) => item.id === candidate.id),
  );
  const distractors = [
    ...shuffle(sameFamily),
    ...shuffle(sameStage),
    ...shuffle(allOthers),
  ].filter(
    (candidate, index, candidates) =>
      candidates.findIndex(
        (item) => letterRoman(item) === letterRoman(candidate),
      ) === index,
  ).slice(0, 3);

  return shuffle([letter, ...distractors]);
}

function shouldUseTypedAnswer(letter) {
  const attempts = progressFor(letter).attempts;
  if (attempts < 2) return false;
  return Math.random() < (attempts >= 4 ? 0.65 : 0.4);
}

function normalizeTypedAnswer(value) {
  return value
    .normalize("NFC")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/aa/g, "ā")
    .replace(/ii/g, "ī")
    .replace(/uu/g, "ū")
    .replace(/(?:\.r|r\.)/g, "ṛ")
    .replace(/(?:\.t|t\.)/g, "ṭ")
    .replace(/(?:\.d|d\.)/g, "ḍ")
    .replace(/(?:\.n|n\.)/g, "ṇ")
    .replace(/(?:\.s|s\.)/g, "ṣ")
    .replace(/(?:m\.|\.m)/g, "ṃ")
    .replace(/(?:h\.|\.h)/g, "ḥ")
    .replace(/ṅ/g, "ng")
    .replace(/ny/g, "ñ")
    .replace(/sh/g, "ś");
}

function typedAnswerIsCorrect(value, letter) {
  const answer = normalizeTypedAnswer(value);
  const expected = normalizeTypedAnswer(letterRoman(letter));
  if (answer === expected) return true;

  const hasOptionalInherentA =
    isBaseConsonant(letter) || letter.id === "matra-a";
  return (
    hasOptionalInherentA &&
    expected.endsWith("a") &&
    answer === expected.slice(0, -1)
  );
}

function insertAtCursor(input, text) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.setRangeText(text, start, end, "end");
  input.focus();
}

function renderTypedAnswer() {
  const form = document.createElement("form");
  form.className = "typed-answer-form";

  const inputRow = document.createElement("div");
  inputRow.className = "typed-answer-row";

  const input = document.createElement("input");
  input.className = "typed-answer-input";
  input.type = "text";
  input.name = "answer";
  input.autocomplete = "off";
  input.autocapitalize = "none";
  input.spellcheck = false;
  input.placeholder = "Type the IAST sound";
  input.setAttribute(
    "aria-label",
    `Type the IAST romanization for ${letterChar(currentLetter)}`,
  );

  const submit = document.createElement("button");
  submit.className = "typed-submit-button";
  submit.type = "submit";
  submit.textContent = "Check";
  inputRow.append(input, submit);

  const keyRow = document.createElement("div");
  keyRow.className = "iast-key-row";
  keyRow.setAttribute("aria-label", "IAST diacritic keys");
  IAST_KEYS.forEach((character) => {
    const key = document.createElement("button");
    key.className = "iast-key";
    key.type = "button";
    key.textContent = character;
    key.addEventListener("click", () => insertAtCursor(input, character));
    keyRow.append(key);
  });

  const help = document.createElement("p");
  help.className = "typed-answer-help";
  help.innerHTML =
    "English keyboard: <code>aa</code> → ā, <code>.t</code> → ṭ, " +
    "<code>ny</code> → ñ, <code>sh</code> → ś, " +
    "<code>.s</code> → ṣ.";

  form.append(inputRow, keyRow, help);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (answered || !input.value.trim()) return;
    const wasCorrect = typedAnswerIsCorrect(input.value, currentLetter);
    speakHindi(currentLetter, elements.speakQuestion);
    completeAnswer(wasCorrect, { typedInput: input, submitButton: submit });
  });

  elements.answerOptions.replaceChildren(form);
  window.requestAnimationFrame(() => input.focus());
}

function renderChoiceAnswer() {
  elements.answerOptions.replaceChildren(
    ...currentOptions.map((option, index) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.dataset.letterId = option.id;
      button.innerHTML = `
        <span class="answer-number">${index + 1}</span>
        <span>${letterRoman(option)}</span>
      `;
      button.addEventListener("click", () => answerQuestion(option, button));
      return button;
    }),
  );
}

function renderQuestion() {
  const stageLetters = lettersInStage(state.selectedStage);
  const derivedLetters = derivedMatraItemsInStage(state.selectedStage);
  currentLetter =
    derivedLetters.length && Math.random() < DERIVED_MATRA_CHANCE
      ? weightedLetterChoice(derivedLetters)
      : weightedLetterChoice(stageLetters);
  currentOptions = makeOptions(currentLetter);
  currentMode = shouldUseTypedAnswer(currentLetter) ? "typed" : "choice";
  answered = false;
  lastLetterId = currentLetter.id;

  elements.stageTitle.textContent = STAGES[state.selectedStage].title;
  elements.practiceModeLabel.textContent =
    currentMode === "typed" ? "Type the answer" : "Multiple choice";
  elements.cardPrompt.textContent =
    currentMode === "typed"
      ? "Type this letter's sound in IAST."
      : "Which sound does this letter make?";
  elements.keyboardHint.innerHTML =
    currentMode === "typed"
      ? "Type an answer and press <kbd>Enter</kbd>. Diacritic keys and ASCII shortcuts both work."
      : "Tip: use keys <kbd>1</kbd>–<kbd>4</kbd> to answer and <kbd>Enter</kbd> to continue.";
  elements.questionLetter.textContent = letterChar(currentLetter);
  applySynesthesiaAccent(elements.flashcard, currentLetter);
  elements.speakQuestion.setAttribute(
    "aria-label",
    `Hear ${letterChar(currentLetter)} pronounced`,
  );
  elements.speechStatus.textContent = "";
  elements.questionFamily.textContent = currentLetter.family;
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
  elements.nextButton.hidden = true;
  elements.answerOptions.classList.toggle("typed-mode", currentMode === "typed");
  if (currentMode === "typed") renderTypedAnswer();
  else renderChoiceAnswer();
  autoSpeakIfNew(currentLetter);
}

function answerQuestion(selected, selectedButton) {
  if (answered) return;
  speakHindi(selected, selectedButton);
  completeAnswer(selected.id === currentLetter.id, { selectedButton });
}

function completeAnswer(
  wasCorrect,
  { selectedButton = null, typedInput = null, submitButton = null } = {},
) {
  if (answered) return;
  answered = true;

  const progress = progressFor(currentLetter);
  const wasStageComplete = isStageComplete(state.selectedStage);

  progress.attempts += 1;
  if (wasCorrect) {
    progress.correct += 1;
    progress.streak += 1;
    state.sessionStreak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.sessionStreak);
  } else {
    progress.streak = 0;
    state.sessionStreak = 0;
  }
  if (supportsDerivedMatras(currentLetter)) {
    progress.matraCount = Math.max(
      progress.matraCount,
      matraCountForProgress(progress),
    );
  }
  state.letters[currentLetter.id] = progress;

  const buttons = elements.answerOptions.querySelectorAll(".answer-button");
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.letterId === currentLetter.id) {
      button.classList.add("correct");
    }
  });

  if (selectedButton && !wasCorrect) selectedButton.classList.add("incorrect");
  if (typedInput) {
    typedInput.disabled = true;
    typedInput.classList.add(wasCorrect ? "correct" : "incorrect");
  }
  if (submitButton) submitButton.disabled = true;

  if (wasCorrect) {
    elements.feedback.className = "feedback correct";
    elements.feedback.innerHTML = `<strong>Correct.</strong> ${letterChar(currentLetter)} is ${letterRoman(currentLetter)}.`;
  } else {
    elements.feedback.className = "feedback incorrect";
    elements.feedback.innerHTML = `<strong>Not quite.</strong> ${letterChar(currentLetter)} is ${letterRoman(currentLetter)}.`;
  }

  const nowStageComplete = isStageComplete(state.selectedStage);
  if (
    !wasStageComplete &&
    nowStageComplete &&
    state.selectedStage === state.unlockedStage &&
    state.unlockedStage < STAGES.length - 1
  ) {
    state.unlockedStage += 1;
    state.selectedStage = state.unlockedStage;
    showUnlockDialog();
  }

  saveState();
  renderAllProgress();
  elements.nextButton.hidden = false;
  elements.nextButton.focus();
}

function renderStages() {
  elements.stageList.replaceChildren(
    ...STAGES.map((stage, index) => {
      const unlocked = index <= state.unlockedStage;
      const complete = isStageComplete(index);
      const item = document.createElement(unlocked ? "button" : "div");
      item.className = [
        "stage-item",
        index === state.selectedStage ? "active" : "",
        complete ? "complete" : "",
        !unlocked ? "locked" : "",
      ]
        .filter(Boolean)
        .join(" ");

      if (unlocked) {
        item.type = "button";
        item.addEventListener("click", () => {
          state.selectedStage = index;
          saveState();
          renderStages();
          renderQuestion();
        });
      }

      const status = complete ? "Mastered" : unlocked ? "Learning" : "Locked";
      const number = document.createElement("span");
      number.className = "stage-number";
      number.textContent = complete ? "✓" : index + 1;

      const copy = document.createElement("span");
      copy.className = "stage-copy";
      const name = document.createElement("span");
      name.className = "stage-name";
      name.textContent = stage.title;
      const family = makeFamilyTerm(stage.family, null, false);
      family.classList.add("stage-family");
      copy.append(name, family);

      const stageStatus = document.createElement("span");
      stageStatus.className = "stage-status";
      stageStatus.textContent = status;
      item.append(number, copy, stageStatus);
      return item;
    }),
  );
}

function renderAllProgress() {
  const mastered = LETTERS.filter(isMastered).length;
  const totals = LETTERS.reduce(
    (summary, letter) => {
      const progress = progressFor(letter);
      summary.attempts += progress.attempts;
      summary.correct += progress.correct;
      return summary;
    },
    { attempts: 0, correct: 0 },
  );

  elements.sessionStreak.textContent = state.sessionStreak;
  elements.overallProgressLabel.textContent = `${mastered} / ${LETTERS.length}`;
  elements.overallProgressBar.style.width = `${(mastered / LETTERS.length) * 100}%`;
  elements.progressTrack.setAttribute("aria-valuenow", mastered);
  elements.masteredCount.textContent = mastered;
  elements.masteredTotal.textContent = `of ${LETTERS.length} letters`;
  elements.accuracyValue.textContent = totals.attempts
    ? `${Math.round((totals.correct / totals.attempts) * 100)}%`
    : "—";
  elements.bestStreak.textContent = state.bestStreak;

  renderStages();
  renderProgressGrid();
}

function progressCardModel(letter) {
  const display = letterDisplay(letter);

  const progress = progressFor(letter);
  const unlocked = letter.derived || letter.stage <= state.unlockedStage;
  const mastered = unlocked && isMastered(letter);
  const mastery = unlocked ? masteryPercent(letter) : 0;

  let status = "Not started";
  if (!unlocked) status = "Locked";
  else if (mastered) status = "Mastered";
  else if (progress.attempts > 0) status = "Learning";

  const baseLetter =
    letter.family === "Consonant mātrā" && letter.baseId
      ? LETTERS.find((candidate) => candidate.id === letter.baseId)
      : null;
  const phoneticFamily = baseLetter?.family ?? letter.family;
  const group =
    letter.family === "Consonant mātrā"
      ? `${phoneticFamily} mātrās`
      : letter.family;

  return {
    id: letter.id,
    glyph: display.char,
    iast: display.roman,
    ipa: display.ipa,
    speech: display.speech,
    group,
    phoneticFamily,
    stage: letter.stage + 1,
    unlocked,
    mastered,
    mastery,
    status,
    attempts: progress.attempts,
    correct: progress.correct,
    source: letter,
  };
}

function makeProgressCard(model) {
  const card = document.createElement("article");
  card.className = "mastery-card";
  applySynesthesiaAccent(card, model.source);
  if (!model.unlocked) card.classList.add("is-locked");
  else if (model.mastered) card.classList.add("is-mastered");
  else if (model.attempts > 0) card.classList.add("is-learning");

  const header = document.createElement("div");
  header.className = "mastery-card__header";

  const identity = document.createElement("div");
  const glyph = document.createElement("span");
  glyph.className = "mastery-card__glyph";
  glyph.lang = "hi";
  glyph.textContent = model.glyph;

  const iast = document.createElement("span");
  iast.className = "mastery-card__iast";
  iast.textContent = model.iast;
  identity.append(glyph, iast);

  const speakButton = document.createElement("button");
  speakButton.className = "mastery-card__speak";
  speakButton.type = "button";
  speakButton.setAttribute(
    "aria-label",
    model.unlocked
      ? model.ipa
        ? `Hear ${model.iast}, IPA ${model.ipa}, pronounced`
        : `Hear ${model.speech} pronounced`
      : model.ipa
        ? `Hear locked letter ${model.iast}, IPA ${model.ipa}, pronounced`
        : `Hear locked letter ${model.speech} pronounced`,
  );
  speakButton.innerHTML = SPEAKER_ICON_SVG;
  speakButton.addEventListener("click", () =>
    speakHindi(model.source, speakButton),
  );
  header.append(identity, speakButton);

  const masteryHeader = document.createElement("div");
  masteryHeader.className = "mastery-card__progress-label";

  const status = document.createElement("span");
  status.textContent = model.status;
  const percentage = document.createElement("strong");
  percentage.textContent = `${model.mastery}%`;
  masteryHeader.append(status, percentage);

  const meter = document.createElement("div");
  meter.className = "mastery-card__meter";
  meter.setAttribute("role", "progressbar");
  meter.setAttribute("aria-label", `${model.glyph} individual mastery`);
  meter.setAttribute("aria-valuemin", "0");
  meter.setAttribute("aria-valuemax", "100");
  meter.setAttribute("aria-valuenow", String(model.mastery));

  const fill = document.createElement("span");
  fill.style.width = `${model.mastery}%`;
  meter.append(fill);

  const detail = document.createElement("p");
  detail.className = "mastery-card__detail";
  detail.textContent = model.unlocked
    ? `${model.correct} correct from ${model.attempts} ${
        model.attempts === 1 ? "attempt" : "attempts"
      }`
    : `Unlocks with stage ${model.stage}`;

  card.append(header, masteryHeader, meter, detail);
  return card;
}

function renderProgressGrid() {
  const models = [
    ...LETTERS,
    ...unlockedDerivedMatraItems(),
  ].map(progressCardModel);
  const familyOrder = [
    "Vowel",
    "Vowel mātrā",
    "Velar consonant",
    "Palatal consonant",
    "Retroflex consonant",
    "Dental consonant",
    "Labial consonant",
    "Approximant",
    "Sibilant",
    "Glottal consonant",
  ];
  const groupNames = familyOrder.flatMap((family) => [
    family,
    `${family} mātrās`,
  ]).filter((groupName) =>
    models.some((model) => model.group === groupName),
  );

  const sections = groupNames.map((groupName) => {
    const isMatraGroup = groupName.endsWith(" mātrās");
    const section = document.createElement(isMatraGroup ? "details" : "section");
    section.className = "mastery-section";
    if (isMatraGroup) section.classList.add("mastery-section--dropdown");

    const heading = document.createElement(isMatraGroup ? "summary" : "div");
    heading.className = "mastery-section__heading";

    const headingCopy = document.createElement("div");
    headingCopy.className = "mastery-section__copy";
    const firstModel = models.find((model) => model.group === groupName);
    const info = familyInfo(firstModel.phoneticFamily);
    const title = document.createElement("h2");
    title.append(
      makeFamilyTerm(
        firstModel.phoneticFamily,
        isMatraGroup ? `${info.label} mātrās` : info.label,
      ),
    );
    const description = document.createElement("p");
    description.textContent = isMatraGroup
      ? `${info.summary} This row adds vowel signs to those consonants.`
      : info.summary;
    headingCopy.append(title, description);

    const count = document.createElement("span");
    const groupModels = models.filter((model) => model.group === groupName);
    const mastered = groupModels.filter((model) => model.mastered).length;
    count.textContent = `${mastered} of ${groupModels.length} mastered`;
    heading.append(headingCopy, count);

    const grid = document.createElement("div");
    grid.className = "mastery-grid";
    grid.replaceChildren(...groupModels.map(makeProgressCard));

    section.append(heading, grid);
    return section;
  });

  elements.progressGroups.replaceChildren(...sections);
}

function showUnlockDialog() {
  const stage = STAGES[state.unlockedStage];
  elements.unlockTitle.textContent = `${stage.title} is ready`;
  elements.unlockCopy.textContent = `${stage.subtitle}. These letters are now in your new practice deck.`;
  if (typeof elements.unlockDialog.showModal === "function") {
    elements.unlockDialog.showModal();
  }
}

function switchView(viewName) {
  elements.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  elements.views.forEach((view) => {
    const active = view.id === `${viewName}-view`;
    view.classList.toggle("active", active);
    view.hidden = !active;
  });
  if (viewName === "progress") renderAllProgress();
}

elements.navButtons.forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

elements.nextButton.addEventListener("click", renderQuestion);
elements.speakQuestion.addEventListener("click", () => {
  if (currentLetter) {
    speakHindi(currentLetter, elements.speakQuestion, { revealIpa: true });
  }
});

elements.unlockClose.addEventListener("click", () => {
  elements.unlockDialog.close();
  renderQuestion();
});

elements.resetProgress.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Reset all letter progress and return to the first stage?",
  );
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  lastLetterId = null;
  renderAllProgress();
  renderQuestion();
});

elements.synesthesiaToggle.addEventListener("change", () => {
  state.synesthesiaMode = elements.synesthesiaToggle.checked;
  saveState();
  renderSynesthesiaMode();
  renderProgressGrid();
});

document.addEventListener("keydown", (event) => {
  const learnViewActive = !document.querySelector("#learn-view").hidden;
  if (!learnViewActive || elements.unlockDialog.open) return;

  if (
    !answered &&
    currentMode === "choice" &&
    ["1", "2", "3", "4"].includes(event.key)
  ) {
    const button = elements.answerOptions.children[Number(event.key) - 1];
    button?.click();
  } else if (answered && event.key === "Enter") {
    elements.nextButton.click();
  }
});

if ("speechSynthesis" in window) {
  loadHindiVoice();
  window.speechSynthesis.addEventListener("voiceschanged", loadHindiVoice);
} else if (location.protocol === "file:") {
  elements.speakQuestion.disabled = true;
  elements.speechStatus.textContent =
    "Speech playback is not supported in this browser.";
}

renderAllProgress();
renderQuestion();
renderSynesthesiaMode();
