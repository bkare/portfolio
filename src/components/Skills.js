function Skills({ skills }) {
  const skillGroups = skills[0]; // bb.json'da skills bir array içinde geliyor

  const skillTitles = {
    "soft-skills": "Kişisel Yetkinlikler",
    "computer-skills": "Bilgisayar Becerileri",
    "special-skills": "Uzmanlık Alanları",
  };

  return (
    <section className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">Yetenekler</h3>

      {Object.entries(skillGroups).map(([key, list]) => (
        <div key={key} className="mb-4">
          <h4 className="text-lg font-medium text-gray-700 mb-2">
            {skillTitles[key] || key}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {list.map((item, index) => (
              <li
                key={index}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;