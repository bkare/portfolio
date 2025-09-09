function ControlBar({ language, setLanguage, darkMode, setDarkMode, generatePDF, labels }) {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 bg-light-background dark:bg-dark-background p-2 rounded-lg shadow-md z-50 transition-colors duration-500">
      {/* Dil Seçici */}
      <div className="flex">
        <button
          onClick={() => setLanguage("tr")}
          className={`px-2 py-1 rounded-l text-sm shadow ${
            language === "tr" ? "bg-dark-surface text-dark-text-primary" : "bg-light-surface text-light-text-primary"
          }`}
        >
          TR
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 rounded-r text-sm shadow ${
            language === "en" ? "bg-dark-surface text-dark-text-primary" : "bg-light-surface text-light-text-primary"
          }`}
        >
          EN
        </button>
      </div>

      {/* Dark/Light Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-2 py-1 bg-dark-surface text-light-text-primary dark:text-dark-text-primary rounded text-sm"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* PDF İndir */}
      <button
        onClick={generatePDF}
        className="w-36 px-2 py-1 bg-dark-surface text-dark-text-primary rounded text-sm"
      >
        {labels.download}
      </button>
    </div>
  );
}

export default ControlBar;