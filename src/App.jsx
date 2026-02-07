import Masthead from './components/Masthead'
import LeadStory from './components/LeadStory'
import PreviousEdition from './components/PreviousEdition'
import KpmgSection from './components/KpmgSection'
import Classified from './components/Classified'

import TechTicker from './components/TechTicker'
import Education from './components/Education'
import ResumeSection from './components/ResumeSection'
import Footer from './components/Footer'
import StickyNav from './components/StickyNav'

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <StickyNav />

      <Masthead />

      <div style={{ height: 60 }} />

      <div id="classified">
        <Classified />
      </div>

      <div style={{ height: 'var(--section-gap)' }} />

      <div id="lead-story">
        <LeadStory />
      </div>

      <div style={{ height: 'var(--section-gap)' }} />

      <div id="previous">
        <PreviousEdition />
      </div>

      <div style={{ height: 'var(--section-gap)' }} />

      <div id="kpmg">
        <KpmgSection />
      </div>

      <div style={{ height: 80 }} />

      <TechTicker />

      <div style={{ height: 'var(--section-gap)' }} />

      <div id="education">
        <Education />
      </div>

      <div style={{ height: 'var(--section-gap)' }} />

      <div id="resume">
        <ResumeSection />
      </div>

      <div style={{ height: 'var(--section-gap)' }} />

      <Footer />
    </div>
  )
}

export default App
