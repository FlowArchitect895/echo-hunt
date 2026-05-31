# ECHO Hunt

AI-powered cognitive threat hunter for vibe coding sessions built on Hermes Agent.

Paste your session log, declare your blind spots before the evidence arrives, complete a timed TTP attribution challenge, and receive a computed Evidence Integrity score based on your actual decisions — not a generated number.

## Demo

🎥 [Watch the full demo on Loom](https://www.loom.com/share/43ddc4415759408fa705904d8abbbcf4)

## What It Does

Vibe coding is how most people build with AI today — you describe what you want, the AI generates it, you run it, fix errors, iterate. It works. But did you actually learn anything, or did the AI just carry you through it?

ECHO Hunt finds out. It hunts your session for four cognitive patterns that stop self-taught builders from retaining what they build:

- **Borrowed Confidence** — accepted AI output without verification
- **Shallow Resolution** — fixed the error, didn't understand why
- **Pattern Blindness** — repeated the same error class without noticing
- **Premature Exit** — moved on before understanding was solid

## How To Play

1. Paste your vibe coding session log
2. Declare your blind spots before the evidence arrives
3. Face the confrontation — your declarations vs what Hermes actually found
4. Complete the TTP attribution challenge (20-second timer per finding)
5. Receive your Evidence Integrity score — computed from your decisions, not generated
6. Download your Cognitive Threat Report

## Prerequisites

- [Hermes Agent](https://hermes-agent.nousresearch.com) installed and configured
- Node.js installed
- A Google AI Studio API key (or any provider Hermes supports)

## Installing the echo-hunt Skill

1. Copy the `skills/echo-hunt/SKILL.md` file from this repo to your Hermes skills directory:
   - **Windows:** `C:\Users\yourname\AppData\Local\hermes\skills\echo-hunt\SKILL.md`
   - **Linux/Mac:** `~/.hermes/skills/echo-hunt/SKILL.md`
2. Open Hermes and run `/reload-skills`
3. Confirm it loaded with `/skills list --source local`

## How To Run

```bash
git clone https://github.com/FlowArchitect895/echo-hunt.git
cd echo-hunt
npm install
node index.js
```

Then open `http://localhost:3000`

## How It Works

ECHO Hunt calls `hermes -z` with the echo-hunt skill prompt. Hermes Agent performs the full cognitive forensic hunt in one call — forming hypotheses, hunting evidence, mapping TTPs, generating attribution challenges with locked correct answers and plausible distractors.

Everything is pre-computed before gameplay starts. Zero API calls during the investigation. The Evidence Integrity score is calculated entirely from player behavior.

## Built With

- [Hermes Agent](https://hermes-agent.nousresearch.com) — the cognitive hunt engine
- Node.js + Express — backend bridge
- Vanilla HTML/CSS/JS — frontend

## Built For

Hermes Agent Challenge — DEV.to x Nous Research