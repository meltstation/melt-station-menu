import React from 'react';
import { motion } from 'framer-motion';

const menu = {
  chickenPizzas: [
    ['Classic Chicken','Green pepper, twin capsicums, onion & oregano',{ '6"':'৳180','9"':'৳340','12"':'৳480'}],
    ['BBQ Chicken','Smoky barbecue glaze, chicken, sausage, mushrooms, capsicum & onion',{ '6"':'৳199','9"':'৳360','12"':'৳489'}, true],
    ['Naga Chicken','Fiery naga chilli sauce, chicken, capsicum, onion & olives',{ '6"':'৳199','9"':'৳360','12"':'৳499'}],
    ['Chicken Tandoori','Smoky tandoori-spiced chicken with twin capsicums',{ '6"':'৳199','9"':'৳370','12"':'৳499'}],
    ['Mushroom Overload','Earthy mushrooms, chicken & black olives',{ '6"':'৳210','9"':'৳370','12"':'৳520'}],
    ['Chicken Lovers','Chicken, capsicum, onion, mushroom, black olive',{ '6"':'৳225','9"':'৳390','12"':'৳525'}, true],
    ['Chicken Sausage','Chicken & sausage with capsicum, onion, black olives',{ '6"':'৳225','9"':'৳390','12"':'৳530'}],
    ['Cheesy Chicken','Chicken, mushroom, sweetcorn, mozzarella',{ '6"':'৳235','9"':'৳399','12"':'৳545'}],
    ['Meat Delight','Chicken, sausage & meatball',{ '6"':'৳245','9"':'৳410','12"':'৳575'}, true],
    ['Chicken Pepperoni','House chicken pepperoni, capsicum, onion, black olive',{ '6"':'৳255','9"':'৳430','12"':'৳595'}, true],
    ['Cheddar Laster','Cheddar + mozzarella, chicken, mushroom & black olive',{ '6"':'৳255','9"':'৳410','12"':'৳570'}],
    ['Margherita','Rich tomato sauce, fresh mozzarella, oregano',{ '6"':'৳150','9"':'৳260','12"':'৳370'}],
  ],
  beefPizzas: [
    ['Tender Beef','Soft beef cubes, capsicum, onion & oregano',{ '6"':'৳220','9"':'৳399','12"':'৳530'}],
    ['BBQ Beef','Tender beef in smoky barbecue glaze',{ '6"':'৳240','9"':'৳420','12"':'৳545'}, true],
    ['Mexican Hot & Spicy','Spiced beef, mushroom, chilli flakes, capsicum & onion',{ '6"':'৳260','9"':'৳415','12"':'৳550'}],
    ['Beef Capsicum & Olive','Beef with capsicum, onion & black olive',{ '6"':'৳260','9"':'৳425','12"':'৳560'}],
    ['Beef Supreme','Beef, sweetcorn, mushroom, black olive, capsicum & onion',{ '6"':'৳280','9"':'৳420','12"':'৳565'}],
    ['Beef Pepperoni','House beef pepperoni, capsicum, black olive',{ '6"':'৳299','9"':'৳440','12"':'৳620'}, true],
  ],
  specials: [
    ['Four Season Special','Quartered special selection',{ '9"':'৳460','12"':'৳599'}, true],
    ['American Hot & Spicy','Chicken, chilli flakes, olive & jalapeños',{ '9"':'৳470','12"':'৳599'}],
    ['Melt Station Special','House signature loaded special',{ '9"':'৳540','12"':'৳699'}, true],
  ],
  burgers: [
    ['Mini Burger','৳100'],
    ['Chicken Burger','৳150'],
    ['Chicken Cheese Burger','৳170'],
    ['BBQ Chicken Cheese Burger','৳190']
  ],
  meatbox: [
    ['BBQ Meatbox','৳170'],
    ['Sausage Meatbox','৳190'],
    ['Mexican Meatbox','৳200'],
    ['Cheesy Chicken Meatbox','৳230']
  ],
  subs: [
    ['Chicken Sub','৳200'],
    ['BBQ Chicken Sub','৳220'],
    ['Naga Chicken Sub','৳225'],
    ['Cheesy Chicken Sub','৳250']
  ],
  fries: [
    ['Regular Fries','৳80'],
    ['Large Fries','৳120']
  ],
  drinks: [
    ['Lemonade','৳70'],
    ['Cold Coffee','৳80'],
    ['Choco Cold Coffee','৳110'],
    ['Vanilla Shake','৳120'],
    ['Oreo Milkshake','৳160'],
    ['Chocolate Milkshake','৳180'],
    ['KitKat Shake','৳200']
  ],
  addons: [
    ['Regular Mayonnaise','৳20'],
    ['Honey Mustard','৳20'],
    ['BBQ Sauce','৳20'],
    ['Extra Cheese (Burger)','৳30'],
    ['Extra Sausage','৳40'],
    ['Extra Chicken','৳50'],
    ['Extra Cheese (Pizza)','৳70']
  ]
};

