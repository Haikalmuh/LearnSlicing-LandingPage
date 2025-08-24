export default function Footer() {
    return (
        <footer className="border-t border-gray-100">
            <div className="section py-8 text-sm text-gray-500 flex items-center justify-between">
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-800">Privacy</a>
                    <a href="#" className="hover:text-gray-800">Terms</a>
                </div>
            </div>
        </footer>
    )
}