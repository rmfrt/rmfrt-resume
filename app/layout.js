import "./globals.css";

export const metadata = {
    title: "Rémi Forte – Resume",
    description: "Rémi Forte’s professional resume.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-neutral-950">{children}</body>
        </html>
    );
}
