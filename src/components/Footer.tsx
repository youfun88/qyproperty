export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#F8FAFC] text-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 md:px-16 max-w-7xl mx-auto">
        <div>
          <h4 className="text-lg font-bold text-on-surface mb-6">Quality Life, Yours</h4>
          <p className="text-slate-500 text-sm leading-loose">
            Architectural Investment Advisory for the modern Taiwanese global citizen.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-4">Quick Links</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a className="hover:text-gold transition-colors duration-200" href="#portfolio">Portfolio</a></li>
            <li><a className="hover:text-gold transition-colors duration-200" href="#services">Advisory Services</a></li>
            <li><a className="hover:text-gold transition-colors duration-200" href="#insights">Insights</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Company</h5>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a className="hover:text-gold transition-colors duration-200" href="#services">Advisory Services</a></li>
            <li><a className="hover:text-gold transition-colors duration-200" href="#cta">Contact</a></li>
            <li>
              <a className="hover:text-gold transition-colors duration-200" href="mailto:yufan@qyproperty.com">
                yufan@qyproperty.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">San Diego Office</h5>
          <address className="not-italic text-sm text-slate-500 leading-relaxed">
            3600 Torrey View Ct
            <br />
            San Diego, CA 92130
            <br />
            <a className="hover:text-gold transition-colors duration-200" href="mailto:yufan@qyproperty.com">
              yufan@qyproperty.com
            </a>
          </address>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-outline-variant/10 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} QY LLC. Quality Life, Yours is a brand of QY LLC.
      </div>
    </footer>
  );
}
