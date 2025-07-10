function Header({ name, title, contact }) {
  const fullName = `${name[0]} ${name[1]}`;

  return (
    <header className="text-center py-6 bg-gray-100 dark:bg-gray-800 rounded mb-6 shadow transition-colors duration-500">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 dark:text-blue-200 transition-colors duration-400">{fullName}</h1>
      <h2 className="text-lg text-gray-600 dark:text-gray-200 mt-2 transition-colors duration-400">{title}</h2>
      <div className="mt-3 space-x-4">
        {contact.github && (
          <a
            href={contact.github}
            className="text-blue-500 dark:text-blue-300 hover:underline transition-colors duration-400"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            className="text-blue-500 dark:text-blue-300 hover:underline transition-colors duration-400"
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