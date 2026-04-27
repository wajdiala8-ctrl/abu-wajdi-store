import { Truck, Shield, CreditCard, Headphones, Package, Gift } from 'lucide-react';

const features = [
  { icon: Truck, title: 'شحن مجاني', description: 'لجميع الطلبات فوق 200 ر.س' },
  { icon: Shield, title: 'منتجات أصلية 100%', description: 'ضمان الجودة والأصالة' },
  { icon: CreditCard, title: 'دفع آمن', description: 'جميع طرق الدفع متاحة' },
  { icon: Headphones, title: 'دعم على مدار الساعة', description: 'خدمة عملاء متميزة' },
  { icon: Package, title: 'إرجاع سهل', description: 'خلال 14 يوم من الشراء' },
  { icon: Gift, title: 'عروض حصرية', description: 'خصومات يومية ومتنوعة' }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h2>
          <p className="text-gray-600 text-lg">نقدم لك أفضل تجربة تسوق</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;