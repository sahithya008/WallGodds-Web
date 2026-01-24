import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/LoaderModule/Loader";
import Home from "./Components/HomeModule/Home";
import Gallery from "./Components/GalleryModule/Gallery";
import Upload from "./Components/UploadModule/Upload";
import SignUp from "./Components/CommonModule/SignUpModule/SignUp";
import Profile from "./Components/ProfileModule/Profile";
import Error404 from "./Components/CommonModule/ErrorModule/Error404";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
    const [isLoading, setIsLoading] = useState(() => {
        // Check if loader already shown in this session
        const hasLoaded = sessionStorage.getItem("wallgodds_loaded");
        if (hasLoaded) {
            return false; // Don't show loader on reload
        }
        return true; // Show loader on first visit
    });

    const handleLoadingComplete = () => {
        sessionStorage.setItem("wallgodds_loaded", "true");
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
            <Router>
                <Analytics />
                <SpeedInsights />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery/*" element={<Gallery />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
