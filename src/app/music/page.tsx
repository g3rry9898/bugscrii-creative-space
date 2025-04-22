'use client';

import Card from '@/components/Card';
import { useEffect } from 'react';

const MusicPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center glitch-text">Music</h1>
      
      {/* Latest Release Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 glitch-text">Coming Soon</h2>
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
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🎵</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="coming-soon-overlay">COMING SOON</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 glitch-text">Related Content</h2>
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
      </section>

      {/* Interactive Album Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-6 glitch-text">Interactive Album Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">Experience the Album</h3>
            <p className="text-lg">Discover the interactive album listening experience</p>
            <a 
              href="https://interactive-album-listening-app-sy74.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button"
            >
              Try Interactive Preview
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🎧</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="sound-effect">INTERACTIVE!</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicPage; 