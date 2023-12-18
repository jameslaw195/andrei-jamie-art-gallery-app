import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <Navigation />
    </div>
  );
}
