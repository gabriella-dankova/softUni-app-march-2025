import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: <TiHome className="text-3xl text-gray-600 cursor-pointer hover:text-black" />, path: '/' },
    { name: <FaHeart className="text-3xl text-gray-600 cursor-pointer hover:text-black"/>, path: '/catalog' },
    { name: <IoIosAdd className="text-3xl text-gray-600 cursor-pointer hover:text-black"/>, path: '/catalog' },
    { name: <FaRegMessage className="text-3xl text-gray-600 cursor-pointer hover:text-black"/>, path: '/catalog' },
    { name: <MdOutlineAccountCircle className="text-3xl text-gray-600 cursor-pointer hover:text-black"/>, path: '/catalog' },
    
  ]

export default function Header(){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <header className="fixed bottom-0 left-0 w-full bg-white shadow-md py-1 flex justify-around items-center border-b border-gray-300 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-3 lg:px-4">
          <div className="flex lg:flex-1">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a> */}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink 
              key={item.name} 
              to={item.path} 
              className="text-sm/6 font-semibold text-gray-900"
              style={({ isActive }) => isActive ? {color: 'oklch(0.511 0.262 276.966)'}: {}}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
}