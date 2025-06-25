import "../../public/assets/css/main.css";
import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../../public/assets/vendor/swiper/swiper-bundle.min.css";
import "../../public/assets/vendor/aos/aos.css";
import "../../public/assets/vendor/aos/aos.js";

import { PageHeader } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { ScrollTopAndPreloader } from "./components/ScrollTopAndPreloader";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { CallToAction } from "./components/CallToAction";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { RecentPosts } from "./components/RecentPosts";
import { Team } from "./components/Team";

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
        <CallToAction />
        <Services />
        <RecentPosts />
        <FAQ />
        <Contact />
        <ScrollTopAndPreloader />
        <Footer />
      </main>
    </>
  );
}
