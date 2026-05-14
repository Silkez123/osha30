/* OSHA 30 Construction — Modules 1–10 */
const MODULES_PART1 = [
  {
    id: 1, title: "Introduction to OSHA", subtitle: "History, Standards & Worker Rights",
    icon: "⚖️", estimatedTime: "1.5 hrs",
    videoId: "s12SO9YUitc",
    keyFacts: [
      "The OSH Act was signed into law on December 29, 1970 by President Nixon",
      "Construction industry is covered under 29 CFR Part 1926",
      "Workers have 3 core rights: right to KNOW, right to PARTICIPATE, right to REFUSE unsafe work",
      "Willful violations carry penalties up to $156,259 per violation",
      "Serious violations carry penalties up to $15,625 per day",
      "Fatalities must be reported to OSHA within 8 hours",
      "In-patient hospitalizations (3+), amputations, or loss of eye must be reported within 24 hours",
      "22 states and territories operate their own OSHA-approved State Plans"
    ],
    sections: [
      {
        title: "History & Purpose of OSHA",
        content: `<p>Before 1970, no comprehensive federal law protected workers from job hazards. Roughly <strong>14,000 workers died on the job each year</strong>, and millions more suffered injuries and illnesses. Congress responded by passing the <strong>Occupational Safety and Health Act of 1970</strong>, signed by President Nixon on <strong>December 29, 1970</strong>.</p>
<p>The Act created two agencies: <strong>OSHA</strong> (Occupational Safety and Health Administration), housed in the Department of Labor, which sets and enforces standards; and <strong>NIOSH</strong> (National Institute for Occupational Safety and Health), housed in the CDC, which conducts research.</p>
<div class="highlight">OSHA's mission: to assure safe and healthful working conditions by setting and enforcing standards and by providing training, outreach, education, and assistance.</div>
<ul>
  <li>Covers most private-sector employers and workers in all 50 states and U.S. territories</li>
  <li>Federal employees are covered by OSHA standards but cannot receive citations or penalties</li>
  <li>Self-employed workers with no employees are NOT covered by OSHA</li>
  <li>22 states/territories have OSHA-approved State Plans — must be at least as effective as federal OSHA</li>
</ul>`
      },
      {
        title: "OSHA Standards & Construction Coverage",
        content: `<p>OSHA standards are organized in the <strong>Code of Federal Regulations (CFR)</strong>, Title 29 (Labor). Construction is covered under <strong>29 CFR Part 1926</strong>. General Industry is covered under 29 CFR Part 1910. When no specific construction standard exists, Part 1910 may apply.</p>
<div class="regulation">Key CFR references: 29 CFR 1926 = Construction | 29 CFR 1910 = General Industry | 29 CFR 1904 = Recordkeeping</div>
<ul>
  <li><strong>Horizontal standards</strong> — apply across all industries (e.g., HazCom, PPE)</li>
  <li><strong>Vertical standards</strong> — apply to specific industries or operations (e.g., scaffolding, excavations)</li>
  <li>Employers must comply with the <em>most specific</em> applicable standard</li>
  <li>The <strong>General Duty Clause</strong> (Section 5(a)(1)) requires employers to provide a workplace free from recognized hazards causing or likely to cause death or serious harm — even if no specific standard covers the hazard</li>
</ul>`
      },
      {
        title: "Worker Rights & Employer Responsibilities",
        content: `<p>The OSH Act grants workers three fundamental rights. Exercising these rights is protected — employers cannot retaliate against workers who use them.</p>
<ul>
  <li><strong>Right to Know</strong> — access to hazard information, SDS, training in a language you understand</li>
  <li><strong>Right to Participate</strong> — join or form a safety committee, accompany OSHA inspector (walk-around rights), report hazards</li>
  <li><strong>Right to Refuse</strong> — refuse work that poses imminent danger of death or serious injury, when there is no time to eliminate it through normal channels</li>
</ul>
<p><strong>Employer responsibilities</strong> include: providing a hazard-free workplace, complying with OSHA standards, providing required PPE at no cost, training workers, displaying the OSHA poster, keeping required records, and not retaliating against workers who exercise their rights.</p>
<div class="warning">Workers who believe they've been retaliated against must file a complaint with OSHA within 30 days of the retaliation.</div>`
      },
      {
        title: "Inspections, Citations & Penalties",
        content: `<p>OSHA conducts inspections performed by <strong>Compliance Safety and Health Officers (CSHOs)</strong>. Inspection priorities (highest to lowest): <strong>Imminent Danger → Catastrophe/Fatality → Complaints → Referrals → Programmed (planned)</strong>.</p>
<table class="data-table"><thead><tr><th>Citation Type</th><th>Definition</th><th>Max Penalty</th></tr></thead>
<tbody>
<tr><td>Willful</td><td>Intentional or known violation</td><td>$156,259/violation</td></tr>
<tr><td>Repeat</td><td>Same violation within 5 years</td><td>$156,259/violation</td></tr>
<tr><td>Serious</td><td>Substantial probability of death or serious harm</td><td>$15,625/day</td></tr>
<tr><td>Other-than-Serious</td><td>Violation with no likely serious harm</td><td>$15,625/day</td></tr>
<tr><td>Failure to Abate</td><td>Not correcting a cited violation</td><td>$15,625/day</td></tr>
</tbody></table>
<div class="highlight">Employers have 15 working days to contest a citation. Workers also have the right to contest the abatement period (but not the citation itself).</div>`
      }
    ],
    quiz: [
      { q: "The Occupational Safety and Health Act was signed into law on:", options: ["January 1, 1971","December 29, 1970","March 15, 1972","October 12, 1969"], a: 1, explain: "The OSH Act was signed by President Nixon on December 29, 1970, taking effect April 28, 1971." },
      { q: "Construction industry OSHA standards are found in:", options: ["29 CFR Part 1910","29 CFR Part 1904","29 CFR Part 1926","29 CFR Part 1915"], a: 2, explain: "29 CFR Part 1926 covers Safety and Health Regulations for Construction. Part 1910 covers General Industry." },
      { q: "A worker is fatally injured on a construction site. The employer must report this to OSHA within:", options: ["4 hours","8 hours","24 hours","72 hours"], a: 1, explain: "Work-related fatalities must be reported to OSHA within 8 hours. Hospitalizations of 3+, amputations, and loss of eye must be reported within 24 hours." },
      { q: "Which OSHA citation type carries the highest potential penalty?", options: ["Serious","Other-than-serious","Willful","Failure to Abate"], a: 2, explain: "Willful violations — those committed intentionally or with knowledge that a hazard exists — carry penalties up to $156,259 per violation, the highest category." },
      { q: "The General Duty Clause requires employers to:", options: ["Post the OSHA poster at the worksite","Provide a workplace free from recognized hazards, even without a specific standard","Allow OSHA inspectors on-site without a warrant","Provide workers' compensation insurance"], a: 1, explain: "Section 5(a)(1), the General Duty Clause, covers hazards for which no specific standard exists but that are recognized and likely to cause death or serious harm." },
      { q: "Which agency conducts OSHA-related research and recommends new standards?", options: ["OSHA","NIOSH","CDC/ATSDR","Department of Labor"], a: 1, explain: "NIOSH (National Institute for Occupational Safety and Health), part of the CDC, conducts research and recommends standards. OSHA sets and enforces standards." },
      { q: "A worker believes they were fired for reporting a safety hazard to OSHA. They must file a retaliation complaint within:", options: ["15 working days","30 days","60 days","6 months"], a: 1, explain: "Under Section 11(c) of the OSH Act, workers have 30 days from the date of retaliation to file a complaint with OSHA." },
      { q: "How many states and territories currently operate OSHA-approved State Plans?", options: ["10","16","22","29"], a: 2, explain: "22 states and territories have OSHA-approved State Plans. These plans must be at least as effective as federal OSHA standards." }
    ]
  },
  {
    id: 2, title: "Managing Safety & Health", subtitle: "Programs, Hazard Control & Recordkeeping",
    icon: "📋", estimatedTime: "1.5 hrs",
    videoId: "03ydjfVsWvQ",
    keyFacts: [
      "Hierarchy of Controls (most to least effective): Elimination → Substitution → Engineering → Administrative → PPE",
      "OSHA 300 Log: records work-related injuries and illnesses throughout the year",
      "OSHA 300A: annual summary — must be posted February 1 through April 30",
      "OSHA 301 Incident Report: must be completed within 7 days of a recordable incident",
      "Establishments with 10 or fewer employees are partially exempt from recordkeeping",
      "First aid only incidents are NOT recordable",
      "A Job Hazard Analysis (JHA) identifies hazards before work begins"
    ],
    sections: [
      {
        title: "Elements of an Effective Safety Program",
        content: `<p>OSHA recommends that every employer implement a proactive <strong>Safety and Health Management System</strong>. A strong program reduces injuries, lowers costs, and improves morale. The key elements are:</p>
<ul>
  <li><strong>Management Leadership</strong> — visible commitment from top management; safety is a core value</li>
  <li><strong>Worker Participation</strong> — workers involved in hazard identification, JHAs, and safety committees</li>
  <li><strong>Hazard Identification & Assessment</strong> — routine inspections, incident investigations, near-miss reporting</li>
  <li><strong>Hazard Prevention & Control</strong> — using the hierarchy of controls</li>
  <li><strong>Education & Training</strong> — workers trained on hazards, controls, and emergency procedures</li>
  <li><strong>Program Evaluation</strong> — regular review and improvement of the safety program</li>
</ul>
<div class="highlight">Toolbox Talks (safety meetings held at the start of a shift or workday) are a key way to communicate daily hazards and reinforce safe practices.</div>`
      },
      {
        title: "Hierarchy of Controls",
        content: `<p>The <strong>Hierarchy of Controls</strong> is the framework for selecting hazard control methods, ranked from most to least effective. Higher-level controls eliminate or reduce the hazard at the source rather than relying on worker behavior.</p>
<table class="data-table"><thead><tr><th>Level</th><th>Method</th><th>Example</th></tr></thead>
<tbody>
<tr><td>1 (Best)</td><td>Elimination</td><td>Remove the hazardous task entirely</td></tr>
<tr><td>2</td><td>Substitution</td><td>Replace a hazardous chemical with a safer one</td></tr>
<tr><td>3</td><td>Engineering Controls</td><td>Guarding, ventilation, noise enclosures</td></tr>
<tr><td>4</td><td>Administrative Controls</td><td>Job rotation, work permits, training</td></tr>
<tr><td>5 (Least)</td><td>PPE</td><td>Gloves, respirators, hard hats</td></tr>
</tbody></table>
<div class="warning">PPE is the last line of defense — it doesn't eliminate the hazard and fails if not worn correctly or consistently.</div>`
      },
      {
        title: "Incident Investigation & Job Hazard Analysis",
        content: `<p>All incidents — including <strong>near-misses</strong> — should be investigated to find root causes and prevent recurrence. A near-miss is an unplanned event that did not result in injury but had the potential to do so.</p>
<p>A <strong>Job Hazard Analysis (JHA)</strong>, also called a Job Safety Analysis (JSA), breaks a job into steps, identifies hazards in each step, and recommends controls. JHAs should be written before new or non-routine tasks begin.</p>
<ul>
  <li>Involve workers who perform the job in the JHA process</li>
  <li>Review JHAs after incidents or near-misses</li>
  <li>Update JHAs when tasks, equipment, or materials change</li>
  <li>Focus on high-risk tasks first</li>
</ul>
<div class="highlight">Root cause analysis asks "why did it happen?" not just "what happened?" — addressing root causes prevents repeat incidents.</div>`
      },
      {
        title: "OSHA Recordkeeping Requirements",
        content: `<p>Employers with 11+ employees in most industries must maintain OSHA injury and illness records. Three forms are required:</p>
<ul>
  <li><strong>OSHA 300 Log</strong> — records each recordable work-related injury/illness during the calendar year</li>
  <li><strong>OSHA 300A Summary</strong> — annual summary of the 300 Log; must be <strong>posted from February 1 through April 30</strong> of the following year; must be certified by a company executive</li>
  <li><strong>OSHA 301 Incident Report</strong> — detailed form for each recordable incident; must be completed within <strong>7 days</strong></li>
</ul>
<div class="regulation">A recordable incident involves: death, days away from work, restricted duty, medical treatment beyond first aid, loss of consciousness, or diagnosis of a significant injury/illness by a healthcare professional.</div>
<p><strong>First aid only</strong> cases are NOT recordable. First aid includes non-prescription medication at non-prescription strength, simple wound closure (bandages), non-rigid splints, and similar minor treatments.</p>`
      }
    ],
    quiz: [
      { q: "Which level of the Hierarchy of Controls is considered MOST effective?", options: ["PPE","Administrative Controls","Engineering Controls","Elimination"], a: 3, explain: "Elimination — physically removing the hazard — is the most effective control because it removes the risk entirely rather than managing it." },
      { q: "The OSHA 300A annual summary must be posted:", options: ["January 1 through March 31","February 1 through April 30","March 1 through May 31","January 1 through April 30"], a: 1, explain: "The OSHA 300A Annual Summary must be posted in a visible location from February 1 through April 30 of the year following the recorded injuries/illnesses." },
      { q: "An OSHA 301 Incident Report must be completed within how many days of a recordable incident?", options: ["3 days","5 days","7 days","10 days"], a: 2, explain: "The OSHA 301 Incident Report (or equivalent) must be completed within 7 days of the employer receiving information that a recordable work-related injury or illness occurred." },
      { q: "A worker cuts their finger, and the supervisor applies a bandage. This incident is:", options: ["Recordable — it required first aid","Not recordable — first aid only cases are exempt","Recordable — any injury must be logged","Not recordable — it did not involve lost work time"], a: 1, explain: "First aid only cases (simple wound closure with bandages, non-prescription medication at non-prescription strength, etc.) are NOT OSHA-recordable." },
      { q: "Which of the following is a near-miss?", options: ["A worker breaks their arm falling from a ladder","A load swings past a worker's head without hitting them","A foreman receives a citation for a safety violation","A worker is sent to a doctor for a suspected sprain"], a: 1, explain: "A near-miss is an unplanned event that did not result in injury but had the potential to. The swinging load is a near-miss — it should be reported and investigated." },
      { q: "What is the primary purpose of a Job Hazard Analysis (JHA)?", options: ["Document injuries after they occur","Identify and control hazards before a job begins","Satisfy OSHA recordkeeping requirements","Determine who is at fault for an accident"], a: 1, explain: "A JHA proactively breaks a job into steps, identifies potential hazards in each step, and recommends controls — preventing incidents before they happen." },
      { q: "Installing a sound-dampening enclosure around a loud machine is an example of:", options: ["Elimination","Administrative control","Engineering control","PPE"], a: 2, explain: "Engineering controls reduce or eliminate hazards through physical changes to the workplace (guards, barriers, ventilation, enclosures) — they do not rely on worker behavior." },
      { q: "Which employers are partially exempt from OSHA recordkeeping requirements?", options: ["Construction employers with fewer than 25 employees","Establishments with 10 or fewer employees in low-hazard industries","All small businesses with fewer than 50 employees","Employers who have had no injuries in the past year"], a: 1, explain: "Establishments with 10 or fewer employees, and those in certain low-hazard industries, are partially exempt from routine OSHA recordkeeping requirements (though they must still report severe injuries)." }
    ]
  },
  {
    id: 3, title: "Focus Four: Fall Hazards", subtitle: "The #1 Cause of Construction Fatalities",
    icon: "🪜", estimatedTime: "2 hrs",
    videoId: "s9wGT4_s2fo",
    keyFacts: [
      "Falls are the #1 cause of death in the construction industry",
      "Fall protection is required at 6 feet or more in construction (29 CFR 1926.502)",
      "Guardrail: top rail 42 inches (±3\"), midrail at 21 inches, withstand 200 lbs of force",
      "Personal Fall Arrest System (PFAS): anchor must support 5,000 lbs per worker",
      "PFAS limits: free fall ≤6 ft, deceleration distance ≤3.5 ft, max arrest force ≤1,800 lbs",
      "Safety nets must be installed within 30 feet below the working surface",
      "Holes ≥2 inches must be covered, marked, and secured against displacement",
      "A qualified person must design fall protection for leading edge work"
    ],
    sections: [
      {
        title: "Why Falls Are the Leading Killer",
        content: `<p>Falls consistently account for the largest share of construction fatalities each year — often <strong>one-third or more</strong> of all construction deaths. Common fall scenarios include falls from ladders, scaffolding, roofs, leading edges, and through floor openings.</p>
<p>OSHA's fall protection standard (<strong>29 CFR 1926.502</strong>) requires employers to provide fall protection for workers at elevations of <strong>6 feet or more</strong> above a lower level. This is lower than the 4-foot trigger in general industry.</p>
<div class="warning">The Focus Four hazards (Falls, Electrocution, Struck-By, Caught-In/Between) account for more than 60% of all construction deaths. Falls alone typically account for 33–40%.</div>
<ul>
  <li>Falls from elevation: ladders, scaffolds, roofs, leading edges, floor openings</li>
  <li>Same-level falls: slips, trips, and stumbles — account for significant injuries</li>
  <li>Falls through surfaces: skylights, floor openings, fragile surfaces</li>
</ul>`
      },
      {
        title: "The Three Accepted Fall Protection Systems",
        content: `<p>OSHA allows three accepted fall protection systems for construction. Employers must select and implement an appropriate system when workers are exposed to falls of 6 feet or more.</p>
<ul>
  <li><strong>Guardrail Systems</strong> — top rail at <strong>42 inches (±3")</strong>, midrail at approximately 21 inches, toeboards at 3.5 inches minimum. Must withstand <strong>200 lbs of force</strong> applied in any outward or downward direction.</li>
  <li><strong>Safety Net Systems</strong> — must be installed as close as practicable under the working surface, no more than <strong>30 feet below</strong>. Must extend outward from the outermost edge of the work surface.</li>
  <li><strong>Personal Fall Arrest Systems (PFAS)</strong> — full-body harness, connecting lanyard/deceleration device, and anchor point. Each component must be inspected before each use.</li>
</ul>
<div class="regulation">Employer must provide fall protection in a fall protection plan when conventional systems are infeasible for certain activities (e.g., leading edge work, pre-cast concrete, residential construction).</div>`
      },
      {
        title: "Personal Fall Arrest Systems (PFAS)",
        content: `<p>A PFAS consists of three components working together: the <strong>full-body harness</strong>, the <strong>connecting means</strong> (lanyard, self-retracting lifeline, deceleration device), and the <strong>anchorage point</strong>.</p>
<table class="data-table"><thead><tr><th>PFAS Requirement</th><th>Limit</th></tr></thead>
<tbody>
<tr><td>Maximum free fall distance</td><td>6 feet</td></tr>
<tr><td>Maximum deceleration distance</td><td>3.5 feet</td></tr>
<tr><td>Maximum arresting force on worker</td><td>1,800 lbs</td></tr>
<tr><td>Anchor point strength (per worker)</td><td>5,000 lbs</td></tr>
</tbody></table>
<p>After a fall arrest, the PFAS must be removed from service and inspected before reuse. Workers must be able to be rescued promptly — a rescue plan must be in place before work begins.</p>
<div class="highlight">Body belts (non-full-body harnesses) are NOT acceptable as part of a PFAS — they may cause internal injuries during fall arrest. They may only be used as positioning systems.</div>`
      },
      {
        title: "Holes, Leading Edges & Special Situations",
        content: `<p>Floor openings, holes, and unprotected edges present significant fall risks. OSHA requires:</p>
<ul>
  <li><strong>Holes ≥2 inches</strong> — must be covered with material strong enough to support twice the load, marked "HOLE" or "COVER," and secured against accidental displacement</li>
  <li><strong>Leading edges</strong> — the unprotected edge of a floor/roof that changes location as construction progresses. If guardrails are infeasible, a fall protection plan signed by a <strong>qualified person</strong> is required</li>
  <li><strong>Wall openings</strong> ≥30 inches high, ≥18 inches wide, within 6 feet of floor — must have guardrails or equivalent</li>
  <li><strong>Hoist areas</strong> — each employee must be protected by guardrails or PFAS when there is a risk of falling into the hoist area</li>
</ul>
<div class="warning">Never assume a roof or floor can support your weight. Test surfaces before walking on them and always use appropriate fall protection.</div>`
      }
    ],
    quiz: [
      { q: "At what height above a lower level is fall protection required in construction?", options: ["4 feet","6 feet","8 feet","10 feet"], a: 1, explain: "29 CFR 1926.502 requires fall protection for construction workers exposed to falls of 6 feet or more. General industry requires fall protection at 4 feet." },
      { q: "What is the maximum free fall distance allowed when using a Personal Fall Arrest System?", options: ["3.5 feet","4 feet","6 feet","8 feet"], a: 2, explain: "PFAS must limit free fall to 6 feet. The total fall distance (free fall + deceleration) must ensure the worker does not contact the lower level." },
      { q: "The top rail of a guardrail system must be at what height?", options: ["36 inches","39 inches","42 inches (±3\")","48 inches"], a: 2, explain: "The top rail of a guardrail must be 42 inches high, with a tolerance of plus or minus 3 inches (39–45 inches). The midrail must be installed at approximately 21 inches." },
      { q: "An anchorage for a PFAS must be capable of supporting at least:", options: ["1,800 lbs per employee","3,000 lbs per employee","5,000 lbs per employee","7,500 lbs per employee"], a: 2, explain: "Each PFAS anchorage point must be capable of supporting at least 5,000 pounds per employee attached." },
      { q: "Safety nets must be installed no more than how far below the working surface?", options: ["15 feet","20 feet","25 feet","30 feet"], a: 3, explain: "Safety nets must be installed as close as practicable under the walking/working surface but no more than 30 feet below it." },
      { q: "A floor opening that is 3 inches in diameter must:", options: ["Be barricaded with cones","Be covered, marked, and secured against displacement","Have a guardrail installed around it","Be left uncovered if it is less than 6 inches"], a: 1, explain: "Holes 2 inches or more must be covered with material strong enough to support at least twice the maximum load, marked as a hole or cover, and secured against accidental displacement." },
      { q: "Which of the following is NOT an acceptable PFAS component?", options: ["Full-body harness","Self-retracting lifeline","Body belt (non-full-body)","Shock-absorbing lanyard"], a: 2, explain: "Body belts are NOT acceptable as part of a PFAS because they concentrate fall arrest forces on the abdomen, risking internal injury. Only full-body harnesses are acceptable." },
      { q: "After a worker's fall is arrested by a PFAS, the system must:", options: ["Be reused immediately if it looks undamaged","Be removed from service and inspected before reuse","Be discarded automatically","Be tagged and reused after a 24-hour rest period"], a: 1, explain: "After a fall arrest event, all PFAS components must be removed from service immediately and thoroughly inspected by a competent person before any component is returned to service." }
    ]
  },
  {
    id: 4, title: "Focus Four: Electrical Hazards", subtitle: "Shock, Arc Flash & Safe Work Practices",
    icon: "⚡", estimatedTime: "1.5 hrs",
    videoId: "pmtfqDs4A_E",
    keyFacts: [
      "Electrocution is the #2 cause of death in the Focus Four hazards",
      "Overhead power line clearance: minimum 10 feet for voltages up to 50kV",
      "GFCI required for all 120V, single-phase, 15- and 20-ampere receptacles on construction sites",
      "As little as 50-100 milliamps (0.05–0.1 amps) passing through the heart can be fatal",
      "AEGCP (Assured Equipment Grounding Conductor Program) is the alternative to GFCI",
      "Lockout/Tagout (29 CFR 1926.417) — de-energize before working on electrical equipment",
      "All extension cords on construction sites must be 3-wire (grounded) type"
    ],
    sections: [
      {
        title: "How Electricity Injures & Kills",
        content: `<p>Electrical hazards cause four types of injuries: <strong>electrical shock</strong>, <strong>arc flash</strong> (intense heat and light), <strong>arc blast</strong> (pressure wave from arc explosion), and <strong>secondary injuries</strong> (falls, burns from fire caused by electricity).</p>
<p>The severity of an electrical shock depends on the <strong>amount of current</strong> (amperes), the <strong>path through the body</strong>, and the <strong>duration of exposure</strong>. Current passing through the chest cavity can cause ventricular fibrillation — which can be fatal at as low as <strong>50–100 milliamps</strong>.</p>
<table class="data-table"><thead><tr><th>Current</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>1 mA</td><td>Barely perceptible</td></tr>
<tr><td>10–20 mA</td><td>Painful; cannot let go</td></tr>
<tr><td>50–100 mA</td><td>Ventricular fibrillation (can be fatal)</td></tr>
<tr><td>6+ amps</td><td>Cardiac standstill, severe burns</td></tr>
</tbody></table>`
      },
      {
        title: "GFCI & Equipment Grounding",
        content: `<p>A <strong>Ground Fault Circuit Interrupter (GFCI)</strong> monitors the current flowing in a circuit. If it detects a difference of as little as <strong>4–6 milliamps</strong> between the hot and neutral wires (indicating current is leaking to ground through a person), it trips the circuit in as little as 1/40th of a second.</p>
<p>OSHA requires GFCI protection for all <strong>120-volt, single-phase, 15- and 20-ampere receptacles</strong> on construction sites that are not part of the permanent wiring.</p>
<p>The alternative to GFCI is the <strong>Assured Equipment Grounding Conductor Program (AEGCP)</strong>, which requires:</p>
<ul>
  <li>Written program specifying all required inspections</li>
  <li>Visual inspection before each use</li>
  <li>Continuity testing and receptacle testing at required intervals</li>
  <li>Color-coded inspection system</li>
</ul>
<div class="highlight">Employers must choose either GFCI protection or an AEGCP — they cannot mix the two approaches for the same outlets/equipment.</div>`
      },
      {
        title: "Overhead Power Line Safety",
        content: `<p>Contact with overhead power lines is one of the most common causes of electrical fatalities in construction. Power lines are rarely insulated and carry lethal voltages.</p>
<table class="data-table"><thead><tr><th>Voltage (kV)</th><th>Minimum Clearance</th></tr></thead>
<tbody>
<tr><td>Up to 50 kV</td><td>10 feet</td></tr>
<tr><td>50–200 kV</td><td>15 feet</td></tr>
<tr><td>200–350 kV</td><td>20 feet</td></tr>
<tr><td>350–500 kV</td><td>25 feet</td></tr>
</tbody></table>
<ul>
  <li>De-energize and ground lines whenever possible — contact the utility company</li>
  <li>Erect physical barriers and warning signs around work zones near power lines</li>
  <li>Use non-conductive tools and equipment near energized lines</li>
  <li>Never assume a downed power line is de-energized</li>
</ul>
<div class="warning">Electricity can arc or "jump" from an energized source without direct contact. Maintain safe clearances at all times.</div>`
      },
      {
        title: "Lockout/Tagout & Electrical Safety Practices",
        content: `<p><strong>Lockout/Tagout (LOTO)</strong> is a safety procedure that ensures hazardous energy sources are isolated and rendered inoperative before maintenance or servicing begins. The construction standard is <strong>29 CFR 1926.417</strong>.</p>
<p><strong>Steps in LOTO procedure:</strong></p>
<ul>
  <li>Notify affected employees</li>
  <li>Identify all energy sources (electrical, pneumatic, hydraulic, gravity)</li>
  <li>Shut down equipment using normal stopping procedure</li>
  <li>Isolate energy sources at the control point</li>
  <li>Apply lockout/tagout devices</li>
  <li>Release/restrain stored energy</li>
  <li>Verify the equipment is de-energized (test it)</li>
</ul>
<div class="regulation">Only the employee who applied a lock may remove it. Tags alone (without locks) are used only when the energy isolation device cannot accept a lock.</div>
<p>Additional safe practices: use double-insulated or properly grounded tools; inspect extension cords before each use; never remove the grounding prong from a 3-prong plug; use extension cords rated for the load and environment.</p>`
      }
    ],
    quiz: [
      { q: "What is the minimum required clearance from overhead power lines rated up to 50kV?", options: ["5 feet","10 feet","15 feet","20 feet"], a: 1, explain: "For voltages up to 50kV, OSHA requires a minimum clearance of 10 feet from overhead power lines. Higher voltages require greater clearances." },
      { q: "GFCI protection is required for which type of outlets on construction sites?", options: ["All outlets regardless of voltage","240-volt, 3-phase outlets only","120-volt, single-phase, 15- and 20-amp receptacles","Only outlets within 6 feet of water"], a: 2, explain: "OSHA requires GFCI protection for all 120-volt, single-phase, 15- and 20-ampere receptacles on construction sites that are not part of the permanent wiring of the building." },
      { q: "A GFCI trips when it detects a current leakage of approximately:", options: ["1 amp","500 milliamps","4–6 milliamps","50 milliamps"], a: 2, explain: "A GFCI detects a difference of 4–6 milliamps between hot and neutral conductors and trips in as little as 1/40th of a second, before enough current can cause ventricular fibrillation." },
      { q: "The alternative to GFCI protection on construction sites is:", options: ["A written electrical safety plan","The Assured Equipment Grounding Conductor Program (AEGCP)","Double-insulated tools only","Three-prong plugs on all equipment"], a: 1, explain: "The AEGCP is the OSHA-approved alternative to GFCI. It requires a written program, visual inspections before use, and scheduled continuity and receptacle testing." },
      { q: "Under Lockout/Tagout, when can a lock be removed from an energy isolation device?", options: ["When the job supervisor authorizes it","Only by the employee who applied the lock","After a 15-minute waiting period","By any trained employee on the crew"], a: 1, explain: "Only the employee who applied a lock may remove it. This ensures the employee knows it is safe to re-energize the equipment before the lock is removed." },
      { q: "Which of the following describes arc flash?", options: ["Electric current flowing through a worker's body","An intense release of heat and light energy from an electrical arc","The vibration caused by high-frequency current","Magnetic interference from high-voltage lines"], a: 1, explain: "Arc flash is an intense release of thermal energy (heat and light) resulting from an electric arc. Temperatures can reach 35,000°F, causing severe burns and other injuries." },
      { q: "What is the minimum current level that can cause ventricular fibrillation in a human?", options: ["500 milliamps","200 milliamps","50–100 milliamps","10 milliamps"], a: 2, explain: "As little as 50–100 milliamps (0.05–0.1 amps) passing through the heart can cause ventricular fibrillation, which can be fatal without immediate defibrillation." },
      { q: "A construction worker discovers a downed power line at the work site. What should they do?", options: ["Move the line with a wooden pole","Assume it is de-energized and step over it","Stay back, secure the area, and call the utility company","Touch it briefly to check if it is live"], a: 2, explain: "Never assume a downed power line is de-energized. Secure the area, keep everyone away, and contact the utility company. Only the utility can safely de-energize the line." }
    ]
  },
  {
    id: 5, title: "Focus Four: Struck-By Hazards", subtitle: "Flying, Falling, Swinging & Rolling Objects",
    icon: "🪖", estimatedTime: "1 hr",
    videoId: "hVEmGWitOvI",
    keyFacts: [
      "Struck-by hazards are the #2 cause of construction fatalities overall",
      "4 types: Flying objects, Falling objects, Swinging objects, Rolling objects",
      "Hard hats are required when there is a danger of head injury from impact or flying/falling objects",
      "Toeboards (3.5\" minimum height) prevent tools from falling off elevated surfaces",
      "High-visibility Class 2 vest minimum required for roadway work zones",
      "Tag lines must be used to control swinging crane loads",
      "Workers should never position themselves in the line of fire of tools or equipment"
    ],
    sections: [
      {
        title: "The Four Types of Struck-By Hazards",
        content: `<p>Struck-by incidents occur when a worker is hit by a moving object. OSHA defines four categories:</p>
<ul>
  <li><strong>Flying Objects</strong> — projectiles from tools, equipment, or materials (e.g., nails from nail guns, debris from grinding, concrete chips from jackhammers)</li>
  <li><strong>Falling Objects</strong> — items dropped or knocked off elevated work surfaces (tools, materials, debris falling from scaffolding or upper floors)</li>
  <li><strong>Swinging Objects</strong> — loads suspended from cranes or derricks that swing into workers (especially during pickup and landing)</li>
  <li><strong>Rolling Objects</strong> — vehicles, equipment, or materials that roll into workers (vehicles in reverse, rolling pipes, concrete forms)</li>
</ul>
<div class="highlight">Workers should never position themselves in the "line of fire" — the path along which tools, equipment, or materials could travel if released or propelled.</div>`
      },
      {
        title: "Falling Object Protection",
        content: `<p>When workers are below other workers or overhead work, protection from falling objects is required. Methods include:</p>
<ul>
  <li><strong>Toeboards</strong> — at least <strong>3.5 inches</strong> high on all open sides of scaffolding, floors, and elevated surfaces; must be solid or not more than ¼-inch gap</li>
  <li><strong>Canopies (overhead protection)</strong> — covers over walkways and work areas below elevated work</li>
  <li><strong>Barricades</strong> — establish controlled access zones below overhead work</li>
  <li><strong>Tool lanyards and tethering</strong> — secure tools to workers or structures when working at height</li>
  <li><strong>Debris nets</strong> — catch falling objects before they reach lower levels</li>
</ul>
<div class="regulation">Per 29 CFR 1926.502, if guardrails are used as falling object protection, the top rail must be capable of withstanding a force of 200 lbs. Toeboards must withstand a 50-lb force.</div>`
      },
      {
        title: "Vehicle & Equipment Struck-By Hazards",
        content: `<p>Heavy equipment and vehicles pose serious struck-by risks, especially during backing. Key prevention measures:</p>
<ul>
  <li><strong>Spotters</strong> — designated person guiding equipment operators when their view is obstructed; must be in constant communication with operator</li>
  <li><strong>Backup alarms</strong> — audible alarms required when operators cannot see directly behind the vehicle</li>
  <li><strong>High-visibility apparel</strong> — ANSI/ISEA 107 Class 2 minimum in roadway work zones; Class 3 for higher-risk environments</li>
  <li><strong>Established traffic patterns</strong> — one-way traffic, marked lanes, reduced speed zones</li>
  <li><strong>No riders</strong> — no passengers on equipment unless a seat is provided and designed for riders</li>
</ul>
<div class="warning">Workers should maintain eye contact with equipment operators. Never assume an operator can see you — always make your presence known before approaching equipment.</div>`
      },
      {
        title: "Flying Object & Crane Load Hazards",
        content: `<p>Flying objects from power tools are a leading cause of eye injuries. Prevention:</p>
<ul>
  <li>Always wear appropriate eye/face protection when using power tools, grinding, nailing, or working near flying debris</li>
  <li>Ensure all tool guards are in place</li>
  <li>Never direct pneumatic nail guns or similar tools toward people</li>
  <li>Inspect discs, blades, and abrasive wheels before use; never use damaged or out-of-spec wheels</li>
</ul>
<p>For crane and hoist operations:</p>
<ul>
  <li><strong>Tag lines</strong> — rope lines attached to loads to control swinging; must be used during crane picks</li>
  <li>Never stand under a suspended load</li>
  <li>Establish a drop zone/exclusion zone under all crane operations</li>
  <li>All personnel must clear the swing radius before crane rotation</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Which of the following is NOT one of the four types of struck-by hazards?", options: ["Flying objects","Falling objects","Electrical objects","Rolling objects"], a: 2, explain: "The four OSHA-defined struck-by hazard types are: flying objects, falling objects, swinging objects, and rolling objects. Electrical hazards are a separate Focus Four category." },
      { q: "What is the minimum height for a toeboard used to prevent tools from falling off an elevated surface?", options: ["2 inches","3 inches","3.5 inches","4 inches"], a: 2, explain: "Toeboards must be at least 3.5 inches high and must withstand at least 50 pounds of force. They prevent tools and materials from sliding off the edge of elevated surfaces." },
      { q: "A crane is lifting a large steel beam. To prevent it from swinging into workers, you should:", options: ["Increase the lift speed","Attach tag lines to control the load","Have workers hold the beam by hand","Position workers in the swing radius to guide it"], a: 1, explain: "Tag lines (ropes attached to suspended loads) must be used to control swinging loads during crane operations. Workers should never stand in the swing radius." },
      { q: "At minimum, what class of high-visibility apparel is required for workers in roadway work zones?", options: ["Class 1","Class 2","Class 3","No specific class required"], a: 1, explain: "ANSI/ISEA 107 Class 2 high-visibility apparel is the minimum required for roadway work zones. Class 3 is required in higher-traffic or higher-risk situations." },
      { q: "A worker is grinding metal on the third floor. Workers below could be struck by sparks and debris. What is the best control?", options: ["Require hardhats for workers on the ground","Establish a barricade or canopy below the work area","Grind only during lunch breaks","Increase lighting in the area"], a: 1, explain: "Establishing a barricade or canopy below overhead work protects workers below from falling or flying debris. Barricades define the hazard zone; canopies physically block objects." },
      { q: "A piece of equipment operator's rearview is blocked. What must the operator do before backing?", options: ["Sound the horn once and proceed slowly","Use a backup alarm and have a spotter","Call a safety meeting before moving","Back slowly and hope no one is behind"], a: 1, explain: "When an operator cannot see directly behind the vehicle, a backup alarm must sound and a designated spotter must guide the operator during backing maneuvers." },
      { q: "Workers should NEVER:", options: ["Wear hard hats when working under overhead work","Use tag lines on crane loads","Stand in the line of fire of tools or equipment","Use eye protection when grinding"], a: 2, explain: "Workers must never position themselves in the line of fire — the path along which a tool, material, or piece of equipment could travel if it were propelled, dropped, or released." },
      { q: "Hard hats are required when there is a danger of head injury from:", options: ["Only falling objects","Only impact hazards","Flying or falling objects, or electrical hazards","Only objects above 2 lbs in weight"], a: 2, explain: "OSHA requires head protection (hard hats) when there is a potential for injury from impact, flying or falling objects, or electrical burns/contact." }
    ]
  },
  {
    id: 6, title: "Focus Four: Caught-In/Between", subtitle: "Pinch Points, Cave-Ins & Machine Hazards",
    icon: "⚙️", estimatedTime: "1 hr",
    videoId: "83tUcRoI4Cs",
    keyFacts: [
      "Caught-in/between hazards include pinch points, nip points, shear points, and unguarded rotating parts",
      "Excavation cave-ins are the deadliest caught-in/between hazard",
      "Machine guarding is required on all machinery with exposed moving parts (29 CFR 1926.300)",
      "Never wear loose clothing, jewelry, or long hair near rotating equipment",
      "Lockout/Tagout must be used before clearing jams or performing maintenance on machinery",
      "Workers must NEVER place any body part in the point of operation of a machine without a guard"
    ],
    sections: [
      {
        title: "Understanding Caught-In/Between Hazards",
        content: `<p>Caught-in/between incidents occur when a worker's body or clothing is <strong>caught in, compressed by, or between</strong> objects. This category includes:</p>
<ul>
  <li><strong>Pinch points</strong> — where two objects come together, at least one of which moves (gears, belts, pulleys)</li>
  <li><strong>Nip points</strong> — rotating parts that contact a fixed part or another rotating part</li>
  <li><strong>Shear points</strong> — where the edge of a moving part passes closely against a stationary part</li>
  <li><strong>Wrap points</strong> — exposed rotating shafts that can catch clothing or hair</li>
  <li><strong>Excavation cave-ins</strong> — workers buried under collapsing soil</li>
  <li><strong>Caught between vehicle and stationary object</strong> — a worker pinned between a truck and a wall</li>
</ul>
<div class="warning">Rotating shafts are especially dangerous — clothing, gloves, or hair can be pulled in within fractions of a second, faster than a worker can react.</div>`
      },
      {
        title: "Machine Guarding Requirements",
        content: `<p>Machine guarding (<strong>29 CFR 1926.300</strong>) requires that all machinery with exposed moving parts — blades, gears, sprockets, pulleys, rotating shafts — be properly guarded to protect operators and nearby workers.</p>
<p>Types of guards:</p>
<ul>
  <li><strong>Fixed guards</strong> — permanent barrier enclosing the hazard</li>
  <li><strong>Interlocked guards</strong> — automatically shut off the machine when the guard is opened</li>
  <li><strong>Adjustable guards</strong> — adapted for different operations on the same machine</li>
  <li><strong>Self-adjusting guards</strong> — barrier moves with the material being processed</li>
</ul>
<div class="regulation">Guards must never be removed while the machine is in operation. All guards that were removed for maintenance must be reinstalled before the machine is restarted.</div>
<ul>
  <li>Workers must not wear loose clothing, jewelry, or let long hair hang freely near rotating parts</li>
  <li>Lockout/Tagout must be used before clearing jams, adjusting, or servicing machinery</li>
</ul>`
      },
      {
        title: "Excavation Cave-In Hazards",
        content: `<p>Cave-ins are the most deadly type of caught-in/between hazard. A cubic yard of soil can weigh <strong>2,700–3,000 lbs</strong> — enough to crush and suffocate a worker instantly. No trench or excavation deeper than <strong>5 feet</strong> should be entered without a protective system (unless excavated entirely in stable rock).</p>
<p>Three types of protective systems:</p>
<ul>
  <li><strong>Sloping</strong> — cutting back trench walls at an angle (Type A: 3/4:1 ratio = 53°; Type B: 1:1 = 45°; Type C: 1½:1 = 34°)</li>
  <li><strong>Shoring</strong> — using supports (hydraulic, pneumatic, timber) to prevent wall collapse</li>
  <li><strong>Shielding (Trench Box)</strong> — protective structure that protects workers inside even if soil moves</li>
</ul>
<div class="highlight">A competent person must classify soil type, design the protective system, and inspect the excavation daily and after any event (rain, vibration) that could affect stability. See Module 11 for full excavation coverage.</div>`
      },
      {
        title: "Prevention Strategies",
        content: `<p>Preventing caught-in/between injuries requires both engineering controls and behavioral practices:</p>
<ul>
  <li><strong>Guards and barriers</strong> — first line of defense; never bypass or remove them</li>
  <li><strong>Lockout/Tagout</strong> — de-energize all energy sources before clearing jams or performing maintenance</li>
  <li><strong>Personal protective equipment</strong> — close-fitting clothing, no dangling jewelry or scarves, secure long hair, cut-resistant gloves (with caution near rotating parts)</li>
  <li><strong>Safe positioning</strong> — never reach into a machine's point of operation; use push sticks or other tools</li>
  <li><strong>Training</strong> — know the machine hazards before operating; follow manufacturer's operating procedures</li>
  <li><strong>Barricades</strong> — keep bystanders away from equipment during operation</li>
</ul>
<div class="warning">If a guard has been removed, DO NOT operate the machine. Report the missing guard to your supervisor immediately.</div>`
      }
    ],
    quiz: [
      { q: "Which of the following is the most deadly type of caught-in/between hazard?", options: ["Pinch points from gears","Excavation cave-ins","Wrap points on rotating shafts","Caught between vehicle and stationary object"], a: 1, explain: "Excavation cave-ins are the most deadly caught-in/between hazard. A cubic yard of soil weighs up to 3,000 lbs and can instantly crush and suffocate a trapped worker." },
      { q: "Machine guarding requirements for construction are found in:", options: ["29 CFR 1926.502","29 CFR 1926.300","29 CFR 1910.217","29 CFR 1926.417"], a: 1, explain: "29 CFR 1926.300 covers tools and machinery guarding in construction. It requires guards on all machines with exposed moving parts that could injure workers." },
      { q: "Before clearing a jam in a power saw, a worker must:", options: ["Wear heavy gloves and clear the jam quickly","Slow the machine to its lowest speed","De-energize the machine using Lockout/Tagout procedures","Ask a co-worker to hold the blade while they clear the jam"], a: 2, explain: "Lockout/Tagout must be used to de-energize (and lock out) all energy sources before any worker clears a jam, adjusts, or services machinery with moving parts." },
      { q: "A wrap point is best described as:", options: ["A pinch point where two gears mesh","An exposed rotating shaft that can catch clothing or hair","A point where a moving blade shears against a fixed surface","A spot where a vehicle can pin a worker against a wall"], a: 1, explain: "Wrap points are exposed rotating shafts, PTO shafts, or similar parts that catch and wrap clothing, gloves, or hair — pulling the worker into the machine in fractions of a second." },
      { q: "A worker is wearing a hoodie with a drawstring while operating a drill press. This creates a risk of:", options: ["Electrical shock","A wrap point hazard","A pinch point only if the guard is removed","Silica exposure"], a: 1, explain: "Loose clothing (drawstrings, scarves, loose sleeves) near rotating equipment creates a wrap point hazard. The rotating drill or chuck can catch loose material and pull the worker in." },
      { q: "A guard is removed from a table saw for cleaning. Before the saw is restarted, the guard must:", options: ["Be reinstalled only if required by the manufacturer","Be reinstalled before restarting the machine","Be replaced with a different type","Be inspected by OSHA before reinstallation"], a: 1, explain: "All guards removed for maintenance must be reinstalled before the machine is restarted. Operating any machine without its required guards is an OSHA violation." },
      { q: "What should a worker do if they notice a guard is missing from a piece of equipment?", options: ["Operate it carefully using PPE","Report it to their supervisor and do not operate the machine","Attach a tag to the machine and continue work","Assume the guard was removed intentionally by the operator"], a: 1, explain: "If a guard is missing, the worker must NOT operate the machine and must report it to their supervisor immediately. Operating an unguarded machine creates serious injury risk." },
      { q: "Which type of machine guard automatically shuts off the machine when the guard is opened?", options: ["Fixed guard","Adjustable guard","Interlocked guard","Self-adjusting guard"], a: 2, explain: "An interlocked guard is connected to the machine's power supply so that the machine cannot operate when the guard is open or removed — it shuts off automatically when the guard is displaced." }
    ]
  },
  {
    id: 7, title: "Personal Protective Equipment", subtitle: "Selection, Use & Limitations of PPE",
    icon: "🦺", estimatedTime: "1.5 hrs",
    videoId: "W-scDL_8664",
    keyFacts: [
      "PPE is the LAST resort in the Hierarchy of Controls — it doesn't eliminate the hazard",
      "Hard hat Class E: 20,000V; Class G: 2,200V; Class C: no electrical protection",
      "Hard hat Type I: top impact only; Type II: top and lateral impact",
      "Noise action level: 85 dB (8-hr TWA); PEL: 90 dB (8-hr TWA); Instantaneous max: 115 dB",
      "Eye/face protection must meet ANSI Z87.1",
      "Respiratory protection requires medical evaluation before use (29 CFR 1910.134)",
      "Hi-Vis Class 1: low risk; Class 2: roadway work zones; Class 3: high traffic/risk",
      "Foot protection: ASTM F2413 standard (replaces former ANSI Z41)"
    ],
    sections: [
      {
        title: "Head & Eye/Face Protection",
        content: `<p>Hard hats protect against three hazards: <strong>impact</strong> (falling objects), <strong>penetration</strong> (sharp objects), and <strong>electrical</strong> shock. Selection requires matching both the <strong>Type</strong> and <strong>Class</strong> to the hazard.</p>
<table class="data-table"><thead><tr><th></th><th>Type I</th><th>Type II</th></tr></thead>
<tbody>
<tr><td>Protection</td><td>Top of head only</td><td>Top AND lateral (sides)</td></tr>
</tbody></table>
<table class="data-table"><thead><tr><th>Class</th><th>Electrical Rating</th></tr></thead>
<tbody>
<tr><td>Class E (Electrical)</td><td>20,000 volts</td></tr>
<tr><td>Class G (General)</td><td>2,200 volts</td></tr>
<tr><td>Class C (Conductive)</td><td>No electrical protection</td></tr>
</tbody></table>
<p>Eye and face protection must meet <strong>ANSI/ISEA Z87.1</strong>. Safety glasses protect against impact; goggles add splash protection; face shields protect the entire face but do NOT replace safety glasses underneath.</p>`
      },
      {
        title: "Hearing Protection",
        content: `<p>Noise-induced hearing loss is permanent and cumulative — it cannot be reversed. OSHA's noise standard requires hearing conservation programs when workers are exposed to noise at or above the <strong>action level of 85 dB (8-hour TWA)</strong>.</p>
<table class="data-table"><thead><tr><th>Noise Level</th><th>Requirement</th></tr></thead>
<tbody>
<tr><td>85 dB TWA</td><td>Action Level — hearing conservation program begins</td></tr>
<tr><td>90 dB TWA</td><td>PEL — engineering/admin controls required</td></tr>
<tr><td>115 dB</td><td>Instantaneous maximum (no exposure without protection)</td></tr>
<tr><td>140 dB peak</td><td>Impulse/impact noise ceiling</td></tr>
</tbody></table>
<div class="highlight">The Noise Reduction Rating (NRR) on hearing protection packaging must be reduced by 50% (for earmuffs) or 70% (for earplugs) to estimate real-world attenuation. Effective protection = NRR ÷ 2 minus 7 dB (OSHA's simplified method).</div>`
      },
      {
        title: "Respiratory & Hand/Foot Protection",
        content: `<p>Respiratory protection is required when engineering controls alone cannot reduce airborne contaminant levels to safe limits. Types of respirators:</p>
<ul>
  <li><strong>Air-purifying</strong> — filter, cartridge, or canister; effective only against specific contaminants; do NOT use in oxygen-deficient atmospheres</li>
  <li><strong>Supplied-air (SAR)</strong> — airline respirator with hose to clean air source</li>
  <li><strong>SCBA (Self-Contained Breathing Apparatus)</strong> — full protection for IDLH environments</li>
</ul>
<div class="regulation">29 CFR 1910.134 applies to construction. Employers must conduct a medical evaluation BEFORE an employee is fit-tested or wears a tight-fitting respirator.</div>
<p><strong>Hand protection</strong>: glove type must match the hazard (cut-resistant, chemical-resistant, heat-resistant, electrical). Never wear gloves near rotating equipment unless appropriate for that hazard.</p>
<p><strong>Foot protection</strong>: meets <strong>ASTM F2413</strong>. Safety-toe boots protect against impact/compression; metatarsal guards protect the top of the foot; puncture-resistant soles protect against nails.</p>`
      },
      {
        title: "High-Visibility Apparel & Employer Responsibilities",
        content: `<p>High-visibility (hi-vis) apparel is required in roadway and public right-of-way construction. ANSI/ISEA 107 defines performance classes based on visibility and background material:</p>
<ul>
  <li><strong>Class 1</strong> — minimum visibility; off-road, low-speed environments</li>
  <li><strong>Class 2</strong> — minimum required for roadway work zones (with traffic speeds >25 mph)</li>
  <li><strong>Class 3</strong> — highest visibility; required near high-speed traffic, complex backgrounds, nighttime</li>
</ul>
<div class="regulation">Per MUTCD (Manual on Uniform Traffic Control Devices) and OSHA, all workers within the right-of-way of a public roadway must wear Class 2 minimum hi-vis apparel during daylight and Class 3 at night.</div>
<p><strong>Employer responsibilities for PPE:</strong></p>
<ul>
  <li>Conduct a hazard assessment to determine required PPE (must be certified in writing)</li>
  <li>Provide required PPE at <strong>no cost</strong> to workers (with limited exceptions for everyday work boots and prescription eyewear)</li>
  <li>Train workers on PPE selection, use, care, and limitations</li>
  <li>Ensure PPE is maintained in a sanitary and reliable condition</li>
</ul>`
      }
    ],
    quiz: [
      { q: "A worker will be working near energized electrical equipment at 15,000 volts. Which hard hat class is required?", options: ["Class C","Class G","Class E","Class B"], a: 2, explain: "Class E (Electrical) hard hats are tested to 20,000 volts. Class G is only rated to 2,200 volts. Class C provides NO electrical protection." },
      { q: "OSHA's noise standard requires a hearing conservation program when workers are exposed to noise at or above:", options: ["80 dB TWA","85 dB TWA","90 dB TWA","100 dB TWA"], a: 1, explain: "The action level for hearing conservation programs is 85 dB as an 8-hour TWA. The PEL is 90 dB. At the action level, employers must implement audiometric testing and provide hearing protection." },
      { q: "What must occur BEFORE a worker wears a tight-fitting respirator for the first time?", options: ["A fit test only","A medical evaluation and then a fit test","A safety training class","Supervisor approval"], a: 1, explain: "OSHA's respiratory protection standard (29 CFR 1910.134) requires a medical evaluation to ensure the worker is physically able to wear a respirator BEFORE fit testing or use." },
      { q: "Hard hats protect against three primary hazards. Which is NOT one of them?", options: ["Impact from falling objects","Chemical splash","Electrical shock/burn","Penetration by sharp objects"], a: 1, explain: "Hard hats protect against impact, penetration, and electrical shock. They do NOT provide chemical splash protection — that requires appropriate eye/face PPE and chemical-resistant clothing." },
      { q: "Type II hard hats provide protection against:", options: ["Top impact only","Top and lateral (side) impact","Electrical hazards only","Only penetration hazards"], a: 1, explain: "Type II hard hats protect against both top impact and lateral (side) impact. Type I hard hats only protect the top of the head." },
      { q: "Eye protection must meet which standard?", options: ["ASTM F2413","ANSI Z89.1","ANSI/ISEA Z87.1","NFPA 70E"], a: 2, explain: "Eye and face protective devices must meet ANSI/ISEA Z87.1. Safety glasses, goggles, and face shields are all rated under this standard." },
      { q: "A face shield provides:", options: ["Complete eye and face protection without additional glasses","Face protection only — safety glasses must also be worn underneath","Protection only against chemical splash","Electrical protection up to 2,200 volts"], a: 1, explain: "Face shields protect the entire face but are not primary eye protection. Safety glasses or goggles must be worn underneath a face shield to protect the eyes." },
      { q: "Under OSHA, employers must provide required PPE:", options: ["And can charge workers if they lose it","At no cost to workers (with very limited exceptions)","Only if OSHA has cited the company before","If requested by workers in writing"], a: 1, explain: "Employers must provide required PPE at no cost to workers. Limited exceptions exist for non-specialty safety-toe footwear and prescription eyewear used away from the worksite." }
    ]
  },
  {
    id: 8, title: "Health Hazards & Hazard Communication", subtitle: "GHS, SDS, Silica, Asbestos & Lead",
    icon: "☣️", estimatedTime: "1.5 hrs",
    videoId: "PkGbof7FeZA",
    keyFacts: [
      "GHS HazCom 2012: labels must have pictogram, signal word, hazard statement, precautionary statement, supplier ID",
      "SDS (Safety Data Sheet) has 16 standardized sections — replaced the MSDS",
      "Two GHS signal words: DANGER (more severe) and WARNING (less severe)",
      "Silica PEL: 50 μg/m³ (8-hr TWA); Action Level: 25 μg/m³",
      "Asbestos PEL: 0.1 f/cc (8-hr TWA); STEL: 1.0 f/cc (30-min)",
      "Lead PEL: 50 μg/m³; Action Level: 30 μg/m³",
      "Most common route of entry for airborne hazards: Inhalation",
      "4 routes of chemical entry: Inhalation, Ingestion, Skin absorption, Injection"
    ],
    sections: [
      {
        title: "Hazard Communication Standard (HazCom/GHS)",
        content: `<p>OSHA's Hazard Communication Standard (<strong>29 CFR 1910.1200</strong>, applicable to construction) requires chemical manufacturers to classify hazards and communicate them through <strong>labels</strong> and <strong>Safety Data Sheets (SDS)</strong>. The standard aligns with the <strong>Globally Harmonized System (GHS)</strong>.</p>
<p><strong>Required label elements:</strong></p>
<ul>
  <li><strong>Pictogram</strong> — 9 GHS pictograms with red diamond border (e.g., flame, skull, corrosion)</li>
  <li><strong>Signal word</strong> — either <em>DANGER</em> (more severe hazard) or <em>WARNING</em> (less severe)</li>
  <li><strong>Hazard statement</strong> — describes the nature and degree of hazard</li>
  <li><strong>Precautionary statement</strong> — how to minimize or prevent adverse effects</li>
  <li><strong>Product identifier</strong> — chemical name or number</li>
  <li><strong>Supplier identification</strong> — name, address, phone number</li>
</ul>
<div class="regulation">Workers must have access to SDS for all hazardous chemicals in their work area. SDS must be readily accessible during each work shift.</div>`
      },
      {
        title: "Safety Data Sheets (SDS) — 16 Sections",
        content: `<p>The SDS (formerly MSDS) provides detailed hazard and safe handling information. GHS standardized the format to <strong>16 sections in a specific order</strong> — the same for every chemical worldwide.</p>
<table class="data-table"><thead><tr><th>Section</th><th>Content</th></tr></thead>
<tbody>
<tr><td>1</td><td>Identification (product name, manufacturer)</td></tr>
<tr><td>2</td><td>Hazard Identification (signal word, pictograms, hazard statements)</td></tr>
<tr><td>3</td><td>Composition/Information on Ingredients</td></tr>
<tr><td>4</td><td>First Aid Measures</td></tr>
<tr><td>8</td><td>Exposure Controls/PPE</td></tr>
<tr><td>9</td><td>Physical and Chemical Properties</td></tr>
<tr><td>14</td><td>Transport Information</td></tr>
<tr><td>16</td><td>Other Information (date of preparation/revision)</td></tr>
</tbody></table>
<div class="highlight">Know Section 2 (hazard identification), Section 4 (first aid), Section 8 (PPE/exposure controls) — these are most relevant during an emergency or when selecting controls.</div>`
      },
      {
        title: "Silica, Asbestos & Lead",
        content: `<p>Three of the most dangerous health hazards in construction are crystalline silica, asbestos, and lead:</p>
<p><strong>Crystalline Silica</strong> — released when cutting, grinding, drilling, or jackhammering concrete, masonry, or rock. Causes silicosis (irreversible scarring of the lung), lung cancer, and COPD.</p>
<ul>
  <li>PEL: <strong>50 μg/m³</strong> (8-hr TWA) | Action Level: <strong>25 μg/m³</strong></li>
  <li>Controls: water suppression, local exhaust ventilation (LEV), respirators (N95 minimum)</li>
</ul>
<p><strong>Asbestos</strong> — found in older buildings (pre-1980) in insulation, floor tiles, roofing, pipes. Causes asbestosis, mesothelioma, lung cancer.</p>
<ul>
  <li>PEL: <strong>0.1 f/cc</strong> (8-hr TWA) | STEL: <strong>1.0 f/cc</strong> (30 min)</li>
</ul>
<p><strong>Lead</strong> — found in lead-based paint (pre-1978), soldering, demolition. Causes neurological damage, kidney disease.</p>
<ul>
  <li>PEL: <strong>50 μg/m³</strong> | Action Level: <strong>30 μg/m³</strong> (triggers medical surveillance)</li>
</ul>`
      },
      {
        title: "Routes of Entry & Biological/Physical Hazards",
        content: `<p>Chemicals can enter the body by four routes:</p>
<ul>
  <li><strong>Inhalation</strong> — most common; breathing in dusts, fumes, vapors, gases</li>
  <li><strong>Ingestion</strong> — swallowing; often from contaminated hands touching mouth (eating without washing hands)</li>
  <li><strong>Skin absorption</strong> — chemicals pass through intact skin (solvents, pesticides)</li>
  <li><strong>Injection</strong> — puncture wounds forcing substance under the skin (high-pressure equipment)</li>
</ul>
<div class="warning">Prevention: use the hierarchy of controls (LEV, substitution), wear appropriate PPE, wash hands before eating or drinking, change contaminated clothing before leaving the site.</div>
<p><strong>Physical hazards in construction include:</strong></p>
<ul>
  <li><strong>Heat stress</strong> — heat exhaustion and heat stroke; drink water, take breaks in shade, acclimatize workers</li>
  <li><strong>Noise</strong> — covered in PPE module; permanent hearing loss</li>
  <li><strong>Vibration</strong> — hand-arm vibration syndrome from jackhammers, grinders</li>
  <li><strong>Ergonomics</strong> — awkward postures, repetitive motion, manual lifting</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Under GHS HazCom, how many sections does a Safety Data Sheet (SDS) contain?", options: ["8","12","14","16"], a: 3, explain: "The GHS standardized the SDS format to 16 sections in a specific, universal order. This replaced the variable MSDS format, making it easier to find information quickly." },
      { q: "Which GHS signal word indicates a MORE SEVERE hazard?", options: ["WARNING","CAUTION","DANGER","NOTICE"], a: 2, explain: "DANGER indicates more severe hazards. WARNING indicates less severe hazards. There are only two GHS signal words — DANGER and WARNING. 'CAUTION' and 'NOTICE' are not GHS signal words." },
      { q: "What is the OSHA Permissible Exposure Limit (PEL) for crystalline silica?", options: ["25 μg/m³","50 μg/m³","100 μg/m³","0.1 f/cc"], a: 1, explain: "The silica PEL is 50 μg/m³ as an 8-hour TWA. The action level is 25 μg/m³, at which medical surveillance and exposure assessment begin." },
      { q: "A worker's Safety Data Sheet is stored in the supervisor's locked office. This is:", options: ["Acceptable if workers know the combination","Not acceptable — SDS must be readily accessible during each work shift","Acceptable for hazardous chemicals only","Required by OSHA for document security"], a: 1, explain: "SDS must be immediately accessible to workers during their work shift — not locked away. Workers need access to this information during emergencies and routine tasks." },
      { q: "The most common route of chemical entry into the body for airborne hazards is:", options: ["Skin absorption","Injection","Ingestion","Inhalation"], a: 3, explain: "Inhalation is the most common and fastest route of entry for airborne chemicals (dusts, vapors, gases, fumes). It allows chemicals to enter the bloodstream rapidly through the lungs." },
      { q: "The asbestos PEL (8-hour TWA) is:", options: ["0.01 f/cc","0.1 f/cc","1.0 f/cc","50 μg/m³"], a: 1, explain: "The asbestos PEL is 0.1 fibers per cubic centimeter (f/cc) as an 8-hour TWA. The STEL (30-minute excursion limit) is 1.0 f/cc." },
      { q: "GHS labels on chemical containers are required to include all of the following EXCEPT:", options: ["Pictogram","Signal word","Employee name and ID","Precautionary statement"], a: 2, explain: "GHS labels require a pictogram, signal word, hazard statement, precautionary statement, product identifier, and supplier identification. Employee name/ID is not a required label element." },
      { q: "Which route of chemical entry can occur from eating lunch at a work area contaminated with lead dust without washing hands?", options: ["Inhalation","Injection","Ingestion","Skin absorption"], a: 2, explain: "Ingestion occurs when contaminated hands touch food or the mouth, allowing chemicals to be swallowed. Workers must wash hands and face before eating, drinking, or smoking in lead-contaminated areas." }
    ]
  },
  {
    id: 9, title: "Stairways & Ladders", subtitle: "Safe Use, Angles & Inspection Requirements",
    icon: "🪜", estimatedTime: "1 hr",
    videoId: "YOOy75o98bM",
    keyFacts: [
      "Stairways or ladders required at every point of access where there is a break in elevation of 19 inches or more",
      "Stairway handrails for construction: 36–37 inches in height",
      "Extension ladders must extend at least 3 feet above the upper landing surface",
      "Ladder angle (4:1 rule): 1 foot out for every 4 feet of height (approximately 75°)",
      "Duty ratings: Type IA = 300 lbs, Type I = 250 lbs, Type II = 225 lbs, Type III = 200 lbs",
      "Never stand on the top two rungs of a stepladder",
      "Always face the ladder and maintain 3-point contact when climbing",
      "Ladders must be inspected before each use and after any event that may have damaged them"
    ],
    sections: [
      {
        title: "When Stairways & Ladders Are Required",
        content: `<p>On construction sites, stairways or ladders must be provided at every point of access where there is a <strong>break in elevation of 19 inches or more</strong> and no ramp, runway, embankment, or personnel hoist is provided.</p>
<p>When a stairway or ladder is the only means of access or egress from a working level, and 25 or more workers are involved, or the climb is 24 feet or more, a <strong>stairway</strong> (not just a ladder) must be provided.</p>
<div class="regulation">29 CFR 1926.1051 — Stairways and ladders must be provided at each point of access when the break in elevation is 19 inches or more.</div>
<p>Construction stairways must have:</p>
<ul>
  <li>Handrails on all open sides; height of <strong>36–37 inches</strong></li>
  <li>Rise height of no more than 9.5 inches and tread depth of no less than 9.5 inches</li>
  <li>Stairways with 4 or more risers must have at least one handrail</li>
  <li>Landings must be at least 30 inches in depth and 22 inches in width</li>
</ul>`
      },
      {
        title: "Ladder Types, Duty Ratings & Selection",
        content: `<p>Selecting the right ladder requires matching the duty rating and type to the job:</p>
<table class="data-table"><thead><tr><th>Duty Type</th><th>Max Load</th><th>Typical Use</th></tr></thead>
<tbody>
<tr><td>Type IAA</td><td>375 lbs</td><td>Special duty</td></tr>
<tr><td>Type IA</td><td>300 lbs</td><td>Extra heavy duty industrial</td></tr>
<tr><td>Type I</td><td>250 lbs</td><td>Heavy duty industrial</td></tr>
<tr><td>Type II</td><td>225 lbs</td><td>Medium duty commercial</td></tr>
<tr><td>Type III</td><td>200 lbs</td><td>Light duty household</td></tr>
</tbody></table>
<div class="warning">The duty rating includes the worker's weight PLUS tools, materials, and equipment being carried. A 200-lb worker carrying 50 lbs of tools needs a Type I or better ladder.</div>
<ul>
  <li>Use metal ladders only for non-electrical work; use fiberglass near electrical hazards</li>
  <li>Extension ladders: used to reach heights too tall for a single section ladder</li>
  <li>Stepladders: self-supporting; must never be used in the closed position as an extension ladder</li>
  <li>Job-made wooden ladders: must be designed by a qualified person</li>
</ul>`
      },
      {
        title: "Safe Ladder Use & The 4:1 Rule",
        content: `<p>Most ladder incidents happen because of improper setup or use. Key safe use rules:</p>
<ul>
  <li><strong>4:1 Rule (75°)</strong> — for every 4 feet of height, position the base 1 foot from the wall. A 20-foot ladder must have its base 5 feet from the structure.</li>
  <li><strong>3-foot extension</strong> — extension ladders must extend at least 3 feet above the upper landing surface</li>
  <li><strong>3-point contact</strong> — maintain two hands and one foot, or two feet and one hand on the ladder at all times</li>
  <li><strong>Face the ladder</strong> — always face the ladder when climbing and descending</li>
  <li><strong>Secure the ladder</strong> — tie off, block, or have a worker hold the base to prevent movement</li>
  <li><strong>One person at a time</strong> — do not have two workers on a ladder simultaneously unless it is designed for that purpose</li>
  <li><strong>Do not carry loads</strong> — use a tool belt or hoist materials separately</li>
</ul>
<div class="warning">Never use the top two rungs of a stepladder or the top rung of an extension ladder — this puts the worker above the safe working height and reduces stability.</div>`
      },
      {
        title: "Ladder Inspection & Maintenance",
        content: `<p>Ladders must be inspected <strong>before each use</strong> and after any incident or condition that may have damaged them. Remove defective ladders from service immediately and tag them "DO NOT USE."</p>
<p>What to inspect:</p>
<ul>
  <li>Structural integrity: broken, bent, missing, or cracked rails, rungs, or feet</li>
  <li>Non-slip feet (rubber pads or safety feet) — present and in good condition</li>
  <li>Rung locks on extension ladders — properly engaging and holding position</li>
  <li>No oil, grease, or wet surfaces on rungs or rails</li>
  <li>Labels and markings — duty rating must be legible</li>
</ul>
<div class="highlight">Damaged ladders must be immediately withdrawn from service, tagged "Dangerous — Do Not Use," and either repaired by the manufacturer's guidelines or destroyed so they cannot be used again.</div>
<p>Storage: store ladders horizontally on supports to prevent bowing; protect from weather and UV (especially fiberglass); never store on top of other equipment.</p>`
      }
    ],
    quiz: [
      { q: "Stairways or ladders must be provided when the elevation change is:", options: ["12 inches or more","15 inches or more","19 inches or more","24 inches or more"], a: 2, explain: "29 CFR 1926.1051 requires stairways or ladders at every point of access where there is a break in elevation of 19 inches or more and no other means of access (ramp, hoist, etc.) is provided." },
      { q: "Using the 4:1 rule, how far from the base of a wall should the bottom of a 24-foot ladder be placed?", options: ["4 feet","6 feet","8 feet","12 feet"], a: 1, explain: "4:1 rule: 1 foot out per 4 feet of height. 24 ÷ 4 = 6 feet. The base of the ladder must be 6 feet from the wall to achieve the proper 75-degree angle." },
      { q: "An extension ladder must extend beyond the upper landing by at least:", options: ["1 foot","2 feet","3 feet","4 feet"], a: 2, explain: "Extension ladders used for access to upper levels must extend at least 3 feet above the landing surface to provide a handhold and support when stepping on or off." },
      { q: "A worker weighs 185 lbs and is carrying 70 lbs of tools. What is the minimum ladder duty rating required?", options: ["Type III (200 lbs)","Type II (225 lbs)","Type I (250 lbs)","Type IA (300 lbs)"], a: 3, explain: "185 + 70 = 255 lbs total load. Type I supports 250 lbs — not enough. Type IA supports 300 lbs and is required for this total combined load." },
      { q: "When climbing a ladder, a worker should:", options: ["Keep both hands free by using a tool belt","Always face away from the ladder for better visibility","Maintain 3-point contact and face the ladder","Climb quickly to minimize time on the ladder"], a: 2, explain: "Always face the ladder when climbing and descending, and maintain 3-point contact (two hands and one foot, or two feet and one hand) at all times." },
      { q: "A defective ladder found during inspection must be:", options: ["Marked with tape and used with caution","Removed from service, tagged, and repaired or destroyed","Reported to OSHA within 24 hours","Set aside until a supervisor can inspect it"], a: 1, explain: "Defective ladders must be immediately removed from service and tagged 'Do Not Use.' They must be either repaired to the manufacturer's specifications or destroyed to prevent further use." },
      { q: "What is the maximum load for a Type II (medium duty) ladder?", options: ["200 lbs","225 lbs","250 lbs","300 lbs"], a: 1, explain: "Type II ladders have a duty rating of 225 lbs. This includes the worker's weight plus any tools, equipment, or materials." },
      { q: "A stepladder should NEVER be:", options: ["Used on a flat, level surface","Used for electrical work with a fiberglass ladder","Used in the closed/folded position as a leaning ladder","Used when it has non-slip feet"] , a: 2, explain: "A stepladder is self-supporting and must not be used in the folded/closed position as a leaning ladder — it is not designed for that use and is highly unstable when closed." }
    ]
  },
  {
    id: 10, title: "Scaffolding", subtitle: "Types, Capacities & Fall Protection Requirements",
    icon: "🏗️", estimatedTime: "2 hrs",
    videoId: "2ka4Nl-B_QA",
    keyFacts: [
      "Fall protection required on scaffolding at 10 feet above a lower level",
      "Supported scaffold safety factor: minimum 4:1 (must support 4x the intended load)",
      "Suspended scaffold safety factor: minimum 6:1",
      "Planking must extend 6–18 inches past end supports; overlap minimum 12 inches",
      "Access (ladder or stairway) required at every 35 feet of scaffold length",
      "Competent person must supervise erection, dismantling, and any alteration",
      "Mobile scaffolds: height-to-base ratio must not exceed 4:1",
      "Workers must not ride on manually propelled mobile scaffolds"
    ],
    sections: [
      {
        title: "Types of Scaffolding & General Requirements",
        content: `<p>Scaffolding in construction is covered under <strong>29 CFR 1926 Subpart L</strong>. Three main types:</p>
<ul>
  <li><strong>Supported scaffolds</strong> — platforms supported by rigid legs, poles, frames, or similar supports from below. Most common type (tube-and-coupler, system scaffold, frame scaffold).</li>
  <li><strong>Suspended scaffolds</strong> — platforms hung from above by ropes or other non-rigid means (two-point suspension / swing stage scaffolds, boatswain's chairs).</li>
  <li><strong>Mobile/Rolling scaffolds</strong> — supported scaffolds mounted on wheels; can be manually moved. Height-to-base width ratio must not exceed <strong>4:1</strong>.</li>
</ul>
<div class="regulation">All scaffolds must be designed by a qualified person and erected, used, and dismantled under the supervision of a competent person (29 CFR 1926.451).</div>
<p>Scaffolding must be erected on <strong>base plates and mudsills</strong> (or other adequate base) when on soft ground or fill — never on unstable objects such as bricks or blocks.</p>`
      },
      {
        title: "Scaffold Capacity & Planking",
        content: `<p>Capacity requirements differ by scaffold type:</p>
<table class="data-table"><thead><tr><th>Type</th><th>Safety Factor</th><th>Basis</th></tr></thead>
<tbody>
<tr><td>Supported scaffold</td><td>4:1</td><td>4x rated load capacity</td></tr>
<tr><td>Suspended scaffold</td><td>6:1</td><td>6x rated load for ropes/rigging</td></tr>
<tr><td>Mobile scaffold</td><td>4:1 height:base</td><td>Must not exceed 4:1 height-to-base ratio</td></tr>
</tbody></table>
<p><strong>Scaffold planking</strong> requirements:</p>
<ul>
  <li>Planks must be scaffold-grade or equivalent</li>
  <li>Extend <strong>6 to 18 inches</strong> beyond end supports (no more, no less)</li>
  <li>When overlapped, planks must overlap by a minimum of <strong>12 inches</strong> over supports</li>
  <li>Solid planking (or equivalent) covering the entire working area</li>
  <li>Inspect planks for cracks, knots, and decay before each use</li>
</ul>
<div class="warning">Planking that extends more than 18 inches beyond its support can tip if a worker steps on the overhanging end — a deadly hazard.</div>`
      },
      {
        title: "Fall Protection on Scaffolding",
        content: `<p>Fall protection is required when the work platform is <strong>10 feet or more</strong> above a lower level (compared to 6 feet for other construction work). Two options:</p>
<ul>
  <li><strong>Guardrail system</strong> — top rail, midrail, and toeboard. For scaffolding, guardrails are the primary means of fall protection.</li>
  <li><strong>PFAS (Personal Fall Arrest System)</strong> — required in place of or in addition to guardrails for certain scaffold types (especially suspended scaffolds)</li>
</ul>
<p>Specific requirements by scaffold type:</p>
<ul>
  <li><strong>Suspended scaffolds</strong> — workers must wear PFAS anchored to a structural member (not the scaffold itself)</li>
  <li><strong>Supported scaffolds</strong> — guardrail system is typically used; PFAS required only when guardrails are infeasible</li>
  <li><strong>Single-point suspension / boatswain's chair</strong> — PFAS required; a safety line separate from the suspension line must be used</li>
</ul>
<div class="regulation">Toeboards (minimum 3.5" high) are required on all open sides and ends of platforms to prevent materials from falling onto workers below.</div>`
      },
      {
        title: "Access, Competent Person & Safe Use",
        content: `<p>Access to scaffold platforms must be provided at intervals not greater than <strong>35 feet</strong> along the length of the scaffold. Acceptable means of access:</p>
<ul>
  <li>Portable ladders (properly secured)</li>
  <li>Hook-on or attachable ladders</li>
  <li>Stairway-type ladders built into the scaffold frame</li>
  <li>Ramps (when scaffold-specific ramp is provided)</li>
</ul>
<p>A <strong>competent person</strong> must:</p>
<ul>
  <li>Oversee erection, moving, dismantling, or alteration of scaffolding</li>
  <li>Inspect scaffold before each work shift and after any event that could affect structural integrity</li>
  <li>Determine safe load capacities and whether conditions are safe for use</li>
</ul>
<div class="highlight">The competent person and qualified person have different roles: the <em>qualified person</em> designs the scaffold; the <em>competent person</em> supervises erection and daily use. One person can hold both roles if they have both the knowledge and authority.</div>
<p>Additional rules: no riding on manually propelled mobile scaffolds; do not use ladders or boxes to gain height on a scaffold platform; no work on ice-covered, wet, or slippery scaffolding.</p>`
      }
    ],
    quiz: [
      { q: "At what height above a lower level is fall protection required on scaffolding?", options: ["6 feet","8 feet","10 feet","15 feet"], a: 2, explain: "Fall protection on scaffolding is required at 10 feet above a lower level, per 29 CFR 1926.451. This differs from the 6-foot trigger for other construction fall hazards." },
      { q: "What is the minimum safety factor for a supported scaffold?", options: ["2:1","3:1","4:1","6:1"], a: 2, explain: "Supported scaffolds must have a safety factor of at least 4:1, meaning they must be capable of supporting at least 4 times the maximum intended load." },
      { q: "Scaffold planking must extend beyond end supports by:", options: ["3 to 9 inches","4 to 12 inches","6 to 18 inches","12 to 24 inches"], a: 2, explain: "Scaffold planks must extend 6 to 18 inches beyond their end supports. Too little overhang can tip the plank; too much creates a trip and tip hazard." },
      { q: "Access to scaffold platforms must be provided at intervals not exceeding:", options: ["20 feet","25 feet","30 feet","35 feet"], a: 3, explain: "OSHA requires that access (ladder, stairway, or ramp) be provided at intervals not greater than 35 feet along the length of the scaffold." },
      { q: "Who must supervise the erection and dismantling of scaffolding?", options: ["A qualified engineer","A competent person","Any experienced scaffold worker","The general contractor"], a: 1, explain: "A competent person (someone with knowledge of scaffold hazards and the authority to correct them) must supervise all scaffold erection, dismantling, moving, and alteration." },
      { q: "The height-to-base ratio for a mobile (rolling) scaffold must not exceed:", options: ["2:1","3:1","4:1","6:1"], a: 2, explain: "Mobile scaffolds must not exceed a height-to-base ratio of 4:1. For example, a scaffold with a 5-foot base width cannot exceed 20 feet in height." },
      { q: "Workers on a two-point suspension (swing stage) scaffold must wear:", options: ["A guardrail system only","PFAS anchored to the scaffold's suspension rope","PFAS anchored to a structural member independent of the scaffold","No additional fall protection if handrails are present"], a: 2, explain: "Workers on suspended scaffolds must wear a PFAS anchored to a structural member of the building or structure — NOT to the scaffold itself, because a scaffold failure would take the anchor down too." },
      { q: "Scaffold planks must overlap by a minimum of how many inches when placed over a support?", options: ["6 inches","10 inches","12 inches","18 inches"], a: 2, explain: "When scaffold planks are overlapped, the overlap must be a minimum of 12 inches and must occur directly over a scaffold support/bearer." }
    ]
  }
];
