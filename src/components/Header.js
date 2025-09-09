function Header({ name, title, contact, description, description_url }) {
  const fullName = `${name[0]} ${name[1]}`;

  return (
    <header className="text-center py-6 bg-light-surface dark:bg-dark-surface rounded mb-6 shadow shadow-md transition-colors duration-500">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Logo yuvarlak çerçeve içinde */}
        <div className="w-24 h-24 ml-4 rounded-full border-2 border-light-background dark:border-dark-background overflow-hidden shadow-md transition-colors duration:500">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bilgiler: Ad, Unvan, Linkler, Açıklama */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <h1 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary transition-colors duration:500">{fullName}</h1>
          <h2 className="text-lg text-light-text-primary dark:text-dark-text-primary transition-colors duration:500">{title}</h2>
          <div className="mt-2 space-x-4">
            {contact.github && (
              <a
                href={contact.github}
                className="text-light-accent hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                className="text-light-accent hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>

          {/* Açıklama metni */}
          {description && (
            <p className="mt-3 text-sm text-light-text-secondary dark:text-dark-text-secondary max-w-xl italic">
              {description}
              <a
                href={description_url}
                className="text-light-accent hover:underline"
                target="_blank"
                rel="noreferrer">GitHub Repository</a>
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;