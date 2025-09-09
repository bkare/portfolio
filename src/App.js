import { useEffect, useState, useRef, useTransition } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ControlBar from "./components/ControlBar";
import html2pdf from "html2pdf.js";
import PdfLayout from "./components/PdfLayout";

function App() {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [language, setLanguage] = useState("tr");
  const selectedData = data?.[language];

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    fetch("/bb.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Veri alınamadı:", err));
  }, []);

  // PDF Fonksiyonu
  const pdfRef = useRef();

  const generatePDF = () => {
    if (pdfRef.current) {
      html2pdf().from(pdfRef.current).set({
        margin: 0,
        filename: "bdurmuslarCV.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      }).save();
    }
  };

  if (!data || !data[language]) {
    return <div className="text-center p-10">Veri yükleniyor...</div>;
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <div className="min-h-screen bg-light-background text-dark-text-secondary dark:bg-dark-background dark:text-dark-text-secondary transition-colors duration-500">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-6">

      <ControlBar
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        generatePDF={generatePDF}
        labels={selectedData.labels}
      />

      {/* Header bileşeni */}
      <Header 
        name={selectedData.name} 
        title={selectedData.title} 
        contact={selectedData.contact}
        description={selectedData.description}
        description_url={selectedData.description_url} />

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:divide-x md:divide-light-surface">
        <div className="flex-1 md:pr-6">
          {/* About bileşeni */}
          <About 
          about={selectedData.about}
          labels={selectedData.labels} />
        </div>
        <div className="flex-1 md:pl-6">
          {/* Contact bileşeni */}
          <Contact 
          contact={selectedData.contact}
          labels={selectedData.labels} />
        </div>
      </div>

      {/* Experience bileşeni */}
      <Experience 
      experiences={selectedData.experiences}
      labels={selectedData.labels} />

      {/* Skills bileşeni */}
      <Skills 
      skills={selectedData.skills} 
      language={selectedData.language} 
      labels={selectedData.labels}/>

      {/* Projects bileşeni */}
      <Projects 
      projects={selectedData.projects} 
      labels={selectedData.labels}/>

      {/* Education bileşeni */}
      <Education
      education={selectedData.education}
      labels={selectedData.labels} />

      {/* PDF için gizli layout */}
      <div className="hidden">
          <PdfLayout ref={pdfRef} data={selectedData} labels={selectedData.labels} />
      </div>
    </div></div></div>
  );
}

export default App;