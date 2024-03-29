import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

function ItemProject({ title, type, slug, img }: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a href={`/projetos/${slug}`}>
            Saiba mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}

export default ItemProject;
