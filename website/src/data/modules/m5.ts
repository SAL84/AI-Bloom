import type { CourseModule } from '../../types/course';

const m5: CourseModule = {
  id: 'm5',
  title: 'The Adversarial Side',
  icon: 'shield-alert',
  summary: 'AI as offensive weapon and AI systems as targets — both reframe the defense conversation.',
  lessons: [
    {
      id: 'm5l1',
      title: 'AI-Powered Attacks',
      diagram: 'AIAttackAcceleration',
      slides: [
        { heading: 'Phishing and Social Engineering at Scale', body: 'GenAI removes the cost barrier to high-quality, personalized, multi-language phishing. Voice cloning enables vishing. Real-time deepfake video is operational for targeted fraud. The volume × quality curve has shifted permanently.' },
        { heading: 'Deepfake Fraud Is Now a Board-Level Risk', body: 'The canonical case: in 2024, engineering firm Arup lost $25M when an employee joined a video call where every other participant — including the CFO — was a real-time deepfake. Since then, deepfake-enabled BEC has moved from novelty to standard tradecraft. The defense is procedural, not technological: out-of-band verification for payment changes, code words for executive requests, and treating video presence as weak authentication. This case is worth retelling to your own leadership because it converts "AI risk" from abstract to concrete.' },
        { heading: 'Polymorphic and Adaptive Malware', body: 'LLMs generating obfuscation variants, AI-assisted exploit development, automated vulnerability discovery. Patch-to-exploit times are compressing. The defender patching cycle is now in a race against AI-accelerated weaponization.' },
        { heading: 'Reconnaissance and Targeting', body: 'Automated OSINT aggregation, victim profiling, attack chain planning. Capabilities that once required skilled human operators are increasingly available as commodity tools.' },
        { heading: 'Quantify the Shift for Your Organisation', body: 'Questions that surface this exposure in your own organisation: "Has our phishing simulation click-rate changed in the last 18 months?" (AI-written lures beat template lures consistently). "How would our finance team verify a video call from the CFO requesting an urgent transfer?" (most have no answer). "What is our current patch SLA, and was it set before AI-accelerated exploit development?" These questions reframe AI from a product category to a change in the threat landscape you are already living in.' }
      ]
    },
    {
      id: 'm5l2',
      title: 'Prompt Injection: The Dominant Threat',
      diagram: 'PromptInjection',
      slides: [
        { heading: 'Direct vs Indirect', body: 'Direct: attacker types malicious instructions into the prompt directly. Indirect: payload sits in retrieved data (documents, web pages, emails, tool outputs) that the model later reads. Indirect injection is the dominant practical threat in enterprise.' },
        { heading: 'Why Indirect Is Worse', body: 'The user did nothing wrong. They just asked the agent to summarize a document — the document was poisoned. Defending requires treating all retrieved content as untrusted, including content from your own systems.' },
        { heading: 'The Lethal Trifecta', body: 'A useful mental model for when injection becomes exfiltration: an agent is dangerous when it combines (1) access to private data, (2) exposure to untrusted content, and (3) an outbound channel — the ability to send data somewhere an attacker can read it. Remove any one leg and the worst outcome is contained. This is why "the agent reads email AND can browse the web AND has access to the CRM" should trigger an architecture review, not a feature celebration. Anyone who can whiteboard this trifecta will evaluate an agent deployment faster than anyone reading from a feature list.' },
        { heading: 'Enterprise Mitigation Architecture', body: 'Layered defense: (1) Input sanitization — strip or escape instruction-like patterns before they reach the model context. (2) Privilege separation — the agent that reads external documents should not also have access to high-privilege tools like account management or data export. (3) Output validation — constrain agent outputs to structured formats; free-form tool calls from agent output are higher risk than schema-validated calls. (4) Model-as-judge — a second model or rule layer validates that agent actions match the original user intent. (5) Audit logging — full trace of retrieved content, model input, and tool calls so injections can be forensically reconstructed.' },
        { heading: 'Questions to Ask Before Deployment', body: 'How do you authorize which MCP servers or tools your agents can call? When your agent reads an email or document, is that content treated as trusted or untrusted input? Do you log the full context window — not just the user query, but retrieved content and tool results — for agent sessions? These questions surface injection exposure before it becomes an incident.' }
      ]
    },
    {
      id: 'm5l3',
      title: 'Agent-Specific Attack Surface',
      diagram: 'AgentAttackSurface',
      slides: [
        { heading: 'The New Threats', body: 'Confused-deputy attacks (agent uses its privileges on attacker behalf), tool poisoning (malicious MCP servers), context contamination (persistent memory exploit), lateral movement through agent tool chains. This is the frontier risk surface.' },
        { heading: 'Tool Poisoning and the MCP Supply Chain', body: 'MCP servers are the new software supply chain. Known patterns: malicious tool descriptions that carry hidden instructions the model reads but the human never sees; "rug pulls" where a benign server updates itself into a malicious one after gaining adoption; typosquatted servers imitating popular ones; and over-scoped servers that request far more permissions than their function needs. Mitigations map to classic supply chain discipline: an allowlisted internal registry, version pinning, description auditing, and gateway-level policy on what each server may touch. This is precisely the problem agent registries and agent gateways exist to solve.' },
        { heading: 'Memory and Context Contamination', body: 'Persistent agent memory turns a one-shot injection into a standing compromise: a poisoned instruction stored in memory re-executes across future sessions, long after the original malicious content is gone. Treat agent memory like a database with untrusted writes — validate what gets stored, scope memory per task where possible, expire aggressively, and make memory contents inspectable. Question worth asking of any agent deployment: "Can we inspect what our agents currently hold in memory — and could we tell if something malicious was written there last month?"' },
        { heading: 'Other Attacks on AI Systems', body: 'Jailbreaks: bypass model safety alignment. Model poisoning: corrupt training data to install backdoors. Evasion: craft inputs that fool deployed models. Extraction: query a model to steal capabilities or training data. All concerns for organizations training or deploying their own models.' },
        { heading: 'Defending the Agent Surface', body: 'The defense pattern is least privilege applied to a new actor class: scoped subagents that hold only the tools their task needs, approval gates (hooks) on irreversible actions, cryptographic agent identity so every action is attributable, and full-trace audit logging. None of this is exotic — it is IAM discipline extended to autonomous software. The organisations that get this right treat agents like employees: onboarding, scoped access, monitoring, and offboarding.' }
      ]
    },
    {
      id: 'm5l5',
      diagram: 'AISecurityFrameworks',
      title: 'The Frameworks: OWASP, ATLAS, SAIF',
      slides: [
        { heading: 'OWASP Top 10 for LLM Applications', body: 'The industry-standard vocabulary for LLM risk. The headline entries: prompt injection (LLM01 — always first), sensitive information disclosure, supply chain vulnerabilities, data and model poisoning, improper output handling, excessive agency (the agent-era entry: too much autonomy, too many permissions, too little oversight), system prompt leakage, and unbounded consumption. You do not need to memorize the list — you need to recognize that when a security-mature colleague says "LLM01" they mean prompt injection, and that "excessive agency" is the entry that maps to everything this course says about scoped tools and approval gates.' },
        { heading: 'MITRE ATLAS', body: 'ATLAS is to AI attacks what ATT&CK is to conventional intrusions: a matrix of adversary tactics and techniques targeting AI systems, from reconnaissance of a target model through poisoning, evasion, and exfiltration. Its value: when leadership asks "is AI attack surface actually real or vendor FUD?", ATLAS is the neutral, non-vendor answer — real incidents, catalogued techniques, mapped case studies.' },
        { heading: 'Google SAIF', body: 'The Secure AI Framework is Google\'s contribution: six elements covering secure-by-default infrastructure, detection and response extended to AI, defense automation, harmonized platform controls, adaptive mitigations, and contextual risk assessment. SAIF matters when evaluating any cloud AI platform because it lets you check whether a platform\'s security controls are instances of a published framework or ad hoc features. Pair SAIF for design guidance with ATLAS for threat enumeration and OWASP for application-level checklists.' },
        { heading: 'Putting Frameworks to Work', body: 'Frameworks convert "trust us" into "audit us." Three moves: (1) Pick the framework your organisation will use to assess AI risk — if there is none, introducing one makes you the educator in the room. (2) Require vendors to map their controls to your framework of choice — this is how security review meetings get shorter. (3) Use the "excessive agency" and "supply chain" entries to open the agent governance conversation internally. The team that brings the framework sets the evaluation criteria.' }
      ]
    },
    {
      id: 'm5l4',
      title: 'How Defense Reframes',
      diagram: 'DefenseReframing',
      slides: [
        { heading: 'Speed Over Perfection', body: 'When attackers automate, defenders must too. The traditional review-every-alert model breaks when alert volume scales with attacker automation. AI-assisted triage is not a luxury — it is table stakes for keeping pace.' },
        { heading: 'The Asymmetry Argument', body: 'The honest framing for executives: AI currently favors the attacker at the entry point (cheaper lures, faster exploit development) and favors the defender at scale (triage, correlation, and response across millions of events no human team can review). The strategic question for a security program is therefore not "should we use AI?" but "are we capturing the defender-side advantage as fast as attackers are capturing theirs?" Framed this way, AI adoption becomes a competitive necessity rather than an innovation project — which changes who funds it and how fast.' },
        { heading: 'AIBOM and Agent Identity', body: 'Security programs now need to inventory AI systems, models, training data sources, MCP connections, and agent privileges. This is no longer emerging: EU AI Act obligations are in force, and NIST AI RMF treats AI inventory as a baseline expectation.' },
        { heading: 'The Question to Take Back to Your Team', body: 'How is your team thinking about AI agent identity, agent-to-agent traffic, and agent privilege management? Most security programs have not started. Asking it now puts you ahead of the incident that would otherwise force the question.' },
        { heading: 'Go Deeper: Securing AI Systems', body: 'This module gave you the awareness view: what AI-powered attacks, prompt injection, agent attack surface, and the AI security frameworks are, and why they matter. Hands-on depth — threat modelling AI systems, hardening agent deployments, and red-teaming LLM applications — is its own course on this site: Securing AI Systems. If this module raised questions you want to answer at the keyboard, that course is the next step.' }
      ]
    }
  ],
  quiz: [
    { q: 'The dominant practical prompt injection threat in enterprise is:', options: ['Indirect injection via retrieved documents, pages, and tool output', 'Direct jailbreaks typed straight into public consumer chatbot windows', 'Physical access attacks against server hardware', 'Password spraying against exposed login portals'], correct: 0 },
    { q: 'The "lethal trifecta" that turns prompt injection into data exfiltration is:', options: ['Phishing, malware, and ransomware in combination', 'Three consecutive failed login attempts', 'Private data access + exposure to untrusted content + an outbound channel', 'Jailbreak, data poisoning, and model evasion'], correct: 2 },
    { q: 'A "confused deputy" attack on an agent means:', options: ['The agent crashes partway through the task', 'The model was fine-tuned on poor-quality data by its original vendor', 'The agent refuses to answer the question at all', 'The agent uses its legitimate privileges on the attacker\'s behalf'], correct: 3 },
    { q: 'A benign MCP server that updates itself into a malicious one after gaining adoption is called:', options: ['An evasion attack', 'A rug pull', 'A hallucination', 'A jailbreak'], correct: 1 },
    { q: 'Why is persistent agent memory a distinct attack surface?', options: ['A poisoned instruction in memory re-executes across future sessions', 'It consumes far too much storage on the host', 'Memory is always encrypted at rest anyway', 'It slows the agent down noticeably over time'], correct: 0 },
    { q: 'In the OWASP Top 10 for LLM Applications, "excessive agency" refers to:', options: ['An agent that responds far too quickly to every prompt it gets', 'Using more than one AI vendor in the same stack', 'High API costs across the deployment', 'Too much autonomy, too many permissions, too little oversight'], correct: 3 },
    { q: 'MITRE ATLAS is best described as:', options: ['An EU regulation governing AI systems', 'A matrix of adversary tactics and techniques targeting AI systems', 'A benchmark suite for evaluating model capability and safety claims', 'A commercial product for agent governance'], correct: 1 },
    { q: 'The "asymmetry argument" for AI in security says:', options: ['AI only ever helps the attacking side', 'AI makes attack and defense functionally identical', 'AI favors attackers at the entry point but defenders at scale', 'Defenders should avoid AI entirely until it is properly regulated'], correct: 2 },
    { q: 'AIBOM stands for:', options: ['AI Bill of Materials', 'AI Build Operations Manual', 'Adaptive Intelligence Binary Object Model', 'Automated Incident-Based Object Mapping'], correct: 0 }
  ]
};

export default m5;
