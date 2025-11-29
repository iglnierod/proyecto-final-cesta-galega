export default function ShopSearchBar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
}) {
  return (
    <div className="flex justify-center border border-base-300 rounded-xl p-3 mt-4 w-full">
      {/* Contenedor principal de la barra */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-4 lg:gap-16 w-full max-w-4xl">
        {/* TIPO DE BUSCA */}
        <div className="w-full lg:w-auto">
          <div className="select-floating w-full lg:w-48">
            <select className="select" aria-label="Select floating label" id="selectFloating">
              <option>Produto</option>
              <option>Empresa</option>
            </select>
            <label className="select-floating-label" htmlFor="selectFloating">
              Tipo de busca
            </label>
          </div>
        </div>

        {/* BARRA DE BUSCA */}
        <div className="w-full lg:flex-1">
          <div className="join flex w-full">
            <input
              className="input join-item flex-1"
              placeholder="Nome a buscar..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <button className="btn btn-outline btn-primary join-item">Busca</button>
          </div>
        </div>

        {/* ORDE */}
        <div className="w-full lg:w-auto">
          <div className="select-floating w-full lg:w-64">
            <select
              className="select"
              aria-label="Select floating label"
              id="selectFloating"
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="">Orde por defecto</option>
              <option value="price_asc">Prezo: menor a maior</option>
              <option value="price_desc">Prezo: maior a menor</option>
            </select>
            <label className="select-floating-label" htmlFor="selectFloating">
              Orde
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
