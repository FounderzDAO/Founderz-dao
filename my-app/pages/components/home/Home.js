import CapsuleStatic from "./CapsuleStatic"
import IntroPage from "./IntroPage"
import MidSection from "./MidSection"


const Home = () => {
  return (
    <div className="overflow-hidden">
      <IntroPage />
      <CapsuleStatic />
      <MidSection />
    </div>
  )
}

export default Home