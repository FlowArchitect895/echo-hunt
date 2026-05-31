---
name: echo-hunt
description: "Performs a cognitive threat hunt across a vibe coding session log, identifying cognitive TTPs."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [cognitive-threat-hunting, session-analysis, TTPs, reasoning, debugging, agent-self-reflection]
---

# Echo Hunt: Cognitive Threat Hunting for Vibe Coding Sessions

This skill takes a vibe coding session log as input and performs a cognitive threat hunt across it to identify areas where reasoning may have faltered, leading to suboptimal outcomes or potential future issues. It generates a structured report to guide improvement and self-reflection.

## Input

A vibe coding session log (text content).

## Output Format

Return ONLY valid JSON with this exact structure. No extra text, no markdown fences.

{
  "sessionSummary": "",
  "huntHypotheses": [{"id": 1, "hypothesis": "", "ttp": ""}],
  "confirmedFindings": [{"hypothesisId": 1, "confirmed": true, "evidence": ""}],
  "cognitiveTTPs": [{"type": "", "severity": "critical|high|moderate|low", "description": ""}],
  "genuineUnderstandingMoments": [""],
  "nextSessionFocus": "",
  "attributionChallenges": [
    {
      "findingId": 1,
      "finding": "",
      "correctTTP": "Borrowed Confidence|Shallow Resolution|Pattern Blindness|Premature Exit",
      "distractors": ["", "", ""],
      "explanation": ""
    }
  ],
  "preHuntQuestions": [
    {"id": 1, "question": "What do you think your biggest cognitive blind spot was in this session?"},
    {"id": 2, "question": "Did you feel like you understood what you were building or just that it worked?"},
    {"id": 3, "question": "Which of the four TTPs do you think appeared most in your session: Borrowed Confidence, Shallow Resolution, Pattern Blindness, or Premature Exit?"}
  ]
}

CRITICAL RULES:
- Do NOT include evidenceIntegrityScore — the score is calculated from player behavior, not generated
- attributionChallenges must have exactly 4 options total (1 correct + 3 plausible distractors)
- distractors must be the other three TTP names — never repeat the correct answer
- All four TTPs are: Borrowed Confidence, Shallow Resolution, Pattern Blindness, Premature Exit
- Generate one attributionChallenge per confirmedFinding

## Workflow (Agent's Internal Process)

When this skill is invoked with a session log, the agent will execute the following reasoning process:

1.  **Formulate Initial Hypotheses:** The agent will first generate 3-5 general hunt hypotheses related to the four cognitive TTP classes. These hypotheses are formed *before* any detailed analysis of the provided session log.
2.  **Evidence Collection & Hunting:** The agent will then systematically review the entire provided session log. For each hypothesis, it will actively hunt for specific textual evidence, conversational turns, tool outputs, or code changes that either support or contradict the hypothesis.
3.  **TTP Identification & Classification:** Based on the collected evidence, the agent will identify and classify specific instances of Borrowed Confidence, Shallow Resolution, Pattern Blindness, and Premature Exit. Each identified TTP will be linked to supporting evidence from the log.
4.  **Identify Genuine Understanding:** The agent will specifically look for moments in the log that indicate a robust problem-solving approach, critical thinking, independent verification, or a clear "aha!" moment where a deep understanding was achieved.
5.  **Formulate Next Session Focus:** Based on the confirmed findings and identified TTPs, the agent will propose actionable recommendations for improving future coding or debugging sessions.
6.  **Generate Attribution Challenges:** For each confirmed finding, generate one attribution challenge with the correct TTP and three plausible distractor TTP names from the four classes.

## Usage

To use this skill, simply load it and then provide your vibe coding session log. The agent will then perform the cognitive threat hunt and output the structured report.

```
/skill echo-hunt
[PASTE YOUR VIBE CODING SESSION LOG HERE]
```

**Example of agent's internal reasoning (after user provides the session log):**

```python
# The agent, upon receiving the session log after /skill echo-hunt, would perform similar reasoning
# to what's described in the 'Workflow' section. This might involve an internal delegate_task call
# to process the extensive text or direct, iterative analysis using its core reasoning loop.

# Hypothetical Agent Thought Process:

# 1. Formulate Hypotheses:
#    - "Hypothesis 1: The session might reveal instances where external solutions were adopted without thorough validation, indicating Borrowed Confidence."
#    - "Hypothesis 2: There could be recurring patterns of fixing immediate errors without investigating deeper architectural or logical flaws, suggesting Shallow Resolution."
#    - "Hypothesis 3: The developer may have overlooked common error messages or coding idioms, pointing to Pattern Blindness."
#    - "Hypothesis 4: The session might end abruptly after achieving a minimal working state, without exploring edge cases or robustness, consistent with Premature Exit."

# 2. Hunt Evidence against Session Log:
#    - Scan for phrases like "copy-pasted from", "AI said to", "Stack Overflow", "didn't quite get why".
#    - Look for sequences where a fix is applied, but the same or similar error reappears later.
#    - Search for repetitive attempts at a problem, or missing obvious solutions to common issues.
#    - Identify instances where debugging stops after a basic pass, or a task is marked done without comprehensive checks.

# 3. Identify Cognitive TTPs:
#    - Based on identified evidence, categorize as Borrowed Confidence, Shallow Resolution, Pattern Blindness, or Premature Exit.
#    - E.g., if "copy-pasted from blog, seems to work" is found: -> Borrowed Confidence.
#    - E.g., if "fixed the syntax error, but still getting the weird behavior" appears multiple times: -> Shallow Resolution.

# 4. Identify Genuine Understanding Moments:
#    - Look for phrases like "After debugging for an hour, I realized...", "The core issue was X, not Y...", "This works because Z".

# 5. Formulate Next Session Focus:
#    - Based on the TTPs, suggest specific practices: "Implement a '3 Why's' rule for root cause analysis," "Review common Python error messages," "Mandate peer code review for critical sections."

# 6. Assess Evidence Integrity:
#    - Score based on how detailed, self-reflective, and complete the log is. A sparse log gets a lower score.

# The final output will be the formatted Cognitive Threat Report as specified.
```