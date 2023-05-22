import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ExpItem from './ExpItem';

export function Experience() {
  return (
    <Container>
      <SectionTitle title="Formação" />

      <section>
        <ExpItem
          year="2021"
          title="Desenvolvedor Web Full Stack"
          description="Lorem ipsu damata norenga lidivais ipsum nara"
        />
        <ExpItem
          year="2021"
          title="Desenvolvedor Web Full Stack"
          description="Lorem ipsu damata norenga lidivais ipsum nara"
        />
        <ExpItem
          year="2021"
          title="Desenvolvedor Web Full Stack"
          description="Lorem ipsu damata norenga lidivais ipsum nara"
        />
        <ExpItem
          year="2021"
          title="Desenvolvedor Web Full Stack"
          description="Lorem ipsu damata norenga lidivais ipsum nara"
        />
      </section>
    </Container>
  );
}
