import ReactMarkdown from "react-markdown";

export default function CvCardWhere({ children }) {
    const { location, city, country } = children || {};

    const getLocationDisplay = () => {
        if (!city && !country) return location;
        if (!city) return `${location} (${country})`;
        if (!country) return `${location} (${city})`;
        return `${location} (${city}, ${country})`;
    };

    return (
        <p className="text-lg text-neutral-400">
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <>{props.children}</>,
                    a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500">
                            {children}{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="inline-block w-3 h-3 fill-current mt-[-5px]"
                            >
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                            </svg>
                        </a>
                    ),
                }}
            >
                {getLocationDisplay()}
            </ReactMarkdown>
        </p>
    );
}
