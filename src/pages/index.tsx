import SectionSkils from '../components/Skils/SectionSkils'
import { Home } from '../components/inicio/home'
import { Navbar } from '../components/Navbar/Navbar'
import { SectionProjects } from '../components/Projects/SectionProjects'
import { SectionAbout } from '../components/about/about'
import { SectionCertificates } from '../components/certificates/SectionCertificates'
import Footer from '../components/footer/Footer'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SectionAbout />
      <SectionSkils />
      <SectionProjects />
      <SectionCertificates />
      <Footer />
    </div>
  )
}

export default Index
