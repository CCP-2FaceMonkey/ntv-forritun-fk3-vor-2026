import { ThemeToggle } from '@theme/components/ThemeToggle';
import { Counter } from '@counter/components/Counter';

export default function Index() {
  return (
    <main className="main">
      <h1>Remix Theme App</h1>
      <p className="muted">A simple app with light and dark theme.</p>
      <ThemeToggle />
      <div className="card">
        <p className="muted">
          The theme follows your system preference on load. Use the button to
          switch for this session only.
        </p>
      </div>
      <Counter />
    </main>
  );
}