function Logo() {
  return (
    <div className="text-white text-4xl font-black tracking-tight select-none">
      Melt Station
    </div>
  );
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 150;
  window.scrollTo({ top, behavior: 'smooth' });
}

function PriceList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map(([name, price]) => (
        <div key={name} className="bg-white rounded-2xl p-4 shadow-sm flex justify-between font-bold">
          <span>{name}</span>
          <span className="text-[#8d1114]">{price}</span>
        </div>
      ))}
    </div>
  );
}

function PizzaSection({ title, items, sectionId }) {
  return (
    <section id={sectionId} className="scroll-mt-[160px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-black">{title}</h3>
        <span>★</span>
      </div>

      <div className="grid gap-4">
        {items.map(([name, desc, prices, popular]) => (
          <motion.div
            key={name}
            whileHover={{ y: -2 }}
            className="bg-white rounded-3xl p-5 shadow-md border border-black/5"
          >
            <div className="mb-4">
              <div className="flex gap-2 items-center flex-wrap">
                <h4 className="font-black text-xl">{name}</h4>
                {popular && (
                  <span className="bg-[#f6b443] text-[10px] px-2 py-1 rounded-full font-black">
                    POPULAR
                  </span>
                )}
              </div>
              <p className="text-sm opacity-70 mt-2 leading-relaxed">{desc}</p>
            </div>

            <div className={`grid gap-2 ${Object.keys(prices).length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {Object.entries(prices).map(([size, price]) => (
                <div key={size} className="rounded-2xl bg-[#f8efe2] p-3 text-center border border-[#e8d8bc]">
                  <div className="text-xs font-bold opacity-60">{size}</div>
                  <div className="text-lg font-black text-[#8d1114] mt-1">{price}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function MeltStationMenu() {
  const categories = [
    ['pizza-chicken', 'Chicken'],
    ['pizza-beef', 'Beef'],
    ['specials', 'Specials'],
    ['burgers', 'Burgers'],
    ['meatbox', 'Meatbox'],
    ['subs', 'Subs'],
    ['drinks', 'Drinks']
  ];

  return (
    <div className="min-h-screen bg-[#f8efe2] text-[#23130c]">
      <header className="sticky top-0 z-50 bg-[#6f0d0f] shadow-lg">
        <div className="max-w-md mx-auto px-4 py-5 flex justify-center">
          <Logo />
        </div>
      </header>

      <section className="bg-gradient-to-b from-[#8d1114] to-[#5e0b0d] text-white px-5 py-5">
        <div className="max-w-md mx-auto">
          <p className="text-sm opacity-90 text-center">
            Pizza • Burgers • Meatbox • Subs • Fries • Drinks
          </p>
        </div>
      </section>

      <div className="sticky top-[72px] z-40 bg-[#f8efe2]/95 backdrop-blur border-b border-black/5">
        <div className="max-w-md mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 w-max min-w-full">
            {categories.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 whitespace-nowrap rounded-full bg-white shadow-sm font-semibold text-sm"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-md mx-auto px-4 py-6 pb-52 space-y-10">
        <PizzaSection title="Chicken Pizza" items={menu.chickenPizzas} sectionId="pizza-chicken" />
        <PizzaSection title="Beef Pizza" items={menu.beefPizzas} sectionId="pizza-beef" />
        <PizzaSection title="House Specials" items={menu.specials} sectionId="specials" />

        <section id="burgers" className="scroll-mt-[160px]">
          <h3 className="text-3xl font-black mb-4">Burgers</h3>
          <PriceList items={menu.burgers} />
        </section>

        <section id="meatbox" className="scroll-mt-[160px]">
          <h3 className="text-3xl font-black mb-4">Meatbox</h3>
          <PriceList items={menu.meatbox} />
        </section>

        <section id="subs" className="scroll-mt-[160px]">
          <h3 className="text-3xl font-black mb-4">Subs</h3>
          <PriceList items={menu.subs} />
        </section>

        <section>
          <h3 className="text-3xl font-black mb-4">Fries</h3>
          <PriceList items={menu.fries} />
        </section>

        <section id="drinks" className="scroll-mt-[160px]">
          <h3 className="text-3xl font-black mb-4">Drinks</h3>
          <PriceList items={menu.drinks} />
        </section>

        <section>
          <h3 className="text-3xl font-black mb-4">Add-ons</h3>
          <PriceList items={menu.addons} />
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur border-t p-3">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
          <a href="tel:01356041929" className="rounded-2xl p-3 bg-[#f5f5f5] text-center font-bold">Call</a>
          <a href="https://wa.me/8801356041929" className="rounded-2xl p-3 bg-[#8d1114] text-white text-center font-bold">WhatsApp</a>
          <a href="https://maps.app.goo.gl/JVVWPPCyzKtmnPTU7" className="rounded-2xl p-3 bg-[#f5f5f5] text-center font-bold">Map</a>
        </div>
      </div>
    </div>
  );
}
