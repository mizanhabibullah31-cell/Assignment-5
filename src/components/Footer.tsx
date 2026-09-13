export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
         
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-md bg-linear-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                DS
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="text-slate-400 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

           
            <div className="flex items-center space-x-5 pt-2 font-medium text-slate-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            {/* Product Column */}
            <div>
              <h4 className="font-bold text-slate-900 tracking-wider text-[11px] uppercase mb-4">
                Product
              </h4>
              <ul className="space-y-3 font-medium text-slate-500">
                <li>
                  <a href="#home" className="hover:text-slate-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="hover:text-slate-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-slate-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-bold text-slate-900 tracking-wider text-[11px] uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-3 font-medium text-slate-500">
                <li>
                  <a href="#about" className="hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-bold text-slate-900 tracking-wider text-[11px] uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-3 font-medium text-slate-500">
                <li>
                  <a href="#privacy" className="hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-slate-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6 font-medium">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}