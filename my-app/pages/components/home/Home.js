import CapsuleStatic from "./CapsuleStatic"
import Intro from "./Intro"
import MidSection from "./MidSection"


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Intro />
      <CapsuleStatic />
      <MidSection />
    </div>
  )
}

export default Home