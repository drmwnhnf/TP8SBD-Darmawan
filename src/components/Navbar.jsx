import { Link } from 'react-router-dom'
import logoNetlab from '../assets/Logo.svg'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <Link to="/">
                    <img src={logoNetlab} alt="Logo Sekolah" className="h-12 rounded-lg" />
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link to="/sbd" className="text-redAccent font-bold">SBD</Link>
                <Link to="/dmj" className="text-blueAccent font-bold">DMJ</Link>
                <Link to="/os" className="text-greenAccent font-bold">OS</Link>
            </div>
        </nav>
    )
}
