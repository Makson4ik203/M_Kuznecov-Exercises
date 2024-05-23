import './NavigationMenu.module.css'; // Importuojame CSS failą

function NavigationMenu() {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <a href="#pagrindinis" className="link">
            Pagrindinis
          </a>
        </li>
        <li className="li">
          <a href="#apie-mus" className="link">
            Apie mus
          </a>
        </li>
        <li className="li">
          <a href="#kontaktai" className="link">
            Kontaktai
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
