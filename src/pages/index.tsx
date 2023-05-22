import { HomeContainer } from '../styles/HomeStyles';
import { HomeHero } from '../components/HomeHero';
import Header from '../components/Header';
import { Experience } from '../components/Experience';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
      </main>
    </HomeContainer>
  );
}
