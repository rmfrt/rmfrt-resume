import CvCardDescription from "./CvCardDescription";
import CvCardWhat from "./CvCardWhat";
import CvCardWhen from "./CvCardWhen";
import CvCardWhere from "./CvCardWhere";

export default function CvCard({ element }) {
    const what = element.what;
    const where = element.where;
    const when = element.when;
    const description = element.description;

    return (
        <article className="px-5 pt-4 pb-5 border rounded-lg shadow border-neutral-800 bg-neutral-950">
            <CvCardWhat>{what}</CvCardWhat>
            <CvCardWhere>{where}</CvCardWhere>
            <CvCardWhen>{when}</CvCardWhen>
            <CvCardDescription>{description}</CvCardDescription>
        </article>
    );
}
