import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const transforms: Record<string, string> = {
  up:    'translateY(32px)',
  down:  'translateY(-32px)',
  left:  'translateX(32px)',
  right: 'translateX(-32px)',
  none:  'none',
};

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
