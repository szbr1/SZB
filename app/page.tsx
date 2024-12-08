import { div } from "framer-motion/client";
import ContactSection from "./contacts/page";
import Footer from "./footer/page";
import HomePage from "./home/page";
import InfoPage from "./info/page";
import Navbar from "./Navbar/page";

import Reviews from "./review/page";
import Products from "./review/page";


export default function Home() {
  return (
  <div className="bg-slate-900">

  
  <br />
  
<HomePage />

<Products />

<InfoPage />
<ContactSection />
<Footer />

  </div>
  );
}
