import { readCvData } from "./utils/readCvData";
import CvCard from "./components/CvCard";

export default async function Home() {
    try {
        const data = await readCvData();

        return (
            <div className="max-w-lg px-4 mx-auto my-8">
                <h1 className="mb-20 text-2xl font-semibold">
                    <a
                        className="hover:text-neutral-400"
                        href="https://www.rmfrt.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Rémi Forte
                    </a>
                </h1>
                <div className="flex flex-col gap-20">
                    {Object.entries(data).map(([category, elements]) => (
                        <section className="flex flex-col gap-4" key={category}>
                            <h2 className="self-start px-4 pt-2 pb-3 font-bold border rounded-lg shadow border-neutral-800 bg-neutral-950">
                                {category}
                            </h2>
                            <div className="flex flex-col w-full gap-4">
                                {elements.map(
                                    (element, indexElement) =>
                                        element.visible && <CvCard key={indexElement} element={element} />
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error reading or parsing data:", error);
        return <div>Error loading CV data</div>;
    }
}
