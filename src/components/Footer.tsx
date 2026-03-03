export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/30 sm:flex-row">
        <p>&copy; 2026 Boon Town &middot; boon.town</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-white/50">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white/50">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
