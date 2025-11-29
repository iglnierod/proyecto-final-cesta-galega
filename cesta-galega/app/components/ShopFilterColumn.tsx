// ShopFiltersColumn.tsx
export default function ShopFiltersColumn() {
  return (
    <aside className="w-full md:w-64 lg:w-72 md:shrink-0">
      <div className="w-full accordion accordion-shadow *:accordion-item-active:shadow-md">
        <div className="accordion-item active" id="payment-shadow">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start w-full"
            aria-controls="payment-shadow-collapse"
            aria-expanded="true"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Filtros
          </button>
          <div
            id="payment-shadow-collapse"
            className="accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="payment-shadow"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">Placeholder para los filtros...</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
