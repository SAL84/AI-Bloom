import type { CourseModule } from '../../types/course';

const m7: CourseModule = {
  id: 'm7',
  title: 'Selling AI-Enabled Security + Reference',
  icon: '🎯',
  summary: 'Discovery, demos, objections, ROI, compliance, and the SE prompting playbook.',
  lessons: [
    {
      id: 'm7l1',
      title: 'Discovery Question Funnel',
      diagram: 'DiscoveryFunnel',
      slides: [
        { heading: 'Volume and Pain Discovery', body: 'How many alerts per day reach a Tier-1 analyst? What percentage close as false positive? How long is your current MTTR? These quantify the addressable problem and set up clear before/after framing.' },
        { heading: 'Workflow Discovery', body: 'Walk me through what your analyst does between alert-fired and case-closed for a routine phishing alert. This surfaces the specific automation opportunities — and prevents you from pitching capabilities they do not need.' },
        { heading: 'Architecture Discovery', body: 'How are you thinking about MCP and agent identity? Do you have an inventory of AI systems and their privileges? These differentiate you from competitors who only talk products and not architecture.' },
        { heading: 'Skeptic Discovery', body: 'What is a previous AI/ML investment that did not deliver, and what went wrong? This builds trust faster than pitching ever does, and tells you exactly which objections to preempt.' }
      ]
    },
    {
      id: 'm7l2',
      title: 'Demoing Without Overpromising',
      slides: [
        { heading: 'The Three Don\'ts', body: '(1) Do not demo on cherry-picked golden alerts — use one the customer brings. (2) Do not hide latency — show real response times. (3) Do not demo agent autonomy without showing the human-approval gates.' },
        { heading: 'The Honest Demo Script', body: 'Show the agent doing real work. Show where it asks for human input. Show where it makes a wrong call and how you catch it. Counterintuitively, demoing failure modes builds more trust than perfect runs.' },
        { heading: 'Pre-Demo Qualification', body: 'Two questions before every demo: (1) What outcome would make this demo successful for you? If the answer is vague, clarify — a demo that ends with "interesting" is a stalled deal. (2) Can you bring a real alert or use case from your environment? Proprietary data often cannot be used, but understanding what they work with daily lets you match the narrative. These questions double as discovery and raise the stakes appropriately — the customer is now a participant, not an audience.' },
        { heading: 'Reading the Room During Demo', body: 'Engagement signals: they start describing their environment unprompted, they ask "can it handle X" where X is a specific internal workflow, they ask about pricing or deployment. Skepticism signals: arms crossed, checking phone, repeating the word "interesting" without follow-up questions, asking how many customers are in production. Recovery move for skeptics: stop demoing, ask directly — "It seems like I may not be hitting the right use case for you. What would you need to see to believe this was worth a deeper look?" Directness resets the conversation better than continuing through indifference.' }
      ]
    },
    {
      id: 'm7l3',
      title: 'Objection Handling',
      slides: [
        { heading: 'It is just regex with marketing', body: 'Fair skepticism. Here is the difference: our detection layer uses classical ML for pattern recognition, but the agent layer above it is genuinely new — it iterates, pivots across systems, maintains investigation state. I can show you a side-by-side of the same alert handled by rule-based automation vs. our agent.' },
        { heading: 'What about hallucinations', body: 'Real concern. Our mitigation stack: every response is grounded in retrieved evidence with citations, outputs are constrained to validated formats, and irreversible actions require analyst confirmation. The agent is not replacing judgment — it is removing the work that does not need judgment.' },
        { heading: 'Our data is too sensitive for AI', body: 'That is why our deployment uses VPC Service Controls, customer-managed encryption keys, and data residency controls. Customer prompts and data are not used to train base models. The data stays in your tenant. Happy to walk through the architecture with your security team.' },
        { heading: 'We Tried AI in Security and It Failed', body: 'Best response: ask what specifically went wrong, then listen. Most failures trace to bad data quality, unclear success metrics, no human-in-the-loop design, or pilot-without-production-path. Address the actual cause from the prior failure, not generic capability claims.' },
        { heading: 'We Are Invested in Splunk or Palo Alto — Migrations Are Painful', body: 'Do not pitch migration. Pitch federation. Google SecOps MCP and the orchestrator can call Splunk and Cortex via their own MCP servers or custom MCP wrappers. Position Google as the agent orchestration layer above their existing SIEM — not a replacement for it. The motion: land Gemini Enterprise and Agent Gateway as the governance and orchestration plane, let their existing tools stay in place, and expand to SecOps over 12-18 months once trust is established. Smaller entry, faster sale, less political resistance. The CISO does not have to justify a rip-and-replace; they justify adding an intelligence layer.' },
        { heading: 'We Already Have Microsoft Security Copilot', body: 'Copilot is a chat interface over Defender data — it is not a platform. The distinction: can their Copilot orchestrate an HR agent that calls a SecOps agent? Can it govern agent identity across business and security workflows under one policy plane? With Gemini Enterprise, that is day one. The reframe: Microsoft has a copilot, Google has a platform. Copilot is useful inside M365; Gemini Enterprise is useful across the enterprise. These are not the same thing competing for the same budget.' }
      ]
    },
    {
      id: 'm7l4',
      title: 'ROI and Compliance Framing',
      slides: [
        { heading: 'ROI Anchors', body: 'Time-per-alert reduction (often 50-90% on routine alerts), Tier-1 analyst capacity expansion, MTTR improvement, dwell-time reduction. Always tie to the customer own metrics, not vendor benchmarks. The Forrester study citing 240% ROI is a useful anchor for Google SecOps but should never be the lead number.' },
        { heading: 'EU AI Act', body: 'Risk-based framework. Most security AI use cases sit in limited risk or high risk categories. Key obligations: risk management systems, data governance, transparency, human oversight, robustness, and conformity assessment for high-risk systems. SEs should be able to discuss this at a basic level.' },
        { heading: 'NIST AI RMF', body: 'Voluntary U.S. framework — Govern, Map, Measure, Manage. Increasingly cited in U.S. enterprise procurement and federal contracts. Pair with NIST CSF references for security-specific contexts.' },
        { heading: 'AIBOM and Agent Inventory', body: 'Emerging requirement: organizations must inventory AI systems, agent privileges, MCP connections, and training data lineage. Google Agent Registry, AIBOM (via Wiz), and Agent Security dashboard are concrete answers — useful in compliance-driven deals.' }
      ]
    },
    {
      id: 'm7l5',
      title: 'Customer Archetypes: EXPAND, DISPLACE, WIN',
      slides: [
        { heading: 'Why Archetypes Matter', body: 'The same pitch delivered to an underutilized SecOps customer and a security-mature Microsoft shop will land differently — or fail completely. Matching motion to archetype is the difference between a 2-week free trial close and an 18-month stalled deal. Three archetypes cover the majority of agentic security opportunities in 2026. Identify which archetype before the first call and adjust discovery, demo, and objection priorities accordingly.' },
        { heading: 'EXPAND — Underutilized SecOps Customer', body: 'Who they are: already paying for Google SecOps but using less than half the capability, often stuck on legacy SOAR playbooks, low Gemini-in-SecOps adoption, separate IAM and SOC teams. Motion: lead with a quick win — demonstrate TIN on their own data, show the before/after on a real case, then upsell to Enterprise Plus and Security Tokens. Bridge to Gemini Enterprise as the longer strategic conversation. Key signals: maintenance SOAR playbooks still running, analysts not using the Gemini features, SOC and enterprise AI initiatives living in separate silos. Typical close: 4-8 weeks to expand, 12 months to platform conversation.' },
        { heading: 'DISPLACE — Microsoft or Splunk Shop, Security-Mature', body: 'Who they are: mature SOC, multi-vendor stack, frustrated with console sprawl and integration maintenance cost, multiple AI copilots deployed with no unified governance. Motion: do not pitch SIEM replacement. Pitch the orchestration and governance layer above their existing stack. Use MCP federation as the entry motion — show that Google SecOps MCP can call their existing tools. Land Gemini Enterprise and Agent Gateway, expand to SecOps data over 12-18 months once trust is established. Key signals: active SOAR engineering pain, CISO talking about "AI strategy" beyond individual products, multiple vendor AI licenses generating duplication questions. Typical close: 6-12 months, starts with orchestration not data.' },
        { heading: 'WIN — Greenfield or Cloud-Native', body: 'Who they are: building security architecture from scratch — fast-growing company, post-merger, or digital transformation initiative. No legacy SOAR, cloud-first infrastructure, CISO with platform mindset. Motion: full stack pitch. Land SecOps, GTI, and Gemini Enterprise as one integrated architecture. Agent Identity from day one means no IAM debt to unwind later. This is the highest ACV opportunity and often the fastest to close because there is no installed base to protect. Key signals: no legacy SOAR, greenfield cloud infrastructure, CISO openly evaluating platforms not products. Typical close: 3-6 months, largest deal size.' },
        { heading: 'Matching Discovery to Archetype', body: 'For EXPAND: ask what percentage of Gemini features they are actively using and whether SOAR playbooks are still being maintained. For DISPLACE: ask how many AI copilots are in production and who governs them collectively. For WIN: ask what their security architecture looks like in 18 months and whether they are designing for a single governance plane from day one. The wrong discovery questions for the wrong archetype signal that you have not done your homework — and cost you credibility before the demo starts.' }
      ]
    },
    {
      id: 'm7l6',
      title: 'SE Prompting Playbook',
      slides: [
        { heading: 'For RFP Responses', body: 'Template: "You are a senior security architect responding to RFP requirements. For each requirement below, provide: (1) direct answer (yes / partial / no / n-a), (2) capability description in customer-facing language, (3) specific product features that satisfy the requirement, (4) any caveats. Format as a table. Source material: [paste capability docs]. Requirements: [paste requirements list]."' },
        { heading: 'For Discovery Prep', body: 'Template: "You are preparing me for a discovery call with [company name]. Based on this LinkedIn or public profile or recent news [paste source material], generate: (1) likely current security stack, (2) probable AI maturity level, (3) the three highest-probability pain points, (4) five discovery questions tailored to surface them, (5) two likely objections to anticipate."' },
        { heading: 'For Demo Scripting', body: 'Template: "You are scripting a 20-minute demo for a [persona, e.g. SOC Director] at a [vertical, e.g. financial services] company with these stated priorities: [list priorities]. Build a demo flow with: (1) opening 2-minute context-setting, (2) three demo segments tied to their priorities, (3) explicit moments to pause and confirm relevance, (4) a closing summary that ties capabilities back to their stated outcomes."' },
        { heading: 'For Objection Prep', body: 'Template: "You are an extremely skeptical CISO. Read this [product or capability description, paste here] and generate the 10 toughest, most pointed objections you would raise — including the ones most reps fumble. For each objection, include: (a) the objection itself, (b) one sentence on why this objection is hard, (c) the strongest one-sentence response."' }
      ]
    }
  ],
  quiz: [
    { q: 'Which discovery question best differentiates an AI-literate SE from a product-pitcher?', options: ['What is your budget?', 'How are you thinking about MCP and agent identity?', 'How many users?', 'What color is your logo?'], correct: 1 },
    { q: 'A prospect says "we are invested in Splunk and migration is painful." The right motion is:', options: ['Pitch a rip-and-replace SIEM migration', 'Federation — position Google as the orchestration layer above Splunk via MCP', 'Concede the deal', 'Offer a discount on migration services'], correct: 1 },
    { q: 'Which customer archetype has the highest ACV and fastest close?', options: ['EXPAND — underutilized SecOps customer', 'DISPLACE — Microsoft/Splunk shop', 'WIN — greenfield/cloud-native', 'They are all the same'], correct: 2 },
    { q: 'A prospect says "we tried AI in security and it failed." Best first response:', options: ['Pitch your product harder', 'Ask what specifically went wrong, then listen', 'Tell them they tried the wrong vendor', 'Change the subject'], correct: 1 },
    { q: 'Under the EU AI Act, most enterprise security AI use cases sit in:', options: ['Prohibited', 'Limited risk or high risk categories', 'Unregulated', 'Fully exempt'], correct: 1 },
    { q: 'When demoing an agent, the most trust-building move is to:', options: ['Hide failure cases', 'Show real response times, including failure modes and human-approval gates', 'Use only golden alerts', 'Demo for as long as possible'], correct: 1 }
  ]
};

export default m7;
