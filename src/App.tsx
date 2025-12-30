import FifthSection from "./components/fifthSection/FifthSection";
import FirstSection from "./components/firstSection/FirstSection";
import FourthSection from "./components/fourthSection/FourthSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-primary-black font-roboto text-[#ffffff]">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </div>
  );
}

export default App;