import type { CourseModule } from '../../types/course';

const m5: CourseModule = {
  id: 'm5',
  title: 'The Adversarial Side',
  icon: '⚔️',
  summary: 'AI as offensive weapon and AI systems as targets — both reframe the defense conversation.',
  lessons: [
    {
      id: 'm5l1',
      title: 'AI-Powered Attacks',
      diagram: 'AIAttackAcceleration',
      slides: [
        { heading: 'Phishing and Social Engineering at Scale', body: 'GenAI removes the cost barrier to high-quality, personalized, multi-language phishing. Voice cloning enables vishing. Real-time deepfake video is operational for targeted fraud. The volume × quality curve has shifted permanently.' },
        { heading: 'Polymorphic and Adaptive Malware', body: 'LLMs generating obfuscation variants, AI-assisted exploit development, automated vulnerability discovery. Patch-to-exploit times are compressing. The defender patching cycle is now in a race against AI-accelerated weaponization.' },
        { heading: 'Reconnaissance and Targeting', body: 'Automated OSINT aggregation, victim profiling, attack chain planning. Capabilities that once required skilled human operators are increasingly available as commodity tools.' }
      ]
    },
    {
      id: 'm5l2',
      title: 'Prompt Injection: The Dominant Threat',
      diagram: 'PromptInjection',
      slides: [
        { heading: 'Direct vs Indirect', body: 'Direct: attacker types malicious instructions into the prompt directly. Indirect: payload sits in retrieved data (documents, web pages, emails, tool outputs) that the model later reads. Indirect injection is the dominant practical threat in enterprise.' },
        { heading: 'Why Indirect Is Worse', body: 'The user did nothing wrong. They just asked the agent to summarize a document — the document was poisoned. Defending requires treating all retrieved content as untrusted, including content from your own systems.' },
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
        { heading: 'Other Attacks on AI Systems', body: 'Jailbreaks: bypass model safety alignment. Model poisoning: corrupt training data to install backdoors. Evasion: craft inputs that fool deployed models. Extraction: query a model to steal capabilities or training data. All concerns for organizations training or deploying their own models.' }
      ]
    },
    {
      id: 'm5l4',
      title: 'How Defense Reframes',
      slides: [
        { heading: 'Speed Over Perfection', body: 'When attackers automate, defenders must too. The traditional review-every-alert model breaks when alert volume scales with attacker automation. AI-assisted triage is not a luxury — it is table stakes for keeping pace.' },
        { heading: 'AIBOM and Agent Identity', body: 'Customers increasingly need to inventory AI systems, models, training data sources, MCP connections, and agent privileges. Emerging requirement, especially under frameworks like the EU AI Act and NIST AI RMF.' },
        { heading: 'The New Discovery Question', body: 'How is your team thinking about AI agent identity, agent-to-agent traffic, and agent privilege management? Most prospects have not. This question opens doors that classical security questions do not.' }
      ]
    }
  ],
  quiz: [
    { q: 'The dominant practical prompt injection threat in enterprise is:', options: ['Direct jailbreaks of public chatbots', 'Indirect injection via retrieved data (documents, web pages, tool outputs)', 'Physical access attacks', 'Password spraying'], correct: 1 },
    { q: 'A "confused deputy" attack on an agent means:', options: ['The agent crashes', 'The agent uses its legitimate privileges to act on the attacker behalf', 'The model is fine-tuned poorly', 'The agent refuses to answer'], correct: 1 },
    { q: 'AIBOM stands for:', options: ['AI Build Operations Manual', 'AI Bill of Materials', 'Adaptive Intelligence Binary Object Model', 'Automated Incident-Based Object Mapping'], correct: 1 }
  ]
};

export default m5;
