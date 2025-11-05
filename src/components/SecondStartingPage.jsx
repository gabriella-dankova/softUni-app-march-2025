import { Link } from "react-router";
import { motion } from "framer-motion";

export default function SecondStartingPage() {
    return (
        
        <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden"
    style={{
        backgroundImage: "url('/background-clothes.png.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            
            <div className="mx-auto max-w-xl bg-white shadow-lg rounded-2xl p-10">
                <motion.img 
                    src="b2c7de1951d5d57e9305c96ca875e170.svg" 
                    alt="Shopping Bags" 
                    className="mx-auto w-80 rounded-lg"
                    initial={{ y: -100, opacity: 0, rotate: -30 }} 
  animate={{ y: 0, opacity: 1, rotate: 0 }} 
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
                
                <div className="text-center">
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
                        В SosialSell ще откриеш и разнообразие от различни аксесоари на достъпни цени за всеки повод!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/" className="text-sm/6 font-semibold text-gray-700">
                             <span aria-hidden="true">←</span> Назад
                        </Link>
                        <Link
                            to="/third"
                            className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 animate-pulse"
                        >
                            Напред
                        </Link>
                        <Link to="/logInForm" className="text-sm/6 font-semibold text-gray-700">
                            Към вход <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
}