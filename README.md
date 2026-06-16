# Language Learning App

A static prototype for learning Hindi Devanagari letters through progressive
multiple-choice flashcards.

## Run locally

Open `index.html` directly in a browser, or serve the directory with any static
file server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Current behavior

- Introduces 46 foundational letters plus the inherent `a` form and 10 vowel
  mātrā forms across ten stages.
- Uses IAST romanization.
- Defines a canonical IPA target for every vowel, consonant, and generated
  mātrā form, and shows that target when pronunciation plays.
- Uses Meta's Hindi MMS/VITS text-to-speech model through Transformers.js,
  passing the canonical Devanagari text directly. The quantized model downloads
  and is cached on first use.
- Falls back to the browser's Hindi (`hi-IN`) speech synthesis voice when the
  neural model cannot load, including when `index.html` is opened via `file://`.
- Labels vowel and consonant families in lessons and progress rows, with
  hover/focus phonetics explanations for each consonant family.
- Includes a persistent Synesthesia Mode that assigns high-contrast accent
  colors within each row and fades each accent toward black as mastery deepens
  beyond the core mastery threshold.
- Derived consonant mātrās inherit the color and fade level of their base
  consonant; only the dedicated vowel-mātrā lesson colors forms separately.
- Synesthesia colors appear as subtle card accents; Devanagari glyphs retain
  the normal dark-green text color.
- Tracks attempts, accuracy, correct streaks, and mastery for every letter.
- Starts mixing in typed IAST answers after a learner has seen a letter a few
  times.
- Begins mixing consonant mātrā forms into practice as each consonant improves:
  three forms at 50% mastery, six at 75%, and all ten at 100%. These forms have
  their own progress records but do not block core lesson advancement. The
  cluster-only Hindi consonants `ङ` and `ञ` do not generate standalone mātrā
  syllables.
- Typed answers accept diacritics directly or English-keyboard shortcuts such as
  `aa` for `ā`, `.t` for `ṭ`, `ny` for `ñ`, `sh` for `ś`, and `.s` for `ṣ`.
- Uses `ng` rather than `ṅ` for the velar nasal's learner-facing romanization.
- The inherent final `a` is optional when typing a consonant with no explicit
  vowel sign, so both `ka` and `k` are accepted for `क`.
- Unlocks each new stage after all letters in the current stage reach at least
  four attempts and 75% accuracy.
- Saves progress in browser `localStorage`.
- Supports number-key multiple-choice answers and Enter to submit or advance.

Multiple-choice recognition is the starting mode; typed recall appears after
initial practice.
