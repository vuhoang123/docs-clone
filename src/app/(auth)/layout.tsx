interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="d-flex ">
      <nav>AuthNavbar</nav>
      {children}
    </div>
  );
};
export default AuthLayout;
