"use client";

const milestones = [
  {
    year: "2021 – 2022",
    institution: "Kendriya Vidyalaya Asansol",
    degree: "Secondary (10th)",
    current: false,
  },
  {
    year: "2022 – 2023",
    institution: "Kendriya Vidyalaya Asansol",
    degree: "Higher Secondary (12th)",
    current: false,
  },
  {
    year: "2023 – 2027",
    institution: "Asansol Engineering College",
    degree: "B.Tech — AI & ML",
    current: true,
  },
];

export default function Education() {
  return (
    <section className="center-section fade-in-section" id="education">
      <span className="section-eyebrow center">My Journey</span>
      <h2 className="section-title center">Education</h2>

      <div className="timeline">
        <div className="timeline-line" />
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className={`timeline-node ${m.current ? "timeline-node-current" : ""}`}>
              <span className="timeline-node-inner" />
            </div>
            <div className={`timeline-card ${m.current ? "timeline-card-current" : ""}`}>
              <span className="timeline-year">{m.year}</span>
              <h3 className="timeline-institution">{m.institution}</h3>
              <p className="timeline-degree">{m.degree}</p>
              {m.current && <span className="timeline-badge">● Current</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
