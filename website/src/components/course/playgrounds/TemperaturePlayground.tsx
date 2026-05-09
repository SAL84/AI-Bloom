import React, { useState } from 'react';
import { Thermometer, RefreshCw } from 'lucide-react';

const PROMPT = 'Describe what a firewall does in one sentence.';

const RESPONSES: Record<string, string[]> = {
  '0': [
    'A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.',
  ],
  '0.5': [
    'A firewall filters network traffic according to security rules, blocking unauthorized access while allowing legitimate communications through.',
    'A firewall enforces security policies by inspecting network packets and allowing or blocking them based on configured rules.',
    'A firewall monitors network traffic and blocks unauthorized connections according to a defined set of security rules.',
  ],
  '1': [
    'A firewall acts as a gatekeeper for your network, examining each data packet and deciding whether to allow or block it based on security policy.',
    'Firewalls sit between your network and the outside world, evaluating incoming and outgoing traffic against a ruleset to stop unauthorized access.',
    'A firewall protects a network by scrutinising all traffic that passes through it, permitting legitimate communications while blocking potential threats.',
  ],
  '1.5': [
    "Think of a firewall as a bouncer for your network — it checks every packet at the door and turns away anything that doesn't match the guest list.",
    "A firewall is essentially your network's immune system: constantly scanning traffic for anything that looks like it doesn't belong, then blocking it.",
    "A firewall is the wall it sounds like — a barrier deciding what gets in and out of your network based on rules your security team hopefully thought through.",
  ],
  '2': [
    "Behold the firewall: ancient guardian of packets, slayer of unauthorised SYN flags, and the reason your printer still can't reach the internet — which is fine, actually.",
    'A firewall is what happens when someone decided "just let all the traffic in" was a bad policy, which was, statistically, correct in 1988 and remains correct today.',
    "Firewall = big digital NO sitting at your network edge going 'not today' to suspicious packets, which sounds simple until you're debugging why Zoom won't connect at 8:59am.",
  ],
};

const TEMP_LABELS = [
  { temp: 0,   label: 'Deterministic', desc: 'Always the exact same output. Best for structured, factual tasks.',            color: 'text-blue-600' },
  { temp: 0.5, label: 'Focused',       desc: 'Slight variation. Reliable but not robotic. Good for professional writing.',    color: 'text-emerald-600' },
  { temp: 1,   label: 'Balanced',      desc: 'Noticeable variation. Natural-sounding responses. Default for most use cases.', color: 'text-amber-600' },
  { temp: 1.5, label: 'Creative',      desc: 'Significant variation. Metaphors and unexpected phrasing start appearing.',     color: 'text-orange-600' },
  { temp: 2,   label: 'Chaotic',       desc: 'Highly unpredictable. Occasionally brilliant, occasionally incoherent.',        color: 'text-red-600' },
];

function getKey(temp: number): string {
  if (temp <= 0.1) return '0';
  if (temp <= 0.75) return '0.5';
  if (temp <= 1.25) return '1';
  if (temp <= 1.75) return '1.5';
  return '2';
}

export const TemperaturePlayground: React.FC = () => {
  const [temp, setTemp] = useState(0.7);
  const [sampleIdx, setSampleIdx] = useState(0);

  const key = getKey(temp);
  const responses = RESPONSES[key];
  const current = responses[sampleIdx % responses.length];
  const labelInfo = TEMP_LABELS.reduce((prev, cur) =>
    Math.abs(cur.temp - temp) < Math.abs(prev.temp - temp) ? cur : prev
  );
  const isDeterministic = key === '0';

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Thermometer className="w-5 h-5 text-orange-500" />
        <h2 className="text-lg font-bold text-slate-900">Temperature Slider</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        Temperature controls how random the model's output is. At 0, it always picks the most likely next word. Higher values make it sample from less likely options — more creative, but less predictable.
      </p>

      <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 mb-5">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Prompt</p>
        <p className="text-sm text-slate-700 font-medium">"{PROMPT}"</p>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-slate-700">Temperature</label>
          <span className={`text-sm font-bold ${labelInfo.color}`}>{temp.toFixed(1)} — {labelInfo.label}</span>
        </div>
        <input
          type="range" min={0} max={2} step={0.1}
          value={temp}
          onChange={e => { setTemp(parseFloat(e.target.value)); setSampleIdx(0); }}
          className="w-full accent-orange-500"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>0 — Deterministic</span>
          <span>1 — Default</span>
          <span>2 — Chaos</span>
        </div>
        <p className="text-xs text-slate-500 mt-2 italic">{labelInfo.desc}</p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-wider text-slate-400">Example output</p>
          <button
            onClick={() => setSampleIdx(i => i + 1)}
            disabled={isDeterministic}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition ${
              isDeterministic
                ? 'text-slate-300 border-slate-200 cursor-not-allowed'
                : 'text-slate-600 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <RefreshCw className="w-3 h-3" /> See another
          </button>
        </div>
        <p className="text-sm text-slate-800 leading-relaxed">"{current}"</p>
        {isDeterministic
          ? <p className="text-xs text-blue-500 mt-3 italic">At temperature 0, the model always produces this exact response — every single time.</p>
          : <p className="text-xs text-slate-400 mt-3 italic">Click "See another" to sample a different response at this temperature.</p>
        }
      </div>
    </div>
  );
};
