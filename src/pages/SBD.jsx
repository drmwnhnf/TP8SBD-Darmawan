import Navbar from '../components/Navbar'
import logoSBD from '../assets/SBDLogo.svg'

export default function SBD() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-16 px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                    <img src={logoSBD} alt="Logo SBD" className="h-28" />
                    <h1 className="text-4xl font-bold text-redAccent">SBD</h1>
                </div>
                <p className="max-w-xl text-center text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                </p>
            </div>
        </>
    )
}