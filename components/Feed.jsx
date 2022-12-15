import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Gabin Williams",
            userName: "gabinwilliams",
            userImg:
                "https://images.unsplash.com/photo-1670525975578-4051a7803c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            text: "I have an idea!!",
            timestamp: "2 hours ago",
        },
        {
            id: "2",
            name: "Jim Green",
            userName: "jimgreen",
            userImg:
                "https://images.unsplash.com/photo-1670459647021-bbe98ba8dea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            img: "https://media.istockphoto.com/id/1282806068/photo/email-marketing-concept-person-reading-e-mail-on-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=gzANTtx6-P5-qd5pMJ7R9bvzpyJb1RBM3ExXNiV_V64=",
            text: "Is social media ruining your life?",
            timestamp: "5 hours ago",
        },
    ];
    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                    Home
                </h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <Input />
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
