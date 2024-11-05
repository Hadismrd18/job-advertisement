import React from "react";
import store from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/skillsSlice";
import { filterAdd, filterClear } from "../redux/dataSlice";
export default function Card({ data }) {
  const skillData = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const addNewSkill = (skill) => {
    dispatch(add(skill));

    dispatch(filterAdd(skill));
  };
  return (
    <div className="w-full bg-white flex flex-col items-start sm:flex-row sm:items-center rounded shadow-xl my-14 relative py-10 px-4 ">
      <div className="w-full relative flex flex-col sm:flex-row sm:gap-7 items-start">
        <img
          src={data.logo}
          className=",ax-[376px]:absolute top-[-75px] left-0 size-16 min-[1440px]:size-20"
        />
        {/* put these in a div */}
        <div>
          <div className="w-full flex items-center justify-start gap-4">
            <h1 className="text-base font-bold text-darkCyan">
              {data.company}
            </h1>
            <div className="flex items-center justify-center gap-2">
              {data.new ? (
                <div className="px-2 py-[2px] bg-darkCyan text-white rounded-full">
                  new!
                </div>
              ) : (
                ""
              )}
              {data.featured ? (
                <div className="px-2 py-[2px] bg-darkCyan3 text-white rounded-full">
                  featured{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <span className="text-lg font-extrabold text-darkCyan3">
            {data.position}
          </span>
          <div className="text-darkCyan2 flex items-center gap-3">
            <span>{data.postedAt} </span>.<span>{data.contract} </span>.
            <span>{data.location}</span>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="h-[2px] w-full bg-lightCyan my-2 sm:hidden"></div>
      <div className="flex items-center flex-wrap gap-3 justify-start">
        <span
          onClick={() => addNewSkill(data.role)}
          className="px-1 py-[2px] font-bold bg-lightCyan text-darkCyan hover:bg-darkCyan hover:text-lightCyan transition-all duration-200 rounded"
        >
          {data.role}
        </span>
        <span
          onClick={() => addNewSkill(data.level)}
          className="px-1 py-[2px] font-bold bg-lightCyan text-darkCyan hover:bg-darkCyan hover:text-lightCyan transition-all duration-200 rounded"
        >
          {data.level}
        </span>
        {data.languages.map((name) => (
          <span
            onClick={() => addNewSkill(name)}
            className="px-1 py-[2px] font-bold bg-lightCyan text-darkCyan hover:bg-darkCyan hover:text-lightCyan transition-all duration-200 rounded"
          >
            {name}
          </span>
        ))}
        {data.tools.map((name) => (
          <span
            onClick={() => addNewSkill(name)}
            className="px-1 py-[2px] font-bold bg-lightCyan text-darkCyan hover:bg-darkCyan hover:text-lightCyan transition-all duration-200 rounded"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
