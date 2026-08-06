import type { CourseModule } from '../../types/course';

const fnM3: CourseModule = {
  id: 'fn-m3',
  title: 'The Failure Modes That Cost Money',
  icon: 'shield-alert',
  summary: 'The five ways AI loses money in a financial institution — fabricated figures that look like precision, backtests tuned until they flatter, leakage that inflates results, models meeting a market they were never fitted to, and the correlated risk of everyone buying the same one.',
  lessons: [
    {
      id: 'fn3l1',
      title: 'Confident Numbers That Are Wrong',
      slides: [
        {
          heading: 'Fluent, Precise, and Wrong',
          body: 'A language model asked for a figure produces the most probable-looking figure rather than a retrieved one, because nothing in the mechanism distinguishes a number it has seen from a number that merely fits the shape of the sentence. That mechanism is treated properly in AI Deep Dive, and AI for Legal follows the same failure into invented citations; what this lesson is about is why finance is an unusually bad place for it to land. In most domains a fabricated detail looks odd. In finance it looks like work: a spread quoted in basis points, a leverage ratio to two decimals, a year-on-year change that sounds about right. The output carries exactly the signals the profession uses to indicate care — units, precision, a source-shaped attribution — supplied by a process that used none of them.',
          bullets: [
            'The mechanism is general and covered elsewhere; what is finance-specific is how convincing the result looks',
            'Financial formatting — decimals, basis points, ratios — reads as evidence of care it did not involve',
            'Fabricated attributions travel with fabricated figures: a filing, a note, a quarter that does not say it',
            'Fluency in your own conventions is what makes it persuasive, so domain expertise is not protection here',
          ],
        },
        {
          heading: 'Where Wrong Numbers Enter the Work',
          body: 'The high-risk surfaces are the ones where a model compresses a long document into a short claim: summarised filings and prospectuses, condensed earnings calls, credit memos assembled from a data room, market commentary, pitch material, and any spreadsheet formula a model has drafted. Within those, the recurring defects are specific rather than random. The right number from the wrong period. A restated figure presented as originally reported. Consolidated confused with segment. Currency and units silently converted, or silently not. A percentage change computed against the wrong base. Totals that do not tie to their components. None of these announces itself; each stays invisible until somebody opens the source and looks.',
          bullets: [
            'Compression is where the risk sits: summarised filings, condensed calls, credit memos, drafted formulas',
            'The classic defects are period, restatement, consolidated-versus-segment, currency, units, and the base of a percentage',
            'Checking that totals tie to their components is the cheapest test and the one most often skipped',
            'A model will also attach a real figure to the wrong document, which survives a shallow check',
          ],
        },
        {
          heading: 'Tie It Back to the Source',
          body: 'Verification only survives a deadline if it is cheap and specific. Treat every figure a model produces as unsourced until somebody has opened the filing, the pricing screen, or the system of record and seen it there. Require a locator — document, statement, period, page or note — rather than a source name, because a name is what the model is best at inventing. Recompute anything derived instead of accepting it, since ratios and growth rates are where small errors compound into confident ones. Never ask the model to confirm its own figure; asked to check, it produces confirmation and more invented detail. And check at the point where the number enters the institution\'s work, not where it leaves it.',
          bullets: [
            'Treat every model-produced figure as unsourced until a person has opened the source and seen it',
            'Demand a locator — document, statement, period, page — not a source name a model can invent',
            'Recompute derived quantities, and never ask the model to verify its own output',
            'Check at the point of entry into the work: by committee stage a figure has been believed several times',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'This takes about fifteen minutes and it usually finds something. Run it once, on a document anybody can read.',
          exercise: {
            task: 'Pick one public filing — an annual or quarterly report from any listed company — and ask an AI tool to summarise its financial position in ten bullet points containing figures. Then open the filing yourself and check every figure: period, basis, units, and whether it ties. No customer data, no personal financial data, no material non-public information and nothing confidential goes into an AI tool at any point; use public filings, synthetic records or de-identified material only.',
            copyText: 'Company and filing used (public document only):\nFigure as stated by the tool:\nFigure in the filing:\nPeriod correct: yes / no\nBasis correct — consolidated or segment, reported or restated: yes / no\nCurrency and units correct: yes / no\nTies to its components: yes / no\nAttribution — did the named page or note actually contain it: yes / no',
            selfCheck: [
              'Every figure has been opened in the filing itself, not confirmed by asking the tool again',
              'You can name which defect type each error was — period, basis, units, base, or attribution',
              'You recorded how long the full check took, so it can be budgeted into real work',
              'Everything you used was public, synthetic or de-identified — no customer, personal financial or confidential material entered any tool',
            ],
          },
        },
      ],
    },
    {
      id: 'fn3l2',
      title: 'Backtest Overfitting and the Illusion of Alpha',
      slides: [
        {
          heading: 'How a Strategy Becomes Beautiful',
          body: 'Nobody sets out to overfit. The process that produces it is ordinary and looks like diligence. A researcher has an idea, tests it, and the result is unremarkable. So a parameter is adjusted. A different lookback window is tried. Two loss-making years are set aside as unrepresentative. A filter is added that happens to drop the trades that went wrong. The universe is narrowed to the names where the effect is cleaner. Each step has a defensible rationale, and after enough of them the equity curve is smooth and the drawdowns are shallow. What has been found is not a market regularity. It is the particular shape of one historical sample, learned extremely well.',
          bullets: [
            'Overfitting is produced by ordinary, individually defensible decisions, not by bad faith',
            'Parameter tuning, window choice, sample exclusions, filters and universe narrowing all fit the same history',
            'The smoother the backtested curve, the more selection has usually gone into producing it',
            'What is learned is the shape of one sample, not a relationship that will persist',
          ],
        },
        {
          heading: 'Multiple Testing, in Plain Terms',
          body: 'Test enough strategies against the same history and some will look excellent by chance alone. This is not a subtle statistical point; it is arithmetic. A significance threshold appropriate for a single pre-specified hypothesis becomes meaningless once a hundred variants have been tried, because the threshold was designed to be crossed occasionally by noise. The practical difficulty is that the number of trials is rarely recorded and often not even known: variants abandoned mentally, ideas that died in a notebook, configurations inherited from a colleague who left, and every earlier version of the same idea all count as trials, and none of them appear in the write-up.',
          bullets: [
            'Enough variants against one history guarantees that some will look excellent from noise alone',
            'A threshold calibrated for one pre-specified hypothesis means nothing after a hundred quiet attempts',
            'The trial count includes abandoned ideas and inherited configurations, and is almost never recorded',
            'A reported performance figure is the maximum of an unknown number of draws, not a typical one',
          ],
        },
        {
          heading: '"We Validated It" Often Means "We Kept Trying"',
          body: 'Out-of-sample testing is the standard reassurance, and it stops working the moment the out-of-sample period is used more than once. A strategy that fails the holdout, is revised, and is retested has consumed the holdout: the second test is in-sample, whatever it is called in the memo. Over a research programme running for years, the same market history is used repeatedly by the same team, so there is often no genuinely unseen data left anywhere in the building. This is why the useful question about a backtest is not "was it validated out of sample?" but "how many things were tried, by how many people, against this same history, before this one reached me?"',
          bullets: [
            'A holdout is spent the first time a failing strategy is revised and tested against it again',
            'Across a long research programme the same history is reused until nothing is genuinely unseen',
            'Ask how many variants were tried and by whom, not whether an out-of-sample test was run',
            'Forward-dated live or paper trading is the only sample the researcher could not have fitted',
          ],
        },
        {
          heading: 'What Honest Evaluation Looks Like',
          body: 'Much of this is fixable with process rather than mathematics. Record the number of configurations tested and report it with the result, because a strategy that survived one attempt and one that survived four hundred deserve different scepticism. Pre-specify the rule, the universe, the horizon and the acceptance criterion before anything is run. Prefer statistics that explicitly discount for the number of trials — deflated performance measures and multiple-testing adjustments exist for exactly this — over an unadjusted headline. Keep one genuinely untouched period, held by somebody other than the researcher, and spend it once. And treat economic rationale as a filter: an unexplainable signal is more likely a coincidence found by search.',
          bullets: [
            'Record and report the number of configurations tried — it changes how the headline should be read',
            'A criterion written once the result is known is not a criterion — the timestamp is what makes it one',
            'Use trial-count-aware statistics and multiple-testing adjustments rather than a raw performance figure',
            'Hold one untouched period outside the researcher\'s control and spend it exactly once',
          ],
        },
      ],
    },
    {
      id: 'fn3l3',
      title: 'Leakage and Look-Ahead Bias',
      slides: [
        {
          heading: 'Information That Would Not Have Been There',
          body: 'Leakage is the presence, in training data, of information that would not have been available at the moment the decision is made. The model uses it, performance looks excellent, and the result cannot be reproduced in production because the information arrives after the point of use — or never arrives at all. Look-ahead bias is the time-ordered form of the same defect, and it is endemic in financial data, because most financial databases are maintained as a current best view of history rather than as a record of what was known on each date. The distinction that decides whether a backtest is honest is between as-reported data, which is what you had, and as-restated data, which is what turned out to be true.',
          bullets: [
            'Leakage means training on information unavailable at decision time; the result will not reproduce live',
            'Financial databases usually store a current best view of history, not what was known on each date',
            'As-reported versus as-restated is the distinction that decides whether a backtest is honest',
            'Excellent results that collapse in production are the signature, and the cause sits upstream of the model',
          ],
        },
        {
          heading: 'Where It Hides in Financial Data',
          body: 'The hiding places are consistent enough to make a checklist. Fundamental data timestamped to the period it describes rather than to its publication date. Universes and index constituents built from today\'s membership, which is survivorship bias wearing a different name. Prices adjusted for corporate actions announced later. Ratings, spreads or benchmark series that have since been revised. Delisted, defaulted or acquired entities quietly dropped from the sample. Target leakage in credit and fraud data, where a collections flag, a write-off code or an account closure reason is populated only because the outcome already happened. And features scaled, normalised or imputed across the whole history before the split.',
          bullets: [
            'Fundamentals dated to the period rather than to publication, and prices adjusted for later corporate actions',
            'Universes built from current membership, and samples missing delisted, defaulted or acquired entities',
            'Target leakage: collections flags, write-off codes and closure reasons that exist only because the outcome did',
            'Scaling, imputation and feature engineering performed across the full history before the split',
          ],
        },
        {
          heading: 'Splitting Time Honestly',
          body: 'Random train-test splits are wrong for anything with a time dimension, and they are the default in most tooling. Split chronologically, train only on the past, and leave a gap between the training window and the evaluation window so that overlapping label horizons and slow-moving features cannot carry information across the boundary; purging and embargoing are the standard names for that gap. Keep the same entity out of both sides wherever records are correlated, because the same borrower, household, account or issuer appearing in training and test lets the model recognise the entity rather than the pattern. And rebuild the feature set as of the decision date, missingness included, since a field being absent is itself informative.',
          bullets: [
            'Split chronologically — random splits are the tooling default and are wrong for time-ordered data',
            'Leave a purge and embargo gap so overlapping label horizons cannot cross the boundary',
            'Keep the same borrower, account, household or issuer out of both sides of the split',
            'Rebuild features as of the decision date, missingness included — an absent field carries information',
          ],
        },
      ],
    },
    {
      id: 'fn3l4',
      title: 'When the Regime Changes',
      slides: [
        {
          heading: 'A Model Learns an Environment, Not a Law',
          body: 'Every model trained on market or credit data has learned a period: a level and shape of interest rates, a volatility regime, a default environment, a set of correlations, a liquidity condition, and whatever policy happened to be in force. None of that is a law of nature, and a model has no representation of the difference between a stable relationship and a coincidence that held for a decade. When the environment turns — a rate cycle, the end of a support scheme, a correlation inverting, a change in market structure — the model keeps producing outputs in exactly the same confident format. There is no field in the output that says the world it was fitted to has stopped existing, and no reason to expect one.',
          bullets: [
            'Training data encodes a rate, volatility, default, correlation and liquidity environment, not a law',
            'Models cannot distinguish a durable relationship from a coincidence that held for a long time',
            'When the regime turns, format and confidence are unchanged and only accuracy moves',
            'The longer a relationship has held, the more it is trusted and the less anyone recalls what it rested on',
          ],
        },
        {
          heading: 'Why the Failure Arrives at the Worst Moment',
          body: 'Regime changes are not random with respect to cost. The conditions that break a model — a volatility spike, a liquidity withdrawal, a correlation breakdown, a wave of defaults — are the same conditions that make being wrong expensive, and they arrive when positions, funding and management attention are already stretched. A risk model that understates the tail understates it precisely in the tail. A credit model calibrated on benign years is most wrong during the first bad one. This is the reverse of the ordinary software failure mode, where problems surface randomly and cheaply, and it is why model degradation cannot be left to be discovered by the loss it causes.',
          bullets: [
            'The conditions that break models are the same conditions that make being wrong expensive',
            'Understating tail risk means understating it exactly when the tail arrives',
            'A model calibrated on benign years will be at its worst during the first bad one',
            'Discovery by loss is the default outcome unless monitoring is designed to fire before it',
          ],
        },
        {
          heading: 'Monitoring That Fires Before the Loss',
          body: 'Module 2 covers what belongs in a model risk framework; here the point is timing. Input monitoring is the earliest signal, because what arrives changes before outputs are visibly wrong: feature distributions, missingness rates, new categories, application mix, and values outside the range the model was fitted on. Output monitoring comes next — score distributions, approval and flag rates, and how often humans override. Outcome monitoring is the most valuable and the slowest, because an outcome may take a year to observe and the exposure is booked long before then. So pre-commit thresholds: what movement escalates, who may suspend the model, and what the institution runs on meanwhile. Does Your AI Actually Work? covers the instrumentation; the finance-specific part is that lag.',
          bullets: [
            'Input drift shows before output quality degrades — distributions, missingness, new categories, out-of-range values',
            'Output monitoring catches score, approval, flag and override shifts; outcome monitoring lags the exposure',
            'Pre-commit the escalation threshold and name who may suspend a model without reconvening a committee',
            'Decide the fallback before you need it: the manual or challenger process the institution reverts to',
          ],
        },
      ],
    },
    {
      id: 'fn3l5',
      title: 'Everyone Using the Same Model',
      slides: [
        {
          heading: 'Different Institutions, Correlated Behaviour',
          body: 'Single-firm risk management assumes your decisions are yours. Increasingly they are not. Institutions buy models from the same small set of providers, license the same market and alternative data, reference the same benchmark indices, and now build on the same handful of general-purpose models. Two firms running genuinely independent processes over shared inputs will make correlated decisions with no coordination at all, and neither can see it from the inside. The concentration is not only in models: it runs through data vendors, hosting, ratings inputs and the pricing sources that feed valuation. A common dependency is a common failure mode, and it does not appear in a risk report that stops at the institution\'s boundary.',
          bullets: [
            'Shared providers, shared data and shared benchmarks produce correlated decisions without coordination',
            'The dependency map that matters is your providers\' providers, and few firms have ever drawn it',
            'A common dependency is a common failure mode, invisible from inside any single firm',
            'A single-firm risk view has no vantage point from which the correlation is observable',
          ],
        },
        {
          heading: 'Crowding, Herding and the Unwind',
          body: 'The market expression of this is crowding: many participants holding similar positions arrived at by similar reasoning. While conditions are calm, crowding is invisible and feels like confirmation that the signal works. Under stress it becomes the mechanism of the loss, because the same participants try to reduce the same exposures at the same time and the exit is narrower than the entrance. Quantitative equity strategies have already demonstrated the pattern: deleveraging in similar portfolios produced losses that forced further deleveraging, across strategies that were not correlated by construction and were badly correlated in practice. Which assumption fails first is usually liquidity, because it was measured in conditions that no longer apply.',
          bullets: [
            'Crowding is invisible in calm conditions and reads as evidence that the signal is real',
            'Correlated exits are the loss mechanism — the door is narrower than the entrance was',
            'Strategies uncorrelated by construction can be tightly correlated in practice through shared positioning',
            'Liquidity assumptions measured in normal conditions are the first thing to break',
          ],
        },
        {
          heading: 'The Systemic Dimension',
          body: 'Supervisors and international bodies watch this for reasons no single firm\'s risk report can capture: procyclical behaviour amplified by automation, herding from common models and data, concentration in a small number of critical third parties, and the speed at which automated systems act relative to human intervention. The implication for one institution is modest but real. Find out which external dependencies you share with your peers, because that answer is not on your own risk register. Ask whether your models would behave like everybody else\'s under stress. Keep a fallback that does not rest on the same provider. And carry third-party concentration as a named risk rather than as a procurement matter.',
          bullets: [
            'Automation can amplify procyclicality and compress the time available for human intervention',
            'Concentration in a few critical third parties is a supervisory concern, not only a vendor question',
            'Which dependencies you share with peers is decision-relevant and is not on your own risk register',
            'Keep a fallback that does not rest on the same provider, and name concentration as a risk',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'A model produces a leverage ratio to two decimal places and attributes it to a named note in a filing. What does the precision tell you?',
      options: [
        'That the figure was retrieved from that note',
        'Nothing about the source — precision is a property of the output format',
        'That the model has higher confidence in this figure than in a rounded one',
        'That the figure has been checked against the filing',
      ],
      correct: 1,
    },
    {
      q: 'An AI summary of a filing gives a revenue figure that is real but comes from a different quarter. Which check reliably catches this class of error?',
      options: [
        'Asking the model whether it is confident in the figure',
        'Checking that the number is formatted consistently with the rest of the summary',
        'Confirming the figure appears somewhere in the filing',
        'Opening the filing and confirming period, basis and units for every figure',
      ],
      correct: 3,
    },
    {
      q: 'A researcher says a strategy was validated out of sample. What is the most useful follow-up question?',
      options: [
        'How many variants were tried against this same history, and by how many people',
        'What software was used to run the backtest',
        'Whether the Sharpe ratio exceeds the desk threshold',
        'Whether transaction costs were included in the final run',
      ],
      correct: 0,
    },
    {
      q: 'Why does an unadjusted significance threshold mislead after many trials?',
      options: [
        'Statistical tests become unstable on long time series',
        'Backtesting software accumulates rounding errors',
        'The threshold was calibrated to be crossed occasionally by noise, so many attempts make crossing it likely',
        'Significance thresholds do not apply to financial data at all',
      ],
      correct: 2,
    },
    {
      q: 'Which of these is an example of look-ahead bias rather than ordinary model error?',
      options: [
        'A model that is less accurate on small-cap names than on large-cap names',
        'A model whose accuracy declines slowly over several years',
        'A model that performs worse after transaction costs are applied',
        'A backtest that uses restated fundamentals timestamped to the period rather than to publication',
      ],
      correct: 3,
    },
    {
      q: 'Why is a random train-test split wrong for credit or market data?',
      options: [
        'Random splits produce test sets that are too small',
        'It lets the model train on periods after the test period, and correlated records to straddle the split',
        'Random number generators are not reproducible across systems',
        'Chronological splits always yield higher accuracy',
      ],
      correct: 1,
    },
    {
      q: 'A credit model built on data from an unusually benign period is deployed. When is it most likely to be badly wrong?',
      options: [
        'Gradually and evenly, throughout its deployed life',
        'Immediately at launch, before any drift can occur',
        'During the first genuine downturn — when being wrong is most expensive',
        'Only if the underlying code is changed',
      ],
      correct: 2,
    },
    {
      q: 'Two competitors independently license the same data and build on the same provider\'s model. What risk does a single-firm risk view miss?',
      options: [
        'Correlated decisions and correlated exits that neither firm can observe from inside its own boundary',
        'That the licence fees may be renegotiated',
        'That the data will be of lower quality than proprietary data',
        'That the provider will disclose one firm\'s positions to the other',
      ],
      correct: 0,
    },
  ],
};

export default fnM3;
