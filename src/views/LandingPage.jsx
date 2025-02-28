import Navbar from "../components/NavBar"
import styles from "./LandingPage.module.css"
import panda from "../assets/panda.png"
import Projects from "./Projects"

function LandingPage() {
    return (
        <div>
            <div className={styles['landing-container']}>
                <Navbar />
                <div className={styles['main-container']}>
                    <div className={styles['landing-left']}>
                        <h2>hello, i'm</h2>
                        <h2 className={styles['main-heading']}>safa</h2>
                        <h2 className={styles['typewriter']}>shujath</h2>


                    </div>

                    <div className={styles['landing-right']}>
                        <img src={panda} alt="Logo" width={400} />
                    </div>
                </div>

            </div>
            <Projects />
        </div>

    )
}

export default LandingPage