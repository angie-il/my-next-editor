const HomePage = () => {
    return (
        <main className="p-6">
            <h1 className="text-xl font-bold mb-4">Welcome to My Next Editor</h1>
            <p className="mb-4">Click below to start editing:</p>
            <a
                href="/editor"
                className="text-blue-500 underline hover:text-blue-700 transition"
            >
                Go to Editor
            </a>
        </main>
    );
};

export default HomePage;
