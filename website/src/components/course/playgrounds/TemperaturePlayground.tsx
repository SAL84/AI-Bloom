import React, { useState } from 'react';
import { Thermometer, RefreshCw } from 'lucide-react';

const PROMPT = 'Explain what a volcano is in one sentence.';

const RESPONSES: Record<string, string[]> = {
  '0': [
    'A volcano is an opening in a planet\'s crust through which molten rock, ash, and gases from below the surface are able to escape.',
  ],
  '0.5': [
    'A volcano is a rupture in the Earth\'s crust that allows molten rock, ash, and gas to escape from deep beneath the surface.',
    'A volcano is an opening in the Earth\'s surface through which magma, ash, and volcanic gases erupt from the interior.',
    'A volcano is a vent in the Earth\'s crust where molten rock and gases from below can reach the surface.',
  ],
  '1': [
    'A volcano is a place where the Earth\'s crust has cracked open, letting molten rock from deep underground rise and erupt at the surface.',
    'A volcano forms where pressure drives magma up through a weakness in the crust until it breaks out as lava, ash, and gas.',
    'A volcano is the Earth\'s pressure valve — an opening where heat and molten rock from far below finally find their way out.',
  ],
  '1.5': [
    'A volcano is a mountain with a temper: it spends most of its life quiet, then reminds everyone that the planet underneath is still molten.',
    'Think of a volcano as a chimney for the Earth\'s furnace — a crack that lets a few hundred kilometres of trapped heat make a dramatic exit.',
    'A volcano is what happens when the planet has been holding something in for ten thousand years and finally lets it out all at once.',
  ],
  '2': [
    'Volcano: the Earth clearing its throat, except the throat is nine kilometres of rock and the phlegm is at eleven hundred degrees.',
    'A volcano is geology\'s way of announcing that it was never actually solid ground, it was just solid ground for now, and "now" is a geological unit that owes you nothing.',
    'Picture a mountain that is technically a lid. Now picture the lid losing an argument with the thing underneath it. That is a volcano, and it has been winning that argument since before there were witnesses.',
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
