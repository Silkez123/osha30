/* ── OSHA 30 Construction Study App ── */

// ── Progress (localStorage) ──────────────────────────────────────
const Progress = {
  key: 'osha30',
  _get(k) { try { return JSON.parse(localStorage.getItem(this.key + '_' + k) || 'null'); } catch { return null; } },
  _set(k, v) { localStorage.setItem(this.key + '_' + k, JSON.stringify(v)); },

  getCompleted() { return this._get('completed') || []; },
  markComplete(id) {
    const c = this.getCompleted();
    if (!c.includes(id)) { c.push(id); this._set('completed', c); }
    updateNavProgress();
    if (typeof pushProgressToCloud === 'function') pushProgressToCloud();
  },
  isComplete(id) { return this.getCompleted().includes(id); },

  getScores() { return this._get('scores') || {}; },
  saveScore(id, score, total) {
    const s = this.getScores();
    const pct = Math.round((score / total) * 100);
    if (!s[id] || pct > s[id].pct) { s[id] = { score, total, pct, date: new Date().toLocaleDateString() }; }
    this._set('scores', s);
    if (pct >= 70) this.markComplete(id);
    if (typeof pushProgressToCloud === 'function') pushProgressToCloud();
  },
  getScore(id) { return (this.getScores())[id] || null; },

  getExamHistory() { return this._get('exams') || []; },
  saveExamResult(result) {
    const h = this.getExamHistory();
    h.unshift(result);
    this._set('exams', h.slice(0, 10));
    if (typeof pushProgressToCloud === 'function') pushProgressToCloud();
  },

  resetAll() {
    ['completed','scores','exams'].forEach(k => localStorage.removeItem(this.key + '_' + k));
    updateNavProgress();
    if (typeof pushProgressToCloud === 'function') pushProgressToCloud();
  }
};

// ── Quiz Bank (merged from part files loaded before this script) ──
const QUIZ_BANK = Object.assign(
  {},
  typeof QUIZ_BANK_P1 !== 'undefined' ? QUIZ_BANK_P1 : {},
  typeof QUIZ_BANK_P2 !== 'undefined' ? QUIZ_BANK_P2 : {},
  typeof QUIZ_BANK_P3 !== 'undefined' ? QUIZ_BANK_P3 : {},
  typeof QUIZ_BANK_P4 !== 'undefined' ? QUIZ_BANK_P4 : {}
);

// ── State ────────────────────────────────────────────────────────
let currentView = '';
let quizState = null;
let examState = null;
let fcState = null;
let drillState = null;
let quizResultWrong = [];

// ── Nav & Progress ────────────────────────────────────────────────
function updateNavProgress() {
  const done = Progress.getCompleted().length;
  const total = MODULES.length;
  document.getElementById('nav-progress-label').textContent = `${done} / ${total} modules`;
  document.getElementById('nav-progress-fill').style.width = `${(done / total) * 100}%`;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const hash = location.hash.split('/')[0];
  let activeId = 'nav-dashboard';
  if (hash === '#exam') activeId = 'nav-exam';
  else if (hash === '#flashcards') activeId = 'nav-flashcards';
  else if (hash === '#analytics') activeId = 'nav-analytics';
  const activeEl = document.getElementById(activeId);
  if (activeEl) activeEl.classList.add('active');
}

