
import { Button } from '@/components/ui/button';
import { Rocket, Shield, Zap, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-solana-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-solana-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-solana-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Launch Your
            <span className="bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green bg-clip-text text-transparent animate-glow">
              {" "}Solana Token
            </span>
            <br />
            in Seconds
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The most advanced Solana token platform. Create, deploy, and manage your tokens with enterprise-grade security and simplicity.
          </p>
          {/* How to Use Box */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8 text-left max-w-3xl mx-auto text-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">How to use Solana Token Creator</h3>
          <ol className="list-decimal list-inside space-y-2">
          <li>Connect your Solana wallet.</li>
          <li>Write the name you want for your Token.</li>
          <li>Write the symbol (max 8 characters).</li>
          <li>Link the image for your token (max 5MB).</li>
          <li>Select the decimals quantity (9 is usually used for meme tokens).</li>
          <li>Type in the total supply your token should have.</li>
          <li>Write the description you want for your SPL Token.</li>
          <li>On step 3 fill in the remaining details about your token.</li>
          <li>Choose if you want to leave the revoke options turned on or off.</li>
          <li>Click on Create, accept the transaction, and wait until your token is ready.</li>
          </ol>
          <p className="mt-4">
          The cost of creating a regular Token is <strong>0.1 SOL</strong>, which includes all fees needed for the SPL Token creation.
          </p>
          <p>
          Creating a trending token costs <strong>0.3 SOL</strong> and includes 1 billion supply, 9 decimals with all 3 revoke options (freeze, mint, update) turned on by default.
          </p>
          <p className="mt-2">
          The creation process will start and will take a few seconds. After that, you will receive the total supply of the token in the wallet you chose.
          </p>
          </div>
  
 
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold px-8 py-4 text-lg crypto-glow"
              onClick={() => document.getElementById('launch')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Your Token
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white font-semibold px-8 py-4 text-lg"
              onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Live Launches
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-green mb-2">500+</div>
              <div className="text-gray-400">Tokens Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-blue mb-2">$50M+</div>
              <div className="text-gray-400">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-purple mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solana-green mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
