function Projects({ projects, labels }) {
  if (!projects || projects.length === 0) return null;
  
  return (
      <section className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6 transition-colors duration-500">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 transition-colors duration-400">{labels.projects}</h3>
        <div className="space-y-6">
          {projects.map((proj, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 p-4 rounded transition-colors duration-400">
              <h4 className="text-lg font-bold text-blue-400 dark:text-blue-500">{proj.title}</h4>
              <p className="text-gray-600 dark:text-gray-200 italic">{proj.address}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                {proj.start} – {proj.end}
              </p>
              <p className="text-blue-700 dark:text-blue-300 mb-2 transition-colors duration-400">
                <strong>{labels.position}:</strong> {proj.position}
              </p>

              {/* Sistemler */}
              <ul className="list-disc list-inside space-y-2">
                {Object.entries(proj.systems).map(([system, items], j) => (
                  <li key={j}>
                    <strong>{system}</strong>
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-700 dark:text-gray-200">
                      {items.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
  );
}

export default Projects;