import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
      <MessageCircle className="w-7 h-7" />
      <span className="absolute bottom-full left-0 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">تواصل معنا</span>
    </a>
  );
};

export default WhatsAppButton;