import NavigationMenu from './NavigationMenu';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <NavigationMenu />
      </header>
      <main>
        <section id="pagrindinis">
          <h2>Pagrindinis puslapis</h2>
          <p>Sveiki atvykę į pagrindinį puslapį.</p>
        </section>
        <section id="apie-mus">
          <h2>Apie mus</h2>
          <p>Čia galite sužinoti apie mus.</p>
        </section>
        <section id="kontaktai">
          <h2>Kontaktai</h2>
          <p>Susisiekite su mumis.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
