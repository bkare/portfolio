function About({ about }) {
  const formatDate = (arr) => arr?.join(".") || "-";

  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-blue-400 mb-4 transition-colors duration-400">Hakkımda</h3>
      <ul className="text-gray-700 dark:text-gray-100 space-y-1 transition-colors duration-400">
        <li><strong>Doğum Tarihi:</strong> {formatDate(about.b_date)}</li>
        <li><strong>Cinsiyet:</strong> {about.gender}</li>
        <li><strong>Uyruk:</strong> {about.nationality}</li>
        <li><strong>Ehliyet:</strong> {about.d_licence.join(", ")}</li>
        <li><strong>Askerlik:</strong> {about.military}</li>
      </ul>
    </section>
  );
}

export default About;