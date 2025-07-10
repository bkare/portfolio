function Experience({ experiences }) {
  return (
    <section className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">İş Deneyimleri</h3>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold text-blue-700">{exp.position}</h4>
            <p className="text-gray-600 italic">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-1">
              {exp.start?.join(" ")} – {exp.end ? exp.end.join(" ") : "Devam ediyor"}
            </p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;