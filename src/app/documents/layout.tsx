interface DocumentLayoutProps {
  children: React.ReactNode;
}
const DocumentLayout = ({ children }: DocumentLayoutProps) => {
  return (
    <div className="d-flex ">
      <nav>documentNavbar</nav>
      {children}
    </div>
  );
};
export default DocumentLayout;
