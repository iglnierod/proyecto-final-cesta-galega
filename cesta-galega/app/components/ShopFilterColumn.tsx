'use client';

import { CategoryDTO } from '@/app/lib/category/category.schema';

type ShopFiltersColumnProps = {
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: CategoryDTO[];
};

export default function ShopFiltersColumn({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  category,
  onCategoryChange,
  categories,
}: ShopFiltersColumnProps) {
  return (
    <aside className="w-full md:w-64 lg:w-72 md:shrink-0">
      <div className="w-full accordion accordion-shadow *:accordion-item-active:shadow-md">
        <div className="accordion-item active" id="filters-accordion">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start w-full"
            aria-controls="filters-accordion-content"
            aria-expanded="true"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Filtros
          </button>
          <div
            id="filters-accordion-content"
            className="accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="filters-accordion"
            role="region"
          >
            <div className="px-5 pb-4 space-y-4">
              {/* PRECIO MÍNIMO / MÁXIMO */}
              <div className="space-y-3">
                <p className="font-semibold text-sm">Prezo</p>

                {/* Prezo mínimo */}
                <div className="text-left">
                  <label className="label-text text-xs mb-1 block">Mínimo</label>
                  <div className="input rounded flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="00,00"
                      min={0}
                      step={0.01}
                      value={minPrice}
                      onChange={(e) => onMinPriceChange(e.currentTarget.value)}
                      className="grow bg-transparent outline-none"
                    />
                    <span className="icon-[tabler--currency-euro] text-base-content/80 my-auto ms-1 size-5 shrink-0"></span>
                  </div>
                </div>

                {/* Prezo máximo */}
                <div className="text-left">
                  <label className="label-text text-xs mb-1 block">Máximo</label>
                  <div className="input rounded flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="00,00"
                      min={0}
                      step={0.01}
                      value={maxPrice}
                      onChange={(e) => onMaxPriceChange(e.currentTarget.value)}
                      className="grow bg-transparent outline-none"
                    />
                    <span className="icon-[tabler--currency-euro] text-base-content/80 my-auto ms-1 size-5 shrink-0"></span>
                  </div>
                </div>
              </div>

              {/* CATEGORÍAS */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Categoría</p>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      className="radio radio-primary"
                      name="category"
                      value=""
                      checked={category === ''}
                      onChange={() => onCategoryChange('')}
                    />
                    <span>Todas as categorías</span>
                  </label>

                  {categories.map((c) => (
                    <label key={c.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        className="radio radio-primary"
                        name="category"
                        value={c.id}
                        checked={category === String(c.id)}
                        onChange={() => onCategoryChange(String(c.id))}
                      />
                      <span>{c.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
