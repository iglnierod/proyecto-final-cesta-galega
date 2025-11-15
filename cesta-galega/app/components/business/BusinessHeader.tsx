'use client';
import LogOutButton from '@/app/components/LogOutButon';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import Link from 'next/link';

export default function BusinessHeader({ businessName }: { businessName: string | undefined }) {
  return (
    <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a
              className="link link-neutral text-xl font-bold no-underline flex gap-1 items-center"
              href="/business/dashboard"
            >
              <Image src={logo} alt="Logo Cesta Galega" width={32} />
              CestaGalega
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
            <li>
              <Link href="/business/dashboard">Inicio</Link>
            </li>
            <li>
              <a href="#">Estadísticas</a>
            </li>
            <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
              <button
                id="dropdown-link"
                type="button"
                className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                Xestión
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-link"
              >
                <li>
                  <Link className="dropdown-item" href="/business/manage/products">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/business/manage/orders">
                    Pedidos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
              <button
                id="dropdown-link"
                type="button"
                className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                {businessName}
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-link"
              >
                <li>
                  <Link className="dropdown-item" href="/business/settings">
                    Axustes
                  </Link>
                </li>
                {/*<li>*/}
                {/*  <a className="dropdown-item" href="#">*/}
                {/*    Link 5*/}
                {/*  </a>*/}
                {/*</li>*/}
                <hr className="border-base-content/25 -mx-2" />
                <LogOutButton />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
