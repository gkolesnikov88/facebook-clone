import { useSession } from 'next-auth/react'
import React from 'react'
import {
    CalendarIcon,
    ClockIcon,
    UserIcon,
    ComputerDesktopIcon
} from '@heroicons/react/24/solid'
import {
    ChevronDownIcon,
    UserGroupIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow';

function Sidebar() {
  const { data: session, status } = useSession();
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow src={session.user.image} title={session.user.name} />

        <SidebarRow Icon={UserIcon} title='Friends' />
        <SidebarRow Icon={UserGroupIcon} title='Groups' />
        <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
        <SidebarRow Icon={ComputerDesktopIcon} title='Watch' />
        <SidebarRow Icon={CalendarIcon} title='Events' />
        <SidebarRow Icon={ClockIcon} title='Memories' />
        <SidebarRow Icon={ChevronDownIcon} title='See More' />
    </div>
  )
}

export default Sidebar