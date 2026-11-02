import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Solution from './components/Solution';
import Gallery from './components/Gallery';
import CameraDemo from './components/CameraDemo';
import Audience from './components/Audience';
import Team from './components/Team';
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Solution />
        <Gallery />
        <CameraDemo />
        <Audience />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}