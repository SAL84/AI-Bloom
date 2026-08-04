---
title: "The AI Industry, Mapped: Twelve Categories That Explain the Landscape"
description: "A field map of where AI is built, deployed, and used — twelve categories from silicon to vertical apps, with examples. A map, not a ranking."
pubDate: 2026-08-05
courses: ["ai-essentials", "ai-deep-dive"]
---

When people say "the AI industry," they usually mean whichever slice of it they last read about — a chatbot, a chip shortage, a coding assistant. But the industry is really a stack of twelve distinct categories, each solving a different problem, each with its own economics. Once you can see the categories, most AI news becomes legible: a new product announcement is almost always one of these twelve boxes getting a new occupant.

Two warnings before the map. First, this is a map of categories, not a ranking or a recommendation — nothing here is an endorsement of one vendor over another. Second, the company names are examples as of August 2026 and will go out of date faster than anything else we publish; the categories are the part worth remembering.

## Foundation model providers

The labs that train and serve general-purpose models, absorbing the cost of frontier research so everyone downstream can rent capability instead of building it. Examples: OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral AI, Cohere.

## Cloud AI platforms

The hyperscaler layer that packages models with identity, networking, billing and data residency, so an enterprise can adopt AI inside the account and contracts it already has. Examples: Amazon Bedrock, Azure AI Foundry, Google Vertex AI, IBM watsonx, Cloudflare Workers AI.

## AI infrastructure and silicon

The physical layer — accelerators, high-bandwidth memory, interconnect, and the data centres around them — that sets the ceiling on how much AI anyone can actually run. Examples: NVIDIA, AMD, Google TPU, AWS Trainium, Broadcom, SK hynix.

## Agent platforms and orchestration

Frameworks and runtimes for building systems that plan, call tools and act over many steps, plus the permissions and handoffs that keep those actions accountable. Examples: LangChain, LlamaIndex, Claude Agent SDK, Microsoft AutoGen, CrewAI, Temporal.

## AI developer tools

Assistants that sit inside the software development loop — reading a codebase, writing and reviewing changes, or turning a prompt into a working application. Examples: GitHub Copilot, Cursor, Claude Code, Amazon Q Developer, Replit, Lovable.

## Retrieval and vector data

Storage and search layers that find the right passages, records or documents at query time, so a model answers from your material rather than from memory alone. Examples: Pinecone, Weaviate, Qdrant, Elastic, pgvector, Chroma.

## Evaluation and observability

Tooling that measures whether an AI system is behaving — test sets and scoring before release, tracing and monitoring after it, because non-deterministic systems drift quietly. Examples: LangSmith, Braintrust, Arize, Weights & Biases, Langfuse, Datadog.

## Guardrails, safety and governance

Controls that screen inputs and outputs, enforce policy at runtime, and produce the audit trail that regulators, security teams and customers ask for. Examples: NVIDIA NeMo Guardrails, Guardrails AI, Lakera, Protect AI, Credo AI, HiddenLayer.

## Open-weight models and self-hosting

Downloadable model weights and the serving stack around them, for teams that need to run inference on their own hardware, inspect what they deploy, or avoid a vendor dependency. Examples: Hugging Face, Meta Llama, Mistral, Qwen, vLLM, Ollama.

## Generative media

Systems that produce images, video, music, speech and sound, changing what a small team can create and forcing new questions about provenance and consent. Examples: Midjourney, Adobe Firefly, Runway, ElevenLabs, Black Forest Labs, Suno.

## AI in business applications

AI folded into the software people already open every day — CRM, HR, ticketing, documents and email — where adoption happens without anyone choosing a model. Examples: Microsoft 365 Copilot, Salesforce Agentforce, ServiceNow, Workday, SAP, Notion.

## Vertical AI

Products built for one sector, where the value is in the domain data, workflow and regulation around the model rather than in the model itself. Examples: CrowdStrike, Microsoft Security Copilot, Darktrace, Abridge, Harvey, Ramp.

## How to use the map

Reading AI news through these categories changes what you notice. "New model beats benchmark" is the first category doing what it does quarterly. "Enterprise platform adds AI agents" is usually the business-applications layer, and the right question is which foundation model sits underneath and what data it can reach. A chip export headline is the silicon layer, and its effects surface in every category above it a year later.

The map also explains why "who is winning AI?" has no single answer: a company can dominate one category and be absent from eleven others. When someone tells you a vendor is "the leader in AI," it is worth asking — in which box?

## Where to go deeper

If the vocabulary here felt new, [AI Essentials](/courses/ai-essentials/) is the foundation course: what an LLM is and isn't, without the marketing. If you want the machinery underneath these categories — how models are trained, served, and evaluated — [AI Deep Dive](/courses/ai-deep-dive/) goes to practitioner depth. Both are free, like everything on the AI Learning Hub.
