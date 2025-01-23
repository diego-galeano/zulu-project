import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  
  const toggleMenu = (menuName: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <aside className={`bg-background z-30 text-white w-64 min-h-screen p-4 absolute top-0 left-0 ${isOpen ? 'block' : 'hidden'}`}>
      <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
        <i className="fas fa-times"></i>
      </button>
      <Image 
        src="/logo.png" 
        alt="Logo" 
        width={150} 
        height={150} 
        priority={true}
      />
      <nav className="pt-20">
        <ul className="space-y-2">
          <li className="opcion-con-desplegable">
            <Link href="/historial" className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center">
                <i className="fas fa-book mr-2"></i>
                <span>Historial</span>
              </div>
            </Link>
          </li>
          <li className='opcion-con-desplegable'>
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleMenu('combustible')}
            >
              <div className="flex items-center">
                <i className="fas fa-gas-pump mr-2"></i>
                <span>Combustible</span>
              </div>
            </div>
          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleMenu('agenda')}
            >
              <div className="flex items-center">
                <i className="fas fa-calendar-alt mr-2"></i>
                <span>Agenda</span>
              </div>
              <i className={`fas fa-chevron-${openMenus['agenda'] ? 'up' : 'down'} text-xs`}></i>
            </div>
            <ul className={`ml-4 ${openMenus['agenda'] ? 'block' : 'hidden'}`}>
              <li>
                <Link href="#" className="w-full p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Gestion de reservas
                </Link>
              </li>
              <li>
                <Link href="#" className="w-full p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Registro de reservas
                </Link>
              </li>
            </ul>
          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleMenu('aeronaves')}
            >
              <div className="flex items-center">
                <i className="fas fa-plane mr-2"></i>
                <span>Aeronaves</span>
              </div>
              <i className={`fas fa-chevron-${openMenus['aeronaves'] ? 'up' : 'down'} text-xs`}></i>
            </div>
            <ul className={`ml-4 ${openMenus['aeronaves'] ? 'block' : 'hidden'}`}>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Aeronave 1
                </Link>
              </li>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Aeronave 2
                </Link>
              </li>
              <li className='flex items-center justify-center border border-[#fff] rounded-md light-shadow my-2'>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-plus mr-2 text-xs"></i>
                  Agregar Aeronave
                </Link>
              </li>
            </ul>
          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleMenu('pilotos')}
            >
              <div className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 59 59" className="inline-block mb-1 mr-2" fill="currentColor">
                <g>
                  <g>
                    <rect x="26.5" y="38" width="6" height="2" />
                    <circle cx="22.5" cy="28" r="2" />
                    <path d="M51.506,49H45.5h-8v-3c3.86-0.004,7-3.142,7-6.998v-5.028l1.413-1.531l-0.019-0.018c1.545-0.767,2.606-2.229,2.606-3.926
			c0-2.173-1.721-3.991-4-4.409V19v-3h2.545c0.205,0,0.405-0.064,0.573-0.181l5.455-3.818c0.267-0.186,0.426-0.49,0.427-0.815
			s-0.155-0.63-0.42-0.818L41.879,2.396c-0.118-0.084-0.253-0.142-0.396-0.168L29.685,0.018c-0.124-0.023-0.25-0.023-0.372,0
			L17.754,2.228c-0.139,0.026-0.269,0.082-0.384,0.162L5.929,10.361C5.66,10.548,5.5,10.853,5.5,11.181
			c0,0.326,0.159,0.633,0.427,0.82l5.454,3.818C11.549,15.936,11.749,16,11.954,16H14.5v3v5.091c-2.279,0.418-4,2.236-4,4.409
			s1.721,3.991,4,4.409v6.093c0,3.856,3.14,6.994,7,6.998v3h-8H7.494C4.74,49,2.5,51.243,2.5,54v4c0,0.553,0.447,1,1,1h23h6h23
			c0.553,0,1-0.447,1-1v-4C56.5,51.243,54.26,49,51.506,49z M31.394,53.553C31.225,53.214,30.879,53,30.5,53h-2
			c-0.379,0-0.725,0.214-0.895,0.553L27.5,53.764V51h4v2.764L31.394,53.553z M33.5,51h3h3.614L33.5,53.544V51z M46.5,28.5
			c0,1.085-0.839,2.001-2,2.347v-4.693C45.661,26.498,46.5,27.415,46.5,28.5z M8.246,11.184l10.092-7.03l11.164-2.136l11.396,2.136
			l9.867,7.022L46.729,14H43.5h-28h-3.231L8.246,11.184z M42.5,16v2h-26v-2H42.5z M40.329,20c-2.303,1.353-6.074,3-10.829,3
			c-4.734,0-8.508-1.647-10.818-3H40.329z M12.5,28.5c0-1.085,0.839-2.001,2-2.347v4.693C13.338,30.501,12.5,29.585,12.5,28.5z
			 M16.5,39.002V33v-2v-5v-2v-2.989C18.815,22.57,23.403,25,29.5,25s10.685-2.43,13-3.989V24v2v5v2v0.192L38.062,38H34.5v2h4
			c0.279,0,0.546-0.116,0.734-0.321l3.266-3.538v2.861c0,2.756-2.246,4.998-5.007,4.998H35.5h-12h-1.993
			C18.746,44,16.5,41.758,16.5,39.002z M23.5,46h12v3h-3h-6h-3V46z M22.5,51h3v2.544L18.886,51H22.5z M4.5,54
			c0-1.654,1.343-3,2.994-3h5.819l12.827,4.934c0.081,0.031,0.167,0.037,0.251,0.046L25.882,57H4.5V54z M28.118,57l1-2h0.764l1,2
			H28.118z M54.5,57H33.118l-0.51-1.02c0.085-0.009,0.17-0.016,0.251-0.046L45.687,51h5.819c1.651,0,2.994,1.346,2.994,3V57z"/>
                    <circle cx="36.5" cy="28" r="2" />
                    <path d="M19.344,10.487l8.992,1.42l0.27,0.54C28.775,12.786,29.121,13,29.5,13s0.725-0.214,0.895-0.553l0.268-0.537l9.013-1.423
			c0.485-0.076,0.844-0.495,0.844-0.987V7c0-0.553-0.447-1-1-1h-6.024c0-0.183-0.046-0.365-0.145-0.525C33.168,5.18,32.847,5,32.5,5
			h-6c-0.347,0-0.668,0.18-0.851,0.475C25.55,5.635,25.504,5.817,25.504,6H19.5c-0.553,0-1,0.447-1,1v2.5
			C18.5,9.992,18.858,10.411,19.344,10.487z M38.519,8.645l-6.757,1.067L32.618,8h5.901L38.519,8.645L38.519,8.645z M30.882,7
			L29.5,9.764L28.118,7H30.882z M20.5,8h5.882l0.854,1.709L20.5,8.645V8z"/>
                  </g>
                </g>
              </svg>
                <span>Pilotos</span>
              </div>
              <i className={`fas fa-chevron-${openMenus['pilotos'] ? 'up' : 'down'} text-xs`}></i>
            </div>
            <ul className={`ml-4 ${openMenus['pilotos'] ? 'block' : 'hidden'}`}>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Piloto 1
                </Link>
              </li>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Piloto 2
                </Link>
              </li>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Piloto 3
                </Link>
              </li>
              <li className='flex items-center justify-center border border-[#fff] rounded-md light-shadow my-2'>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-plus mr-2 text-xs"></i>
                  Agregar Piloto
                </Link>
              </li>
            </ul>

          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleMenu('informes')}
            >
              <div className="flex items-center">
                <i className="fas fa-chart-bar mr-2"></i>
                <span>Informes</span>
              </div>
              <i className={`fas fa-chevron-${openMenus['informes'] ? 'up' : 'down'} text-xs`}></i>
            </div>
            <ul className={`ml-4 ${openMenus['informes'] ? 'block' : 'hidden'}`}>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Presupuestos
                </Link>
              </li>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Utilidades
                </Link>
              </li>
            </ul>
          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleMenu('documentacion')}
            >
              <div className="flex items-center">
                <i className="fas fa-file-alt mr-2"></i>
                <span>Documentación</span>
              </div>
              <i className={`fas fa-chevron-${openMenus['documentacion'] ? 'up' : 'down'} text-xs`}></i>
            </div>
            <ul className={`ml-4 ${openMenus['documentacion'] ? 'block' : 'hidden'}`}>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Firmas pendientes
                </Link>
              </li>
              <li>
                <Link href="#" className="p-2 hover:bg-gray-700 flex items-center">
                  <i className="fas fa-chevron-right mr-2 text-xs"></i>
                  Documentos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
