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
        { heading: 'The Three Don ts', body: '(1) Do not demo on cherry-picked golden alerts — use one the customer brings. (2) Do not hide latency — show real response times. (3) Do not demo agent autonomy without showing the human-approval gates.' },
        { heading: 'The Honest Demo Script', body: 'Show the agent doing real work. Show where it asks for human input. Show where it makes a wrong call and how you catch it. Counterintuitively, demoing failure modes builds more trust than perfect runs.' }
      ]
    },
    {
      id: 'm7l3',
      title: 'Objection Handling',
      slides: [
        { heading: 'It is just regex with marketing', body: 'Fair skepticism. Here is the difference: our detection layer uses classical ML for pattern recognition, but the agent layer above it is genuinely new — it iterates, pivots across systems, maintains investigation state. I can show you a side-by-side of the same alert handled by rule-based automation vs. our agent.' },
        { heading: 'What about hallucinations', body: 'Real concern. Our mitigation stack: every response is grounded in retrieved evidence with citations, outputs are constrained to validated formats, and irreversible actions require analyst confirmation. The agent is not replacing judgment — it is removing the work that does not need judgment.' },
        { heading: 'Our data is too sensitive for AI', body: 'That is why our deployment uses VPC Service Controls, customer-managed encryption keys, and data residency controls. Customer prompts and data are not used to train base models. The data stays in your tenant. Happy to walk through the architecture with your security team.' },
        { heading: 'We Tried AI in Security and It Failed', body: 'Best response: ask what specifically went wrong, then listen. Most failures trace to bad data quality, unclear success metrics, no human-in-the-loop design, or pilot-without-production-path. Address the actual cause from the prior failure, not generic capability claims.' }
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
    { q: 'A prospect says "we tried AI in security and it failed." Best first response:', options: ['Pitch your product harder', 'Ask what specifically went wrong, then listen', 'Tell them they tried the wrong vendor', 'Change the subject'], correct: 1 },
    { q: 'Under the EU AI Act, most enterprise security AI use cases sit in:', options: ['Prohibited', 'Limited risk or high risk categories', 'Unregulated', 'Fully exempt'], correct: 1 },
    { q: 'When demoing an agent, the most trust-building move is to:', options: ['Hide failure cases', 'Show real response times, including failure modes and human-approval gates', 'Use only golden alerts', 'Demo for as long as possible'], correct: 1 }
  ]
};

export default m7;
