function Contact({ contact,labels }) {
  return (
    <section className="bg-light-surface dark:bg-dark-surface p-4 rounded shadow shadow-md transition-colors duration-500">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4 transition-colors duration-500">{labels.contact}</h3>
      <ul className="text-light-text-secondary dark:text-dark-text-secondary space-y-1 transition-colors duration-500">
        <li><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-light-text-secondary hover:underline">{contact.email}</a></li>
        <li><strong>{labels.phone}:</strong> {contact.phone}</li>
        <li><strong>{labels.location}:</strong> {contact.location.join(", ")}</li>
      </ul>
    </section>
  );
}

export default Contact;