export const metadata = {
  title: "Authentication",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <header className="auth-header">Welcome to Auth</header>
      <main className="auth-content">{children}</main>
    </div>
  );
}
