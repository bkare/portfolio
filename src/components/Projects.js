function Projects({ projects }) {
  return (
    <section className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">Projeler</h3>
      <div className="space-y-6">
        {projects.map((proj, i) => (
          <div key={i} className="border border-gray-200 p-4 rounded">
            <h4 className="text-lg font-bold text-blue-700">{proj.title}</h4>
            <p className="text-gray-600 italic">{proj.address}</p>
            <p className="text-sm text-gray-500 mb-2">
              {proj.start} – {proj.end}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Görev:</strong> {proj.position}
            </p>

            {/* Sistemler */}
            <ul className="list-disc list-inside space-y-2">
              {Object.entries(proj.systems).map(([system, items], j) => (
                <li key={j}>
                  <strong>{system}</strong>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
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