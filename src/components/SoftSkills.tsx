"use client";

const softSkills = [
  { icon: "💬", name: "Communication", desc: "Clear, concise and empathetic in every interaction." },
  { icon: "🧩", name: "Problem-solving", desc: "Breaking complex problems into elegant solutions." },
  { icon: "🤝", name: "Teamwork", desc: "Collaborating effectively to achieve shared goals." },
  { icon: "🌱", name: "Adaptability", desc: "Thriving in dynamic and fast-changing environments." },
  { icon: "⏱️", name: "Time Management", desc: "Prioritising tasks to meet deadlines consistently." },
];

export default function SoftSkills() {
  return (
    <section className="center-section fade-in-section" id="soft-skills">
      <span className="section-eyebrow center">People Skills</span>
      <h2 className="section-title center">Soft Skills</h2>
      <div className="soft-grid">
        {softSkills.map((skill, i) => (
          <div
            key={skill.name}
            className="soft-card"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className="soft-icon">{skill.icon}</span>
            <h3 className="soft-name">{skill.name}</h3>
            <p className="soft-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
