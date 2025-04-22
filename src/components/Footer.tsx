import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="text-xl font-bold text-primary mb-4">Connect</h3>
          <div className="social-links">
            <a href="https://twitter.com/bugscrii" className="social-link hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://discord.gg/bugscrii" className="social-link hover:text-primary transition-colors">
              Discord
            </a>
            <a href="https://instagram.com/bugscrii" className="social-link hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="text-xl font-bold text-primary mb-4">Resources</h3>
          <div className="social-links">
            <Link href="/docs" className="social-link hover:text-primary transition-colors">
              Documentation
            </Link>
            <Link href="/faq" className="social-link hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/support" className="social-link hover:text-primary transition-colors">
              Support
            </Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="text-xl font-bold text-primary mb-4">Legal</h3>
          <div className="social-links">
            <Link href="/privacy" className="social-link hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="social-link hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bugs-crii. All rights reserved.</p>
      </div>
    </footer>
  )
} 