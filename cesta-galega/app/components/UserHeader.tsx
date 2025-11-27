'use client';

import Link from 'next/link';
import LogOutButton from '@/app/components/LogOutButon';

export default function UserHeader({
  loggedIn,
  userName,
}: {
  loggedIn: boolean;
  userName?: string;
}) {
  return (
    <div className="h-16 max-md:h-[3.5rem]">
      <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
        {/* IZQUIERDA: nombre de la app */}
        <div className="navbar-start">
          <Link
            className="link text-base-content link-neutral text-xl font-bold no-underline"
            href="/"
          >
            CestaGalega
          </Link>
        </div>

        {/* CENTRO: enlaces (solo desktop / tablet) */}
        <div className="navbar-center max-md:hidden">
          <ul className="menu menu-horizontal gap-4 p-0 text-base">
            <li>
              <Link href="/shop">Tenda</Link>
            </li>
            <li>
              <Link href="/shop?filter=newness">Novedades</Link>
            </li>
            <li>
              <a href="/shop?filter=discount">Descontos</a>
            </li>
          </ul>
        </div>

        {/* DERECHA: menú móvil + botón login */}
        <div className="navbar-end items-center gap-4">
          {/* Menú hamburguesa */}
          <div className="dropdown relative inline-flex [--placement:bottom] md:hidden">
            <button
              id="dropdown-default"
              type="button"
              className="dropdown-toggle btn btn-text btn-secondary btn-square"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Abrir menú"
            >
              <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
              <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-default"
            >
              <li>
                <Link className="dropdown-item" href="/shop">
                  Tenda
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="/shop?filter=newness">
                  Novedades
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/shop?filter=discount">
                  Descontos
                </a>
              </li>
            </ul>
          </div>

          {loggedIn ? (
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li>
                <Link href="/shop/cart" title="Carro">
                  <span className="icon-[tabler--shopping-cart] dropdown-open:hidden size-5"></span>
                </Link>
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
                  {userName}
                  <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </button>
                <ul
                  className="dropdown-menu dropdown-open:opacity-100 hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-link"
                >
                  <li>
                    <Link className="dropdown-item" href="/business/shop">
                      Historial
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/business/settings">
                      Axustes
                    </Link>
                  </li>
                  <hr className="border-base-content/25 -mx-2" />
                  <LogOutButton />
                </ul>
              </li>
            </ul>
          ) : (
            <Link className="btn btn-primary rounded" href="/user/login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
