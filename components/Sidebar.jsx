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

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100">
                <Image
                    width="50"
                    height="50"
                    src="https://brandeps.com/logo-download/T/Twitter-logo-vector-01.svg"
                    alt="Twitter logo"
                ></Image>
            </div>
            {/* Menu */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            {/* Button */}
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                Tweet
            </button>
            {/* Mini-Profile */}
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img
                    className="rounded-full h-10 w-10 xl:mr-2"
                    src="https://images.unsplash.com/photo-1670525975578-4051a7803c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt="user-image"
                />
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold ">Gabin Williams</h4>
                    <p className="text-gray-500">@gabinwilliams</p>
                </div>
                <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>
        </div>
    );
}
