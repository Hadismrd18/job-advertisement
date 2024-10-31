import bgHeaderDesktop from "../public/images/bg-header-desktop.svg";
import bgHeaderMobile from "../public/images/bg-header-mobile.svg";
import data from "../data/data.json";
export function App() {
  console.log(data);
  return (
    <>
      <div className="w-full bg-background">
        <div className="w-full bg-darkCyan">
          <img src={bgHeaderMobile} className="min-[376px]:hidden " />
        </div>
        <div className="w-full h-full p-8">
          {data.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded shadow-xl my-14 relative p-10">
                <img src={item.logo} className="absolute top-[-33px] left-3 size-16"/>
                <div>
                  <h1>{item.company}</h1>
                  <div>featured</div>
                  <div>featured</div>
                </div>
                <span>{item.position}</span>
                <div>
                  <span>{item.postedAt} .</span>
                  <span>{item.contract} .</span>
                  <span>{item.location}</span>
                </div>
                <div className="h-1 w-full bg-lightCyan"></div>
                <div>
                  {item.languages.map((name) => (
                    <span>{name}</span>
                  ))}
                  {item.tools.map((name) => (
                    <span>{name}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
