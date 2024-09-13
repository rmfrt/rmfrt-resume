// import { createMarkup } from "../utils/markdown";
import ReactMarkdown from "react-markdown";

export default function CvCardDescription({ children }) {
    if (typeof children === "string" && children.trim() !== "") {
        return (
            <p className="mt-3 text-sm text-neutral-400">
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
            </p>
        );
    }

    return null;
}
