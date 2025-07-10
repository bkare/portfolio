import { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const [data, setData] = useState(null);

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
    <div className="px-4 sm:px-6 md:px-8 py-8 max-w-4xl mx-auto space-y-6">
      {/* Header bileşeni */}
      <Header name={data.name} title={data.title} contact={data.contact} />

      {/* About bileşeni */}
      <About about={data.about} />

      {/* Contact bileşeni */}
      <Contact contact={data.contact} />

      {/* Skills bileşeni */}
      <Skills skills={data.skills} />

      {/* Experience bileşeni */}
      <Experience experiences={data.experiences} />

      {/* Projects bileşeni */}
      <Projects projects={data.projects} />

      {/* Education bileşeni */}
      <Education education={data.education} />

    </div>
  );
}

export default App;