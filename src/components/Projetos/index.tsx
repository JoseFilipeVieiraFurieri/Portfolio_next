import Link from 'next/link';
import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ProjetosItem from './ProjetosItem';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Projetos" />

      <section>
        <ProjetosItem
          title="#Projeto 1"
          type="Website"
          slug="teste"
          img="teste"
        />
        <ProjetosItem
          title="#Projeto 2"
          type="Website"
          slug="teste"
          img="teste"
        />
        <ProjetosItem
          title="#Projeto 3"
          type="website"
          slug="teste"
          img="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a href="/projetos">Acessar outros Projetos</a>
        </Link>
      </button>
    </Container>
  );
}
