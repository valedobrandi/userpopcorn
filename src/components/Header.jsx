export default function Header({ children }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>ReactPopcorn</h1>
      </div>
      {children}
    </nav>
  );
}
