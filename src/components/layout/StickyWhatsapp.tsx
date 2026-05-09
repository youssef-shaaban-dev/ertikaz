import { Phone } from "lucide-react";

const StickyWhatsapp = () => {
    return (
        <a
            href="https://wa.me/966509815516"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg z-40 text-white hover:scale-105 transition-all"
        >
            <Phone className="w-6 h-6 animate-bounce" />
        </a>
    );
};

export default StickyWhatsapp;