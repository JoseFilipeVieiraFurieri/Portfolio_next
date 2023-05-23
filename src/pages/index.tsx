import { HomeContainer } from '../styles/HomeStyles';
import { HomeHero } from '../components/HomeHero';
import Header from '../components/Header';
import { Experience } from '../components/Experience';
import { Projetos } from '../components/Projetos';
import Stacks from '../components/Stacks';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
        <Projetos />
        <Stacks />
      </main>
    </HomeContainer>
  );
}
