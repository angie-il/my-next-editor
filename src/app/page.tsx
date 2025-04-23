import Link from "next/link";

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Welcome to My Next Editor 📝
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
                A simple drawing app built with <span className="font-semibold">Tldraw</span>,
                <span className="font-semibold"> tRPC</span>, <span className="font-semibold">TailwindCSS</span> &
                <span className="font-semibold"> Shadcn UI</span>.
                Draw, save, and modify shapes like a boss 💪.
            </p>

            <Link
                href="/editor"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition"
            >
                Open Editor
            </Link>
        </main>
    );
};

export default HomePage;
