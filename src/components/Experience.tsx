"use client";

const EXPERIENCE = [
  {
    title: "Prediction of Teen Phone Addiction",
    year: "2025",
    tags: ["Python", "Scikit-learn", "ML", "KNN", "Naive Bayes", "Decision Tree", "Logistic Regression"],
    desc: "Built ML classification models to predict teen phone addiction and heart disease risk. Applied feature selection, model training, and evaluation using accuracy and F1-score metrics. Handled challenges like overfitting and ethical data use.",
  },
  {
    title: "SkillBridge: AI-Powered Internship & Job Matching Platform",
    year: "2025",
    tags: ["React.js", "Node.js", "MongoDB", "Python", "AI"],
    desc: "Full-stack web application that matches students and graduates with internships using a smart job-matching engine, resume analysis, and recruiter dashboard. Combines intelligent automation with user-friendly interface design.",
  },
];

export default function Experience() {
  return (
    <section className="center-section fade-in-section" id="experience">
      <span className="section-eyebrow center">Work &amp; Projects</span>
      <h2 className="section-title center">Experience</h2>

      <div className="exp-grid">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="exp-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="exp-header">
              <span className="exp-year">{exp.year}</span>
            </div>
            <h3 className="exp-title">{exp.title}</h3>
            <p className="exp-desc">{exp.desc}</p>
            <div className="exp-tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="exp-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
