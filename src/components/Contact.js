function Contact({ contact }) {
  return (
    <section className="bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-blue-400 mb-4 transition-colors duration-400">İletişim</h3>
      <ul className="text-gray-700 dark:text-gray-100 space-y-1 transition-colors duration-400">
        <li><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a></li>
        <li><strong>Telefon:</strong> {contact.phone}</li>
        <li><strong>Konum:</strong> {contact.location.join(", ")}</li>
      </ul>
    </section>
  );
}

export default Contact;