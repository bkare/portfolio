function Header({ name, title, contact, description }) {
  const fullName = `${name[0]} ${name[1]}`;

  return (
    <header className="text-center py-6 bg-gray-100 dark:bg-gray-800 rounded mb-6 shadow transition-colors duration-500">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Logo yuvarlak çerçeve içinde */}
        <div className="w-24 h-24 ml-4 rounded-full border-2 border-blue-500 dark:border-gray-300 overflow-hidden shadow-md transition-colors duration:500">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bilgiler: Ad, Unvan, Linkler, Açıklama */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 transition-colors duration:500">{fullName}</h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration:500">{title}</h2>
          <div className="mt-2 space-x-4">
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

          {/* Açıklama metni */}
          {description && (
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 max-w-xl italic">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;