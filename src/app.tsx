import { useContext } from "preact/hooks";
import { LanguageSwitchButton } from "./components/LanguageSwitchButton";
import { Work } from "./components/Work";
import { TRANSLATION } from "./data/TRANSLATION";
import { WORKS_DATA } from "./data/WORKS_DATA";
import "./index.css";
import { LanguageContext } from "./lib/LanguageContext";

function WorkSection() {
  const context = useContext(LanguageContext);
  if (!context?.language) {
    throw new Error("LanguageContext is not provided");
  }
  const { language } = context;
  const works = WORKS_DATA[language];
  return (
    <section className="mb-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2 text-white">
        {TRANSLATION[language]["ShowcaseHead"]}
      </h2>
      <p className="text-gray-400 mb-4">
        {TRANSLATION[language]["ShowcaseFoot"]}
      </p>
      {works.map((work) => (
        <Work key={work.title} {...work} />
      ))}
    </section>
  );
}

function AboutMe() {
  const context = useContext(LanguageContext);
  if (!context?.language) {
    throw new Error("LanguageContext is not provided");
  }
  const { language } = context;
  return (
    <section className="mb-6 bg-gray-800 p-7 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2 text-white">
        {TRANSLATION[language]["AboutMe"]}
      </h2>
      <div className="text-gray-300">
        <p>{TRANSLATION[language]["AboutMeContent1"]}</p>
        <p>{TRANSLATION[language]["AboutMeContent2"]}</p>
        <div className="mt-3">
          <p className="text-xl text-gray-400">
            {TRANSLATION[language]["FavouriteVisualNovels"]}
          </p>
          <ul className="list-disc ml-4 p-2 text-gray-300">
            <li>{TRANSLATION[language]["Favourite1"]}</li>
            <li>{TRANSLATION[language]["Favourite2"]}</li>
            <li>{TRANSLATION[language]["Favourite3"]}</li>
            <li>{TRANSLATION[language]["Favourite4"]}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function App() {
  const context = useContext(LanguageContext);
  if (!context?.language) {
    throw new Error("LanguageContext is not provided");
  }
  const { language } = context;
  return (
    <div className="min-h-screen bg-gray-900 p-4 overflow-hidden">
      <LanguageSwitchButton />
      <header className="text-center mb-8">
        <h1 className="text-4xl text-white">Hello I'm Teepa</h1>
      </header>
      <div className="max-w-4xl md:w-4/5 mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            {TRANSLATION[language]["AboutThisPage"]}
          </h2>
          <p className="text-gray-300">
            {TRANSLATION[language]["AboutThisPageContent1"]}
          </p>
        </section>
        <section className="mb-6">
          <p className="text-gray-300">
            {TRANSLATION[language]["AboutThisPageContent2"]}
          </p>
          <ul className="list-disc ml-4 p-2 text-gray-300">
            <li>Email: teepakawaii[at]gmail.com</li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/t33pa"
                className="text-blue-400 hover:text-blue-300 duration-300"
                target="_blank"
              >
                t33pa
              </a>
            </li>
            <li>Discord: teepa.</li>
            <li className="ml-4 text-sm text-gray-400">
              {TRANSLATION[language]["DiscordFooterNote"]}
            </li>
            <li>
              X:{" "}
              <a
                href="https://x.com/Te3p4V"
                className="text-blue-400 hover:text-blue-300 duration-300"
                target="_blank"
              >
                Te3p4V
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="max-w-4xl mx-auto mt-5  p-6 ">
        <WorkSection />
      </div>
      <div className="max-w-4xl mx-auto mt-5  p-6 ">
        <AboutMe />
      </div>
    </div>
  );
}
