import "./globals.css";

export const metadata = {
    title: "Resume",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-neutral-950">{children}</body>
        </html>
    );
}
