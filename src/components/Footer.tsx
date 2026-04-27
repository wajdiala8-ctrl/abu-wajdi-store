import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">أ</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">أبو وجدي</h2>
                <p className="text-gray-400 text-sm">للإلكترونيات والجمال</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              وجهتك الأولى للتسوق الإلكتروني. نقدم لك أفضل المنتجات في الإلكترونيات ومستحضرات التجميل والعناية بالبشرة بأسعار منافسة وجودة عالية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#electronics" className="text-gray-400 hover:text-white transition-colors">الإلكترونيات</a></li>
              <li><a href="#beauty" className="text-gray-400 hover:text-white transition-colors">مستحضرات التجميل</a></li>
              <li><a href="#offers" className="text-gray-400 hover:text-white transition-colors">العروض الخاصة</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">الفئات</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الهواتف الذكية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأجهزة اللوحية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">العناية بالبشرة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المكياج</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" /><span className="text-gray-400">الرياض، المملكة العربية السعودية</span></li>
              <li className="flex items-start gap-3"><Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" /><span className="text-gray-400" dir="ltr">+966 50 123 4567</span></li>
              <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" /><span className="text-gray-400">info@abuwajdi.com</span></li>
              <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" /><span className="text-gray-400">السبت - الخميس: 9ص - 10م</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2024 أبو وجدي للإلكترونيات والجمال. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;