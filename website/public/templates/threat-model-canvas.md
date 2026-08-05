# AI Feature Threat-Model Canvas

From the [Securing AI Systems course](https://aibloom.io/courses/ai-secure/) — one page per AI feature. Fill it in before the design review, revisit on every material change.

## 1. The feature, in two sentences
What it does, who uses it, and what the model can ultimately cause to happen.

> _______________

## 2. Ingestion inventory — every way content reaches the model
List each channel and mark it trusted (you control it) or untrusted (anyone can influence it). Documents, web pages, emails, tickets, tool results, memory, other agents' output.

| Channel | Trusted? | Notes |
|---------|----------|-------|
|         |          |       |

## 3. The lethal trifecta check
Answer with evidence, not intent:

- Does the model see **untrusted input**? ______
- Can it reach **private data**? ______
- Does anything it produce **leave the system** (messages, requests, writes)? ______

If all three: what removes one leg? _______________

## 4. Tools and privileges
For each tool the model can call: what it can do, with whose identity, and whether the action is reversible.

| Tool | Capability | Identity it acts as | Reversible? | Gated? |
|------|-----------|--------------------:|-------------|--------|
|      |           |                     |             |        |

## 5. Trust boundary
Where does the model's output stop being trusted? Which consumers treat it as data, and which — dangerously — as instructions?

> _______________

## 6. What we will not defend against (accepted risks)
Each entry needs an owner and a revisit trigger.

| Risk accepted | Why | Owner | Revisit when |
|---------------|-----|-------|--------------|
|               |     |       |              |

## 7. Detection
If the controls above fail, what signal fires, and who reads it?

> _______________
