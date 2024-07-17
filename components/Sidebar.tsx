import { MenuIcon } from 'lucide-react';
import NewDocumentButton from './NewDocumentButton';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />
    </>
  );

  return (
    <div className='p-2 md:p-5 bg-gray-200 relative'>
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={40} className='p-2 hover:opacity-30 rounded-lg' />
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div>{menuOptions}</div>
          </SheetContent>
        </Sheet>
      </div>

      <div className='hidden md:inline'>{menuOptions}</div>
    </div>
  );
};
export default Sidebar;
