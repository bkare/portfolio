function Experience({ experiences }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-blue-400 mb-4 transition-colors duration-400">İş Deneyimleri</h3>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-blue-500 dark:border-blue-200 pl-4">
            <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-200 transition-colors duration-400">{exp.position}</h4>
            <p className="text-gray-600 dark:text-gray-200 italic transition-colors duration-400">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-100 mb-1 transition-colors duration-400">
              {exp.start?.join(" ")} – {exp.end ? exp.end.join(" ") : "Devam ediyor"}
            </p>
            <p className="text-gray-700 dark:text-gray-200 transition-colors duration-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;