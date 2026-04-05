"use client";

const techSkills = ["Python","Java","HTML","CSS","JavaScript","Flask","Node.js","Express","React.js","Tailwind CSS","MongoDB"];
const tools = [
  { name: "Git", icon: "⎇" },
  { name: "Excel", icon: "⊞" },
  { name: "Jupyter", icon: "◈" },
  { name: "VS Code", icon: "⌨" },
  { name: "IntelliJ", icon: "◉" },
];
const libraries = ["Pandas","NumPy","Scikit-learn","Matplotlib"];
const concepts = ["OOP","DSA","ML","Cloud Basics"];

export default function Skills() {
  return (
    <section className="split-section split-section-reverse" id="skills">
      <div className="split-deco split-deco-left">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="deco-code">
          <defs>
            <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          {/* Abstract grid/code pattern */}
          {[...Array(8)].map((_, row) =>
            [...Array(5)].map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 70 + 20}
                y={row * 45 + 20}
                width={Math.random() > 0.5 ? 50 : 30}
                height="8"
                rx="4"
                fill="url(#codeGrad)"
                opacity={0.15 + Math.random() * 0.35}
              />
            ))
          )}
          <text x="80" y="220" fontFamily="monospace" fontSize="90" fill="#00D4AA" opacity="0.08">{"</>"}</text>
          <circle cx="300" cy="80" r="50" fill="none" stroke="#4F8EF7" strokeWidth="1" strokeDasharray="5 10" opacity="0.25"/>
          <circle cx="100" cy="320" r="35" fill="none" stroke="#00D4AA" strokeWidth="1" strokeDasharray="3 8" opacity="0.2"/>
        </svg>
      </div>

      <div className="split-content split-right fade-in-section">
        <span className="section-eyebrow">My Arsenal</span>
        <h2 className="section-title">Skills &amp; Tools</h2>

        {/* Technical Skills */}
        <div className="skill-group">
          <h3 className="skill-group-label">Technical Skills</h3>
          <div className="skill-badges">
            {techSkills.map((s, i) => (
              <span
                key={s}
                className="badge badge-tech"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="skill-group">
          <h3 className="skill-group-label">Tools &amp; Platforms</h3>
          <div className="skill-badges">
            {tools.map((t, i) => (
              <span
                key={t.name}
                className="badge badge-tool"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="tool-icon">{t.icon}</span> {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Libraries */}
        <div className="skill-group">
          <h3 className="skill-group-label">Libraries</h3>
          <div className="skill-badges">
            {libraries.map((l, i) => (
              <span
                key={l}
                className="badge badge-lib"
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Concepts */}
        <div className="skill-group">
          <h3 className="skill-group-label">Concepts</h3>
          <div className="skill-badges">
            {concepts.map((c, i) => (
              <span
                key={c}
                className="badge badge-concept"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
