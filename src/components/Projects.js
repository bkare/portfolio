function Projects({ projects, labels }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-light-surface dark:bg-dark-surface p-4 rounded shadow-md mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-500">
        {labels.projects}
      </h3>

      <div className="space-y-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border border-dark-surface dark:border-light-surface p-4 rounded-lg shadow-sm transition-colors duration-500">
            {/* Proje Bilgileri */}
            <h4 className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary transition-colors duration-500">
              {proj.title}
            </h4>
            <p className="text-light-text-secondary dark:text-dark-text-secondary italic transition-colors duration-500">
              {proj.address}
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary italic mb-2 transition-colors duration-500">
              {proj.start} – {proj.end}
            </p>
            <p className="text-light-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-500">
              <strong>{labels.position}:</strong> {proj.position}
            </p>

            {/* Sistemler - Accordion */}
            <div className="space-y-2">
              {Object.entries(proj.systems).map(([system, items], j) => (
                <details
                  key={j}
                  className="bg-light-surface dark:bg-dark-surface border border-dark-surface dark:border-light-surface rounded-lg p-3 shadow-md transition-colors duration-500">
                  <summary className="cursor-pointer font-semibold text-light-text-primary dark:text-dark-text-primary transition-colors duration-500">
                    {system}
                  </summary>
                  <ul className="flex flex-wrap gap-2 mt-3">
                    {items.map((item, k) => (
                      <li
                        key={k}
                        className="bg-dark-surface text-dark-text-primary dark:bg-light-surface dark:text-light-text-primary text-xs px-3 py-1 rounded-full shadow-sm transition-colors duration-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;