import React from "react";
import "./PageLayout.css";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => (
  <section className="page-layout">
    <header className="page-header">
      <h1>{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </header>
    <main className="page-content">{children}</main>
  </section>
);

export default PageLayout;
