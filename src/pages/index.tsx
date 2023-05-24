import { HomeContainer } from '../styles/HomeStyles';
import { HomeHero } from '../components/HomeHero';
import Header from '../components/Header';
import { Experience } from '../components/Experience';
import { Projetos } from '../components/Projetos';
import Stacks from '../components/Stacks';
import { FormContact } from '../components/FormContact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
        <Projetos />
        <Stacks />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
  );
}
