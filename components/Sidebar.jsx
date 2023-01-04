import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {
    HomeIcon,
    BellIcon,
    InboxIcon,
    UserIcon,
    ClipboardIcon,
} from "@heroicons/react/solid";
import {
    BookmarkIcon,
    HashtagIcon,
    DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
    const { data: session } = useSession();
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100">
                <Image
                    width="50"
                    height="50"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                    alt="Twitter logo"
                ></Image>
            </div>
            {/* Menu */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                {session && (
                    <>
                        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                        <SidebarMenuItem text="Profile" Icon={UserIcon} />
                        <SidebarMenuItem
                            text="More"
                            Icon={DotsCircleHorizontalIcon}
                        />
                    </>
                )}
            </div>
            {/* Button */}
            {session ? (
                <>
                    <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                        Tweet
                    </button>
                    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                        <img
                            onClick={signOut}
                            className="rounded-full h-10 w-10 xl:mr-2"
                            src={session.user.image}
                            alt="user-image"
                        />
                        <div className="leading-5 hidden xl:inline">
                            <h4 className="font-bold ">{session.user.name}</h4>
                            <p className="text-gray-500">
                                @{session.user.username}
                            </p>
                        </div>
                        <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
                    </div>
                </>
            ) : (
                <button
                    onClick={signIn}
                    className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
                >
                    Sign in
                </button>
            )}
        </div>
    );
}
