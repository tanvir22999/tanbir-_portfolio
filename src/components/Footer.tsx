const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Md Tanbir Hossain
      </p>
      <p className="text-xs text-muted-foreground">
        Built with passion & code
      </p>
    </div>
  </footer>
);

export default Footer;
