# Akshara

A dependency-free prototype for learning Hindi Devanagari letters through
progressive multiple-choice flashcards.

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
- Pronounces letters with the browser's Hindi (`hi-IN`) speech synthesis voice.
- Standardizes audio on a canonical Devanagari speech value, even when the
  visible answer is romanized IAST.
- Wraps isolated letters in short repeated Hindi pronunciation prompts so
  browser voices do not interpret them as standalone symbols.
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
  their own progress records but do not block core lesson advancement.
- Typed answers accept diacritics directly or English-keyboard shortcuts such as
  `aa` for `ā`, `.t` for `ṭ`, `ng` for `ṅ`, `ny` for `ñ`, `sh` for `ś`, and
  `.s` for `ṣ`.
- The inherent final `a` is optional when typing a consonant with no explicit
  vowel sign, so both `ka` and `k` are accepted for `क`.
- Unlocks each new stage after all letters in the current stage reach at least
  four attempts and 75% accuracy.
- Saves progress in browser `localStorage`.
- Supports number-key multiple-choice answers and Enter to submit or advance.

Multiple-choice recognition is the starting mode; typed recall appears after
initial practice.
