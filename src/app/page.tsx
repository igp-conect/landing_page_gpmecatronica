import "../../public/assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "glightbox/dist/css/glightbox.css";

import { PageHeader } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ScrollTopAndPreloader } from "./components/ScrollTopAndPreloader";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { CallToAction } from "./components/CallToAction";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Team } from "./components/Team";
import { ResearchTeams } from "./components/ResearchTeams";

export default function Home() {
  return (
    <>
      {/* =======================================================
  * Template Name: Impact
  * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
  * Updated: Aug 07 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
      <PageHeader />
      <main className="main">
        <Hero />
        <About />
        <Portfolio />
        <Team />
        <ResearchTeams />
        <CallToAction />
        <Services />
        <FAQ />
        <Contact />
        <ScrollTopAndPreloader />
        <Footer />
      </main>
    </>
  );
}
