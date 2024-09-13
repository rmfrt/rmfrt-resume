import ReactMarkdown from "react-markdown";

export default function CvCardWhat({ children }) {
    if (typeof children === "string" && children.trim() !== "") {
        return (
            <h3 className="text-2xl font-semibold">
                <ReactMarkdown
                    components={{
                        p: ({ node, ...props }) => <>{props.children}</>,
                        a: ({ href, children }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:no-underline "
                            >
                                {children}
                            </a>
                        ),
                    }}
                >
                    {children}
                </ReactMarkdown>
            </h3>
        );
    }

    return null;
}
