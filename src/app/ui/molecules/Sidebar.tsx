import { PropsWithChildren } from 'react';
import OptionsAside from './OptionsAside';
import { TitleAside } from './TitleAside';
import { UserProfile } from './UserProfile';

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white text-white w-64 p-6 flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold"><TitleAside/></span>
      </div>
      <UserProfile/>
      <nav className="flex flex-col space-y-2">
      <OptionsAside/>
      </nav>
      {children}
    </div>
  );
};