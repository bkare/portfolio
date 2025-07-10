
function Education({ education }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-blue-400 mb-4 transition-colors duration-400">Eğitim</h3>
      <div className="space-y-4">
        {education.map((edu, i) => {
          const school = Array.isArray(edu.school) ? edu.school.join(" | ") : edu.school;
          const end = Array.isArray(edu.end) ? edu.end.join(" ") : edu.end;

          return (
            <div key={i} className="border-l-4 border-blue-500 dark:border-blue-200 pl-4 transition-colors duration-400">
              <h4 className="text-lg font-bold text-blue-700 dark:text-blue-200 transition-colors duration-400">{school}</h4>
              <p className="text-gray-600 italic dark:text-gray-200 transition-colors duration-400">{edu.department}</p>
              <p className="text-sm text-gray-500 dark:text-gray-100 transition-colors duration-400">
                {edu.start} – {end}
              </p>
              <p className="text-gray-700 dark:text-gray-200 transition-colors duration-400">
                <strong>Ülke:</strong> {edu.country}
              </p>
              {edu.language && (
                <p className="text-gray-700 dark:text-gray-200 transition-colors duration-400">
                  <strong>Dil:</strong> {edu.language}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;