import Navbar from '../components/Navbar'
import logoSBD from '../assets/SBDLogo.svg'
import logoDMJ from '../assets/DMJLogo.svg'
import logoOS from '../assets/OSLogo.svg'
import { Link } from 'react-router-dom'

export default function Home() {
    const sections = [
        { logo: logoSBD, color: "redAccent", label: "SBD", link: "/sbd" },
        { logo: logoDMJ, color: "blueAccent", label: "DMJ", link: "/dmj" },
        { logo: logoOS, color: "greenAccent", label: "OS", link: "/os" },
    ]

    return (
        <>
            <Navbar />
            <div className="text-center py-12 px-6">
                <h1 className="text-4xl font-bold mb-4">Welcome to Netlab Website!</h1>
                <p className="text-lg text-gray-600 mb-12">Darmawan Hanif (2206829175)</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {sections.map(({ logo, color, label, link }) => (
                        <Link to={link} key={label} className="w-72 transform hover:scale-105 transition duration-300">
                            <div className="p-6 border rounded-2xl shadow-sm text-center bg-white hover:shadow-md">
                                <img src={logo} alt={label} className="mx-auto h-24 mb-4" />
                                <h2 className={`text-${color} font-semibold text-xl`}>{label}</h2>
                                <p className="text-sm mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
