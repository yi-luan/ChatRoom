import { IconType } from 'react-icons';
import { useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle,HiUsers } from 'react-icons/hi2';
import useConversation from "./useConversation";
import { signOut } from "next-auth/react";

const useRoutes = () => {
    const pathname = usePathname();

    const {conversationId} = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/Users',
            icon: HiUsers,
            active: pathname === '/users'
        },
        {
            label: 'Logout', 
            onClick: async() => await signOut({ redirect: false }),
            href: '#',
            icon: HiArrowLeftOnRectangle, 
        }
    ], [pathname, conversationId]);

    return routes;
}

export default useRoutes;