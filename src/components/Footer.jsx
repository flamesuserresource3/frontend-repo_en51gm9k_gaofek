export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-sm">Crafted with a love for interactivity and clean design.</p>
            <p className="text-white/40 text-xs mt-1">RD Animated Laptop • © {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#home" className="text-white/70 hover:text-white text-sm">Home</a>
            <a href="#features" className="text-white/70 hover:text-white text-sm">Features</a>
            <a href="#showcase" className="text-white/70 hover:text-white text-sm">Showcase</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
