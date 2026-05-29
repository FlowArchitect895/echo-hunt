# ECHO Hunt

AI-powered cognitive threat hunter for vibe coding sessions. Paste your session, declare your blind spots, then face what Hermes actually found.

## What It Does

ECHO Hunt runs your vibe coding session through Hermes Agent's echo-hunt skill — a cognitive forensic analysis that hunts for four patterns that stop self-taught builders from retaining what they build:

- **Borrowed Confidence** — accepted AI output without verification
- **Shallow Resolution** — fixed the error, didn't understand why
- **Pattern Blindness** — repeated the same error class without noticing
- **Premature Exit** — moved on before understanding was solid

## How To Play

1. Paste your session log
2. Declare your blind spots before the evidence arrives
3. Face the confrontation — your declarations vs what Hermes found
4. Complete the TTP attribution challenge (20-second timer per finding)
5. Download your Cognitive Threat Report

## How To Run

1. Install [Hermes Agent](https://hermes-agent.nousresearch.com)
2. Clone this repo
3. Run `npm install`
4. Run `node index.js`
5. Open `http://localhost:3000`

## Built With

- Hermes Agent (echo-hunt skill)
- Node.js + Express
- Vanilla HTML/CSS/JS

## Built For

Hermes Agent Challenge — DEV.to x Nous Research