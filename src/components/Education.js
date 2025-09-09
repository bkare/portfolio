
function Education({ education,labels }) {
  return (
    <section className="bg-light-surface dark:bg-dark-surface p-4 rounded shadow shadow-md mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-500">{labels.education}</h3>
      <div className="space-y-4">
        {education.map((edu, i) => {
          const school = Array.isArray(edu.school) ? edu.school.join(" | ") : edu.school;
          const start = Array.isArray(edu.start) ? edu.start.join(" ") : edu.start;
          const end = Array.isArray(edu.end) ? edu.end.join(" ") : edu.end;

          return (
            <div key={i} className="border-l-4 border-dark-surface dark:border-light-surface pl-4 transition-colors duration-500">
              <h4 className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary transition-colors duration-500">{school}</h4>
              <p className="text-light-text-secondary italic dark:text-dark-text-secondary transition-colors duration-500">{edu.department}</p>
              <p className="text-sm text-light-text-secondary italic dark:text-dark-text-secondary transition-colors duration-500">
                {start} – {end}
              </p>
              <p className="text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-500">
                <strong>{labels.country}:</strong> {edu.country}
              </p>
              {edu.language && (
                <p className="text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-500">
                  <strong>{labels.language}:</strong> {edu.language}
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