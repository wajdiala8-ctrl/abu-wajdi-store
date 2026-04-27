import { Star, ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'آيفون 15 برو ماكس',
    category: 'إلكترونيات',
    price: 4999,
    oldPrice: 5999,
    rating: 4.9,
    reviews: 234,
    image: '📱',
    badge: 'الأكثر مبيعاً'
  },
  {
    id: 2,
    name: 'ساعة آبل سيريس 9',
    category: 'إلكترونيات',
    price: 1299,
    oldPrice: 1599,
    rating: 4.8,
    reviews: 189,
    image: '⌚',
    badge: 'جديد'
  },
  {
    id: 3,
    name: 'كريم لاروش بوزيه',
    category: 'العناية بالبشرة',
    price: 299,
    oldPrice: 399,
    rating: 4.9,
    reviews: 567,
    image: '🧴',
    badge: 'خصم 25%'
  },
  {
    id: 4,
    name: 'مكياج ماك الأساسي',
    category: 'مستحضرات تجميل',
    price: 449,
    oldPrice: 549,
    rating: 4.7,
    reviews: 345,
    image: '💄',
    badge: 'مفضل'
  },
  {
    id: 5,
    name: 'سماعات سوني WH-1000XM5',
    category: 'إلكترونيات',
    price: 899,
    oldPrice: 1199,
    rating: 4.9,
    reviews: 412,
    image: '🎧',
    badge: 'حصري'
  },
  {
    id: 6,
    name: 'سيروم فيتامين سي',
    category: 'العناية بالبشرة',
    price: 189,
    oldPrice: 249,
    rating: 4.8,
    reviews: 678,
    image: '✨',
    badge: 'باقي القليل'
  },
  {
    id: 7,
    name: 'آيباد برو 12.9',
    category: 'إلكترونيات',
    price: 3299,
    oldPrice: 3999,
    rating: 4.9,
    reviews: 156,
    image: '📲',
    badge: 'جديد'
  },
  {
    id: 8,
    name: 'طقم فرش ماك',
    category: 'مستحضرات تجميل',
    price: 349,
    oldPrice: 449,
    rating: 4.6,
    reviews: 234,
    image: '🖌️',
    badge: 'عرض'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">منتجاتنا المميزة</h2>
          <p className="text-gray-600 text-lg">أفضل المنتجات من أفضل العلامات التجارية</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">{product.badge}</span>
                </div>
                <button className="absolute top-3 left-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-5">
                <span className="text-xs text-purple-600 font-medium">{product.category}</span>
                <h3 className="font-bold text-gray-800 mb-2 mt-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-800">{product.price} ر.س</span>
                    <span className="text-sm text-gray-400 line-through mr-2">{product.oldPrice} ر.س</span>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;