import React from 'react'
import Link from './Link';
const navData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 4,
    name: "Services",
    path: "/services"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

export const NavBar = () => {
  return (
    <nav className='flex'>
      <ul className='flex'>
        {
          navData.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
      {/* <ul className='flex'>
         {
          navData.map(route =><li className='mr-10'>
            <a href={route.path}>{route.name}</a>
            </li>)
         }
      </ul> */}
      {/* <ul className='flex'>
            <li className='mr-10'><a href="/">Home</a></li>
            <li className='mr-10'><a href="/about">About</a></li>
            <li className='mr-10'><a href="/blog">Blog</a></li>
        </ul> */}
    </nav>
  )
}
