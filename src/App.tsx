import {
    HashRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Beranda from "./page_nav/beranda";
import Pengumuman from "./page_nav/pengumuman";
import Tentang from "./page_nav/tentang";
import logoUniwa from "./assets/logo-uniwa.png";

function App() {
    return (
        <HashRouter>
            <header>

                <div className="header-logo">
                    <img className="logo"src={logoUniwa} alt="Logo Universitas Wahidiyah" />
                </div>
        <div className="header-content">
            <div className="top-header">

                <div id="heading">
                    <h1>KampusHub</h1>
                    <h2>Papan Pengumuman Universitas Wahidiyah</h2>
                </div>
                
            </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Beranda</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pengumuman">Pengumuman</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tentang">Tentang</NavLink>
                        </li>
                    </ul>
                </nav>
        </div>
            </header>

            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/pengumuman" element={<Pengumuman />} />
                <Route path="/tentang" element={<Tentang />} />
            </Routes>
        </HashRouter>
    );
}

export default App;