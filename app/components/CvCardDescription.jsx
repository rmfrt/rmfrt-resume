import { createMarkup } from "../utils/markdown";

export default function CvCardDescription({ children }) {
    if (typeof children === "string" && children.trim() !== "") {
        return <p className="mt-3 text-sm text-neutral-400" dangerouslySetInnerHTML={createMarkup(children)} />;
    }

    return null;
}
