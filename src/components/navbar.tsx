import { Link } from '@tanstack/react-router';
import React from 'react';
import LogoDark from '~/assets/logo-dark.png';
import LogoLight from '~/assets/logo-light.png';
type Props = {};

const NavLink = ({ to, children }: { to: string; children?: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-black dark:text-white hover:text-accent hover:underline transition-colors duration-200"
    >
      {children}
    </Link>
  );
};
export const Navbar = (props: Props) => {
  return (
    <div className="w-full p-4 max-w-section mx-auto">
      <div className="flex items-center">
        <img src={LogoDark} alt="" className="h-12 w-auto dark:hidden" />
        <img src={LogoLight} alt="" className="h-12 w-auto hidden dark:block" />
        <nav className="font-title font-thin flex items-end justify-between pl-8 gap-4">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/#projects">Projects</NavLink>

          <NavLink to="/#writing">Writing</NavLink>
        </nav>
      </div>
    </div>
  );
};
