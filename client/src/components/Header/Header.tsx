export const Header = () => {
  return (
    <header className="layout-header">
      <nav className="nav">
        <p className="webapp-name">norgesPAY</p>
        <a href="/" className="nav-link">
          Log in
        </a>
      </nav>
      <section className="alternating-messages">
        <div className="first-message"></div>
        <div className="second-message"></div>
      </section>
    </header>
  );
};
