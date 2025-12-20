export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 mt-12">
      <div className="px-12 md:px-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="heading-3 text-white mb-4">Contact</h3>
            <div className="body-text space-y-2 text-white/90">
              <p>
                <a href="mailto:info@ppiaachen.de" className="hover:text-primary-light transition-colors">
                  info@ppiaachen.de
                </a>
              </p>
              <p>
                <a href="tel:+4915679027862" className="hover:text-primary-light transition-colors">
                  +49 15679 027862 (TEL/WhatsApp)
                </a>
              </p>
              <p>
                An der Schanz 1, 52064 Aachen, Germany
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="heading-3 text-white mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/ppiaachen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-primary-light transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/ppiaachen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-primary-light transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.linkedin.com/company/ppiaachen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-primary-light transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.youtube.com/@ppiaachen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-primary-light transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://www.tiktok.com/@ppiaachen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-primary-light transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="heading-3 text-white mb-4">PPI Aachen</h3>
            <p className="body-text text-white/90">
              Mendukung dan membantu pelajar Indonesia di Aachen sejak 1956.<br />
              <em>Supporting and helping Indonesian students in Aachen since 1956.</em>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-text text-white/70 text-center md:text-left">
              © 2025 Perhimpunan Pelajar Indonesia di Aachen
            </p>
            <div className="flex gap-4">
              <a href="/impressum" className="body-text text-white/70 hover:text-primary-light transition-colors">
                Impressum & Datenschutzerklärung
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

