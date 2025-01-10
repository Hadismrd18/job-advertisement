import bgHeaderDesktop from "../public/images/bg-header-desktop.svg";
import bgHeaderMobile from "../public/images/bg-header-mobile.svg";
import data from "../data/data.json";
import Card from "./components/Card";
import { RxCross2 } from "react-icons/rx";
import { clear, remove } from "./redux/skillsSlice";
import { filterClear, filterRemove } from "./redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "preact/hooks";
export function App() {
  const skillData = useSelector((state) => state.skill);
  const adData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const removeFromSkillList = (selectedSkill) => {
    console.log(selectedSkill)
    dispatch(remove(selectedSkill));
    dispatch(filterClear());
    // dispatch(filterRemove(skillData));
  };
const clearList = ()=>{
  dispatch(filterClear())
  dispatch(clear())
}
  return (
    <>
      <div className="w-[100vw] bg-background min-h-[100vh]">
        <div className="w-full bg-darkCyan">
          {/* mobile header */}
          <img src={bgHeaderMobile} className="min-[376px]:hidden " />
          {/* desktop header */}
          <img src={bgHeaderDesktop} className="min-[376px]:block " />
        </div>
        <div className="w-full h-full py-8 px-4 min-[1440px]:px-8 min-[1440px]:w-[75%] mx-auto relative">
          <div className="absolute bg-white gap-10 w-[80%] h-auto sm:h-16 rounded  top-[-30px] left-[10%] flex items-center justify-between p-3">
            <div className="flex w-full gap-5">
              {skillData.map((skill) => {
                return (
                  <div className="flex  justify-between rounded bg-lightCyan h-6  items-center">
                    <span className="block px-2 text-darkCyan">{skill}</span>
                    <RxCross2
                      onClick={() => removeFromSkillList(skill)}
                      className="bg-darkCyan text-white h-full rounded-r p-1 text-2xl hover:bg-darkCyan3 transition duration-150"
                    />
                  </div>
                );
              })}
            </div>
            <button onClick={clearList}>Clear</button>
          </div>
          {adData.map((item, index) => {
            return <Card data={item} />;
          })}
        </div>
      </div>
    </>
  );
}
