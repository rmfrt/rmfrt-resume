export default function CvCardWhere({ children }) {
    const { location, city, country } = children || {};

    if (!city && !country) {
        return <p className="text-lg text-neutral-400">{location}</p>;
    }

    if (!city) {
        return (
            <p className="text-lg text-neutral-400">
                {location} ({country})
            </p>
        );
    }

    if (!country) {
        return (
            <p className="text-lg text-neutral-400">
                {location} ({city})
            </p>
        );
    }

    return (
        <p className="text-lg text-neutral-400">
            {location} ({city}, {country})
        </p>
    );
}
