function Experience({ experiences, labels }) {
  return (
    <section className="bg-light-surface dark:bg-dark-surface p-4 rounded shadow shadow-md mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-500">{labels.experience}</h3>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-dark-surface dark:border-light-surface pl-4 transition-colors duration-500">
            <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary transition-colors duration-500">{exp.position}</h4>
            <p className="text-light-text-primary dark:text-dark-text-primary font-semibold italic transition-colors duration-500">{exp.company}</p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1 italic transition-colors duration-500">
              {exp.start?.join(" ")} – {exp.end ? exp.end.join(" ") : ""}
            </p>
            <p className="text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-500">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;