export const diagram4d = `<svg width="100%" viewBox="0 0 840 480" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Computer Vision: From Specialised Models to Multimodal LLMs</title>
<desc>Diagram showing four core computer vision tasks at top — object detection, classification, segmentation, video understanding — and the architectural choice between standalone CV models and multimodal LLMs at the bottom.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>Computer Vision: Four Core Tasks &amp; Two Architectures</text>

<!-- ── FOUR CV TASKS (2x2 grid) ─────────────────────────── -->
<text x="420" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Core computer vision tasks</text>

<!-- Object Detection (top-left, purple) -->
<rect x="12" y="60" width="404" height="100" rx="12" fill="#ede9fe"/>
<rect x="26" y="74" width="140" height="18" rx="4" fill="#7c3aed"/>
<text x="96" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Object Detection</text>
<text x="214" y="106" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Identify and locate objects in an image</text>
<text x="214" y="124" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Security cameras, inventory, autonomous vehicles</text>
<text x="214" y="142" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>YOLO · EfficientDet · DETR — high throughput, low latency</text>

<!-- Image Classification (top-right, blue) -->
<rect x="424" y="60" width="404" height="100" rx="12" fill="#eff6ff"/>
<rect x="438" y="74" width="140" height="18" rx="4" fill="#2563eb"/>
<text x="508" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Image Classification</text>
<text x="626" y="106" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>What category does this image belong to?</text>
<text x="626" y="124" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Spam filters, content moderation, medical triage</text>
<text x="626" y="142" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>ResNet · ViT — single-label or multi-label output</text>

<!-- Semantic Segmentation (bottom-left, amber) -->
<rect x="12" y="170" width="404" height="100" rx="12" fill="#fef3c7"/>
<rect x="26" y="184" width="140" height="18" rx="4" fill="#d97706"/>
<text x="96" y="196" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Semantic Segmentation</text>
<text x="214" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Label every pixel in the image</text>
<text x="214" y="234" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Surgical planning, satellite analysis, self-driving</text>
<text x="214" y="252" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>SAM · U-Net · Mask R-CNN — pixel-precise output</text>

<!-- Video Understanding (bottom-right, green) -->
<rect x="424" y="170" width="404" height="100" rx="12" fill="#ecfdf5"/>
<rect x="438" y="184" width="140" height="18" rx="4" fill="#059669"/>
<text x="508" y="196" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Video Understanding</text>
<text x="626" y="216" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Track objects and actions across frames</text>
<text x="626" y="234" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Surveillance, sports analytics, manufacturing QA</text>
<text x="626" y="252" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Temporal models with strategic frame sampling</text>

<!-- ── TWO ARCHITECTURES (comparison bar) ───────────────── -->
<text x="420" y="294" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Two architectures — choose by the task</text>

<!-- Standalone CV (left, slate) -->
<rect x="12" y="304" width="404" height="120" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
<rect x="26" y="318" width="180" height="18" rx="4" fill="#475569"/>
<text x="116" y="330" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Standalone CV Models</text>
<text x="214" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Fast · cheap · single-task</text>
<text x="214" y="370" text-anchor="middle" font-size="9" fill="#334155" font-family='"Anthropic Sans", -apple-system, sans-serif'>Right for high-volume real-time pipelines</text>
<text x="214" y="386" text-anchor="middle" font-size="9" fill="#334155" font-family='"Anthropic Sans", -apple-system, sans-serif'>Optimised inference, predictable latency</text>
<text x="214" y="404" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Outputs: bounding boxes, masks, class labels</text>

<!-- vs arrow -->
<text x="420" y="372" text-anchor="middle" font-size="14" font-weight="700" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>vs</text>

<!-- Multimodal LLMs (right, purple) -->
<rect x="424" y="304" width="404" height="120" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
<rect x="438" y="318" width="180" height="18" rx="4" fill="#7c3aed"/>
<text x="528" y="330" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Multimodal LLMs</text>
<text x="626" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Slower · pricier · reasons about what it sees</text>
<text x="626" y="370" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Right when you need explanation alongside detection</text>
<text x="626" y="386" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Zero-shot generalisation to new visual categories</text>
<text x="626" y="404" text-anchor="middle" font-size="9" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>Outputs: natural language analysis &amp; recommendations</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="436" width="816" height="24" rx="8" fill="#1e40af"/>
<text x="420" y="452" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>The convergence: frontier multimodal LLMs are absorbing standalone CV capabilities each release cycle — the boundary is dissolving</text>

</svg>`;
