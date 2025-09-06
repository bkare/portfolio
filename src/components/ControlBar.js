function ControlBar({ language, setLanguage, darkMode, setDarkMode, generatePDF, labels }) {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg shadow-md z-50">
      {/* Dil Seçici */}
      <div className="flex">
        <button
          onClick={() => setLanguage("tr")}
          className={`px-2 py-1 rounded-l text-sm ${
            language === "tr" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-600 dark:text-white"
          }`}
        >
          TR
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 rounded-r text-sm ${
            language === "en" ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-600 dark:text-white"
          }`}
        >
          EN
        </button>
      </div>

      {/* Dark/Light Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-2 py-1 bg-yellow-400 dark:bg-gray-500 text-black dark:text-white rounded text-sm"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* PDF İndir */}
      <button
        onClick={generatePDF}
        className="px-2 py-1 bg-green-500 text-white rounded text-sm hover:scale-105 transition-transform"
      >
        {labels.download}
      </button>
    </div>
  );
}

export default ControlBar;