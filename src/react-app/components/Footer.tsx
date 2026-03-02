export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-[hsl(270,70%,70%,0.08)]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground/60">
          © {currentYear} Priyanka Srivastava. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
