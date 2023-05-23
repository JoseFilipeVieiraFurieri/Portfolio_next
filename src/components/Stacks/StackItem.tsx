import { ReactNode } from 'react';
import { StackItemContainer } from './styles';

interface StackProps {
  title: string;
  icon: ReactNode;
}

function StackItem({ title, icon }: StackProps) {
  return (
    <StackItemContainer>
      <p>{title}</p>
      {icon}
    </StackItemContainer>
  );
}

export default StackItem;
