import Link from "next/link";

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Welcome to My Next Editor 📝
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 px-4 text-center">
                <span className="font-semibold">My Next Editor</span> a simple drawing app built with the
                <span className="font-semibold"> T3 Stack</span> – featuring
                <span className="font-semibold"> Tldraw</span> for canvas magic,
                <span className="font-semibold"> tRPC</span> for type-safe API communication,
                <span className="font-semibold"> TailwindCSS</span> for styling, and
                <span className="font-semibold"> Shadcn UI</span> for modern components.
                <br /><br />
                You can draw, save, and modify shapes in real-time, as well as delete them all 🔥 for a clean interface.
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
