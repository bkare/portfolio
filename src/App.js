import { useEffect, useState, useTransition } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    fetch("/bb.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Veri alınamadı:", err));
  }, []);

  if (!data) {
    return <div className="text-center p-10">Veri yükleniyor...</div>;
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-6">
        <button onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 bg-gray-100 dark:bg-gray-900 text-sm px-3 py-1 rounded shadow hover:scale-105 transition-transform">
          {darkMode ? "☀️ Aydınlık Mod" : "🌙 Karanlık Mod"}
        </button>
      {/* Header bileşeni */}
      <Header name={data.name} title={data.title} contact={data.contact} />

      <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-300">
        <div className="flex-1 md:pr-6">
          {/* About bileşeni */}
          <About about={data.about} />
        </div>
        <div className="flex-1 md:pl-6">
          {/* Contact bileşeni */}
          <Contact contact={data.contact} />
        </div>
      </div>

      {/* Experience bileşeni */}
      <Experience experiences={data.experiences} />

      {/* Skills bileşeni */}
      <Skills skills={data.skills} />


      {/* Projects bileşeni */}
      <Projects projects={data.projects} />

      {/* Education bileşeni */}
      <Education education={data.education} />

    </div></div></div>
  );
}

export default App;