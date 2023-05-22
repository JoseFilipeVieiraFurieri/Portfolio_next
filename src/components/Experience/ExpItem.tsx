import { ItemContainer } from './styles';

interface ExpProps {
  year: string;
  title: string;
  description?: string;
}

function ExpItem({ year, title, description }: ExpProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExpItem;
