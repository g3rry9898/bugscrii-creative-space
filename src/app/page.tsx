'use client';

import Card from '@/components/Card';
import CyberTerminal from '@/components/CyberTerminal';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('music');

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4321);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className={`relative ${glitchActive ? 'logo-glitch' : ''}`}>
                <Image
                  src="/bugs-crii-logo.jpg"
                  alt="BUGS-CRII Logo"
                  width={40}
                  height={40}
                  className="relative hover:scale-110 transition-transform duration-300 rounded-full bg-black"
                  style={{ 
                    mixBlendMode: 'screen',
                    transform: isHovered ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)` : 'none',
                    transition: 'transform 0.1s ease-out'
                  }}
                />
                {glitchActive && (
                  <>
                    <div className="absolute inset-0 logo-glitch-r" style={{ backgroundImage: `url(/bugs-crii-logo.jpg)` }}></div>
                    <div className="absolute inset-0 logo-glitch-g" style={{ backgroundImage: `url(/bugs-crii-logo.jpg)` }}></div>
                    <div className="absolute inset-0 logo-glitch-b" style={{ backgroundImage: `url(/bugs-crii-logo.jpg)` }}></div>
                  </>
                )}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
            <span className="text-xl font-bold text-primary hover:text-secondary transition-colors duration-300">BUGS-CRII</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Music</a>
            <a href="#" className="nav-link">Community</a>
            <a href="#" className="nav-link">News</a>
          </div>
        </div>
      </nav>

      {/* Main Content with padding for navbar */}
      <div className="space-y-12 pt-16">
        {/* Video Section */}
        <section className="comic-panel">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="BUGS-CRII Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Hero Section with Logo */}
        <section className="hero-section relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative group mb-8">
              {/* Animated background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 group-hover:opacity-70 transition duration-500 blur-lg animate-pulse"></div>
              {/* Rotating glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-30"></div>
              {/* Logo container */}
              <div className={`relative transform hover:scale-105 transition-transform duration-500 ${glitchActive ? 'logo-glitch' : ''}`}>
                <Image
                  src="/bugs-crii-logo.jpg"
                  alt="BUGS-CRII Logo"
                  width={200}
                  height={200}
                  className="rounded-full bg-black"
                  style={{ mixBlendMode: 'screen' }}
                />
                {glitchActive && (
                  <>
                    <div className="absolute inset-0 logo-glitch-r" style={{ backgroundImage: `url(/bugs-crii-logo.jpg)` }}></div>
                    <div className="absolute inset-0 logo-glitch-g" style={{ backgroundImage: `url(/bugs-crii-logo.jpg)` }}></div>
                    <div className="absolute inset-0 logo-glitch-b" style={{ backgroundImage: `url(/bugs-crii-logo.jpg)` }}></div>
                  </>
                )}
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-scanline rounded-full opacity-10"></div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-primary animate-bounce">
              Welcome to <span className="text-secondary glitch-text">BUGS-CRII</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Your creative label for innovative music and art. Join us in exploring the boundaries of creativity.
            </p>
            <div className="flex space-x-4">
              <a href="/community" className="button">
                Join Community
              </a>
            </div>
          </div>
          <div className="action-lines"></div>
        </section>

        {/* Cyber Terminal - Always Active */}
        <section className="comic-panel terminal-container">
          <CyberTerminal
            lines={[
              "BUGS-CRII SYSTEM ACTIVE",
              "Loading creative modules...",
              "Artist network connection established",
              "Latest update: Hydrogen Bond - Schoolin' in Session",
              "Release status: COMING SOON",
              "Community engagement: HIGH",
              "Creative energy levels: MAXIMUM",
              "System check: All systems operational",
              "Preparing for album launch...",
              "Stay tuned for updates..."
            ]}
            typingSpeed={30}
            glitchFrequency={0.2}
          />
        </section>

        {/* Music Section */}
        <section className="comic-panel">
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative">
                <div className="coming-soon-badge">COMING SOON</div>
                <h3 className="text-2xl font-bold text-secondary">Hydrogen Bond</h3>
                <h4 className="text-xl text-accent">Schoolin' in Session</h4>
                <p className="text-lg mt-4">Pre-save now to be the first to hear it when it drops</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a href="#" className="button">Pre-save</a>
                  <a href="#" className="button">Learn More</a>
                  <a 
                    href="https://interactive-album-listening-app-sy74.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button"
                  >
                    Interactive Preview
                  </a>
                </div>
              </div>
              
              {/* Featured Tracks */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Featured Tracks</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">🎵</span>
                      <div>
                        <h4 className="font-bold">Track Title</h4>
                        <p className="text-sm text-gray-400">Hydrogen Bond</p>
                      </div>
                    </div>
                    <button className="button">Preview</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">🎵</span>
                      <div>
                        <h4 className="font-bold">Track Title</h4>
                        <p className="text-sm text-gray-400">Hydrogen Bond</p>
                      </div>
                    </div>
                    <button className="button">Preview</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🎵</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="coming-soon-overlay">COMING SOON</div>
                </div>
              </div>
              
              {/* Release Timeline */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Release Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div>
                      <h4 className="font-bold">Pre-save Available</h4>
                      <p className="text-sm text-gray-400">Now</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <div>
                      <h4 className="font-bold">Single Release</h4>
                      <p className="text-sm text-gray-400">Coming Soon</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div>
                      <h4 className="font-bold">Album Release</h4>
                      <p className="text-sm text-gray-400">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Content */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Related Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="primary">
                <h4 className="text-xl font-bold mb-2">Artist Interview</h4>
                <p className="mb-4">Get to know Hydrogen Bond and their creative process</p>
                <button className="button">Watch Now</button>
              </Card>
              <Card variant="secondary">
                <h4 className="text-xl font-bold mb-2">Behind the Scenes</h4>
                <p className="mb-4">Exclusive look at the album creation process</p>
                <button className="button">View Gallery</button>
              </Card>
              <Card variant="primary">
                <h4 className="text-xl font-bold mb-2">Community Reactions</h4>
                <p className="mb-4">See what fans are saying about the upcoming release</p>
                <button className="button">Join Discussion</button>
              </Card>
            </div>
          </div>
        </section>

        {/* Artist Spotlight */}
        <section className="comic-panel">
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Artist Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Hydrogen Bond</h3>
              <p className="text-lg">Upcoming artist with a unique sound that blends multiple genres.</p>
              <div className="flex space-x-4">
                <a href="#" className="button">View Profile</a>
                <a href="#" className="button">Follow</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🎤</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="sound-effect">NEW ARTIST!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="comic-panel">
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Join the Bug Army</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Community Challenges</h3>
              <p className="text-lg">Participate in our creative challenges and showcase your talent.</p>
              <div className="flex space-x-4">
                <a href="#" className="button">View Challenges</a>
                <a href="#" className="button">Submit Entry</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🎨</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="sound-effect">GET CREATIVE!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="primary">
              <h3 className="text-xl font-bold mb-4">Latest Drop</h3>
              <p className="mb-4">Check out our newest releases and exclusive content.</p>
              <button className="button">Explore</button>
            </Card>
            
            <Card variant="secondary">
              <h3 className="text-xl font-bold mb-4">Bug Army Challenge</h3>
              <p className="mb-4">Join our creative challenges and showcase your talent.</p>
              <button className="button">Participate</button>
            </Card>
            
            <Card variant="primary">
              <h3 className="text-xl font-bold mb-4">Limited Drop</h3>
              <p className="mb-4">Special edition releases and collectibles.</p>
              <button className="button">Shop Now</button>
            </Card>
          </div>
        </section>

        {/* Latest News */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="secondary">
              <h3 className="text-xl font-bold mb-4">Hydrogen Bond Album Announcement</h3>
              <p className="mb-4">"Schoolin' in Session" coming soon - stay tuned for the release date!</p>
              <div className="sound-effect">BOOM!</div>
            </Card>
            
            <Card variant="secondary">
              <h3 className="text-xl font-bold mb-4">Community Spotlight</h3>
              <p className="mb-4">Featured artists and their amazing creations.</p>
              <div className="sound-effect">POW!</div>
            </Card>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="comic-panel">
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-8">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="text-xl font-bold text-secondary">Album Release</h3>
                  <p className="text-lg">Hydrogen Bond - Schoolin' in Session</p>
                  <span className="text-accent">Coming Soon</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="text-xl font-bold text-secondary">Community Event</h3>
                  <p className="text-lg">Virtual Listening Party</p>
                  <span className="text-accent">TBA</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="text-xl font-bold text-secondary">New Artist Signing</h3>
                  <p className="text-lg">Stay tuned for announcements</p>
                  <span className="text-accent">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="comic-panel">
          <h2 className="text-3xl font-bold mb-8 text-primary glitch-text">Connect With Us</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="button">Instagram</a>
            <a href="#" className="button">Twitter</a>
            <a href="#" className="button">Discord</a>
            <a href="#" className="button">YouTube</a>
          </div>
        </section>

        {/* Interactive Tabs Section */}
        <section className="comic-panel">
          <div className="flex space-x-4 mb-8">
            <button 
              className={`tab-button ${activeTab === 'music' ? 'active' : ''}`}
              onClick={() => setActiveTab('music')}
            >
              Music
            </button>
            <button 
              className={`tab-button ${activeTab === 'artists' ? 'active' : ''}`}
              onClick={() => setActiveTab('artists')}
            >
              Artists
            </button>
            <button 
              className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
          </div>
          
          {activeTab === 'music' && (
            <div className="space-y-8">
              {/* Featured Albums */}
              <div className="grid grid-cols-1 gap-6">
                <div className="comic-panel p-6">
                  <div className="relative">
                    <div className="coming-soon-badge">COMING SOON</div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Schoolin' in Session</h3>
                    <p className="text-secondary mb-4">Hydrogen Bond</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="button">Pre-save</a>
                      <a 
                        href="https://interactive-album-listening-app-sy74.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button"
                      >
                        Interactive Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Music Videos Section */}
              <div className="comic-panel p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary glitch-text">Music Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_MUSIC_VIDEO_ID_1"
                      title="BUGS-CRII Music Video 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_MUSIC_VIDEO_ID_2"
                      title="BUGS-CRII Music Video 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Freestyle Videos Section */}
              <div className="comic-panel p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary glitch-text">Freestyle Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_FREESTYLE_ID_1"
                      title="BUGS-CRII Freestyle 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_FREESTYLE_ID_2"
                      title="BUGS-CRII Freestyle 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Open Mic Section */}
              <div className="comic-panel p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary glitch-text">Open Mic Sessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_OPEN_MIC_ID_1"
                      title="BUGS-CRII Open Mic 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_OPEN_MIC_ID_2"
                      title="BUGS-CRII Open Mic 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Album Experience */}
              <div className="comic-panel p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Interactive Album Experience</h3>
                <p className="text-secondary mb-4">Experience the upcoming album in a unique way</p>
                <a 
                  href="https://interactive-album-listening-app-sy74.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button"
                >
                  Try Interactive Preview
                </a>
              </div>
            </div>
          )}

          {activeTab === 'artists' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="primary">
                <h3 className="text-xl font-bold mb-4">Featured Artists</h3>
                <p className="mb-4">Discover our talented roster.</p>
                <button className="button">View All</button>
              </Card>
              <Card variant="secondary">
                <h3 className="text-xl font-bold mb-4">Artist Spotlight</h3>
                <p className="mb-4">Get to know our artists.</p>
                <button className="button">Read More</button>
              </Card>
              <Card variant="primary">
                <h3 className="text-xl font-bold mb-4">Collaborations</h3>
                <p className="mb-4">Special projects and features.</p>
                <button className="button">Explore</button>
              </Card>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="primary">
                <h3 className="text-xl font-bold mb-4">Live Shows</h3>
                <p className="mb-4">Upcoming performances.</p>
                <button className="button">Tickets</button>
              </Card>
              <Card variant="secondary">
                <h3 className="text-xl font-bold mb-4">Virtual Events</h3>
                <p className="mb-4">Online experiences.</p>
                <button className="button">Join</button>
              </Card>
              <Card variant="primary">
                <h3 className="text-xl font-bold mb-4">Community Events</h3>
                <p className="mb-4">Meet and connect.</p>
                <button className="button">RSVP</button>
              </Card>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 