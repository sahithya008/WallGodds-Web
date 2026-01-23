import Styles from "./Gallery.module.css";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import Footer from "../CommonModule/FooterModule/Footer";

const Gallery = () => {
    return (
        <>
            <NavBar />
            <div className={Styles.container}>
                <div className={Styles.temp}>
                    <p className={Styles.first}>
                        This section is being designed and will be available for
                        contributors soon
                    </p>
                    <p className={Styles.second}>
                        Keep an eye on{" "}
                        <a
                            href="https://github.com/WallGodds/WallGodds-Web/issues"
                            target="_blank"
                            rel="noopener noreferrer">
                            Github
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://discord.gg/kTQ5KWANp8"
                            target="_blank"
                            rel="noopener noreferrer">
                            Discord
                        </a>{" "}
                        for updates and announcements
                    </p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Gallery;

// reference of old code:
{
    /* <Routes>
    <Route path="mobile" element={<Mobile />} />
    <Route path="tablet" element={<Tablet />} />
    <Route path="desktop" element={<Desktop />} />
    </Routes>; */
}
