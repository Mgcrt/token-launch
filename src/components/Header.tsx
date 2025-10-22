import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Menu, X } from 'lucide-react';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const connectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setIsConnected(true);
      } else {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect();
        setIsConnected(false);
        setWalletAddress('');
      }
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const TopBanner = () => (
  <div className="w-full bg-yellow-400 text-black font-bold text-center py-2 text-sm md:text-base">
    CREATE YOUR COIN FOR ONLY 0.1 SOL, FAST!
  </div>
);

  const formatAddress = (address: string) => `${address.slice(0, 4)}...${address.slice(-4)}`;

  return (
    <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solana-purple to-solana-green animate-pulse-slow"></div>
          <span className="text-xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
            MyCoinmaker
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#create-token" className="text-gray-300 hover:text-white transition-colors">
            Create Token
          </a>
          <a href="https://raydium.io/liquidity/create-pool/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            Create Liquidity
          </a>
          <a href="https://raydium.io/portfolio/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            Manage Liquidity
          </a>
        </nav>

        {/* Connect Wallet */}
        <div className="hidden md:flex">
          {!isConnected ? (
            <Button
              onClick={connectWallet}
              className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          ) : (
            <Button
              onClick={disconnectWallet}
              variant="outline"
              className="border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {formatAddress(walletAddress)}
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            <a href="#create-token" className="text-gray-300 hover:text-white transition-colors">
              Create Token
            </a>
            <a href="https://raydium.io/liquidity/create-pool/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Create Liquidity
            </a>
            <a href="https://raydium.io/portfolio/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Manage Liquidity
            </a>

            {!isConnected ? (
              <Button
                onClick={connectWallet}
                className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/80 hover:to-solana-green/80 text-white font-semibold w-full"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            ) : (
              <Button
                onClick={disconnectWallet}
                variant="outline"
                className="border-solana-purple text-solana-purple hover:bg-solana-purple hover:text-white w-full"
              >
                <Wallet className="w-4 h-4 mr-2" />
                {formatAddress(walletAddress)}
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
