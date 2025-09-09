function Skills({ skills, language, labels }) {
  if (!skills || skills.length === 0) return null;

  const skillGroups = skills[0]; // bb.json'da skills bir array içinde geliyor

  const skillTitles = {
    "soft-skills": labels["soft-skills"],
    "computer-skills": labels["computer-skills"],
    "special-skills": labels["special-skills"],
    "language-skills": labels["language-skills"]
  };

  return (
    <section className="bg-light-surface dark:bg-dark-surface p-4 rounded shadow shadow-md mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-500">{labels.skills}</h3>

      {Object.entries(skillGroups).map(([key, list]) => (
        <div key={key} className="mb-4">
          <h4 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary mb-2 transition-colors duration-500">
            {skillTitles[key] || key}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {list.map((item, index) => (
              <li
                key={index}
                className="bg-dark-surface dark:bg-light-surface text-dark-text-primary dark:text-light-text-primary px-3 py-1 rounded-full text-sm shadow transition-colors duration-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* 💬 Ek: Dil Yetenekleri */}
      {language && language.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary mb-2 transition-colors duration-500">
            {skillTitles["language-skills"]}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {Object.entries(language[0]).map(([lang, level], i) => (
              <li
                key={i}
                className="bg-dark-surface dark:bg-light-surface text-dark-text-primary dark:text-light-text-primary px-3 py-1 rounded-full text-sm shadow transition-colors duration-500"
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)} – {level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;
