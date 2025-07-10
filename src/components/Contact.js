function Contact({ contact }) {
  return (
    <section className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">İletişim</h3>
      <ul className="text-gray-700 space-y-1">
        <li><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a></li>
        <li><strong>Telefon:</strong> {contact.phone}</li>
        <li><strong>Konum:</strong> {contact.location.join(", ")}</li>
      </ul>
    </section>
  );
}

export default Contact;