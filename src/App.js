import './App.css';
import Header from './components/Header';
import './index.css'
import Hero from './pagesComponents/HeroSection'
import ProjectPage from './components/ProjectPage/ProjectPage';

import { useState } from 'react'; // Removed useEffect and useLocation since they are not being used
import {Routes, Route } from 'react-router-dom'
import useDarkMode from './hooks/useDarkMode';
import ProjectSection from './pagesComponents/ProjectsSection';
import AboutSection from './pagesComponents/AboutSection';
import ContactSection from './pagesComponents/ContactSection';
import { UIUXprojectsTools, portfoliosToolsImgs, littleLemonToolsImgs,
  katanImg, studyMaImg, portfoliosImgs, littleLemonImgs } from './components/imagesLists/imagesLists';

import { projectsData } from './projectsData/projectsData';




function App() {
  const [selectedTab, setSelectedTab] = useState('All');

  // Call the useDarkMode hook and retrieve the current theme and handleThemeSwitch function
  const { theme, handleThemeSwitch } = useDarkMode('dark'); // Provide an initial theme here, e.g. 'light'


  return (
    <div className={`
    max-w-424
    sm:w-full
    sm:max-w-screen-sm
    md:max-w-screen-md
    lg:max-w-screen-lg
    xl:max-w-screen-xl
    mx-auto my-6 px-6 md:px-8
    dark:bg-darkBackground-bgDark
    `}>
      <Header
        theme={theme}
        handleThemeSwitch={handleThemeSwitch}
        setSelectedTab={setSelectedTab}
      />
      <Routes>
        <Route path='/' element={<Hero selectedTab={selectedTab} theme={theme} />} />
        <Route path='/projects' element={<ProjectSection theme={theme} />} />
        <Route path='/about' element={<AboutSection theme={theme} />} />
        <Route path='/contact' element={<ContactSection theme={theme} />} />


        <Route path='/project-portfolios' element={<ProjectPage
          title={projectsData[0].title}
          subtitle={projectsData[0].subtitle}
          description={projectsData[0].description}
          logos={portfoliosToolsImgs}
          images={portfoliosImgs}
          demoLink='https://tacozaur.github.io/portfoliOS/'
          />} />
        <Route path='/project-littlelemon' element={<ProjectPage
          title={projectsData[1].title}
          subtitle={projectsData[1].subtitle}
          description={projectsData[1].description}
          logos={littleLemonToolsImgs}
          images={littleLemonImgs}
          demoLink='https://tacozaur.github.io/littlelemonrestaurant/'
        />} />
        <Route path='/project-studymate' element={<ProjectPage
          title={projectsData[2].title}
          subtitle={projectsData[2].subtitle}
          description={projectsData[2].description}
          logos={UIUXprojectsTools}
          images={studyMaImg}
          demoLink='https://www.behance.net/gallery/165755283/StudyMate-UIUX-Case-Study'
        />} />
        <Route path='/project-katan' element={<ProjectPage
          title={projectsData[3].title}
          subtitle={projectsData[3].subtitle}
          description={projectsData[3].description}
          logos={UIUXprojectsTools}
          images={katanImg}
          demoLink='https://www.behance.net/gallery/162209903/KATAN-Concept-Clothing-App-Case-Study'

        />} />
      </Routes>
    </div>
  );
}

export default App;
