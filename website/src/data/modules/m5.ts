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
        { heading: 'Deepfake Fraud Is Now a Board-Level Risk', body: 'The canonical case: in 2024, engineering firm Arup lost $25M when an employee joined a video call where every other participant — including the CFO — was a real-time deepfake. Since then, deepfake-enabled BEC has moved from novelty to standard tradecraft. The defense is procedural, not technological: out-of-band verification for payment changes, code words for executive requests, and treating video presence as weak authentication. This story lands in every CISO conversation because it converts "AI risk" from abstract to concrete.' },
        { heading: 'Polymorphic and Adaptive Malware', body: 'LLMs generating obfuscation variants, AI-assisted exploit development, automated vulnerability discovery. Patch-to-exploit times are compressing. The defender patching cycle is now in a race against AI-accelerated weaponization.' },
        { heading: 'Reconnaissance and Targeting', body: 'Automated OSINT aggregation, victim profiling, attack chain planning. Capabilities that once required skilled human operators are increasingly available as commodity tools.' },
        { heading: 'The SE Angle: Quantify the Shift', body: 'Discovery questions that surface this pain: "Has your phishing simulation click-rate changed in the last 18 months?" (AI-written lures beat template lures consistently). "How would your finance team verify a video call from your CFO requesting an urgent transfer?" (most have no answer). "What is your current patch SLA, and was it set before AI-accelerated exploit development?" These questions reframe AI from a product category to a change in the threat landscape the customer is already living in.' }
      ]
    },
    {
      id: 'm5l2',
      title: 'Prompt Injection: The Dominant Threat',
      diagram: 'PromptInjection',
      slides: [
        { heading: 'Direct vs Indirect', body: 'Direct: attacker types malicious instructions into the prompt directly. Indirect: payload sits in retrieved data (documents, web pages, emails, tool outputs) that the model later reads. Indirect injection is the dominant practical threat in enterprise.' },
        { heading: 'Why Indirect Is Worse', body: 'The user did nothing wrong. They just asked the agent to summarize a document — the document was poisoned. Defending requires treating all retrieved content as untrusted, including content from your own systems.' },
        { heading: 'The Lethal Trifecta', body: 'A useful mental model for when injection becomes exfiltration: an agent is dangerous when it combines (1) access to private data, (2) exposure to untrusted content, and (3) an outbound channel — the ability to send data somewhere an attacker can read it. Remove any one leg and the worst outcome is contained. This is why "the agent reads email AND can browse the web AND has access to the CRM" should trigger an architecture review, not a feature celebration. SEs who can whiteboard this trifecta instantly out-position competitors reading from a feature list.' },
        { heading: 'Enterprise Mitigation Architecture', body: 'Layered defense: (1) Input sanitization — strip or escape instruction-like patterns before they reach the model context. (2) Privilege separation — the agent that reads external documents should not also have access to high-privilege tools like account management or data export. (3) Output validation — constrain agent outputs to structured formats; free-form tool calls from agent output are higher risk than schema-validated calls. (4) Model-as-judge — a second model or rule layer validates that agent actions match the original user intent. (5) Audit logging — full trace of retrieved content, model input, and tool calls so injections can be forensically reconstructed.' },
        { heading: 'Discovery Questions for Prospects', body: 'How do you authorize which MCP servers or tools your agents can call? When your agent reads an email or document, is that content treated as trusted or untrusted input? Do you log the full context window — not just the user query, but retrieved content and tool results — for agent sessions? These questions surface injection exposure before it becomes an incident, and position you as the architect rather than the salesperson.' }
      ]
    },
    {
      id: 'm5l3',
      title: 'Agent-Specific Attack Surface',
      diagram: 'AgentAttackSurface',
      slides: [
        { heading: 'The New Threats', body: 'Confused-deputy attacks (agent uses its privileges on attacker behalf), tool poisoning (malicious MCP servers), context contamination (persistent memory exploit), lateral movement through agent tool chains. This is the frontier risk surface.' },
        { heading: 'Tool Poisoning and the MCP Supply Chain', body: 'MCP servers are the new software supply chain. Known patterns: malicious tool descriptions that carry hidden instructions the model reads but the human never sees; "rug pulls" where a benign server updates itself into a malicious one after gaining adoption; typosquatted servers imitating popular ones; and over-scoped servers that request far more permissions than their function needs. Mitigations map to classic supply chain discipline: an allowlisted internal registry, version pinning, description auditing, and gateway-level policy on what each server may touch. This is precisely the problem Agent Registry and Agent Gateway exist to solve — the architecture conversation writes itself.' },
        { heading: 'Memory and Context Contamination', body: 'Persistent agent memory turns a one-shot injection into a standing compromise: a poisoned instruction stored in memory re-executes across future sessions, long after the original malicious content is gone. Treat agent memory like a database with untrusted writes — validate what gets stored, scope memory per task where possible, expire aggressively, and make memory contents inspectable. Discovery question: "Can you show me what your agent currently has in memory, and could you tell if something malicious was written there last month?"' },
        { heading: 'Other Attacks on AI Systems', body: 'Jailbreaks: bypass model safety alignment. Model poisoning: corrupt training data to install backdoors. Evasion: craft inputs that fool deployed models. Extraction: query a model to steal capabilities or training data. All concerns for organizations training or deploying their own models.' },
        { heading: 'Defending the Agent Surface', body: 'The defense pattern is least privilege applied to a new actor class: scoped subagents that hold only the tools their task needs, approval gates (hooks) on irreversible actions, cryptographic agent identity so every action is attributable, and full-trace audit logging. None of this is exotic — it is IAM discipline extended to autonomous software. The customers who get this right treat agents like employees: onboarding, scoped access, monitoring, and offboarding.' }
      ]
    },
    {
      id: 'm5l5',
      title: 'The Frameworks: OWASP, ATLAS, SAIF',
      slides: [
        { heading: 'OWASP Top 10 for LLM Applications', body: 'The industry-standard vocabulary for LLM risk. The headline entries: prompt injection (LLM01 — always first), sensitive information disclosure, supply chain vulnerabilities, data and model poisoning, improper output handling, excessive agency (the agent-era entry: too much autonomy, too many permissions, too little oversight), system prompt leakage, and unbounded consumption. You do not need to memorize the list — you need to recognize that when a security-mature customer says "LLM01" they mean prompt injection, and that "excessive agency" is the entry that maps to everything this course says about scoped tools and approval gates.' },
        { heading: 'MITRE ATLAS', body: 'ATLAS is to AI attacks what ATT&CK is to conventional intrusions: a matrix of adversary tactics and techniques targeting AI systems, from reconnaissance of a target model through poisoning, evasion, and exfiltration. Its value in a sales conversation: when a customer asks "is AI attack surface actually real or vendor FUD?", ATLAS is the neutral, non-vendor answer — real incidents, catalogued techniques, mapped case studies.' },
        { heading: 'Google SAIF', body: 'The Secure AI Framework is Google\'s contribution: six elements covering secure-by-default infrastructure, detection and response extended to AI, defense automation, harmonized platform controls, adaptive mitigations, and contextual risk assessment. SAIF matters in Google-aligned deals because it shows the security controls in the platform (Model Armor, VPC-SC, Agent Gateway) are instances of a published framework, not ad hoc features. Pair SAIF for design guidance with ATLAS for threat enumeration and OWASP for application-level checklists.' },
        { heading: 'Using Frameworks in Discovery', body: 'Frameworks convert "trust us" into "audit us." Three moves: (1) Ask which framework the customer uses to assess AI risk — if none, you have a consultative opening to introduce one, and you become the educator in the deal. (2) Map your platform\'s controls to their framework of choice — this is how security review meetings get shorter. (3) Use "excessive agency" and "supply chain" entries to open the agent governance conversation that leads to Agent Gateway and Registry. The SE who brings the framework runs the evaluation criteria.' }
      ]
    },
    {
      id: 'm5l4',
      title: 'How Defense Reframes',
      diagram: 'DefenseReframing',
      slides: [
        { heading: 'Speed Over Perfection', body: 'When attackers automate, defenders must too. The traditional review-every-alert model breaks when alert volume scales with attacker automation. AI-assisted triage is not a luxury — it is table stakes for keeping pace.' },
        { heading: 'The Asymmetry Argument', body: 'The honest framing for executives: AI currently favors the attacker at the entry point (cheaper lures, faster exploit development) and favors the defender at scale (triage, correlation, and response across millions of events no human team can review). The strategic question for a security program is therefore not "should we use AI?" but "are we capturing the defender-side advantage as fast as attackers are capturing theirs?" Framed this way, AI adoption becomes a competitive necessity rather than an innovation project — which changes who funds it and how fast.' },
        { heading: 'AIBOM and Agent Identity', body: 'Customers increasingly need to inventory AI systems, models, training data sources, MCP connections, and agent privileges. Emerging requirement, especially under frameworks like the EU AI Act and NIST AI RMF.' },
        { heading: 'The New Discovery Question', body: 'How is your team thinking about AI agent identity, agent-to-agent traffic, and agent privilege management? Most prospects have not. This question opens doors that classical security questions do not.' }
      ]
    }
  ],
  quiz: [
    { q: 'The dominant practical prompt injection threat in enterprise is:', options: ['Direct jailbreaks of public chatbots', 'Indirect injection via retrieved data (documents, web pages, tool outputs)', 'Physical access attacks', 'Password spraying'], correct: 1 },
    { q: 'The "lethal trifecta" that turns prompt injection into data exfiltration is:', options: ['Phishing, malware, and ransomware', 'Private data access + exposure to untrusted content + an outbound channel', 'Three failed login attempts', 'Jailbreak, poisoning, and evasion'], correct: 1 },
    { q: 'A "confused deputy" attack on an agent means:', options: ['The agent crashes', 'The agent uses its legitimate privileges to act on the attacker behalf', 'The model is fine-tuned poorly', 'The agent refuses to answer'], correct: 1 },
    { q: 'A benign MCP server that updates itself into a malicious one after gaining adoption is called:', options: ['A jailbreak', 'A rug pull', 'An evasion attack', 'A hallucination'], correct: 1 },
    { q: 'Why is persistent agent memory a distinct attack surface?', options: ['It uses too much storage', 'A poisoned instruction stored in memory re-executes across future sessions — a one-shot injection becomes a standing compromise', 'Memory is always encrypted', 'It slows the agent down'], correct: 1 },
    { q: 'In the OWASP Top 10 for LLM Applications, "excessive agency" refers to:', options: ['An agent that responds too quickly', 'Too much autonomy, too many permissions, and too little oversight for an agent', 'Using more than one AI vendor', 'High API costs'], correct: 1 },
    { q: 'MITRE ATLAS is best described as:', options: ['A Google product for agent governance', 'A matrix of adversary tactics and techniques targeting AI systems — the AI counterpart to ATT&CK', 'An EU regulation', 'A model benchmark suite'], correct: 1 },
    { q: 'The "asymmetry argument" for AI in security says:', options: ['AI only helps attackers', 'AI favors attackers at the entry point but favors defenders at scale — the question is who captures their advantage faster', 'AI makes attack and defense identical', 'Defenders should avoid AI until it is regulated'], correct: 1 },
    { q: 'AIBOM stands for:', options: ['AI Build Operations Manual', 'AI Bill of Materials', 'Adaptive Intelligence Binary Object Model', 'Automated Incident-Based Object Mapping'], correct: 1 }
  ]
};

export default m5;
