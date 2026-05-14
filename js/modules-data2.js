/* OSHA 30 Construction — Modules 11–20 */
const MODULES_PART2 = [
  {
    id: 11, title: "Excavations & Trenching", subtitle: "Soil Classification, Protective Systems & Cave-In Prevention",
    icon: "⛏️", estimatedTime: "2 hrs",
    keyFacts: [
      "Cave-ins are the #1 killer in excavation work — a cubic yard of soil weighs up to 3,000 lbs",
      "Protective systems required in any excavation 5 feet deep (unless entirely in stable rock)",
      "Soil Type A (most stable): max slope 3/4:1 (53°) — cohesive soils, no fissures",
      "Soil Type B (medium): max slope 1:1 (45°)",
      "Soil Type C (least stable): max slope 1½:1 (34°) — granular, wet, or submerged soils",
      "Ladders/stairs required when excavation is 4 feet or deeper; within 25 feet lateral travel",
      "Competent person must classify soil, design protective system, and inspect daily",
      "Atmospheric testing required in excavations 4+ feet deep where hazardous atmosphere is possible"
    ],
    sections: [
      {
        title: "Soil Classification",
        content: `<p>Before any excavation work begins, a <strong>competent person</strong> must classify the soil using at least one visual test and one manual test. Soil type determines the required protective system.</p>
<table class="data-table"><thead><tr><th>Type</th><th>Description</th><th>Max Slope (H:V)</th><th>Angle</th></tr></thead>
<tbody>
<tr><td><strong>Type A</strong></td><td>Most stable; cohesive (clay, hardpan); no fissures, vibration, or water</td><td>¾:1</td><td>53°</td></tr>
<tr><td><strong>Type B</strong></td><td>Medium stability; angular gravel, silt, previously disturbed Type A</td><td>1:1</td><td>45°</td></tr>
<tr><td><strong>Type C</strong></td><td>Least stable; granular (sand, gravel), wet soil, submerged, layered</td><td>1½:1</td><td>34°</td></tr>
</tbody></table>
<div class="warning">If soil type cannot be determined, treat it as Type C — the most conservative (flattest slope) classification. NEVER classify soil as Type A if it has been previously disturbed.</div>
<p>Common soil tests: <strong>Thumb penetration test</strong> (Type A = hard to penetrate; Type C = easily penetrated), <strong>Plasticity test</strong> (roll into 1/8-inch thread without breaking = cohesive), <strong>Pocket penetrometer</strong>.</p>`
      },
      {
        title: "Protective Systems",
        content: `<p>Three accepted protective systems for excavations:</p>
<ul>
  <li><strong>Sloping & Benching</strong> — cutting back trench walls at an angle per soil type. Benching (stepped cuts) only in Type A or B soil; never Type C. Must also slope from the bottom of the bench.</li>
  <li><strong>Shoring</strong> — hydraulic, pneumatic, or timber supports that physically hold the trench walls. Aluminum hydraulic shoring is most common on construction sites.</li>
  <li><strong>Shielding (Trench Box)</strong> — a prefabricated steel or aluminum structure that protects workers inside it. Does NOT prevent cave-in, but shields workers from being buried if collapse occurs. Must extend 18 inches above the surrounding area if there is sloughing material.</li>
</ul>
<div class="regulation">For excavations 20 feet or deeper, the protective system must be designed by a registered professional engineer (PE). Standard OSHA Appendix B tables only apply to depths of 20 feet or less.</div>
<div class="highlight">Trench boxes can be moved vertically through the trench as work progresses — workers must exit the trench before any movement of a trench box.</div>`
      },
      {
        title: "Entry Requirements & Egress",
        content: `<p>Safe entry and exit are critical in excavation work. Requirements:</p>
<ul>
  <li><strong>Ladders, stairs, or ramps</strong> required in any excavation <strong>4 feet or deeper</strong></li>
  <li>Egress must be within <strong>25 feet lateral travel</strong> of any worker in the excavation</li>
  <li>Ladders must extend 3 feet above the landing surface</li>
  <li>Structural ramps used for equipment must be designed by a qualified person</li>
</ul>
<p><strong>Spoils pile:</strong> excavated soil must be kept at least <strong>2 feet from the edge</strong> of the excavation to prevent surcharge loading and accidental cave-in.</p>
<p><strong>Inspections:</strong> a competent person must inspect the excavation:</p>
<ul>
  <li>Before each work shift</li>
  <li>After any rainstorm, seismic activity, or other hazard-increasing event</li>
  <li>As conditions change during work</li>
</ul>
<div class="warning">Water accumulation is a leading cause of excavation collapse. All water must be removed before workers enter. Dewatering equipment must be used as needed.</div>`
      },
      {
        title: "Atmospheric Testing & Utility Hazards",
        content: `<p>Excavations can accumulate hazardous gases (methane, CO, H₂S) or become oxygen-deficient. <strong>Atmospheric testing is required</strong> in excavations 4 feet or more deep where a hazardous atmosphere could exist.</p>
<ul>
  <li>Test in order: oxygen first → flammable gases second → toxic substances third</li>
  <li>Acceptable oxygen range: 19.5%–23.5%</li>
  <li>If hazardous atmosphere found: provide respiratory protection, increase ventilation, or prohibit entry</li>
</ul>
<p><strong>Utilities:</strong> all underground utilities must be located and marked before excavation begins.</p>
<ul>
  <li>Call 811 (USA national dig safe line) before any digging</li>
  <li>Utilities may not be exactly where marked — hand-dig within 18-24 inches of a marked line</li>
  <li>Support or protect utilities that are exposed during excavation</li>
</ul>
<div class="regulation">Employers must also protect workers from cave-ins caused by nearby vehicle traffic. Use barricades, cones, or traffic control to keep vehicles away from excavation edges.</div>`
      }
    ],
    quiz: [
      { q: "A cubic yard of soil can weigh up to:", options: ["1,000 lbs","1,800 lbs","3,000 lbs","4,500 lbs"], a: 2, explain: "A cubic yard of soil can weigh between 2,700 and 3,000 lbs — enough to instantly crush and suffocate a trapped worker. Cave-ins kill quickly and without warning." },
      { q: "Protective systems are required in excavations deeper than:", options: ["3 feet","4 feet","5 feet","6 feet"], a: 2, explain: "Protective systems are required in any excavation 5 feet or deeper, unless the entire excavation is in stable rock. Many competent persons use them starting at 4 feet as a best practice." },
      { q: "What is the maximum allowable slope for Type C soil?", options: ["53° (¾:1)","45° (1:1)","34° (1½:1)","All soil must be shored at any angle"], a: 2, explain: "Type C soil (the least stable — granular, wet, layered) requires a maximum slope of 1½ horizontal to 1 vertical, which equals approximately 34 degrees from horizontal." },
      { q: "An excavation is 6 feet deep. A ladder or stairway must be located within how many feet of any worker in the trench?", options: ["10 feet","15 feet","25 feet","35 feet"], a: 2, explain: "In excavations 4 feet or deeper, an egress ladder or stairway must be provided and must be within 25 feet of lateral travel from any worker." },
      { q: "Spoils (excavated soil) must be kept at least how far from the edge of an excavation?", options: ["1 foot","2 feet","3 feet","5 feet"], a: 1, explain: "Spoil piles must be kept at least 2 feet from the edge of any excavation to prevent the added weight (surcharge) from causing a cave-in and to prevent spoil from falling back into the trench." },
      { q: "Which is the ONLY protective system allowed in Type C soil?", options: ["Benching","Sloping","Shoring or shielding only","Sloping, shoring, or shielding"], a: 3, explain: "Benching is NOT permitted in Type C soil. In Type C soil, protective systems include sloping to the correct angle (1½:1), shoring, or shielding (trench box)." },
      { q: "A previously disturbed layer of clay sits on top of sand and gravel. How should this soil be classified?", options: ["Type A — it contains clay","Type B — it has been previously disturbed","Type C — based on the least stable layer present","Type A/B combination is acceptable"], a: 2, explain: "When soil conditions vary, the entire excavation must be treated as the LEAST stable type. Previously disturbed soil cannot be Type A, and granular sand/gravel is Type C — classify the whole excavation as Type C." },
      { q: "Atmospheric testing in an excavation must be done in which order?", options: ["Toxics → Flammables → Oxygen","Oxygen → Flammables → Toxics","Flammables → Oxygen → Toxics","Any order is acceptable"], a: 1, explain: "Always test oxygen first (a multi-gas meter may give false readings if O₂ is out of range), then flammable gases, then toxic substances. This sequence ensures the meter is working correctly." }
    ]
  },
  {
    id: 12, title: "Cranes & Rigging", subtitle: "Inspections, Power Lines, Load Ratings & Signals",
    icon: "🏗️", estimatedTime: "2 hrs",
    keyFacts: [
      "Annual crane inspection required; monthly inspections; daily pre-use inspection by operator",
      "Load charts must be in the cab and accessible to the operator at all times",
      "Power line clearance: 10 feet minimum for voltages up to 50kV",
      "All crane operators must be certified (CCO or employer-based program for most cranes)",
      "A qualified rigger must be used for all rigging activities",
      "Swing radius must be barricaded against unauthorized entry",
      "Wire rope: remove from service if 6+ broken wires in one rope lay, or 3 in one strand",
      "Multiple lift rigging (Christmas tree): maximum 5 members per lift"
    ],
    sections: [
      {
        title: "Crane Inspections & Operator Requirements",
        content: `<p>Cranes are among the most complex and dangerous equipment on a construction site. OSHA's crane standard (<strong>29 CFR 1926 Subpart CC</strong>) requires multiple levels of inspection:</p>
<ul>
  <li><strong>Annual inspection</strong> — by a qualified person; documentation required</li>
  <li><strong>Monthly inspection</strong> — by a qualified person; documented</li>
  <li><strong>Pre-shift inspection</strong> — by the operator before each shift; visual check of all critical components</li>
  <li><strong>After a malfunction</strong> — any incident or malfunction must trigger inspection before return to service</li>
</ul>
<p><strong>Operator certification:</strong> operators of cranes with a rated capacity >2,000 lbs must be certified by an accredited crane operator testing organization (such as NCCCO) OR under a qualifying employer program.</p>
<div class="regulation">The load chart must be in the cab or on the crane and must be specific to the crane's current configuration (boom length, jib, counterweights). Operators must never exceed load chart ratings.</div>`
      },
      {
        title: "Power Line Safety",
        content: `<p>Contact with overhead power lines is the leading cause of crane-related fatalities. OSHA requires specific clearances and procedures:</p>
<table class="data-table"><thead><tr><th>Voltage (phase to phase)</th><th>Min. Clearance</th></tr></thead>
<tbody>
<tr><td>Up to 50 kV</td><td>10 feet</td></tr>
<tr><td>50.1–200 kV</td><td>15 feet</td></tr>
<tr><td>200.1–350 kV</td><td>20 feet</td></tr>
<tr><td>350.1–500 kV</td><td>25 feet</td></tr>
<tr><td>500.1–750 kV</td><td>35 feet</td></tr>
</tbody></table>
<p>When working near power lines:</p>
<ul>
  <li>Establish a <strong>planning meeting</strong> before the operation begins</li>
  <li>Use a <strong>dedicated spotter</strong> to monitor clearance at all times</li>
  <li>If lines cannot be de-energized, use proximity alarm devices and/or insulating line guards</li>
  <li>Establish <strong>erection/travel paths</strong> that avoid the power line zone</li>
</ul>
<div class="warning">If the crane contacts a power line: operator must stay in the cab. Ground workers must stay back at least 300 feet or the span of the line. Do not attempt to rescue until the utility confirms the line is de-energized.</div>`
      },
      {
        title: "Rigging Fundamentals",
        content: `<p>Rigging is the process of attaching a load to the crane hook. A <strong>qualified rigger</strong> must attach and detach rigging whenever workers are in the fall zone of the load.</p>
<p><strong>Common sling types and their use:</strong></p>
<ul>
  <li><strong>Wire rope slings</strong> — high strength; inspect for broken wires, kinking, crushing, corrosion</li>
  <li><strong>Chain slings</strong> — good for high-temperature environments; inspect for stretch, nicks, gouges</li>
  <li><strong>Synthetic web slings</strong> — lighter; not for high-temp use; inspect for cuts, burns, abrasion</li>
  <li><strong>Round slings</strong> — good for delicate loads</li>
</ul>
<p><strong>Wire rope remove-from-service criteria (29 CFR 1926.1413):</strong></p>
<ul>
  <li>Six or more randomly distributed broken wires in one rope lay</li>
  <li>Three or more broken wires in one strand in one rope lay</li>
  <li>Kinking, crushing, birdcaging, or core protrusion</li>
  <li>Heat damage, corrosion, diameter reduction >5% from original</li>
</ul>
<div class="highlight">Sling angle matters: as the angle of a sling from vertical increases, the load on each leg increases dramatically. At 60°, each leg carries 115% of the weight; at 30°, each leg carries 200% of the weight.</div>`
      },
      {
        title: "Signals, Swing Radius & Multiple Lifts",
        content: `<p>Communication between the operator and ground crew is critical. A <strong>qualified signal person</strong> is required when the operator cannot see the load, the load's path, or the landing zone.</p>
<ul>
  <li>Only ONE signal person may give signals to the operator at a time</li>
  <li>Hand signals, voice, or electronic signals (radio) are all acceptable</li>
  <li>Standard hand signals must be posted on the crane or in the cab</li>
  <li>The "emergency stop" signal must be obeyed immediately regardless of who gives it</li>
</ul>
<p><strong>Swing radius:</strong> the area through which the crane's counterweight and superstructure rotate must be barricaded to prevent workers from being struck.</p>
<p><strong>Multiple-lift rigging (Christmas tree lifts):</strong></p>
<ul>
  <li>Maximum of <strong>5 members</strong> per multiple lift</li>
  <li>Only used for structural members</li>
  <li>Rigging must be designed by a qualified rigger</li>
  <li>A pre-lift meeting must be held</li>
</ul>`
      }
    ],
    quiz: [
      { q: "What is the minimum clearance required between a crane and overhead power lines rated up to 50kV?", options: ["5 feet","10 feet","15 feet","20 feet"], a: 1, explain: "For power lines with voltages up to 50kV, the minimum required clearance is 10 feet. Higher voltages require greater clearances per the table in 29 CFR 1926.1408." },
      { q: "Wire rope must be removed from service when it has:", options: ["Any visible corrosion","3 or more broken wires in one strand in one rope lay","More than 10 broken wires anywhere in the rope","Any kink that has been straightened out"], a: 1, explain: "Wire rope must be removed from service if there are 3 or more broken wires in one strand in one rope lay, or 6 or more broken wires distributed throughout one lay." },
      { q: "The maximum number of structural members that may be rigged in a multiple-lift (Christmas tree) is:", options: ["3","5","7","10"], a: 1, explain: "Multiple lift rigging (stacking multiple structural members on one crane hook) is limited to a maximum of 5 members per lift per OSHA's crane standard." },
      { q: "Who may attach rigging to a crane hook when workers are in the fall zone?", options: ["Any experienced construction worker","Any worker who completed an OSHA 10 course","A qualified rigger","The crane operator from the cab"], a: 2, explain: "A qualified rigger must attach and detach rigging whenever a worker is in the fall zone of the load. Qualified riggers have the knowledge and credentials to rig loads safely." },
      { q: "Load charts for a crane must be:", options: ["Kept in the site trailer and available upon request","In the cab or on the crane, specific to its current configuration","Memorized by the operator — no document required","Submitted to OSHA before each lift"], a: 1, explain: "Load charts must be in the cab or on the crane at all times, and must be specific to the crane's current configuration (boom length, counterweights, etc.). Operators must never exceed rated capacity." },
      { q: "If a crane boom contacts an energized power line, the operator should:", options: ["Immediately exit the cab and run away from the crane","Stay in the cab and call for help; ground workers must stay 300+ feet away","Jump from the cab and shuffle away with small steps","Reverse the crane to break contact"], a: 1, explain: "If the crane contacts a power line, the operator must stay in the cab (which provides protection from electrocution). Ground workers must stay at least 300 feet away — the ground around the crane may be energized." },
      { q: "A signal person is required when:", options: ["The load weighs more than 5,000 lbs","The operator cannot directly see the load or landing zone","Any worker is present on the site","The lift exceeds 50 feet in height"], a: 1, explain: "A qualified signal person is required whenever the operator does not have a direct line of sight to the load, the load path, or the landing zone — or when the operator cannot maintain the required clearance from power lines." },
      { q: "Which sling inspection finding requires immediate removal from service?", options: ["Minor surface rust on a chain sling","A slight discoloration on a synthetic sling","A cut in the outer jacket of a round sling","A kink or bird-cage deformation in a wire rope sling"], a: 3, explain: "A kink, birdcage, or core protrusion in a wire rope sling requires immediate removal from service. These deformations permanently damage the rope's internal structure and drastically reduce its load capacity." }
    ]
  },
  {
    id: 13, title: "Tools — Hand & Power", subtitle: "Guards, Grounding & Safe Operating Practices",
    icon: "🔧", estimatedTime: "1 hr",
    keyFacts: [
      "All power tools must have manufacturer-required guards in place during operation",
      "Circular saws require blade guards, splitters, and anti-kickback pawls",
      "Angle grinder guard must cover at least 50% of the abrasive disc at all times",
      "Abrasive wheels must be inspected by a 'ring test' before mounting",
      "Powder-actuated tools require training; operators must be licensed/certified",
      "Pneumatic tools require a safety clip or retainer on chisels and accessories",
      "All electric tools must be grounded (3-prong) or double-insulated",
      "Never use tools for purposes they were not designed for"
    ],
    sections: [
      {
        title: "General Tool Safety & Hand Tools",
        content: `<p>Hand tools cause a significant number of construction injuries. Most incidents result from improper use, defective tools, or using the wrong tool for the job. Key rules:</p>
<ul>
  <li><strong>Right tool for the right job</strong> — never use a screwdriver as a chisel or a wrench as a hammer</li>
  <li><strong>Inspect before every use</strong> — cracked handles, mushroomed heads, loose connections; take defective tools out of service</li>
  <li><strong>Maintain sharp edges</strong> — dull cutting tools require more force and slip more easily</li>
  <li><strong>Direct cutting tools away from the body</strong> — cut away from yourself at all times</li>
  <li><strong>Store properly</strong> — sharp tools in sheaths; tools secured so they cannot fall from height</li>
</ul>
<div class="warning">Never use a chisel with a mushroomed head — the metal can shatter and send fragments flying at high speed. Redress or replace mushroomed striking tools immediately.</div>`
      },
      {
        title: "Power Tool Guards & Grounding",
        content: `<p>Power tools must have all manufacturer-required guards in place during operation. Guards must never be removed or disabled, even temporarily.</p>
<ul>
  <li><strong>Circular saws</strong> — must have: upper blade guard, retractable lower blade guard, splitter (riving knife), and anti-kickback pawls</li>
  <li><strong>Angle grinders</strong> — guard must cover at least 50% of the abrasive disc/wheel and be adjustable for the type of grinding</li>
  <li><strong>Table/bench saws</strong> — blade guard, splitter, and anti-kickback device required</li>
  <li><strong>Reciprocating saws</strong> — no blade guard required, but tool must be equipped with a trigger safety</li>
</ul>
<p><strong>Electrical grounding:</strong></p>
<ul>
  <li>Electric tools must be either <strong>grounded (3-prong plug)</strong> or <strong>double-insulated</strong> (marked with double-square symbol)</li>
  <li>Use GFCI-protected outlets or an AEGCP on all construction sites</li>
  <li>Never remove the ground prong from a 3-prong plug</li>
  <li>Inspect cords before each use — replace damaged cords, do not use tape to repair</li>
</ul>`
      },
      {
        title: "Powder-Actuated & Pneumatic Tools",
        content: `<p><strong>Powder-actuated tools (PATs)</strong> use explosive powder cartridges to drive fasteners. They are among the most dangerous tools on a construction site.</p>
<ul>
  <li>Operators must be trained and licensed to use PATs</li>
  <li>Must be tested (fired into the air) before each use — if it doesn't fire, wait 30 seconds before recocking</li>
  <li>Never point at anyone, even if unloaded</li>
  <li>Low-velocity tools: piston drives fastener; High-velocity: propellant directly propels fastener</li>
  <li>Warning sign "POWDER-ACTUATED TOOL IN USE" must be posted</li>
  <li>Appropriate PPE: face shield, safety glasses, hearing protection</li>
</ul>
<p><strong>Pneumatic tools:</strong></p>
<ul>
  <li>Chisels and accessories must have a <strong>safety clip or retainer</strong> to prevent them from being ejected from the barrel</li>
  <li>Hose connections must be secured with wire, chain, or equivalent — hose whip from disconnection is deadly</li>
  <li>Never exceed the tool's maximum air pressure rating</li>
  <li>Never use compressed air to clean clothing or person</li>
</ul>`
      },
      {
        title: "Abrasive Wheels & Safe Practices",
        content: `<p>Abrasive wheels (grinding discs, cut-off wheels) can shatter at high RPM if damaged, improperly mounted, or operated above rated speed.</p>
<p><strong>Ring test:</strong> before mounting any abrasive wheel, suspend it and tap lightly with a non-metallic object. A good wheel produces a clear ringing sound; a cracked wheel sounds flat (dull thud) and must not be used.</p>
<ul>
  <li>Never exceed the wheel's <strong>maximum RPM rating</strong> — marked on the wheel</li>
  <li>Use only wheels that fit the machine — never force a wheel onto a spindle</li>
  <li>Allow the wheel to reach full speed before applying to work</li>
  <li>Always use the guard; never use a grinding wheel for cutting, or vice versa unless the wheel is rated for both</li>
  <li>PPE: face shield over safety glasses, hearing protection</li>
</ul>
<div class="regulation">29 CFR 1926.303 covers abrasive wheel machinery. Flanges must be equal in size and free of burrs; the blotter (compressible washer) must be between the flange and the wheel.</div>`
      }
    ],
    quiz: [
      { q: "The guard on an angle grinder must cover at least what percentage of the abrasive disc?", options: ["25%","50%","75%","The entire disc"], a: 1, explain: "The guard on an angle grinder must cover at least 50% of the abrasive disc or wheel. It must be adjustable for different operations (cutting vs. grinding) and kept in place during use." },
      { q: "Before mounting an abrasive grinding wheel, you should perform a:", options: ["Load test","Ring test","Hydraulic test","Rotation test"], a: 1, explain: "The ring test checks for cracks: suspend the wheel and tap it lightly — a clear ring indicates an undamaged wheel; a dull thud indicates a crack. Cracked wheels must never be used." },
      { q: "Who may operate a powder-actuated tool (PAT)?", options: ["Any worker who has completed OSHA 10","Only workers who are trained and licensed/certified to use PATs","Supervisors only","Any experienced construction worker"], a: 1, explain: "Powder-actuated tools are hazardous and require specialized training. Only workers who have been specifically trained and certified (by the manufacturer or equivalent program) may operate them." },
      { q: "A pneumatic chisel must be equipped with:", options: ["A GFCI device","A safety clip or retainer to prevent ejection from the barrel","An anti-vibration handle","A pressure gauge on the chisel body"], a: 1, explain: "Chisels and other accessories used in pneumatic tools must have a safety clip or retainer that prevents them from being accidentally expelled from the barrel during operation." },
      { q: "An electric drill has a 3-prong plug but the third (ground) prong is broken off. What should you do?", options: ["Use it — two prongs still provide power","Tape the opening and use GFCI protection instead","Remove the tool from service until repaired","Use it only for low-voltage applications"], a: 2, explain: "The grounding prong is a critical safety feature. A tool with a missing ground prong must be removed from service immediately. Never defeat the grounding system by breaking off the prong." },
      { q: "A circular saw must have all of the following EXCEPT:", options: ["Upper blade guard","Anti-kickback pawls","Laser sight guide","Retractable lower blade guard"], a: 2, explain: "Circular saws are required to have: an upper blade guard, retractable lower blade guard, splitter/riving knife, and anti-kickback pawls. A laser sight guide may be a feature but is NOT an OSHA-required safety device." },
      { q: "Compressed air from a pneumatic tool should NEVER be used to:", options: ["Drive fasteners","Power impact wrenches","Clean a worker's clothes or body","Operate spray paint guns"], a: 2, explain: "Never use compressed air to clean clothing or skin — high-pressure air can penetrate the skin, cause embolism, or blast debris into eyes at dangerous velocity." },
      { q: "When using a powder-actuated tool that fails to fire, the operator should:", options: ["Re-cock and fire immediately","Discard the tool and use a hammer drill","Wait 30 seconds, then attempt to re-cock","Open the barrel immediately to remove the cartridge"], a: 2, explain: "If a powder-actuated tool fails to fire (misfire), wait at least 30 seconds before attempting to re-cock — this allows time for any delayed ignition. Then follow the manufacturer's misfired cartridge procedure." }
    ]
  },
  {
    id: 14, title: "Materials Handling & Storage", subtitle: "Safe Lifting, Storage, Cylinders & Housekeeping",
    icon: "📦", estimatedTime: "1 hr",
    keyFacts: [
      "NIOSH Recommended Weight Limit (RWL): 51 lbs under ideal conditions; less with awkward postures",
      "Proper lift: straight back, bent knees, load close to body, no twisting",
      "Compressed gas cylinders must always be secured (chained or strapped) in an upright position",
      "Oxygen and fuel gas cylinders must be separated by 20 feet OR a 5-foot fire-resistant barrier",
      "Flammable liquids must be stored in FM- or UL-listed safety cans with self-closing lids",
      "Storage aisles must be at least 3 feet wide to allow safe movement",
      "Materials must be stacked stably — never exceed rack weight ratings"
    ],
    sections: [
      {
        title: "Manual Lifting & Ergonomics",
        content: `<p>Musculoskeletal disorders (MSDs) — sprains, strains, herniated discs — are among the most common construction injuries. Proper lifting technique significantly reduces the risk.</p>
<p><strong>The NIOSH Lifting Equation</strong> establishes a Recommended Weight Limit (RWL). Under ideal conditions (load close to body, good grip, waist height, no twisting), the RWL is <strong>51 lbs</strong>. This decreases significantly with:</p>
<ul>
  <li>Distance from the body (horizontal reach)</li>
  <li>Vertical distance of lift</li>
  <li>Frequency of lifting</li>
  <li>Asymmetric postures (twisting)</li>
  <li>Poor hand grip on load</li>
</ul>
<p><strong>Proper lift technique:</strong></p>
<ul>
  <li>Plan the lift — clear the path, know the weight</li>
  <li>Position feet shoulder-width apart, close to load</li>
  <li>Bend at knees and hips — NOT the waist</li>
  <li>Keep back straight and neutral</li>
  <li>Hold load close to the body</li>
  <li>Lift with legs; do NOT twist — pivot feet instead</li>
</ul>`
      },
      {
        title: "Mechanical Handling Equipment",
        content: `<p>When loads exceed safe manual lift limits, use mechanical aids:</p>
<ul>
  <li><strong>Forklifts (Powered Industrial Trucks)</strong> — operators must be trained and evaluated every 3 years; load capacity marked on the data plate; never exceed rated capacity; never elevate workers on forks unless with an approved work platform</li>
  <li><strong>Hand trucks / dollies</strong> — for smaller loads; tilt back, not forward</li>
  <li><strong>Material hoists</strong> — personnel hoists and material hoists have different standards; never ride a material hoist</li>
  <li><strong>Conveyors</strong> — guarded nip points; emergency stop accessible along the entire length</li>
</ul>
<div class="regulation">Forklift operators must be trained on the specific type of truck they operate. Training must include pre-operation inspection, safe operation, refueling/recharging, and load handling.</div>
<div class="highlight">Tip-overs are the leading cause of forklift fatalities. Always travel with forks low (6–10 inches off ground), tilt back, and never take turns at speed with an elevated load.</div>`
      },
      {
        title: "Compressed Gas Cylinder Safety",
        content: `<p>Compressed gas cylinders contain gases under extreme pressure (up to 2,500 psi). If the valve is damaged or broken off, the cylinder can become a rocket.</p>
<ul>
  <li><strong>Always secure</strong> — cylinders must be chained, strapped, or secured in a cylinder cart at all times, whether full or empty</li>
  <li><strong>Keep upright</strong> — store and transport in upright position (except acetylene: must always be stored/used upright)</li>
  <li><strong>Valve caps</strong> — protective caps must be on whenever the regulator is not attached</li>
  <li><strong>Separation</strong> — oxygen cylinders must be stored at least <strong>20 feet</strong> from fuel gas cylinders (acetylene, propane), OR separated by a <strong>5-foot-high fire-resistant barrier</strong></li>
  <li><strong>No oil or grease</strong> — never use oil or grease on oxygen equipment fittings — oxygen + hydrocarbons = explosion</li>
  <li><strong>No dropping or dragging</strong> — roll cylinders on the bottom edge only; never drop or let cylinders strike each other</li>
</ul>`
      },
      {
        title: "Storage, Housekeeping & Flammables",
        content: `<p>Good storage and housekeeping prevent slips, trips, fires, and struck-by incidents. Key requirements:</p>
<ul>
  <li>Aisles and passageways must be <strong>at least 3 feet wide</strong> and kept clear at all times</li>
  <li>Materials must be stacked stably — interlock masonry, secure pipes (chock both ends), do not stack higher than safe for stability</li>
  <li>Never exceed shelf or rack weight ratings</li>
  <li>Combustible scrap, debris, and waste must be removed at regular intervals — daily in most cases</li>
  <li>Wet down dusty surfaces to control silica and nuisance dust</li>
</ul>
<p><strong>Flammable liquid storage:</strong></p>
<ul>
  <li>Store in <strong>approved safety cans</strong> — FM-listed or UL-listed; must have a spring-loaded self-closing lid and a flame arrestor screen</li>
  <li>No more than one day's supply (up to 25 gallons) of flammable liquids in the work area</li>
  <li>Storage rooms: explosion-proof lighting and electrical; ventilation required</li>
  <li>Post "No Smoking" and "Flammable" signs in storage areas</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Under ideal conditions, the NIOSH Recommended Weight Limit (RWL) for manual lifting is:", options: ["25 lbs","35 lbs","51 lbs","75 lbs"], a: 2, explain: "The NIOSH RWL under ideal conditions (load at waist height, close to body, good grip, no twisting, infrequent lift) is 51 lbs. This limit decreases significantly with less-than-ideal conditions." },
      { q: "Oxygen cylinders in storage must be separated from fuel gas cylinders by:", options: ["5 feet","10 feet","20 feet or a 5-foot fire-resistant barrier","50 feet"], a: 2, explain: "Oxygen and fuel gas cylinders must be separated by at least 20 feet OR a fire-resistant barrier at least 5 feet high. This prevents a fire from simultaneously affecting both types." },
      { q: "A compressed gas cylinder's valve protection cap must be in place:", options: ["Only when the cylinder is being transported","Only when the cylinder is empty","Whenever a regulator is not attached","At all times except when in use or being tested"], a: 2, explain: "Protective valve caps must be in place whenever a pressure regulator is not attached to the cylinder — during storage, transport, and whenever not actively in use." },
      { q: "Aisles on a construction site must be at least how wide?", options: ["2 feet","3 feet","4 feet","5 feet"], a: 1, explain: "Aisles, corridors, and passageways must be at least 3 feet wide to allow safe movement of workers and equipment, including material handling equipment." },
      { q: "Flammable liquids on a construction site must be stored in:", options: ["Any metal container with a lid","FM- or UL-listed safety cans with self-closing lids","Plastic containers approved for flammable use","Any container that can be sealed tightly"], a: 1, explain: "Flammable liquids must be stored in approved safety cans that are listed by FM (Factory Mutual) or UL (Underwriters Laboratories), have spring-loaded self-closing lids, and have flame arrestor screens." },
      { q: "The correct posture for lifting a heavy load includes:", options: ["Bending at the waist with straight knees","Bending at the knees and hips with a straight back","Twisting to distribute the weight across muscle groups","Keeping the load at arm's length for better control"], a: 1, explain: "Proper lifting: bend at knees and hips (not the waist), keep the back straight, hold the load close to the body, lift with the legs, and never twist — pivot your feet instead." },
      { q: "Acetylene cylinders must ALWAYS be:", options: ["Stored horizontally to prevent valve damage","Stored and used in the upright position","Stored separately from all other compressed gases","Kept in ventilated wooden cabinets"], a: 1, explain: "Acetylene cylinders must always be stored and used in the upright position. Acetylene is dissolved in acetone inside the cylinder — if stored on its side, acetone can enter the regulator, causing equipment damage and a fire hazard." },
      { q: "A forklift operator must be trained and evaluated at least every:", options: ["1 year","2 years","3 years","5 years"], a: 2, explain: "OSHA requires forklift operators to be evaluated on their performance at least every 3 years. Retraining is also required after any accident, near-miss, unsafe operation observation, or when assigned to a different type of truck." }
    ]
  },
  {
    id: 15, title: "Concrete & Masonry", subtitle: "Formwork, Chemical Hazards & Limited Access Zones",
    icon: "🧱", estimatedTime: "1.5 hrs",
    keyFacts: [
      "Formwork must be designed by a qualified person and support wet concrete (approx. 150 lbs/ft³)",
      "Reshoring supports loads after formwork is removed until concrete reaches design strength",
      "Limited access zone for masonry walls: equal to height of wall + 4 feet on unscaffolded side",
      "Concrete has a pH of ~12.5 — causes serious chemical (alkali) burns to skin and eyes",
      "Silica is released when cutting, grinding, or drilling concrete — use water suppression or LEV",
      "Lift slab operations require special jack placement and load monitoring",
      "Precast concrete: connect each member before unhooking crane"
    ],
    sections: [
      {
        title: "Formwork & Shoring",
        content: `<p>Formwork supports the weight of wet concrete until it cures. <strong>Wet concrete weighs approximately 150 lbs per cubic foot</strong> — formwork failure during a pour can be catastrophic.</p>
<p>Requirements under <strong>29 CFR 1926.703</strong>:</p>
<ul>
  <li>Formwork must be designed by or under the supervision of a <strong>qualified person</strong></li>
  <li>Drawings and plans must be available at the site</li>
  <li>All shoring equipment must be inspected before each use — damaged equipment must be removed</li>
  <li>Formwork must be inspected immediately before, during, and after placing concrete</li>
  <li>Reshoring must be provided in multi-story construction where permanent structure is not yet capable of supporting loads</li>
</ul>
<div class="highlight">Adjustable U-head and base plate screw extensions on shoring frames must not extend more than 18 inches — excessive extension reduces load capacity significantly.</div>
<div class="warning">Never remove any form or shoring (including single posts) without the permission of the supervisor. Premature removal can cause partial collapse before concrete has gained sufficient strength.</div>`
      },
      {
        title: "Masonry Construction & Limited Access Zone",
        content: `<p>When a masonry wall is being constructed, there is risk of collapse outward toward the unscaffolded side. OSHA requires a <strong>Limited Access Zone (LAZ)</strong>:</p>
<ul>
  <li>Must be established before construction of the wall begins</li>
  <li>Width: equal to the <strong>height of the wall plus 4 feet</strong> on each side of the unscaffolded face</li>
  <li>Must run the entire length of the wall</li>
  <li>Access restricted to workers actively engaged in constructing the wall</li>
  <li>Must remain in place until the wall is adequately supported</li>
</ul>
<div class="regulation">Per 29 CFR 1926.706, masonry walls over 8 feet in height must be braced against overturning and collapse. Bracing must remain in place until permanent supporting elements are in place.</div>
<p>Masonry saws generate silica-laden dust. Required controls:</p>
<ul>
  <li>Wet cutting (water suppression) or</li>
  <li>Local exhaust ventilation (LEV) with HEPA vacuum</li>
  <li>Workers not on the saw must be kept out of the dust zone, or engineering controls supplemented with appropriate respirators</li>
</ul>`
      },
      {
        title: "Chemical Hazards in Concrete Work",
        content: `<p>Portland cement and wet concrete are highly alkaline (<strong>pH ~12.5</strong>), causing serious chemical burns that are often painless initially — making them especially dangerous because workers may not notice the damage until hours later.</p>
<ul>
  <li><strong>Skin contact</strong> — causes alkali burns; prolonged contact destroys tissue (cement dermatitis)</li>
  <li><strong>Eye contact</strong> — can cause permanent eye damage or blindness</li>
  <li><strong>Prevention</strong>: wear alkali-resistant gloves, rubber boots, eye protection; wash skin immediately if contact occurs</li>
</ul>
<p><strong>Crystalline silica</strong> is the other major health hazard. Silica dust is released when:</p>
<ul>
  <li>Cutting, grinding, drilling, or jackhammering concrete</li>
  <li>Abrasive blasting with silica-containing materials</li>
  <li>Demolishing concrete structures</li>
</ul>
<p>Controls (in order of preference): elimination → substitution → engineering (wet methods, LEV) → administrative (rotation) → respirators (N95 minimum for tasks with exposure above the action level).</p>`
      },
      {
        title: "Precast Concrete & Lift Slab Operations",
        content: `<p><strong>Precast concrete elements</strong> are manufactured off-site and delivered for erection. Key safety rules:</p>
<ul>
  <li>Each precast element must be connected to the structure before the hoisting equipment is released</li>
  <li>Fall protection must be provided for workers on or near precast concrete</li>
  <li>Lifting inserts must be capable of supporting at least twice the load they are designed to carry</li>
  <li>A registered professional engineer must design the lifting hardware and connections</li>
</ul>
<p><strong>Lift slab construction</strong> involves casting concrete slabs at ground level and jacking them up to their final position. Required safeguards:</p>
<ul>
  <li>Jacking operation under the direction of a registered PE</li>
  <li>Jacks must be synchronized and capable of stopping/holding the slab in any position</li>
  <li>Workers must not be on the slab being lifted or below it</li>
  <li>Steel shoring must be provided to support slabs if jacks fail</li>
</ul>`
      }
    ],
    quiz: [
      { q: "Wet concrete weighs approximately how much per cubic foot?", options: ["75 lbs","100 lbs","150 lbs","200 lbs"], a: 2, explain: "Wet (freshly placed) concrete weighs approximately 150 lbs per cubic foot. This significant weight is why formwork must be engineered to support the load without failure." },
      { q: "The Limited Access Zone (LAZ) for a masonry wall under construction must extend:", options: ["4 feet from the base of the wall","Equal to the height of the wall, on both sides","Equal to the height of the wall plus 4 feet on the unscaffolded side","10 feet from either side of the wall"], a: 2, explain: "The LAZ must be established on the unscaffolded side of the wall, with a width equal to the height of the wall plus 4 feet, running the entire length of the wall." },
      { q: "Wet concrete has a pH of approximately:", options: ["7 (neutral)","9 (mildly alkaline)","12.5 (highly alkaline)","14 (extremely alkaline)"], a: 2, explain: "Wet concrete has a pH of approximately 12.5 — strongly alkaline, capable of causing serious chemical burns to skin and eyes. Burns can be painless initially, making them deceptively dangerous." },
      { q: "Reshoring is used to:", options: ["Shore the walls of a trench","Support a concrete structure after formwork is removed, until it reaches design strength","Reinforce masonry walls during construction","Secure scaffolding to a building face"], a: 1, explain: "Reshoring provides support to concrete structures after the original formwork is removed, in multi-story construction, until the concrete gains sufficient strength to carry loads from above." },
      { q: "Screw extensions (U-heads) on adjustable shoring frames must not extend more than:", options: ["12 inches","18 inches","24 inches","36 inches"], a: 1, explain: "Adjustable screw extensions (U-heads and base plates) on shoring equipment must not extend more than 18 inches. Greater extension significantly reduces the load capacity of the shoring system." },
      { q: "When cutting concrete with a masonry saw, the primary method to control silica dust should be:", options: ["Requiring all workers to wear N95 respirators","Wet cutting or local exhaust ventilation with HEPA collection","Scheduling dusty work when fewer workers are present","Requiring workers to hold their breath during cutting"], a: 1, explain: "Engineering controls (wet cutting or LEV/HEPA vacuum) are the primary controls for silica dust — respirators are the last resort. Water suppression or vacuum attachment directly at the source is required." },
      { q: "Before a crane releases a precast concrete element, the element must be:", options: ["Set on temporary blocking","Anchored to the structure by at least one connection","Fully connected to the permanent structure","Inspected by the engineer of record"], a: 2, explain: "Each precast concrete member must be fully connected to the structure before the hoisting equipment is released. Releasing a crane before connections are made risks collapse." },
      { q: "A masonry wall over how many feet tall must be braced against overturning?", options: ["4 feet","6 feet","8 feet","10 feet"], a: 2, explain: "Per 29 CFR 1926.706, all masonry walls over 8 feet tall must be braced to prevent overturning and collapse until permanent lateral support (floors, roof) is in place." }
    ]
  },
  {
    id: 16, title: "Steel Erection", subtitle: "Anchor Bolts, Connectors, CDZ & Fall Protection",
    icon: "🔩", estimatedTime: "1.5 hrs",
    keyFacts: [
      "Steel erection is covered under 29 CFR 1926 Subpart R",
      "Minimum 4 anchor bolts required per column before crane is released",
      "Connectors must have two means of fall protection at all times",
      "Controlled Decking Zone (CDZ): max 90 feet wide, 30 feet in advance of the leading edge",
      "Maximum height above last completed deck before decking is required: 30 feet",
      "Multiple lift (Christmas tree) rigging: maximum 5 structural members per lift",
      "Tag lines required on all suspended loads to prevent uncontrolled swinging",
      "No work below overhead steel erection unless a safety deck or other protection is installed"
    ],
    sections: [
      {
        title: "Structural Steel Basics & Column Erection",
        content: `<p>Steel erection is one of the most hazardous operations in construction. <strong>29 CFR 1926 Subpart R</strong> provides specific requirements to protect ironworkers and others in the area.</p>
<p><strong>Column base plates and anchor bolts:</strong></p>
<ul>
  <li>A minimum of <strong>4 anchor bolts</strong> per column must be installed before the crane releases the column</li>
  <li>Anchor bolt holes must be within 1/8 inch of true position to ensure safe connection</li>
  <li>Columns must be plumbed and braced before the crane releases</li>
  <li>Temporary connections must support twice the load they are designed to carry</li>
</ul>
<p><strong>Pre-planning requirements:</strong></p>
<ul>
  <li>A <strong>Site-Specific Erection Plan (SSEP)</strong> must be developed before erection begins</li>
  <li>A pre-erection meeting must be held with all affected employees</li>
  <li>The controlling contractor must ensure adequate concrete strength before column erection</li>
</ul>`
      },
      {
        title: "Connectors & Fall Protection",
        content: `<p>Connectors (workers who connect structural steel members) perform one of the most exposed jobs in construction — working at the leading edge of steel erection with limited fall protection options.</p>
<p>Requirements for connectors:</p>
<ul>
  <li>Must have two means of fall protection at all times when working from a height of 15–30 feet above lower levels</li>
  <li>May use a positioning device system combined with another fall protection measure</li>
  <li>Must be provided with a personal fall arrest system or positioning system and must wear it</li>
</ul>
<p><strong>Controlled Decking Zone (CDZ):</strong> a CDZ allows designated connectors to install metal decking without conventional fall protection (when PFAS is infeasible), under strict conditions:</p>
<ul>
  <li>CDZ must be clearly designated and controlled</li>
  <li>Maximum width: <strong>90 feet</strong> wide</li>
  <li>Maximum advance: <strong>30 feet</strong> ahead of the leading edge</li>
  <li>Only trained connectors may work in the CDZ</li>
  <li>Unsecured decking must be tack-welded or otherwise prevented from falling</li>
</ul>`
      },
      {
        title: "Decking & Walking Surfaces",
        content: `<p>Metal decking creates working surfaces for structural steel construction. Key requirements:</p>
<ul>
  <li>Decking must be installed in a continuous process — no gaps left open when work stops</li>
  <li>Workers must not be permitted to work more than <strong>30 feet above the last completed deck</strong> before decking is installed below them</li>
  <li>Shear connectors and other tripping hazards must be marked with paint or other means</li>
  <li>Open holes in decking must be covered or protected — covers must be secured and marked "HOLE" or "COVER"</li>
</ul>
<p><strong>Safety deck (catch platform):</strong> when required for overhead protection:</p>
<ul>
  <li>Must be capable of supporting a 50-lb load in the center of the deck panel</li>
  <li>Must be installed as erection progresses</li>
</ul>
<div class="regulation">No work may be performed below or adjacent to steel erection unless a safety deck, nets, or other overhead protection is provided to protect workers below from falling tools and materials.</div>`
      },
      {
        title: "Rigging & Multiple Lifts in Steel Erection",
        content: `<p>Steel erection relies heavily on cranes and rigging. Requirements specific to structural steel:</p>
<ul>
  <li><strong>Tag lines</strong> — required on all suspended structural members to control swinging and rotation</li>
  <li><strong>Headache balls and hooks</strong> — latched hooks required on all rigging; moused hooks prohibited for most applications</li>
  <li><strong>Never stand under a suspended load</strong> — establish exclusion zones below all crane picks</li>
</ul>
<p><strong>Multiple lift rigging</strong> (lifting more than one structural member at a time — called a "Christmas tree lift"):</p>
<ul>
  <li>Maximum of <strong>5 structural members</strong> per lift</li>
  <li>Rigging must be designed by a qualified rigger</li>
  <li>A pre-lift meeting is required</li>
  <li>Only used for structural steel members that can be safely rigged using multiple-lift rigging devices</li>
  <li>Members must be rigged from the top member down</li>
</ul>
<div class="highlight">After a structural member is connected, the crane must remain attached until the member is secured with at least the number of bolts required by the SSEP.</div>`
      }
    ],
    quiz: [
      { q: "Before a crane can release a steel column, how many anchor bolts must be fully installed?", options: ["2","3","4","6"], a: 2, explain: "A minimum of 4 anchor bolts per column must be installed and tightened before the crane releases the column. This provides the minimum stability needed to prevent the column from toppling." },
      { q: "The maximum width of a Controlled Decking Zone (CDZ) is:", options: ["60 feet","75 feet","90 feet","100 feet"], a: 2, explain: "A CDZ cannot exceed 90 feet in width. The CDZ allows designated connectors to install metal decking without conventional fall protection when a PFAS would create greater hazards." },
      { q: "Workers on a structural steel project may not work more than how far above the last completed deck without decking below?", options: ["15 feet","20 feet","25 feet","30 feet"], a: 3, explain: "Ironworkers may not be more than 30 feet above the last completed and secured deck without decking installed below them. Beyond that, a safety deck or catch platform is required." },
      { q: "Tag lines are required in steel erection to:", options: ["Mark the load weight on the rigging","Prevent suspended members from swinging and rotating","Attach workers to the crane hook","Signal the crane operator"], a: 1, explain: "Tag lines are rope or cable lines attached to a suspended structural member, used by workers on the ground or connecting platforms to control swinging and rotation during picks." },
      { q: "Steel erection activities are governed by:", options: ["29 CFR 1926 Subpart Q","29 CFR 1926 Subpart R","29 CFR 1926 Subpart L","29 CFR 1910 Subpart N"], a: 1, explain: "Steel erection in construction is covered under 29 CFR 1926 Subpart R — 'Steel Erection,' which took effect in 2001 and significantly updated fall protection and other requirements for ironworkers." },
      { q: "A Site-Specific Erection Plan (SSEP) must be developed:", options: ["After erection is complete, for documentation","Only for high-rise projects over 10 stories","Before steel erection begins on any project","Only when multiple lifts will be performed"], a: 2, explain: "A Site-Specific Erection Plan must be developed before steel erection begins on every project. It addresses the sequence of erection, fall protection, rigging, and other project-specific factors." },
      { q: "Which of the following is TRUE about work below active steel erection?", options: ["It is allowed if workers wear hard hats","It is prohibited unless a safety deck or overhead protection is provided","It is allowed if the area is barricaded","It is allowed during breaks in erection activity"], a: 1, explain: "No work may be performed below or adjacent to steel erection unless overhead protection (safety deck, nets, or equivalent) is provided. Falling bolts, tools, or materials can be fatal." },
      { q: "Multiple-lift (Christmas tree) rigging is limited to a maximum of:", options: ["3 structural members","5 structural members","7 structural members","10 structural members"], a: 1, explain: "Multiple-lift rigging — lifting more than one structural member at a time — is limited to 5 members per lift. A pre-lift meeting must be held and the rigging designed by a qualified rigger." }
    ]
  },
  {
    id: 17, title: "Fire Protection & Prevention", subtitle: "Fire Classes, Extinguishers & Hot Work",
    icon: "🔥", estimatedTime: "1 hr",
    keyFacts: [
      "Fire classes: A (ordinary combustibles), B (flammable liquids/gases), C (energized electrical), D (combustible metals), K (cooking fats/oils)",
      "PASS technique: Pull the pin, Aim at the base, Squeeze the handle, Sweep side to side",
      "Fire extinguisher must be within 100 feet of any work area (50 feet for flammable liquid hazards)",
      "Fire watch required during hot work AND for at least 30 minutes afterward",
      "Clear combustibles within 35 feet of hot work OR protect them with fire-resistant shields",
      "Flammable liquids in the work area: max 25 gallons (one day's supply) in approved safety cans",
      "18-inch clearance required below all sprinkler heads — never store materials that block sprinklers"
    ],
    sections: [
      {
        title: "Fire Triangle & Fire Classification",
        content: `<p>Fire requires three elements — the <strong>fire triangle</strong>: <strong>fuel</strong> (combustible material), <strong>oxygen</strong> (at least 16%), and <strong>heat</strong> (ignition energy). Remove any one element and the fire cannot exist.</p>
<p>Fires are classified by the type of fuel involved:</p>
<table class="data-table"><thead><tr><th>Class</th><th>Fuel Type</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>A</strong></td><td>Ordinary combustibles</td><td>Wood, paper, cloth, rubber, plastics</td></tr>
<tr><td><strong>B</strong></td><td>Flammable liquids & gases</td><td>Gasoline, oil, propane, paint thinner</td></tr>
<tr><td><strong>C</strong></td><td>Energized electrical equipment</td><td>Motors, panels, wiring, tools</td></tr>
<tr><td><strong>D</strong></td><td>Combustible metals</td><td>Magnesium, sodium, titanium, aluminum shavings</td></tr>
<tr><td><strong>K</strong></td><td>Cooking oils and fats</td><td>Vegetable/animal oils in commercial fryers</td></tr>
</tbody></table>
<div class="highlight">Water should NEVER be used on Class B fires (flammable liquids spread), Class C fires (electrical shock hazard), or Class D fires (water reacts violently with some metals).</div>`
      },
      {
        title: "Fire Extinguishers & PASS Technique",
        content: `<p>Portable fire extinguishers are the first line of defense for small fires. OSHA requires at least one extinguisher within <strong>100 feet</strong> of the work area (or <strong>50 feet</strong> for flammable liquid hazards, Class B).</p>
<p><strong>PASS Technique:</strong></p>
<ul>
  <li><strong>P</strong> — Pull the pin (breaks the tamper seal)</li>
  <li><strong>A</strong> — Aim the nozzle at the <em>base</em> of the fire (not the flames)</li>
  <li><strong>S</strong> — Squeeze the handle to discharge the agent</li>
  <li><strong>S</strong> — Sweep side to side, covering the base of the fire</li>
</ul>
<p>Common extinguisher types for construction:</p>
<ul>
  <li><strong>ABC dry chemical</strong> — most common; works on Class A, B, and C fires</li>
  <li><strong>CO₂ (carbon dioxide)</strong> — good for Class B and C; leaves no residue; poor for outdoor use</li>
  <li><strong>Water/water mist</strong> — Class A only; do not use on B or C</li>
  <li><strong>Class D</strong> — specific dry powder for combustible metals; do not substitute other agents</li>
</ul>
<div class="regulation">Fire extinguishers must be inspected monthly and maintained/serviced annually. They must be mounted, located, and identified for easy access.</div>`
      },
      {
        title: "Hot Work Programs & Fire Watch",
        content: `<p><strong>Hot work</strong> includes any operation that produces sparks, open flames, or heat sufficient to ignite combustible materials — welding, cutting, brazing, soldering, grinding.</p>
<p><strong>Hot work permit system:</strong></p>
<ul>
  <li>A hot work permit authorizes the specific work at a specific location for a specific time</li>
  <li>The area must be inspected before work begins; hazards identified and controlled</li>
  <li>Combustible materials must be removed or shielded within <strong>35 feet</strong> of the work</li>
</ul>
<p><strong>Fire watch requirements:</strong></p>
<ul>
  <li>A trained fire watcher must be present <em>during</em> the hot work AND for at least <strong>30 minutes after</strong> it stops</li>
  <li>The fire watcher must have extinguishing equipment immediately available</li>
  <li>The fire watcher must have no other duties while on watch</li>
</ul>
<div class="warning">Most fire-related fatalities from hot work occur after work has stopped — smoldering materials can ignite hours later. Extend fire watch as needed or wet down the area.</div>`
      },
      {
        title: "Flammable Materials Storage & Sprinkler Systems",
        content: `<p>Proper storage of flammable and combustible materials prevents fires before they start:</p>
<ul>
  <li>No more than <strong>25 gallons (one day's supply)</strong> of flammable liquids stored in the work area at any time</li>
  <li>Flammable liquids must be in approved safety cans (FM/UL-listed) with self-closing lids and flame arrestors</li>
  <li>Larger quantities must be stored in approved flammable storage rooms or cabinets</li>
  <li>Post "No Smoking" and "Flammable — Keep Fire Away" signs in storage areas</li>
  <li>Separate flammable liquids from oxidizers and other reactive materials</li>
</ul>
<p><strong>Sprinkler systems:</strong></p>
<ul>
  <li>Maintain <strong>18 inches of clearance</strong> below all sprinkler heads — materials stacked above this height can block the spray pattern</li>
  <li>Sprinkler systems must remain in service during construction whenever possible</li>
  <li>If sprinklers must be temporarily shut off, a <strong>fire watch</strong> or equivalent protection must be provided</li>
</ul>`
      }
    ],
    quiz: [
      { q: "What type of fire is caused by energized electrical equipment?", options: ["Class A","Class B","Class C","Class D"], a: 2, explain: "Class C fires involve energized electrical equipment. You must de-energize the equipment first (if safe to do so) — then treat as Class A or B as appropriate. Never use water on an energized electrical fire." },
      { q: "When using a fire extinguisher, where should you aim the nozzle?", options: ["At the top of the flames","At the middle of the fire","At the base of the fire","Sweep across the top of the flames"], a: 2, explain: "Always aim at the BASE of the fire — this is where the fuel is. Aiming at the flames just displaces hot gas without addressing the fuel source." },
      { q: "A fire watch must remain in place for at least how long after hot work is completed?", options: ["10 minutes","15 minutes","30 minutes","1 hour"], a: 2, explain: "A fire watch must be maintained for at least 30 minutes after hot work stops. Smoldering materials can ignite fires well after the heat source is removed." },
      { q: "Combustible materials must be cleared at least how far from welding and cutting operations?", options: ["10 feet","20 feet","35 feet","50 feet"], a: 2, explain: "Combustibles must be removed from within 35 feet of welding/cutting operations, or protected with fire-resistant guards or shields if they cannot be moved." },
      { q: "Which fire extinguisher type is safe to use on Class A, B, and C fires?", options: ["Water extinguisher","CO₂ extinguisher","ABC dry chemical extinguisher","Class D dry powder"], a: 2, explain: "ABC dry chemical extinguishers are rated for Class A (ordinary combustibles), Class B (flammable liquids), and Class C (electrical equipment) fires — making them the most versatile option for construction sites." },
      { q: "The maximum amount of flammable liquids allowed in a work area at any time is:", options: ["5 gallons","10 gallons","25 gallons","50 gallons"], a: 2, explain: "No more than 25 gallons (one day's supply) of flammable liquid may be present in the work area at any time. Larger quantities must be stored in approved storage rooms or cabinets outside the work area." },
      { q: "What clearance must be maintained below sprinkler heads?", options: ["6 inches","12 inches","18 inches","24 inches"], a: 2, explain: "At least 18 inches of clearance must be maintained below sprinkler heads. Materials stored too close to sprinkler heads obstruct the spray pattern and can prevent effective fire suppression." },
      { q: "A Class D fire involves:", options: ["Cooking oils and fats","Flammable liquids","Combustible metals","Ordinary combustibles"], a: 2, explain: "Class D fires involve combustible metals such as magnesium, sodium, titanium, and zirconium. These require specialized dry powder extinguishing agents — standard extinguishers can make Class D fires worse." }
    ]
  },
  {
    id: 18, title: "Welding & Cutting", subtitle: "Fire Prevention, Ventilation & Cylinder Safety",
    icon: "🔆", estimatedTime: "1.5 hrs",
    keyFacts: [
      "Fire watch required during AND 30 minutes after all welding/cutting operations",
      "Clear combustibles within 35 feet OR use fire-resistant shields",
      "Ventilation: 10,000 cubic feet per welder (or local exhaust) — 2,000 cf minimum in non-confined spaces",
      "Arc welding lens shade: minimum #10 for most arc welding; #12–#14 for heavy amperages",
      "Oxygen and fuel gas cylinders must be stored separately — 20 feet or a fire-resistant barrier",
      "Cylinder pressure regulators: never use oil or grease on oxygen equipment",
      "In confined spaces: continuous air monitoring required; remove cylinders when not in use",
      "Hot work permits required at most facilities and job sites"
    ],
    sections: [
      {
        title: "Types of Welding & Associated Hazards",
        content: `<p>Construction uses several types of welding and cutting processes, each with specific hazards:</p>
<ul>
  <li><strong>Shielded Metal Arc Welding (SMAW/stick welding)</strong> — uses electricity and consumable electrode; produces UV radiation, fumes, spatter</li>
  <li><strong>MIG/MAG Welding (GMAW)</strong> — wire-feed arc welding; continuous wire electrode; fumes and UV</li>
  <li><strong>TIG Welding (GTAW)</strong> — precise; uses non-consumable tungsten electrode + filler rod</li>
  <li><strong>Oxy-fuel welding/cutting</strong> — uses oxygen and acetylene or propane; fire and explosion risk</li>
  <li><strong>Plasma arc cutting</strong> — high-intensity plasma; intense UV, noise, fumes</li>
</ul>
<p><strong>Common hazards in all welding/cutting:</strong></p>
<ul>
  <li>UV and IR radiation (causing arc eye/welder's flash, skin burns)</li>
  <li>Toxic fumes (metal fumes, flux fumes, coatings) — especially from galvanized, painted, or coated metals</li>
  <li>Electrical shock (arc welding) — always assume welding equipment is energized</li>
  <li>Fire and explosion from sparks and heat</li>
  <li>Noise from plasma, arc gouging</li>
</ul>`
      },
      {
        title: "Fire Prevention & Hot Work Permits",
        content: `<p>Welding and cutting are leading causes of construction fires. Prevention requires:</p>
<ul>
  <li><strong>Clear the area</strong> — remove combustibles within <strong>35 feet</strong> of work, or protect them with fire-resistant guards/shields</li>
  <li><strong>Fire watch</strong> — trained fire watcher during and for <strong>30 minutes after</strong> work ends; watcher must have no other duties</li>
  <li><strong>Hot work permit</strong> — required at most construction sites and all industrial facilities; specifies location, time, hazards, and precautions</li>
  <li><strong>Welding blankets</strong> — use to protect combustible surfaces that cannot be moved</li>
  <li><strong>Wet down</strong> — dampen wood floors and other combustibles in the work area</li>
</ul>
<div class="warning">When welding or cutting on coated, galvanized, or painted metal, metal fumes may include zinc oxide (galvanizing), lead, cadmium, or isocyanates from coatings — all potentially fatal. Enhanced ventilation and respiratory protection are required.</div>`
      },
      {
        title: "Ventilation Requirements",
        content: `<p>Proper ventilation removes welding fumes and shielding gases from the welder's breathing zone. Requirements:</p>
<ul>
  <li>General ventilation: minimum <strong>2,000 cubic feet per minute</strong> per welder, or in a space of at least <strong>10,000 cubic feet</strong> per welder</li>
  <li>Mechanical ventilation (fans, LEV) required when natural airflow is insufficient</li>
  <li><strong>Local exhaust ventilation (LEV)</strong> — fume extractor at the source; most effective; required when welding in confined areas, on toxic metals, or when fumes cannot be adequately diluted</li>
</ul>
<p><strong>Eye protection for welding:</strong></p>
<table class="data-table"><thead><tr><th>Operation</th><th>Shade Number</th></tr></thead>
<tbody>
<tr><td>Gas welding / brazing</td><td>#3–#5</td></tr>
<tr><td>Plasma arc cutting</td><td>#8–#9</td></tr>
<tr><td>Arc welding (SMAW, GMAW)</td><td>#10 minimum</td></tr>
<tr><td>Heavy arc welding (high amperage)</td><td>#12–#14</td></tr>
</tbody></table>
<div class="regulation">Helpers and observers must wear eye protection with a shade number at least as dark as the welder's lens when in proximity to the arc.</div>`
      },
      {
        title: "Cylinder Safety & Oxy-Fuel Operations",
        content: `<p>Oxy-fuel welding and cutting uses compressed oxygen and a fuel gas (acetylene, propane, MAPP) at high pressures. Improper handling can cause fires, explosions, and fatalities.</p>
<p><strong>Cylinder safety rules:</strong></p>
<ul>
  <li>Acetylene cylinders: <strong>always stored and used upright</strong>; never use at pressures above 15 psi (risk of decomposition and explosion)</li>
  <li>Oxygen cylinders: stored away from fuel gas cylinders — <strong>20 feet</strong> minimum or <strong>5-foot fire-resistant barrier</strong></li>
  <li>Never use oil or grease on oxygen equipment fittings — oxygen + hydrocarbon = explosion</li>
  <li>Protective valve caps on whenever regulator is not attached</li>
  <li>Never lay cylinders on their side for transport — use a cart</li>
  <li>Cylinders must be chained or secured at all times</li>
</ul>
<p><strong>Confined space welding:</strong> special hazards include oxygen depletion (shielding gases displace oxygen), accumulation of flammable gases, and buildup of toxic fumes. Continuous atmospheric monitoring required; remove cylinders when work stops; post a trained attendant outside.</p>`
      }
    ],
    quiz: [
      { q: "What is the minimum lens shade number recommended for standard arc welding (SMAW/GMAW)?", options: ["#5","#7","#10","#12"], a: 2, explain: "The minimum recommended lens shade for arc welding (SMAW, GMAW) is shade #10. Higher amperages require darker shades (#12–#14). Insufficient shade causes 'arc eye' — a painful UV-induced corneal injury." },
      { q: "When welding on galvanized (zinc-coated) steel, the primary additional hazard is:", options: ["Increased electrical shock risk","Zinc oxide fume exposure causing metal fume fever","Higher fire risk due to the zinc coating","Reduced arc stability requiring greater ventilation"], a: 1, explain: "Welding on galvanized steel releases zinc oxide fumes, which can cause metal fume fever (flu-like symptoms) and more serious lung disease with chronic exposure. Enhanced ventilation and respiratory protection are required." },
      { q: "What is the minimum amount of space (per welder) required when relying on general ventilation for welding?", options: ["5,000 cubic feet","10,000 cubic feet","15,000 cubic feet","20,000 cubic feet"], a: 1, explain: "General ventilation for welding requires at least 10,000 cubic feet of space per welder, or at least 2,000 cubic feet per minute of airflow. If this cannot be achieved, local exhaust ventilation is required." },
      { q: "Acetylene must NEVER be used at pressures above:", options: ["5 psi","10 psi","15 psi","30 psi"], a: 2, explain: "Acetylene is unstable at pressures above 15 psi and can decompose explosively. Acetylene must never be used at pressures exceeding 15 psi — far below its cylinder storage pressure." },
      { q: "The most effective method of controlling welding fumes in an enclosed space is:", options: ["General ventilation with fans","Air purifying respirators (N95)","Local exhaust ventilation (LEV) at the fume source","Requiring all workers to hold their breath during welding"], a: 2, explain: "Local exhaust ventilation (LEV) — a fume extractor positioned at the source — captures fumes before they enter the welder's breathing zone. This is far more effective than general ventilation or relying solely on respirators." },
      { q: "Oxygen cylinders must be stored at least how far from fuel gas cylinders?", options: ["5 feet","10 feet","20 feet","50 feet"], a: 2, explain: "Oxygen and fuel gas (acetylene, propane) cylinders must be stored at least 20 feet apart OR separated by a fire-resistant barrier at least 5 feet high. This prevents simultaneous involvement in a fire." },
      { q: "During confined space welding, cylinders must be:", options: ["Left inside for quick access","Stored in the confined space in a ventilated area","Removed from the confined space when welding stops","Double-chained inside the space"], a: 2, explain: "Compressed gas cylinders must be removed from confined spaces whenever welding stops. Leaking cylinders in a confined space create a flammable/explosive atmosphere and oxygen displacement hazard." },
      { q: "A fire watch after welding/cutting must remain for at least:", options: ["10 minutes","15 minutes","30 minutes","1 hour"], a: 2, explain: "A fire watch must be maintained for at least 30 minutes after welding/cutting operations stop. Smoldering materials can ignite long after the heat source is removed." }
    ]
  },
  {
    id: 19, title: "Motor Vehicles & Equipment", subtitle: "Pre-Operation, ROPS, Spotters & Traffic Safety",
    icon: "🚜", estimatedTime: "1 hr",
    keyFacts: [
      "Daily pre-operation inspections required for all motor vehicles and equipment",
      "ROPS (Rollover Protective Structures) required on most earthmoving equipment",
      "Seatbelts required whenever ROPS is present",
      "Backup alarms required when the operator's view to the rear is obstructed",
      "No riders on equipment unless a seat is provided for the passenger",
      "Spotters required when equipment operates in areas where workers may be struck",
      "Overhead power line clearances apply to all equipment (10 feet min. for up to 50kV)",
      "Aerial lifts: workers must wear PFAS anchored to the basket, not the structure"
    ],
    sections: [
      {
        title: "Pre-Operation Inspections",
        content: `<p>All motor vehicles and mechanized equipment must be <strong>inspected before each shift</strong>. Equipment found to be unsafe must be removed from service until repaired.</p>
<p>Pre-operation inspection items include:</p>
<ul>
  <li>Service brakes, parking brake, and emergency brake — test before each use</li>
  <li>Steering mechanism — check for free play and binding</li>
  <li>Lights (headlights, taillights, turn signals, warning lights)</li>
  <li>Horn, backup alarm (audible and working)</li>
  <li>Tires — inflation, damage, tread depth</li>
  <li>Fuel, hydraulic, and coolant levels</li>
  <li>Seatbelt — present and functional</li>
  <li>ROPS — intact and undamaged (never weld to or modify ROPS without manufacturer authorization)</li>
  <li>Mirrors — adjusted and clean</li>
</ul>
<div class="regulation">29 CFR 1926.601 requires motor vehicle inspections at the beginning of each shift. Defects affecting safety must be repaired before the vehicle is placed back in service.</div>`
      },
      {
        title: "ROPS & Seatbelts",
        content: `<p>Rollovers are a leading cause of operator fatalities in construction equipment. <strong>Rollover Protective Structures (ROPS)</strong> prevent the cab from being crushed and provide a protective zone for the operator.</p>
<ul>
  <li>ROPS required on: dozers, motor graders, compactors, scrapers, loaders, backhoes, off-highway trucks (most earthmoving equipment)</li>
  <li>ROPS must meet SAE or ISO standards for the machine type</li>
  <li>Never modify or damage ROPS — a modified ROPS may not provide protection in a rollover</li>
  <li>Never add a cab (canopy) to a machine with an open ROPS unless it is part of an approved system</li>
</ul>
<div class="warning">A ROPS only protects the operator if the seatbelt is worn. An unbelted operator will be thrown from the cab and can be crushed by the ROPS. Seatbelts are REQUIRED when operating ROPS-equipped equipment.</div>
<p>FOPS (Falling Object Protective Structures) protect against falling objects (like at demolition sites) and may be required in addition to ROPS in certain environments.</p>`
      },
      {
        title: "Traffic Safety, Spotters & Pedestrian Protection",
        content: `<p>Construction sites with vehicle and pedestrian traffic require careful management to prevent struck-by incidents.</p>
<ul>
  <li><strong>Backup alarms</strong> — required when the operator's view to the rear is obstructed (or the operator cannot observe all workers in the backing path); alarm must be audible above ambient noise</li>
  <li><strong>Spotters</strong> — used when backing in congested areas; spotter must maintain direct visual contact with the operator; use agreed-upon hand signals; spotter must be in a safe position (never behind the vehicle)</li>
  <li><strong>Traffic control</strong> — one-way traffic patterns, posted speed limits, flaggers in roadway work zones</li>
  <li><strong>Pedestrian/vehicle separation</strong> — physical barriers, designated walkways, separate access routes for pedestrians and equipment</li>
</ul>
<p>All equipment operating near overhead power lines must maintain the same minimum clearances as cranes: <strong>10 feet minimum</strong> for voltages up to 50kV.</p>`
      },
      {
        title: "Aerial Lifts & Special Equipment",
        content: `<p><strong>Aerial lifts</strong> include scissor lifts, boom lifts, articulating boom platforms, and vertical personnel platforms. Key safety rules:</p>
<ul>
  <li>Workers must stand on the floor of the basket or platform — never on the midrail or top rail</li>
  <li>PFAS is required in boom-type (not scissor) aerial lifts — harness must be anchored to the basket or boom, NOT to the structure (to prevent ejection if the lift moves)</li>
  <li>Scissor lifts: work platform guardrails act as fall protection; PFAS not required but may be worn</li>
  <li>Never exceed the manufacturer's load capacity for the platform</li>
  <li>Do not use ladders inside the platform to gain additional height</li>
  <li>Aerial lifts must be inspected daily; do not use on grades or surfaces beyond the equipment's rating</li>
</ul>
<div class="highlight">Forklift-mounted work platforms require OSHA approval and specific safety features. Riding on forks or materials on forks is strictly prohibited.</div>`
      }
    ],
    quiz: [
      { q: "Seatbelts on ROPS-equipped equipment are:", options: ["Optional — the ROPS provides protection even without a seatbelt","Required — a ROPS only protects an operator who remains in the seat","Required only when traveling on public roads","Only required on machines over 10,000 lbs"], a: 1, explain: "Seatbelts are required whenever ROPS is present. Without a seatbelt, an operator is thrown from the cab in a rollover and may be crushed by the very ROPS designed to protect them." },
      { q: "A backup alarm on a construction vehicle is required when:", options: ["The vehicle is over 5,000 lbs","The operator's view to the rear is obstructed","The vehicle is used on a public road","The vehicle is equipped with ROPS"], a: 1, explain: "Backup alarms are required when operators cannot observe all employees in the area while backing — typically when the view is obstructed by the load, cab design, or attachments. The alarm must be audible above ambient noise." },
      { q: "When must motor vehicles and equipment be inspected?", options: ["Weekly, by a qualified mechanic","Monthly, and documented","At the beginning of each shift, before use","Annually, by a licensed inspector"], a: 2, explain: "Motor vehicles and mechanized equipment must be inspected at the beginning of each shift (before use). Equipment with defects affecting safety must be taken out of service until repaired." },
      { q: "What happens to a ROPS if it is modified with a weld by an unauthorized person?", options: ["It may be strengthened, depending on the weld","It may no longer meet the structural requirements needed to protect the operator","It remains effective if the weld is properly done","OSHA requires re-certification of the weld before use"], a: 1, explain: "Unauthorized modifications to ROPS (including welding) can alter the structural properties of the protective frame and may invalidate its protection. Only manufacturer-approved modifications are permitted." },
      { q: "Workers in boom-type aerial lifts must wear PFAS anchored to:", options: ["A nearby structure for maximum stability","The machine itself (never the structure)","The basket or boom of the aerial lift","The guardrail of the platform"], a: 2, explain: "In boom-type aerial lifts, workers must wear PFAS anchored to the basket or the boom — NOT to an adjacent structure. Anchoring to a structure could cause the worker to be pulled out of the basket if the lift moves." },
      { q: "A worker may ride as a passenger on a piece of construction equipment:", options: ["Only if they hold onto the frame","Never — no riders are allowed on any construction equipment","Only if a seat and seatbelt are provided for the passenger","Only if the equipment is moving less than 5 mph"], a: 2, explain: "Riders are only permitted on equipment when a seat designed for a passenger (with seatbelt) is provided. Riding on fenders, steps, forks, or other locations not designed for riders is prohibited." },
      { q: "A spotter guiding a backing vehicle must:", options: ["Stand directly behind the vehicle to observe clearance","Maintain direct eye contact with the operator and be in a safe position","Stand to the side of the vehicle and give verbal commands only","Be positioned on top of the vehicle for best visibility"], a: 1, explain: "Spotters must maintain direct visual contact with the operator at all times, use prearranged signals (hand or radio), and position themselves where they can see the hazard area but not be struck by the backing vehicle." },
      { q: "Which of the following is NOT a required item on a daily pre-operation inspection for construction vehicles?", options: ["Service brakes and parking brake","Backup alarm functionality","Operator's driver's license verification","Steering mechanism"], a: 2, explain: "Daily pre-operation inspections cover mechanical and safety systems — brakes, steering, lights, horn, backup alarm, tires, seatbelts, ROPS. Verifying the operator's driver's license is not part of the daily equipment inspection." }
    ]
  },
  {
    id: 20, title: "Confined Spaces", subtitle: "Permit Requirements, Atmospheric Testing & Entry Procedures",
    icon: "🕳️", estimatedTime: "1.5 hrs",
    keyFacts: [
      "Permit-required confined space: has actual or potential hazardous atmosphere, engulfment hazard, internal entrapment geometry, or other recognized serious hazard",
      "Atmospheric testing ORDER: Oxygen first → Flammable gases second → Toxic substances third",
      "Oxygen deficiency: below 19.5% | Oxygen enrichment: above 23.5%",
      "Flammable gas: >10% LEL is hazardous atmosphere; >25% LEL requires immediate evacuation",
      "Attendant must remain OUTSIDE the space at all times — never enters to attempt rescue",
      "Entry supervisor authorizes entry and ensures all conditions on the permit are met",
      "Rescue plan must be developed BEFORE entry begins; non-entry rescue is preferred",
      "Permit system: each entry requires a new permit; cancel permit if conditions change"
    ],
    sections: [
      {
        title: "Confined Space Classifications",
        content: `<p>A <strong>confined space</strong> is large enough for a worker to enter and perform work, has limited or restricted means of entry or exit, and is not designed for continuous occupancy (tanks, vessels, silos, manholes, tunnels, pits, trenches).</p>
<p><strong>Permit-Required Confined Space (PRCS)</strong> — contains or has the potential to contain at least ONE of the following:</p>
<ul>
  <li>Hazardous atmosphere (or may contain one)</li>
  <li>Material that could engulf an entrant (grain, liquid, flowable material)</li>
  <li>Internal configuration that could trap or asphyxiate (inwardly converging walls, floor sloped to smaller cross-section)</li>
  <li>Any other recognized serious safety or health hazard</li>
</ul>
<p><strong>Non-Permit Confined Space</strong> — meets the definition of a confined space but does NOT have any of the above hazards.</p>
<div class="regulation">29 CFR 1926.1200–1213 (construction confined space standard, effective August 2015). This is separate from the general industry standard (1910.146).</div>
<div class="warning">Many confined spaces that appear safe become permit-required when workers begin operations inside them (welding, painting, applying coatings — all change the atmospheric conditions).</div>`
      },
      {
        title: "Atmospheric Hazards & Testing",
        content: `<p>Atmospheric hazards are the most common cause of confined space fatalities. Testing must be performed before entry AND continuously monitored during work.</p>
<p><strong>Testing sequence:</strong></p>
<ol>
  <li><strong>Oxygen</strong> — always test first; the gas detector may give false readings if O₂ is out of range</li>
  <li><strong>Flammable gases/vapors</strong> — expressed as percent of Lower Explosive Limit (%LEL)</li>
  <li><strong>Toxic substances</strong> — specific toxics relevant to the space (CO, H₂S, etc.)</li>
</ol>
<table class="data-table"><thead><tr><th>Hazard</th><th>Safe Range / Action Level</th></tr></thead>
<tbody>
<tr><td>Oxygen</td><td>19.5%–23.5% (deficient below, enriched above)</td></tr>
<tr><td>Flammable gas</td><td>&lt;10% LEL acceptable; 10–25% LEL = hazardous; &gt;25% LEL = evacuate immediately</td></tr>
<tr><td>Carbon Monoxide (CO)</td><td>PEL: 50 ppm; IDLH: 1,200 ppm</td></tr>
<tr><td>Hydrogen Sulfide (H₂S)</td><td>PEL: 20 ppm (ceiling); IDLH: 100 ppm</td></tr>
</tbody></table>
<div class="highlight">IDLH = Immediately Dangerous to Life or Health. Any atmosphere at or above IDLH requires supplied-air (SCBA or airline) respiratory protection — air-purifying respirators are NOT sufficient.</div>`
      },
      {
        title: "Entry Roles: Entrant, Attendant & Entry Supervisor",
        content: `<p>A permit-required confined space entry requires three defined roles:</p>
<ul>
  <li><strong>Authorized Entrant</strong> — the worker who enters the space. Must be trained on hazards, know the signs/symptoms of exposure, and know how and when to self-rescue.</li>
  <li><strong>Attendant</strong> — stationed OUTSIDE at all times; monitors entrants, tracks how many are inside, maintains communication, recognizes hazard signs, orders evacuation, and summons rescue. <em>The attendant must NEVER enter the space</em> — most confined space deaths involve would-be rescuers.</li>
  <li><strong>Entry Supervisor</strong> — verifies that all permit conditions are met before authorizing entry; may be the same person as the attendant if at a small site; cancels the permit when work is complete or conditions change.</li>
</ul>
<div class="warning">Immediately after a dangerous rescue attempt, additional workers often become victims. In confined space accidents, 60% of fatalities are would-be rescuers. Non-entry rescue is always preferred.</div>`
      },
      {
        title: "Entry Permits, Rescue & Equipment",
        content: `<p>Each permit-required confined space entry must have a completed <strong>entry permit</strong> that includes:</p>
<ul>
  <li>The space to be entered and the purpose/work to be done</li>
  <li>Date and authorized duration</li>
  <li>Authorized entrants, attendants, and entry supervisors</li>
  <li>Hazards of the space and required control measures</li>
  <li>Atmospheric test results (pre-entry and ongoing monitoring)</li>
  <li>Rescue and emergency services to be summoned</li>
  <li>Equipment required (PPE, communications, rescue equipment)</li>
</ul>
<p><strong>Rescue procedures:</strong></p>
<ul>
  <li>A rescue plan must be developed and communicated <em>before</em> entry begins</li>
  <li><strong>Non-entry rescue</strong> (retrieval systems: lifeline, harness, and retrieval line) is preferred</li>
  <li>If entry rescue is necessary, rescuers must be trained and equipped with appropriate respiratory protection</li>
  <li>Emergency services (911) must be contacted immediately for any entrant in distress</li>
</ul>
<div class="regulation">The entry permit must be canceled if conditions in the space change or new hazards are identified. A new permit is required for each new entry, and all permits must be kept for at least 1 year for review.</div>`
      }
    ],
    quiz: [
      { q: "A confined space becomes permit-required if it contains:", options: ["Any type of gas","A hazardous atmosphere, engulfment hazard, entrapment geometry, or other recognized serious hazard","More than one worker at a time","Any toxic chemical, regardless of concentration"], a: 1, explain: "A confined space is permit-required if it contains or may contain: a hazardous atmosphere, material that could engulf workers, internal configuration that could trap or asphyxiate, or any other recognized serious safety/health hazard." },
      { q: "Atmospheric testing before confined space entry must be performed in which order?", options: ["Toxics → Flammables → Oxygen","Flammables → Oxygen → Toxics","Oxygen → Flammables → Toxics","Any order is acceptable"], a: 2, explain: "Always test in this order: 1) Oxygen (the meter may give false readings if O₂ is outside normal range), 2) Flammable gases, 3) Toxic substances. This sequence ensures the instrument operates correctly." },
      { q: "A flammable gas reading of 15% LEL in a confined space indicates:", options: ["The atmosphere is safe for entry","A hazardous atmosphere requiring controls before entry","Immediate evacuation is required","The reading is below the threshold and no action is needed"], a: 1, explain: "A reading of 10% LEL or higher indicates a hazardous atmosphere. At 15% LEL, ventilation and other controls must reduce the level below 10% LEL before entry is authorized. At >25% LEL, immediate evacuation is required." },
      { q: "The confined space attendant must:", options: ["Enter the space to assist entrants during normal operations","Remain outside the space and never enter for any reason during the entry","Take turns with entrants to monitor from inside","Perform air testing inside the space at regular intervals"], a: 1, explain: "The attendant must remain outside the confined space at all times during entry operations. If the attendant enters, there is no one to summon rescue or monitor conditions — this is how most confined space rescue fatalities occur." },
      { q: "An oxygen reading of 18% in a confined space indicates:", options: ["A safe atmosphere — within the acceptable range","Oxygen enrichment — ventilate before entry","Oxygen deficiency — a hazardous atmosphere","Normal outdoor air — safe to enter"], a: 2, explain: "An oxygen level below 19.5% is classified as oxygen-deficient — a hazardous atmosphere. At 18%, entrants risk impaired judgment, unconsciousness, and death without supplied-air respiratory protection." },
      { q: "When a confined space entrant shows signs of a hazardous atmosphere exposure, the attendant should:", options: ["Enter the space to assist the entrant","Order the entrant to self-rescue and call for emergency services","Wait to see if the symptoms improve before calling for help","Enter with a respirator to evaluate the situation"], a: 1, explain: "The attendant must order evacuation, activate the emergency rescue plan, and summon emergency services immediately — but must NOT enter the space. Non-entry rescue (retrieval system) is the first rescue option." },
      { q: "The minimum oxygen level for a safe confined space atmosphere is:", options: ["16%","18%","19.5%","21%"], a: 2, explain: "The acceptable oxygen range for confined space entry is 19.5% to 23.5%. Below 19.5% is oxygen-deficient (hazardous). Above 23.5% is oxygen-enriched (fire/explosion risk greatly increased)." },
      { q: "Which of the following is the PREFERRED method of confined space rescue?", options: ["Entry rescue by trained emergency responders","Entry rescue by the attendant using SCBA","Non-entry retrieval using a lifeline and harness","Any method that can be executed most quickly"], a: 2, explain: "Non-entry rescue (using a retrieval system — lifeline, harness, mechanical advantage device) is always the preferred method. It keeps rescuers outside the hazardous space and prevents additional casualties." }
    ]
  }
];

/* ── Merge both parts into the final MODULES array ── */
const MODULES = [...MODULES_PART1, ...MODULES_PART2];
