import { Linkedin, Mail, Phone } from "lucide-react";

const person = {
    name: "Baskaran Ketharanathan",
    title: "Consultant Neurosurgeon",
    email: "Bak@arosph.dk",
    phoneDisplay: "+45 26 24 59 03",
    phoneTel: "+4526245903",
    linkedinUrl: "https://www.linkedin.com/in/baskaran-ketharanathan-3292752a/",
};

export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
            <div className="w-full max-w-lg rounded-xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10">
                <header className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900">
                        {person.name}
                    </h1>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base">
                        {person.title}
                    </p>
                </header>

                <div className="my-8 h-px bg-slate-200" />

                <section className="space-y-3 text-sm sm:text-base text-slate-700">
                    <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-slate-50 transition"
                    >
                        <Mail className="h-5 w-5 text-slate-500" />
                        <span>{person.email}</span>
                    </a>

                    <a
                        href={`tel:${person.phoneTel}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-slate-50 transition"
                    >
                        <Phone className="h-5 w-5 text-slate-500" />
                        <span>{person.phoneDisplay}</span>
                    </a>

                    <a
                        href={person.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-slate-50 transition"
                    >
                        <Linkedin className="h-5 w-5 text-slate-500" />
                        <span>LinkedIn</span>
                    </a>
                </section>

                <footer className="mt-10 text-center text-xs text-slate-400">
                    © {new Date().getFullYear()} {person.name}
                </footer>
            </div>
        </div>
    );
}
