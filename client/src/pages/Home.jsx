import { About, Divider, MainFooter, Hero } from "../components";
function Home() {
  return (
    <div>
      <div className="mt-6">
        <Hero />
        <Divider />
      </div>
      <div className="mt-6">
        <About />
        <MainFooter />
      </div>
    </div>
  );
}

export default Home;
