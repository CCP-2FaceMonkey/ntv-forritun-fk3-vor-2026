import { useState, type ReactNode } from 'react';

type MouseState = {
  x: number;
  y: number;
  isHovering: boolean;
};

type MouseTrackerProps = {
  children: (state: MouseState) => ReactNode;
};

function MouseTracker({ children }: MouseTrackerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ minHeight: '200px' }}
    >
      {children({ x: position.x, y: position.y, isHovering })}
    </div>
  );
}

export { MouseTracker };
