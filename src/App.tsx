import FirstSection from "./components/firstSection/FirstSection";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-primary-black font-roboto text-[#ffffff]">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}

export default App;