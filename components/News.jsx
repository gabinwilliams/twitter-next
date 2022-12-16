/* eslint-disable @next/next/no-img-element */
export default function News({ article }) {
    return (
        <a href={article.url} rel="noreferrer" target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 cur hover:bg-gray-200 transition duration-200">
                <div className="space-y-0.5">
                    <h6 className="text-sm font-bold">{article.title}</h6>
                    <p className="text-sx font-medium text-gray-500">
                        {article.source.name}
                    </p>
                </div>
                <img
                    className="rounded-xl"
                    width="70"
                    src={article.urlToImage}
                    alt="article-photo"
                />
            </div>
        </a>
    );
}
