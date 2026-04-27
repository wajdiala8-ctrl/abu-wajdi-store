const categories = [
  {
    id: 1,
    name: 'الإلكترونيات',
    count: 156,
    emoji: '📱'
  },
  {
    id: 2,
    name: 'مستحضرات التجميل',
    count: 243,
    emoji: '💄'
  },
  {
    id: 3,
    name: 'العناية بالبشرة',
    count: 189,
    emoji: '✨'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">تسوق حسب الفئة</h2>
          <p className="text-gray-600 text-lg">اكتشف منتجاتنا المميزة في كل فئة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.id === 1 ? 'from-blue-500 to-cyan-500' : category.id === 2 ? 'from-pink-500 to-rose-500' : 'from-emerald-500 to-teal-500'} p-8 h-64 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="text-7xl mb-4">{category.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/90">{category.count} منتج</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;