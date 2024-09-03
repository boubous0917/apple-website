import Hero from "../src/components/Hero";
import Highlight from "../src/components/Highlight";
import Navbar from "../src/components/Navbar";
import Model from "../src/components/Model";
import Features from "../src/components/Features";
import HowItWorks from "../src/components/HowItWorks";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
