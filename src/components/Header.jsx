import './Header.css';

export default function Header({ className, breadcrumb }) {
  return (
    <header className={`header ${className || ""}`}>
      <div className="header-inner">
        <h1>Teknolojik Yemekler</h1>
      </div>
      {breadcrumb && (
        <div className="breadcrumb">
          {breadcrumb}
        </div>
      )}
    </header>
  );
}