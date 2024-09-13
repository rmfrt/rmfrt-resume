import { createMarkup } from "../utils/markdown";

export default function CvCardWhat({ children }) {
    if (typeof children === "string" && children.trim() !== "") {
        return <h3 className="text-2xl font-semibold" dangerouslySetInnerHTML={createMarkup(children)} />;
    }

    return null;
}
