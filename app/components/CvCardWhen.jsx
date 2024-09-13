const YEAR_OPTIONS = { year: "numeric" };
const YEAR_MONTH_OPTIONS = { year: "numeric", month: "long" };

function checkDate(dateString) {
    if (dateString === "NOW") {
        return "Present";
    } else if (dateString === "") {
        return "N/A";
    }

    const date = new Date(dateString);
    if (isNaN(date)) {
        return "Error";
    }

    if (dateString.length === 4) {
        return date.toLocaleDateString("en-US", YEAR_OPTIONS);
    } else if (dateString.length === 7) {
        return date.toLocaleDateString("en-US", YEAR_MONTH_OPTIONS);
    } else {
        return "Error";
    }
}

export default function CvCardWhen({ children }) {
    if (!children.start) {
        return null;
    }

    const start = checkDate(children.start);
    let date = <time dateTime={children.start}>{start}</time>;

    if (children.end) {
        let end = checkDate(children.end);
        let endDateTime = children.end;

        if (children.end === "NOW") {
            const currentYear = new Date().getFullYear();
            endDateTime = currentYear.toString();
        }

        date = (
            <>
                <time dateTime={children.start}>{start}</time>–<time dateTime={endDateTime}>{end}</time>
            </>
        );
    }

    return <div className="text-sm text-nowrap text-neutral-400">{date}</div>;
}