// ── Router ────────────────────────────────────────────────────────
function route() {
  const hash = location.hash || '#dashboard';
  const [view, param] = hash.slice(1).split('/');
  updateNavProgress();

  if (view === 'dashboard' || view === '') renderDashboard();
  else if (view === 'module' && param) renderModuleView(parseInt(param));
  else if (view === 'quiz' && param) renderQuizView(parseInt(param));
  else if (view === 'exam') renderExamStart();
  else if (view === 'flashcards') renderFlashcardsView(param ? parseInt(param) : null);
  else if (view === 'analytics') renderAnalytics();
  else if (view === 'drill') { if (drillState) renderDrillQuestion(); else navigate('#dashboard'); }
  else renderDashboard();
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

function navigate(hash) { location.hash = hash; }

// ── Main Content Helper ───────────────────────────────────────────
function setMain(html) { document.getElementById('main-content').innerHTML = html; }

// ── Dashboard ────────────────────────────────────────────────────
function renderDashboard() {
  currentView = 'dashboard';
  const completed = Progress.getCompleted();
  const scores = Progress.getScores();
  const exams = Progress.getExamHistory();
  const bestExam = exams.length ? Math.max(...exams.map(e => e.pct)) : null;
  const avgScore = Object.values(scores).length
    ? Math.round(Object.values(scores).reduce((a, s) => a + s.pct, 0) / Object.values(scores).length)
    : null;

  const moduleCards = MODULES.map(m => {
    const done = completed.includes(m.id);
    const sc = scores[m.id];
    return `
      <div class="module-card ${done ? 'completed' : ''}" onclick="navigate('#module/${m.id}')">
        <div class="module-card-top">
          <div class="module-icon">${m.icon}</div>
          <div class="module-info">
            <div class="module-num">Module ${m.id} of ${MODULES.length}</div>
            <div class="module-title">${m.title}</div>
            <div class="module-sub">${m.subtitle}</div>
          </div>
        </div>
        <div class="module-card-footer">
          <span class="module-time">⏱ ${m.estimatedTime}</span>
          ${done
            ? `<span class="badge badge-done">✓ Done${sc ? ` · ${sc.pct}%` : ''}</span>`
            : sc
              ? `<span class="badge badge-inprogress">Quiz: ${sc.pct}%</span>`
              : `<span class="badge badge-start">Start →</span>`
          }
        </div>
      </div>`;
  }).join('');

  setMain(`
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>OSHA 30 Construction Study Program</h1>
        <p>Work through all 20 modules, pass the practice quizzes, then take the final exam simulation.</p>
      </div>
      <div class="stats-row">
        <div class="stat-card orange"><div class="stat-val">${completed.length}</div><div class="stat-label">Modules Completed</div></div>
        <div class="stat-card"><div class="stat-val">${MODULES.length - completed.length}</div><div class="stat-label">Modules Remaining</div></div>
        <div class="stat-card blue"><div class="stat-val">${avgScore !== null ? avgScore + '%' : '—'}</div><div class="stat-label">Avg Quiz Score</div></div>
        <div class="stat-card green"><div class="stat-val">${bestExam !== null ? bestExam + '%' : '—'}</div><div class="stat-label">Best Exam Score</div></div>
      </div>
      <div class="section-heading">Study Modules</div>
      <div class="modules-grid">${moduleCards}</div>

      <div class="exam-cta">
        <div class="exam-cta-text">
          <h2>📋 Final Exam Simulation</h2>
          <p>100 questions · 2-hour timer · 70% required to pass · Covers all 20 modules</p>
        </div>
        <div class="exam-cta-actions">
          ${exams.length ? `<button class="btn btn-ghost" onclick="navigate('#exam-history')">History</button>` : ''}
          <button class="btn btn-primary btn-lg" onclick="navigate('#exam')">Take Exam →</button>
        </div>
      </div>

      <div class="exam-cta" style="background:linear-gradient(135deg,#1a4a6b 0%,#1a3a5c 100%);margin-top:16px;">
        <div class="exam-cta-text">
          <h2>🃏 Flashcards</h2>
          <p>${FLASHCARDS.length} key terms across all 20 modules · Flip, review, mark what you know</p>
        </div>
        <div class="exam-cta-actions">
          <button class="btn btn-primary btn-lg" onclick="navigate('#flashcards')">Study Flashcards →</button>
        </div>
      </div>

      ${completed.length > 0 ? `
        <div style="text-align:right;margin-top:16px;">
          <button class="btn btn-outline" style="font-size:0.8rem;padding:7px 14px;"
            onclick="confirmReset()">Reset Progress</button>
        </div>` : ''}
    </div>`);
}

function confirmReset() {
  showModal(
    'Reset All Progress?',
    'This will clear all completed modules, quiz scores, and exam history. This cannot be undone.',
    `<button class="btn" style="background:var(--border);color:var(--text);" onclick="hideModal()">Cancel</button>
     <button class="btn btn-danger" onclick="Progress.resetAll();hideModal();renderDashboard();">Reset Everything</button>`
  );
}

// ── Module View ───────────────────────────────────────────────────
function renderModuleView(id) {
  currentView = 'module';
  const mod = MODULES.find(m => m.id === id);
  if (!mod) { navigate('#dashboard'); return; }

  const sidebarSections = mod.sections.map((s, i) =>
    `<div class="sidebar-section" id="sidebar-sec-${i}" onclick="scrollToSection(${i})">${s.title}</div>`
  ).join('');

  const hasScore = Progress.getScore(id);
  const quizBtnLabel = hasScore
    ? `Retake Quiz (Best: ${hasScore.pct}%)`
    : 'Take Quiz →';

  const factsList = mod.keyFacts.map(f => `<li>${f}</li>`).join('');

  const contentSections = mod.sections.map((s, i) =>
    `<div class="content-section" id="section-${i}"><h2>${s.title}</h2>${s.content}</div>`
  ).join('');

  setMain(`
    <div class="module-view">
      <nav class="module-sidebar">
        <div class="sidebar-back" onclick="navigate('#dashboard')">← Back to Dashboard</div>
        <div class="sidebar-module-title">Module ${mod.id} — ${mod.title}</div>
        ${sidebarSections}
        <button class="sidebar-quiz-btn" onclick="navigate('#quiz/${id}')">${quizBtnLabel}</button>
      </nav>
      <div class="module-content">
        <div class="module-content-header">
          <div class="module-num-label">Module ${mod.id} of ${MODULES.length}</div>
          <h1>${mod.title}</h1>
          <p class="module-desc">${mod.subtitle} · ⏱ ${mod.estimatedTime}</p>
        </div>
        <div class="key-facts-box">
          <h3>★ Key Facts to Know</h3>
          <ul>${factsList}</ul>
        </div>
        ${mod.videoId ? `
        <div class="module-video">
          <div class="module-video-label">▶ <span>Video</span> — Deeper Learning</div>
          <div class="module-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/${mod.videoId}?rel=0&modestbranding=1"
              title="Module ${mod.id} Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>` : ''}
        ${contentSections}
        <div class="section-nav">
          ${id > 1 ? `<button class="btn btn-outline" onclick="navigate('#module/${id-1}')">← Module ${id-1}</button>` : '<span></span>'}
          <button class="btn btn-primary" onclick="navigate('#quiz/${id}')">Take Quiz →</button>
          ${id < MODULES.length ? `<button class="btn btn-outline" onclick="navigate('#module/${id+1}')">Module ${id+1} →</button>` : '<span></span>'}
        </div>
      </div>
    </div>`);

  // Sidebar scroll tracking
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = entry.target.id.split('-')[1];
        document.querySelectorAll('.sidebar-section').forEach(el => el.classList.remove('active'));
        const sidebar = document.getElementById('sidebar-sec-' + idx);
        if (sidebar) sidebar.classList.add('active');
      }
    });
  }, { threshold: 0.3 });
  mod.sections.forEach((_, i) => {
    const el = document.getElementById('section-' + i);
    if (el) observer.observe(el);
  });
}

function scrollToSection(i) {
  const el = document.getElementById('section-' + i);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Question helpers ──────────────────────────────────────────────
function qType(q) { return q.type || 'mc'; }

function normFib(s) {
  return String(s || '').toLowerCase().replace(/[$,\s.]/g, '');
}

function checkAnswer(q, answer) {
  const t = qType(q);
  if (t === 'mc') return answer === q.a;
  if (t === 'fib') {
    const n = normFib(answer);
    if (!n) return false;
    return n === normFib(q.answer) || (q.accept || []).some(a => normFib(a) === n);
  }
  if (t === 'sa') {
    if (!answer || !q.answers) return false;
    return [...answer].sort().join(',') === [...q.answers].sort().join(',');
  }
  return false;
}

function hasAnswered(q, answer) {
  const t = qType(q);
  if (t === 'mc') return answer !== undefined;
  if (t === 'fib') return answer !== undefined && String(answer).trim() !== '';
  if (t === 'sa') return Array.isArray(answer) && answer.length > 0;
  return false;
}

function getQuizPool(moduleId) {
  if (typeof QUIZ_BANK !== 'undefined' && QUIZ_BANK[moduleId] && QUIZ_BANK[moduleId].length) {
    return QUIZ_BANK[moduleId];
  }
  const mod = MODULES.find(m => m.id === moduleId);
  return mod ? mod.quiz : [];
}

// ── Quiz View ─────────────────────────────────────────────────────
function renderQuizView(id) {
  currentView = 'quiz';
  const mod = MODULES.find(m => m.id === id);
  if (!mod) { navigate('#dashboard'); return; }
  const pool = getQuizPool(id);
  quizState = {
    moduleId: id,
    questions: shuffleArray([...pool]).slice(0, 10),
    current: 0,
    answers: [],
    revealed: false
  };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { questions, current, answers, moduleId } = quizState;
  const q = questions[current];
  const total = questions.length;
  const mod = MODULES.find(m => m.id === moduleId);
  const userAnswer = answers[current];
  const revealed = quizState.revealed;
  const t = qType(q);
  const letters = ['A','B','C','D'];

  let bodyHtml = '';
  if (t === 'mc') {
    bodyHtml = `<div class="options-list">${q.options.map((opt, i) => {
      let cls = '';
      if (revealed) {
        if (i === q.a) cls = 'correct';
        else if (i === userAnswer && userAnswer !== q.a) cls = 'incorrect';
      } else if (i === userAnswer) cls = 'selected';
      return `<button class="option-btn ${cls}" ${revealed ? 'disabled' : ''} onclick="selectAnswer(${i})">
        <span class="option-letter">${letters[i]}</span><span>${opt}</span></button>`;
    }).join('')}</div>`;

  } else if (t === 'fib') {
    const isCorrect = revealed ? checkAnswer(q, userAnswer) : null;
    bodyHtml = `<div class="fib-wrap">
      <input type="text" id="fib-input"
        class="fib-input${revealed ? (isCorrect ? ' fib-correct' : ' fib-incorrect') : ''}"
        placeholder="Type your answer…"
        value="${revealed ? (userAnswer || '').replace(/"/g, '&quot;') : ''}"
        ${revealed ? 'disabled' : ''}
        oninput="quizState.answers[quizState.current]=this.value" />
      ${revealed ? `<div class="fib-result ${isCorrect ? 'fib-result-ok' : 'fib-result-err'}">
        ${isCorrect ? '✓ Correct!' : `✗ Correct answer: <strong>${q.answer}</strong>`}
      </div>` : ''}
    </div>`;

  } else if (t === 'sa') {
    const sel = userAnswer || [];
    bodyHtml = `<div class="sa-label">Select all that apply</div>
    <div class="options-list">${q.options.map((opt, i) => {
      let cls = '';
      const checked = sel.includes(i);
      if (revealed) {
        if (q.answers.includes(i)) cls = 'correct';
        else if (checked) cls = 'incorrect';
      } else if (checked) cls = 'selected';
      return `<button class="option-btn sa-btn ${cls}" ${revealed ? 'disabled' : ''} onclick="toggleSa(${i})">
        <span class="option-letter sa-check">${checked && !revealed ? '✓' : letters[i]}</span>
        <span>${opt}</span></button>`;
    }).join('')}</div>`;
  }

  const canCheck = !revealed && (t === 'fib' ? true : hasAnswered(q, userAnswer));
  const explanationHtml = revealed
    ? `<div class="explanation-box"><strong>Explanation:</strong> ${q.explain}</div>` : '';

  setMain(`
    <div class="quiz-view">
      <div class="quiz-header">
        <div class="module-num-label" style="font-size:.78rem;font-weight:600;color:var(--orange);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">
          Module ${moduleId} · Quiz
        </div>
        <h1>${mod.title}</h1>
        <p>${total} questions · ${t === 'sa' ? 'Select all correct answers' : t === 'fib' ? 'Fill in the blank' : 'Select the best answer'}</p>
        <div class="quiz-progress-row">
          <div class="quiz-progress-bar-wrap">
            <div class="quiz-progress-bar-fill" style="width:${((current+1)/total)*100}%"></div>
          </div>
          <span class="quiz-progress-text">Question ${current+1} of ${total}</span>
        </div>
      </div>
      <div class="question-card">
        <div class="question-text">${current+1}. ${q.q}</div>
        ${bodyHtml}
        ${explanationHtml}
      </div>
      <div class="quiz-actions">
        <button class="btn btn-outline" onclick="navigate('#module/${moduleId}')">← Back to Module</button>
        <div style="display:flex;gap:10px;">
          ${!revealed
            ? canCheck
              ? `<button class="btn btn-primary" onclick="revealAnswer()">Check Answer</button>`
              : `<button class="btn btn-primary" disabled style="opacity:.4;">${t==='sa'?'Select answers':'Select an answer'}</button>`
            : current < total - 1
              ? `<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>`
              : `<button class="btn btn-success" onclick="finishQuiz()">See Results →</button>`
          }
        </div>
      </div>
    </div>`);

  if (t === 'fib' && !revealed) {
    const inp = document.getElementById('fib-input');
    if (inp) { inp.value = userAnswer || ''; inp.focus(); }
  }
}

function selectAnswer(i) {
  if (quizState.revealed) return;
  quizState.answers[quizState.current] = i;
  renderQuizQuestion();
}

function toggleSa(i) {
  if (quizState.revealed) return;
  let sel = quizState.answers[quizState.current] || [];
  sel = sel.includes(i) ? sel.filter(x => x !== i) : [...sel, i];
  quizState.answers[quizState.current] = sel;
  renderQuizQuestion();
}

function revealAnswer() {
  const q = quizState.questions[quizState.current];
  if (qType(q) === 'fib') {
    const inp = document.getElementById('fib-input');
    quizState.answers[quizState.current] = inp ? inp.value : '';
  }
  quizState.revealed = true;
  renderQuizQuestion();
}

function nextQuestion() {
  quizState.current++;
  quizState.revealed = false;
  if (hasAnswered(quizState.questions[quizState.current], quizState.answers[quizState.current])) {
    quizState.revealed = true;
  }
  renderQuizQuestion();
}

function finishQuiz() {
  const { questions, answers, moduleId } = quizState;
  let correct = 0;
  questions.forEach((q, i) => { if (checkAnswer(q, answers[i])) correct++; });
  const pct = Math.round((correct / questions.length) * 100);
  Progress.saveScore(moduleId, correct, questions.length);
  renderQuizResults(moduleId, correct, questions.length, pct, questions, answers);
}

function renderQuizResults(moduleId, score, total, pct, questions, answers) {
  const pass = pct >= 70;
  const mod = MODULES.find(m => m.id === moduleId);

  const wrongData = questions
    .map((q, i) => ({ q, userAns: answers[i], wrong: !checkAnswer(q, answers[i]) }))
    .filter(d => d.wrong);
  const wrongQuestions = wrongData.map(d => d.q);

  const wrongItems = wrongData.map(({ q, userAns }) => {
    const t = qType(q);
    let yourAns, correctAns;
    if (t === 'mc') {
      yourAns = q.options[userAns] || 'No answer';
      correctAns = q.options[q.a];
    } else if (t === 'fib') {
      yourAns = userAns ? `"${userAns}"` : 'No answer';
      correctAns = q.answer;
    } else if (t === 'sa') {
      yourAns = Array.isArray(userAns) && userAns.length ? userAns.map(j => q.options[j]).join(', ') : 'No answer';
      correctAns = q.answers.map(j => q.options[j]).join(', ');
    }
    return `
      <div style="background:var(--bg);border-radius:8px;padding:12px 14px;margin-bottom:10px;font-size:0.88rem;">
        <div style="font-weight:600;color:var(--navy);margin-bottom:6px;">${q.q}</div>
        <div style="color:var(--red);">Your answer: ${yourAns}</div>
        <div style="color:var(--green);">Correct: ${correctAns}</div>
        <div style="color:var(--text-soft);margin-top:4px;">${q.explain}</div>
      </div>`;
  }).join('');

  setMain(`
    <div class="results-view">
      <div class="results-circle ${pass ? 'pass' : 'fail'}">
        <div class="pct">${pct}%</div>
        <div class="label">${score}/${total}</div>
      </div>
      <div class="results-title">${pass ? '🎉 Quiz Passed!' : '📚 Keep Studying'}</div>
      <div class="results-sub">
        ${pass
          ? 'Great work! Module marked as complete. Move on to the next module.'
          : 'You need 70% to pass. Review the module content and try again.'}
      </div>
      <div class="results-breakdown">
        <div class="results-row"><span>Questions Correct</span><strong style="color:var(--green);">${score} / ${total}</strong></div>
        <div class="results-row"><span>Score</span><strong>${pct}%</strong></div>
        <div class="results-row"><span>Result</span><strong style="color:${pass ? 'var(--green)' : 'var(--red)'};">${pass ? 'PASS ✓' : 'FAIL ✗'}</strong></div>
        <div class="results-row"><span>Passing Score</span><strong>70%</strong></div>
      </div>
      ${!pass && wrongItems ? `
        <div style="text-align:left;margin-bottom:28px;">
          <div class="section-heading" style="margin-bottom:14px;">Questions to Review</div>
          ${wrongItems}
        </div>` : ''}
      <div class="results-actions">
        <button class="btn btn-outline" onclick="navigate('#module/${moduleId}')">Review Module</button>
        ${wrongQuestions.length > 0
          ? `<button class="btn btn-drill" onclick="startDrill(quizResultWrong, '#quiz/${moduleId}', 'Back to Quiz')">🎯 Drill ${wrongQuestions.length} Wrong</button>`
          : ''}
        <button class="btn btn-primary" onclick="renderQuizView(${moduleId})">Retake Quiz</button>
        ${moduleId < MODULES.length
          ? `<button class="btn btn-success" onclick="navigate('#module/${moduleId + 1}')">Next Module →</button>`
          : `<button class="btn btn-success" onclick="navigate('#exam')">Take Final Exam →</button>`}
      </div>
    </div>`);
  quizResultWrong = wrongQuestions;
}

// ── Exam View ─────────────────────────────────────────────────────
function renderExamStart() {
  currentView = 'exam-start';
  const history = Progress.getExamHistory();
  const historyHtml = history.length ? `
    <div style="margin-top:32px;text-align:left;">
      <div class="section-heading">Previous Attempts</div>
      <table class="history-table">
        <thead><tr><th>Date</th><th>Score</th><th>Result</th></tr></thead>
        <tbody>
          ${history.map(e => `
            <tr>
              <td>${e.date}</td>
              <td>${e.correct}/${e.total} (${e.pct}%)</td>
              <td><span class="${e.pass ? 'pass-chip' : 'fail-chip'}">${e.pass ? 'PASS' : 'FAIL'}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>` : '';

  setMain(`
    <div class="exam-start">
      <h1>Final Exam</h1>
      <p>This simulation mirrors the actual OSHA 30-hour Construction final exam. You must score 70% or higher to pass.</p>
      <div class="exam-info-grid">
        <div class="exam-info-item"><div class="info-label">Questions</div><div class="info-val">100</div></div>
        <div class="exam-info-item"><div class="info-label">Time Limit</div><div class="info-val">2 Hours</div></div>
        <div class="exam-info-item"><div class="info-label">Passing Score</div><div class="info-val">70%</div></div>
        <div class="exam-info-item"><div class="info-label">Topics</div><div class="info-val">All 20 Modules</div></div>
      </div>
      <button class="btn btn-primary btn-lg" onclick="startExam()" style="width:100%;justify-content:center;">
        Begin Exam →
      </button>
      <p style="font-size:0.8rem;color:var(--text-xsoft);margin-top:16px;">
        ⚠ This is a study tool only. It does not constitute official OSHA training or certification.
      </p>
      ${historyHtml}
    </div>`);
}

function startExam() {
  // Pool from full QUIZ_BANK (1000 q) if available, else fall back to EXAM_QUESTIONS
  let pool;
  if (typeof QUIZ_BANK !== 'undefined' && Object.keys(QUIZ_BANK).length > 0) {
    pool = Object.values(QUIZ_BANK).flat();
  } else {
    pool = [...EXAM_QUESTIONS];
  }
  const questions = shuffleArray(pool).slice(0, 100);
  examState = {
    questions,
    answers: new Array(questions.length).fill(undefined),
    flagged: new Set(),
    current: 0,
    startTime: Date.now(),
    totalSeconds: 7200,
    timerInterval: null
  };
  examState.timerInterval = setInterval(tickExamTimer, 1000);
  currentView = 'exam-active';
  renderExamQuestion();
}

function tickExamTimer() {
  if (!examState) return;
  const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
  const remaining = examState.totalSeconds - elapsed;
  if (remaining <= 0) {
    clearInterval(examState.timerInterval);
    submitExam(true);
    return;
  }
  const timerEl = document.getElementById('exam-timer-display');
  if (timerEl) {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    const timeStr = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    timerEl.textContent = timeStr;
    timerEl.className = 'time' + (remaining < 300 ? ' urgent' : remaining < 900 ? ' warning' : '');
  }
}

function renderExamQuestion() {
  if (!examState) return;
  const { questions, answers, flagged, current } = examState;
  const q = questions[current];
  const total = questions.length;
  const answered = questions.filter((q,i) => hasAnswered(q, answers[i])).length;
  const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
  const remaining = Math.max(0, examState.totalSeconds - elapsed);
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  const timeStr = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const timeClass = remaining < 300 ? 'urgent' : remaining < 900 ? 'warning' : '';

  const dots = questions.map((q, i) => {
    let cls = '';
    if (hasAnswered(q, answers[i])) cls += ' answered';
    if (flagged.has(i)) cls = ' flagged';
    if (i === current) cls += ' current';
    return `<button class="exam-dot${cls}" onclick="goToExamQ(${i})" title="Q${i+1}"></button>`;
  }).join('');

  const letters = ['A','B','C','D'];
  const t = qType(q);
  let questionBody = '';
  if (t === 'mc') {
    questionBody = q.options.map((opt, i) =>
      `<button class="option-btn ${answers[current] === i ? 'selected' : ''}" onclick="selectExamAnswer(${i})">
        <span class="option-letter">${letters[i]}</span><span>${opt}</span></button>`
    ).join('');
  } else if (t === 'fib') {
    questionBody = `<div class="fib-wrap">
      <input type="text" id="exam-fib-input" class="fib-input"
        placeholder="Type your answer…"
        value="${(answers[current] || '').replace(/"/g,'&quot;')}"
        oninput="examState.answers[examState.current]=this.value" />
    </div>`;
  } else if (t === 'sa') {
    const sel = answers[current] || [];
    questionBody = `<div class="sa-label">Select all that apply</div>` +
      q.options.map((opt, i) =>
        `<button class="option-btn sa-btn ${sel.includes(i) ? 'selected' : ''}" onclick="toggleExamSa(${i})">
          <span class="option-letter sa-check">${sel.includes(i) ? '✓' : letters[i]}</span>
          <span>${opt}</span></button>`
      ).join('');
  }

  setMain(`
    <div class="exam-view">
      <div class="exam-header">
        <div>
          <h1>OSHA 30 Final Exam</h1>
          <p>${answered} of ${total} answered · ${flagged.size} flagged</p>
        </div>
        <div class="exam-timer">
          <div class="time ${timeClass}" id="exam-timer-display">${timeStr}</div>
          <div class="time-label">REMAINING</div>
        </div>
      </div>

      <div class="exam-nav-row">
        <span class="exam-q-num">Question ${current + 1} of ${total}</span>
        <div class="exam-progress-bar-wrap">
          <div class="exam-progress-fill" style="width:${((current+1)/total)*100}%"></div>
        </div>
      </div>

      <div class="exam-dot-row">${dots}</div>

      <div class="exam-q-card">
        <div class="exam-q-text">${current + 1}. ${q.q}</div>
        <div class="options-list">${questionBody}</div>
      </div>

      <div class="exam-actions">
        ${current > 0 ? `<button class="btn btn-outline" onclick="goToExamQ(${current-1})">← Prev</button>` : '<span></span>'}
        <button class="btn btn-flag ${flagged.has(current) ? 'active' : ''}" onclick="toggleFlag(${current})">
          🚩 ${flagged.has(current) ? 'Flagged' : 'Flag'}
        </button>
        ${current < total - 1
          ? `<button class="btn btn-primary" onclick="goToExamQ(${current+1})">Next →</button>`
          : `<button class="btn btn-success" onclick="confirmSubmitExam()">Submit Exam →</button>`
        }
      </div>

      <div style="text-align:center;margin-top:24px;">
        <button class="btn btn-danger" onclick="confirmSubmitExam()">Submit Exam</button>
      </div>
    </div>`);
}

function selectExamAnswer(i) {
  if (!examState) return;
  examState.answers[examState.current] = i;
  renderExamQuestion();
}

function toggleExamSa(i) {
  if (!examState) return;
  let sel = examState.answers[examState.current] || [];
  sel = sel.includes(i) ? sel.filter(x => x !== i) : [...sel, i];
  examState.answers[examState.current] = sel;
  renderExamQuestion();
}

function goToExamQ(i) {
  if (!examState) return;
  examState.current = i;
  renderExamQuestion();
}

function toggleFlag(i) {
  if (!examState) return;
  if (examState.flagged.has(i)) examState.flagged.delete(i);
  else examState.flagged.add(i);
  renderExamQuestion();
}

function confirmSubmitExam() {
  const { answers, questions } = examState;
  const unanswered = questions.filter((q,i) => !hasAnswered(q, answers[i])).length;
  if (unanswered > 0) {
    showModal(
      'Unanswered Questions',
      `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to submit?`,
      `<button class="btn btn-outline" onclick="hideModal()">Go Back</button>
       <button class="btn btn-danger" onclick="hideModal();submitExam(false)">Submit Anyway</button>`
    );
  } else {
    submitExam(false);
  }
}

function submitExam(timedOut) {
  if (!examState) return;
  if (examState.timerInterval) clearInterval(examState.timerInterval);
  const { questions, answers } = examState;
  let correct = 0;
  questions.forEach((q, i) => { if (checkAnswer(q, answers[i])) correct++; });
  const pct = Math.round((correct / questions.length) * 100);
  const pass = pct >= 70;
  const result = {
    correct, total: questions.length, pct, pass,
    date: new Date().toLocaleDateString(),
    timedOut
  };
  Progress.saveExamResult(result);
  renderExamResults(result, questions, answers);
  examState = null;
}

function renderExamResults(result, questions, answers) {
  currentView = 'exam-results';
  const { correct, total, pct, pass, timedOut } = result;

  // Category breakdown
  const byModule = {};
  const examWrongQuestions = [];
  questions.forEach((q, i) => {
    const mod = q.moduleRef || 0;
    if (!byModule[mod]) byModule[mod] = { correct: 0, total: 0, title: q.moduleName || `Module ${mod}` };
    byModule[mod].total++;
    if (checkAnswer(q, answers[i])) byModule[mod].correct++;
    else examWrongQuestions.push(q);
  });
  const breakdownRows = Object.entries(byModule).map(([mod, data]) => {
    const mpct = Math.round((data.correct / data.total) * 100);
    return `<div class="results-row">
      <span style="font-size:0.85rem;">${data.title}</span>
      <strong style="color:${mpct >= 70 ? 'var(--green)' : 'var(--red)'};">${data.correct}/${data.total} (${mpct}%)</strong>
    </div>`;
  }).join('');

  setMain(`
    <div class="exam-results-view">
      ${timedOut ? '<div style="background:var(--red);color:#fff;padding:10px 16px;border-radius:8px;margin-bottom:20px;font-weight:600;">Time expired — exam auto-submitted</div>' : ''}
      <div class="exam-results-circle ${pass ? 'pass' : 'fail'}">
        <div class="pct">${pct}%</div>
        <div class="exam-results-status">${correct}/${total}</div>
      </div>
      <div class="results-title">${pass ? '🎉 Exam Passed!' : '📚 Not Quite Yet'}</div>
      <div class="results-sub">
        ${pass
          ? `Excellent work! You passed with ${pct}%. You're ready for the real OSHA 30-hour exam.`
          : `You scored ${pct}% — you need 70% to pass. Review weaker modules and try again.`}
      </div>
      <div class="results-breakdown">
        <div class="results-row"><span>Questions Correct</span><strong style="color:var(--green);">${correct} / ${total}</strong></div>
        <div class="results-row"><span>Your Score</span><strong>${pct}%</strong></div>
        <div class="results-row"><span>Passing Score</span><strong>70%</strong></div>
        <div class="results-row"><span>Result</span><strong style="color:${pass ? 'var(--green)' : 'var(--red)'};">${pass ? 'PASS ✓' : 'FAIL ✗'}</strong></div>
      </div>
      <div style="text-align:left;margin-bottom:28px;">
        <div class="section-heading" style="margin-bottom:14px;">Performance by Topic</div>
        <div class="results-breakdown">${breakdownRows}</div>
      </div>
      <div class="results-actions">
        <button class="btn btn-outline" onclick="navigate('#dashboard')">Dashboard</button>
        ${examWrongQuestions.length > 0
          ? `<button class="btn btn-drill" onclick="startDrill(examResultWrong, '#exam', 'Back to Exam')">🎯 Drill ${examWrongQuestions.length} Wrong</button>`
          : ''}
        <button class="btn btn-primary" onclick="navigate('#exam')">Retake Exam</button>
      </div>
      <p style="font-size:0.8rem;color:var(--text-xsoft);margin-top:24px;">
        ⚠ This is a study tool only and does not constitute official OSHA training or certification.
      </p>
    </div>`);
  examResultWrong = examWrongQuestions;
}

let examResultWrong = [];

// ── Drill Mode ────────────────────────────────────────────────────
function startDrill(wrongQuestions, backHash, backLabel) {
  if (!wrongQuestions || wrongQuestions.length === 0) return;
  drillState = {
    remaining: shuffleArray([...wrongQuestions]),
    roundAnswers: [],
    roundResults: [],
    current: 0,
    revealed: false,
    round: 1,
    totalOriginal: wrongQuestions.length,
    mastered: 0,
    backHash,
    backLabel
  };
  currentView = 'drill';
  navigate('#drill');
  renderDrillQuestion();
}

function renderDrillQuestion() {
  if (!drillState) { navigate('#dashboard'); return; }
  const { remaining, current, roundAnswers, revealed, round, mastered, totalOriginal } = drillState;
  const q = remaining[current];
  const total = remaining.length;
  const userAnswer = roundAnswers[current];
  const t = qType(q);
  const letters = ['A','B','C','D'];
  const isCorrect = revealed ? checkAnswer(q, userAnswer) : null;

  let bodyHtml = '';
  if (t === 'mc') {
    bodyHtml = `<div class="options-list">${q.options.map((opt, i) => {
      let cls = '';
      if (revealed) {
        if (i === q.a) cls = 'correct';
        else if (i === userAnswer && userAnswer !== q.a) cls = 'incorrect';
      } else if (i === userAnswer) cls = 'selected';
      return `<button class="option-btn ${cls}" ${revealed ? 'disabled' : ''} onclick="selectDrillAnswer(${i})">
        <span class="option-letter">${letters[i]}</span><span>${opt}</span></button>`;
    }).join('')}</div>`;
  } else if (t === 'fib') {
    bodyHtml = `<div class="fib-wrap">
      <input type="text" id="fib-input"
        class="fib-input${revealed ? (isCorrect ? ' fib-correct' : ' fib-incorrect') : ''}"
        placeholder="Type your answer…"
        value="${revealed ? (userAnswer || '').replace(/"/g, '&quot;') : ''}"
        ${revealed ? 'disabled' : ''}
        oninput="drillState.roundAnswers[drillState.current]=this.value" />
      ${revealed ? `<div class="fib-result ${isCorrect ? 'fib-result-ok' : 'fib-result-err'}">
        ${isCorrect ? '✓ Correct!' : `✗ Correct answer: <strong>${q.answer}</strong>`}
      </div>` : ''}
    </div>`;
  } else if (t === 'sa') {
    const sel = userAnswer || [];
    bodyHtml = `<div class="sa-label">Select all that apply</div>
    <div class="options-list">${q.options.map((opt, i) => {
      let cls = '';
      const checked = sel.includes(i);
      if (revealed) {
        if (q.answers.includes(i)) cls = 'correct';
        else if (checked) cls = 'incorrect';
      } else if (checked) cls = 'selected';
      return `<button class="option-btn sa-btn ${cls}" ${revealed ? 'disabled' : ''} onclick="toggleDrillSa(${i})">
        <span class="option-letter sa-check">${checked && !revealed ? '✓' : letters[i]}</span>
        <span>${opt}</span></button>`;
    }).join('')}</div>`;
  }

  const canCheck = !revealed && (t === 'fib' ? true : hasAnswered(q, userAnswer));
  const explanationHtml = revealed
    ? `<div class="explanation-box">
        <div style="font-weight:700;margin-bottom:4px;color:${isCorrect ? 'var(--green)' : 'var(--red)'};">${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</div>
        <strong>Explanation:</strong> ${q.explain}
      </div>` : '';
  const masteredPct = totalOriginal > 0 ? Math.round((mastered / totalOriginal) * 100) : 0;

  setMain(`
    <div class="quiz-view">
      <div class="drill-status-bar">
        <span class="drill-badge">🎯 Drill · Round ${round}</span>
        <div class="drill-status-right">
          <span class="drill-mastered-label">${mastered}/${totalOriginal} mastered</span>
          <div class="drill-master-bar"><div class="drill-master-fill" style="width:${masteredPct}%"></div></div>
        </div>
      </div>
      <div class="quiz-header">
        <div class="module-num-label" style="font-size:.78rem;font-weight:600;color:var(--orange);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">
          ${q.moduleName || ''} · Weak-Spot Drill
        </div>
        <h1>Drill Mode</h1>
        <p>${total} question${total !== 1 ? 's' : ''} remaining this round</p>
        <div class="quiz-progress-row">
          <div class="quiz-progress-bar-wrap">
            <div class="quiz-progress-bar-fill" style="width:${((current+1)/total)*100}%"></div>
          </div>
          <span class="quiz-progress-text">Question ${current+1} of ${total}</span>
        </div>
      </div>
      <div class="question-card">
        <div class="question-text">${current+1}. ${q.q}</div>
        ${bodyHtml}
        ${explanationHtml}
      </div>
      <div class="quiz-actions">
        <button class="btn btn-outline" onclick="confirmStopDrill()">Stop Drilling</button>
        <div style="display:flex;gap:10px;">
          ${!revealed
            ? canCheck
              ? `<button class="btn btn-primary" onclick="revealDrillAnswer()">Check Answer</button>`
              : `<button class="btn btn-primary" disabled style="opacity:.4;">${t==='sa'?'Select answers':'Select an answer'}</button>`
            : current < total - 1
              ? `<button class="btn btn-primary" onclick="nextDrillQuestion()">Next →</button>`
              : `<button class="btn btn-success" onclick="finishDrillRound()">Finish Round →</button>`
          }
        </div>
      </div>
    </div>`);

  if (t === 'fib' && !revealed) {
    const inp = document.getElementById('fib-input');
    if (inp) { inp.value = userAnswer || ''; inp.focus(); }
  }
}

function selectDrillAnswer(i) {
  if (drillState.revealed) return;
  drillState.roundAnswers[drillState.current] = i;
  renderDrillQuestion();
}

function toggleDrillSa(i) {
  if (drillState.revealed) return;
  let sel = drillState.roundAnswers[drillState.current] || [];
  sel = sel.includes(i) ? sel.filter(x => x !== i) : [...sel, i];
  drillState.roundAnswers[drillState.current] = sel;
  renderDrillQuestion();
}

function revealDrillAnswer() {
  const q = drillState.remaining[drillState.current];
  if (qType(q) === 'fib') {
    const inp = document.getElementById('fib-input');
    drillState.roundAnswers[drillState.current] = inp ? inp.value : '';
  }
  drillState.roundResults[drillState.current] = checkAnswer(q, drillState.roundAnswers[drillState.current]);
  drillState.revealed = true;
  renderDrillQuestion();
}

function nextDrillQuestion() {
  drillState.current++;
  drillState.revealed = false;
  renderDrillQuestion();
}

function finishDrillRound() {
  const { remaining, roundResults, mastered, round } = drillState;
  const justMastered = roundResults.filter(Boolean).length;
  const newRemaining = remaining.filter((_, i) => !roundResults[i]);

  drillState.mastered = mastered + justMastered;
  drillState.remaining = shuffleArray(newRemaining);
  drillState.roundAnswers = [];
  drillState.roundResults = [];
  drillState.current = 0;
  drillState.revealed = false;
  drillState.round++;

  if (newRemaining.length === 0) {
    renderDrillMastery();
  } else {
    renderDrillRoundSummary(justMastered, newRemaining.length);
  }
}

function renderDrillRoundSummary(justMastered, remaining) {
  const { round, mastered, totalOriginal, backHash } = drillState;
  setMain(`
    <div class="results-view">
      <div style="font-size:3.5rem;margin-bottom:12px;">🔄</div>
      <div class="results-title">Round ${round - 1} Complete</div>
      <div class="results-sub">
        ${justMastered > 0
          ? `You mastered <strong>${justMastered}</strong> more question${justMastered !== 1 ? 's' : ''}. Keep it up!`
          : `Don't worry — repetition is how it sticks. Give it another go!`}
      </div>
      <div class="results-breakdown">
        <div class="results-row"><span>Mastered This Round</span><strong style="color:var(--green);">+${justMastered}</strong></div>
        <div class="results-row"><span>Total Mastered</span><strong style="color:var(--green);">${mastered} / ${totalOriginal}</strong></div>
        <div class="results-row"><span>Still Drilling</span><strong style="color:var(--orange);">${remaining}</strong></div>
      </div>
      <div class="results-actions">
        <button class="btn btn-outline" onclick="navigate('${backHash}');drillState=null;">Stop Drilling</button>
        <button class="btn btn-primary" onclick="renderDrillQuestion()">Round ${round} →</button>
      </div>
    </div>`);
}

function renderDrillMastery() {
  const { round, totalOriginal, backHash, backLabel } = drillState;
  setMain(`
    <div class="results-view">
      <div style="font-size:4rem;margin-bottom:12px;">🏆</div>
      <div class="results-title">All Mastered!</div>
      <div class="results-sub">
        You got all ${totalOriginal} drill question${totalOriginal !== 1 ? 's' : ''} correct
        ${round > 2 ? ` across ${round - 1} rounds` : ''}. Excellent work!
      </div>
      <div class="results-actions">
        <button class="btn btn-primary" onclick="navigate('${backHash}');drillState=null;">${backLabel}</button>
      </div>
    </div>`);
}

function confirmStopDrill() {
  const bh = drillState ? drillState.backHash : '#dashboard';
  showModal(
    'Stop Drilling?',
    'Your drill progress for this round will be lost.',
    `<button class="btn" style="background:var(--border);color:var(--text);" onclick="hideModal()">Keep Drilling</button>
     <button class="btn btn-danger" onclick="hideModal();navigate('${bh}');drillState=null;">Stop</button>`
  );
}

// ── Analytics ─────────────────────────────────────────────────────
function renderAnalytics() {
  currentView = 'analytics';
  const scores = Progress.getScores();
  const completed = Progress.getCompleted();
  const exams = Progress.getExamHistory();

  const moduleScores = MODULES.map(m => scores[m.id] ? scores[m.id].pct : 0);
  const attempted = MODULES.filter(m => scores[m.id]);
  const quizAvg = attempted.length
    ? Math.round(moduleScores.reduce((a, b) => a + b, 0) / MODULES.length)
    : 0;
  const bestExam = exams.length ? Math.max(...exams.map(e => e.pct)) : null;
  const readiness = bestExam !== null
    ? Math.round(quizAvg * 0.7 + bestExam * 0.3)
    : quizAvg;

  const readinessLabel = readiness >= 85 ? 'Exam Ready' : readiness >= 70 ? 'Almost Ready' : readiness >= 50 ? 'Getting There' : 'Keep Studying';
  const readinessColor = readiness >= 85 ? 'var(--green)' : readiness >= 70 ? '#f59e0b' : readiness >= 50 ? 'var(--orange)' : 'var(--red)';
  const readinessBg = readiness >= 85 ? '#e6f7ec' : readiness >= 70 ? '#fef3c7' : readiness >= 50 ? '#fff3ee' : '#fff0ee';

  const moduleBars = MODULES.map(m => {
    const sc = scores[m.id];
    const pct = sc ? sc.pct : 0;
    const done = completed.includes(m.id);
    const barColor = !sc ? 'var(--border)' : pct >= 85 ? 'var(--green)' : pct >= 70 ? '#f59e0b' : 'var(--red)';
    const pctColor = !sc ? 'var(--text-xsoft)' : pct >= 85 ? 'var(--green)' : pct >= 70 ? '#b45309' : 'var(--red)';
    return `
      <div class="analytics-module-row" onclick="navigate('#module/${m.id}')">
        <div class="analytics-mod-label">
          <span class="analytics-mod-num">M${m.id}</span>
          <span class="analytics-mod-name">${m.title}</span>
          ${done ? '<span class="analytics-done-chip">✓</span>' : ''}
        </div>
        <div class="analytics-bar-wrap">
          <div class="analytics-bar-fill" style="width:${pct}%;background:${barColor};"></div>
          <div class="analytics-threshold-line"></div>
        </div>
        <div class="analytics-mod-pct" style="color:${pctColor};">${sc ? pct + '%' : '—'}</div>
        <button class="analytics-action-btn" onclick="event.stopPropagation();navigate('#quiz/${m.id}')">
          ${sc ? 'Retake' : 'Start'}
        </button>
      </div>`;
  }).join('');

  const weakModules = MODULES
    .filter(m => !scores[m.id] || scores[m.id].pct < 70)
    .sort((a, b) => (scores[a.id] ? scores[a.id].pct : -1) - (scores[b.id] ? scores[b.id].pct : -1));

  const focusHtml = weakModules.length === 0
    ? '<p style="color:var(--green);font-weight:600;padding:16px 0;">✓ All 20 modules passed — you\'re ready for the exam!</p>'
    : weakModules.slice(0, 6).map(m => {
        const sc = scores[m.id];
        return `
          <div class="focus-item">
            <div>
              <div class="focus-title">Module ${m.id}: ${m.title}</div>
              <div class="focus-score">${sc ? `Last score: ${sc.pct}% — needs ${70 - sc.pct}% more` : 'Not attempted yet'}</div>
            </div>
            <button class="btn btn-primary" style="font-size:0.8rem;padding:7px 14px;white-space:nowrap;"
              onclick="navigate('#quiz/${m.id}')">
              ${sc ? 'Retake Quiz' : 'Take Quiz'} →
            </button>
          </div>`;
      }).join('');

  const examHistHtml = exams.length === 0
    ? '<p style="color:var(--text-soft);padding:12px 0;">No exam attempts yet. <a href="#exam" style="color:var(--blue-accent);font-weight:600;">Take the final exam →</a></p>'
    : `<table class="history-table">
        <thead><tr><th>Date</th><th>Score</th><th>Result</th></tr></thead>
        <tbody>${exams.map(e => `
          <tr>
            <td>${e.date}</td>
            <td>${e.correct}/${e.total} (${e.pct}%)</td>
            <td><span class="${e.pass ? 'pass-chip' : 'fail-chip'}">${e.pass ? 'PASS' : 'FAIL'}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
      <div style="margin-top:16px;">
        <button class="btn btn-primary" onclick="navigate('#exam')">Take Final Exam →</button>
      </div>`;

  setMain(`
    <div class="analytics-view">
      <div class="analytics-header">
        <h1>📊 Progress Analytics</h1>
        <p>Your study performance across all 20 modules.</p>
      </div>

      <div class="readiness-card" style="background:${readinessBg};border-color:${readinessColor};">
        <div class="readiness-score" style="color:${readinessColor};">${readiness}%</div>
        <div class="readiness-label" style="color:${readinessColor};">${readinessLabel}</div>
        <div class="readiness-sub">
          ${attempted.length} of ${MODULES.length} modules attempted · ${completed.length} passed
          ${bestExam !== null ? ` · Best exam: ${bestExam}%` : ''}
        </div>
        <div class="readiness-bar-wrap">
          <div class="readiness-bar-fill" style="width:${readiness}%;background:${readinessColor};"></div>
        </div>
      </div>

      <div class="stats-row" style="margin-bottom:28px;">
        <div class="stat-card orange"><div class="stat-val">${completed.length}</div><div class="stat-label">Modules Passed</div></div>
        <div class="stat-card"><div class="stat-val">${MODULES.length - completed.length}</div><div class="stat-label">Remaining</div></div>
        <div class="stat-card blue"><div class="stat-val">${attempted.length ? Math.round(Object.values(scores).reduce((a,s)=>a+s.pct,0)/attempted.length) : '—'}${attempted.length ? '%' : ''}</div><div class="stat-label">Avg Quiz Score</div></div>
        <div class="stat-card green"><div class="stat-val">${bestExam !== null ? bestExam + '%' : '—'}</div><div class="stat-label">Best Exam</div></div>
      </div>

      <div class="analytics-section">
        <div class="section-heading">Performance by Module</div>
        <div class="analytics-legend">
          <span class="legend-dot" style="background:var(--green)"></span><span>≥85% Strong</span>
          <span class="legend-dot" style="background:#f59e0b"></span><span>70–84% Passing</span>
          <span class="legend-dot" style="background:var(--red)"></span><span>&lt;70% Needs Work</span>
          <span class="legend-dot" style="background:var(--border)"></span><span>Not Attempted</span>
        </div>
        <div class="analytics-modules">${moduleBars}</div>
      </div>

      <div class="analytics-section">
        <div class="section-heading">Focus Areas</div>
        <p style="font-size:0.85rem;color:var(--text-soft);margin-bottom:16px;">Modules scoring below 70% or not yet attempted, worst first.</p>
        <div class="focus-list">${focusHtml}</div>
      </div>

      <div class="analytics-section">
        <div class="section-heading">Exam History</div>
        ${examHistHtml}
      </div>
    </div>`);
}

// ── Flashcards ────────────────────────────────────────────────────
const FC = {
  key: 'osha30_fc_known',
  getKnown() { try { return new Set(JSON.parse(localStorage.getItem(this.key) || '[]')); } catch { return new Set(); } },
  setKnown(s) { localStorage.setItem(this.key, JSON.stringify([...s])); },
  markKnown(id) { const s = this.getKnown(); s.add(id); this.setKnown(s); if (typeof pushProgressToCloud === 'function') pushProgressToCloud(); },
  markUnknown(id) { const s = this.getKnown(); s.delete(id); this.setKnown(s); if (typeof pushProgressToCloud === 'function') pushProgressToCloud(); },
  resetAll() { localStorage.removeItem(this.key); if (typeof pushProgressToCloud === 'function') pushProgressToCloud(); }
};

function renderFlashcardsView(filterModuleId) {
  currentView = 'flashcards';
  const known = FC.getKnown();
  const activeFilter = filterModuleId || null;
  const filteredCards = activeFilter
    ? FLASHCARDS.filter(c => c.moduleId === activeFilter)
    : [...FLASHCARDS];

  if (!fcState || fcState.filter !== activeFilter) {
    fcState = { cards: filteredCards, current: 0, filter: activeFilter, flipped: false };
  } else {
    fcState.cards = filteredCards;
    fcState.flipped = false;
    if (fcState.current >= filteredCards.length) fcState.current = 0;
  }

  const totalCards = filteredCards.length;
  const knownCount = filteredCards.filter(c => known.has(c.id)).length;
  const learningCount = totalCards - knownCount;
  const knownPct = totalCards ? Math.round((knownCount / totalCards) * 100) : 0;

  const pillsHtml = [
    `<button class="fc-pill ${!activeFilter ? 'active' : ''}" onclick="navigate('#flashcards')">All (${FLASHCARDS.length})</button>`,
    ...MODULES.map(m => {
      const count = FLASHCARDS.filter(c => c.moduleId === m.id).length;
      return `<button class="fc-pill ${activeFilter === m.id ? 'active' : ''}" onclick="navigate('#flashcards/${m.id}')">M${m.id}: ${m.title.split(':')[0].trim()} (${count})</button>`;
    })
  ].join('');

  const card = filteredCards[fcState.current];
  const cardHtml = card ? `
    <div class="fc-counter">Card ${fcState.current + 1} of ${totalCards}${known.has(card.id) ? ' · <span style="color:var(--green);font-weight:600;">✓ Known</span>' : ''}</div>
    <div class="fc-card-wrap" onclick="fcFlip()">
      <div class="fc-card" id="fc-card">
        <div class="fc-face fc-front">
          <div class="fc-face-tag">TERM</div>
          <div class="fc-term">${card.term}</div>
          <div class="fc-module-label">Module ${card.moduleId} · ${card.moduleName}</div>
          <div class="fc-flip-hint">Click to reveal definition</div>
        </div>
        <div class="fc-face fc-back">
          <div class="fc-face-tag">DEFINITION</div>
          <div class="fc-definition">${card.definition}</div>
          <div class="fc-flip-hint">Click to flip back</div>
        </div>
      </div>
    </div>
    <div class="fc-actions">
      <button class="fc-btn-know" onclick="fcMarkKnown()">✓ Know It</button>
      <button class="fc-btn-learning" onclick="fcMarkLearning()">Still Learning</button>
    </div>
    <div class="fc-nav-row">
      <button class="fc-btn-nav" onclick="fcPrev()" ${fcState.current === 0 ? 'disabled' : ''}>← Prev</button>
      <button class="fc-btn-nav" onclick="fcNext()" ${fcState.current >= totalCards - 1 ? 'disabled' : ''}>Next →</button>
    </div>` : `
    <div class="fc-done-state">
      <div class="fc-known-badge">${knownPct}%</div>
      <h2>No cards to show!</h2>
      <p>Select a different filter or reset your progress to start over.</p>
      <button class="btn btn-primary" onclick="navigate('#flashcards')">All Cards</button>
    </div>`;

  setMain(`
    <div class="flashcards-view">
      <div class="fc-header">
        <h1>🃏 Flashcards</h1>
        <p>Memorize key OSHA terms. Flip each card, then mark whether you know it.</p>
      </div>
      <div class="fc-stats-row">
        <div class="fc-stat"><div class="fc-stat-val">${totalCards}</div><div class="fc-stat-label">Total Cards</div></div>
        <div class="fc-stat known"><div class="fc-stat-val">${knownCount}</div><div class="fc-stat-label">Know It</div></div>
        <div class="fc-stat learning"><div class="fc-stat-val">${learningCount}</div><div class="fc-stat-label">Still Learning</div></div>
      </div>
      <div class="fc-progress-bar-wrap">
        <div class="fc-progress-bar-fill" style="width:${knownPct}%"></div>
      </div>
      <div class="fc-filter-wrap">
        <div class="fc-filter-label">Filter by Module</div>
        <div class="fc-filter-pills">${pillsHtml}</div>
      </div>
      <div class="fc-arena">${cardHtml}</div>
      ${knownCount > 0 ? `
        <div style="text-align:right;margin-top:24px;">
          <button class="btn btn-outline" style="font-size:0.8rem;padding:7px 14px;" onclick="fcResetKnown()">
            Reset Known Cards
          </button>
        </div>` : ''}
    </div>`);
}

function fcFlip() {
  fcState.flipped = !fcState.flipped;
  const card = document.getElementById('fc-card');
  if (card) card.classList.toggle('flipped', fcState.flipped);
}

function fcMarkKnown() {
  if (!fcState || !fcState.cards[fcState.current]) return;
  FC.markKnown(fcState.cards[fcState.current].id);
  if (fcState.current < fcState.cards.length - 1) fcState.current++;
  renderFlashcardsView(fcState.filter);
}

function fcMarkLearning() {
  if (!fcState || !fcState.cards[fcState.current]) return;
  FC.markUnknown(fcState.cards[fcState.current].id);
  if (fcState.current < fcState.cards.length - 1) fcState.current++;
  renderFlashcardsView(fcState.filter);
}

function fcNext() {
  if (!fcState || fcState.current >= fcState.cards.length - 1) return;
  fcState.current++;
  fcState.flipped = false;
  renderFlashcardsView(fcState.filter);
}

function fcPrev() {
  if (!fcState || fcState.current <= 0) return;
  fcState.current--;
  fcState.flipped = false;
  renderFlashcardsView(fcState.filter);
}

function fcResetKnown() {
  showModal(
    'Reset Flashcard Progress?',
    'This will clear all cards marked as "Know It". Your module and exam progress is not affected.',
    `<button class="btn" style="background:var(--border);color:var(--text);" onclick="hideModal()">Cancel</button>
     <button class="btn btn-danger" onclick="FC.resetAll();hideModal();renderFlashcardsView(fcState ? fcState.filter : null);">Reset</button>`
  );
}

// ── Modal ─────────────────────────────────────────────────────────
function showModal(title, body, actionsHtml) {
  document.getElementById('modal-content').innerHTML = `<h2>${title}</h2><p>${body}</p>`;
  document.getElementById('modal-actions').innerHTML = actionsHtml;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function hideModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}
document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) hideModal();
});

// ── Boot ──────────────────────────────────────────────────────────
if (typeof initAuth === 'function') initAuth();

// ── Utilities ─────────────────────────────────────────────────────
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
