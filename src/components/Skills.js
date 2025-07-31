function Skills({ skills, language }) {
  const skillGroups = skills[0]; // bb.json'da skills bir array içinde geliyor

  const skillTitles = {
    "soft-skills": "Kişisel Yetkinlikler",
    "computer-skills": "Bilgisayar Becerileri",
    "special-skills": "Uzmanlık Alanları",
    "language-skills": "Dil Yetkinlikleri"
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6 transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-blue-400 mb-4 transition-colors duration-400">Yetenekler</h3>

      {Object.entries(skillGroups).map(([key, list]) => (
        <div key={key} className="mb-4">
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-100 mb-2 transition-colors duration-400">
            {skillTitles[key] || key}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {list.map((item, index) => (
              <li
                key={index}
                className="bg-blue-600 dark:bg-blue-300 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm shadow transition-colors duration-400"
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
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
            {skillTitles["language-skills"]}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {Object.entries(language[0]).map(([lang, level], i) => (
              <li
                key={i}
                className="bg-blue-600 dark:bg-blue-300 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm shadow transition-colors duration-400"
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