import React, { forwardRef } from "react";

const PdfLayout = forwardRef(({ data, labels }, ref) => {
  return (
    <div ref={ref} className="w-[210mm] min-h-[297mm] p-10 bg-white text-black">
      {/* Header */}
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">{data.name[0]} {data.name[1]}</h1>
        <h2 className="text-lg text-gray-700">{data.title}</h2>
      </header>

      {/* Contact */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{labels.contact}</h3>
        <ul className="text-sm">
          {data.contact.github && <li>GitHub: {data.contact.github}</li>}
          {data.contact.linkedin && <li>LinkedIn: {data.contact.linkedin}</li>}
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{labels.skills}</h3>
        {data.skills[0] && (
          <div className="text-sm space-y-2">
            <p><strong>Kişisel Yetenekler:</strong> {data.skills[0]["soft-skills"].join(", ")}</p>
            <p><strong>Bilgisayar Yetkinleri:</strong> {data.skills[0]["computer-skills"].join(", ")}</p>
            <p><strong>Uzmanlık Alanları:</strong> {data.skills[0]["special-skills"].join(", ")}</p>
          </div>
        )}
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{labels.experience}</h3>
        {data.experiences.map((exp, i) => (
          <div key={i} className="mb-3">
            <h4 className="text-lg font-bold">{exp.company}</h4>
            <p className="text-sm italic">{exp.start} – {exp.end || "Devam"} | {exp.position}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{labels.projects}</h3>
        {data.projects.map((proj, i) => (
          <div key={i} className="mb-3">
            <h4 className="text-lg font-bold">{proj.title}</h4>
            <p className="text-sm italic">{proj.address} | {proj.start} – {proj.end}</p>
            <p className="text-sm mb-1"><strong>{labels.position}:</strong> {proj.position}</p>
            {Object.entries(proj.systems).map(([system, items], j) => (
              <p key={j} className="text-sm"><strong>{system}:</strong> {items.join(", ")}</p>
            ))}
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{labels.education}</h3>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <h4 className="text-lg font-bold">{edu.institution}</h4>
            <p className="text-sm">{edu.degree} ({edu.year}) - {edu.language}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t pt-4 mt-6 text-center text-xs text-gray-500">
        Burak Durmuşlar · {new Date().getFullYear()}
      </footer>
    </div>
  );
});

export default PdfLayout;