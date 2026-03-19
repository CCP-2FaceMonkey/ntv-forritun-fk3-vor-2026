// Counter.tsx
import { useCounter } from '@counter/hooks/useCounter';

export const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="content">
        <button
          className="theme-toggle"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          -
        </button>
        <span className="muted">{state.count}</span>
        <button
          className="theme-toggle"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>
        <button
          className="theme-toggle"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
