function Header({ name, title, contact }) {
  const fullName = `${name[0]} ${name[1]}`;

  return (
    <header className="text-center py-6 bg-gray-100 rounded mb-6 shadow">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700">{fullName}</h1>
      <h2 className="text-lg text-gray-600 mt-2">{title}</h2>
      <div className="mt-3 space-x-4">
        {contact.github && (
          <a
            href={contact.github}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;