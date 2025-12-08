'use client';

type SearchType = 'product' | 'business';

export default function ShopSearchBar({
  search,
  onSearchChange,
  sort,
  onSortChange,
  searchType,
  onSearchTypeChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  searchType: SearchType;
  onSearchTypeChange: (value: SearchType) => void;
}) {
  return (
    <div className="flex justify-center border border-base-300 rounded-xl p-3 mt-4 w-full">
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-4 lg:gap-16 w-full max-w-4xl">
        {/* TIPO DE BUSCA */}
        <div className="w-full lg:w-auto">
          <div className="select-floating w-full lg:w-48">
            <select
              className="select"
              aria-label="Tipo de busca"
              value={searchType}
              onChange={(e) => onSearchTypeChange(e.target.value as SearchType)}
            >
              <option value="product">Produto</option>
              <option value="business">Empresa</option>
            </select>
            <label className="select-floating-label">Tipo de busca</label>
          </div>
        </div>

        {/* BARRA DE BUSCA */}
        <div className="w-full lg:flex-1">
          <div className="join flex w-full">
            <input
              className="input join-item flex-1"
              placeholder={
                searchType === 'product'
                  ? 'Nome de produto a buscar...'
                  : 'Nome de empresa a buscar...'
              }
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline btn-primary join-item"
              // opcional: podrías disparar algo extra aquí
            >
              Busca
            </button>
          </div>
        </div>

        {/* ORDE (só ten sentido para produtos, pero non rompe se o deixas visible) */}
        <div className="w-full lg:w-auto">
          <div className="select-floating w-full lg:w-64">
            <select
              className="select"
              aria-label="Ordenar"
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              disabled={searchType === 'business'} // opcional
            >
              <option value="">Orde por defecto</option>
              <option value="price_asc">Prezo: menor a maior</option>
              <option value="price_desc">Prezo: maior a menor</option>
            </select>
            <label className="select-floating-label">Orde</label>
          </div>
        </div>
      </div>
    </div>
  );
}
