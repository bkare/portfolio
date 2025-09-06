function About({ about, labels }) {
  const formatDate = (arr) => arr?.join(".") || "-";

  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 transition-colors duration-400">{labels.about}</h3>
      <ul className="text-gray-700 dark:text-gray-100 space-y-1 transition-colors duration-400">
        <li><strong>{labels.birthday}:</strong> {formatDate(about.b_date)}</li>
        <li><strong>{labels.gender}:</strong> {about.gender}</li>
        <li><strong>{labels.nationality}:</strong> {about.nationality}</li>
        <li><strong>{labels.d_licence}:</strong> {about.d_licence.join(", ")}</li>
        <li><strong>{labels.military}:</strong> {about.military}</li>
      </ul>
    </section>
  );
}

export default About;