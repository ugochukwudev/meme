"use client";
import Image from "next/image";
import Google from "./components/Google";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import React, { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [peopleAsk1, setPeopleAsk1] = useState<string>("");
  const [peopleAsk2, setPeopleAsk2] = useState<string>("");
  const [peopleAsk3, setPeopleAsk3] = useState<string>("");
  const handleCaptureClick = async () => {
    const id = document.getElementById("everything");
    if (!id) {
      alert("something went wrong");
      return;
    }
    const canvas = await html2canvas(id);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, question + ".png", "image/png");
  };
  return (
    <>
      <div>
        <h1 className="text-[30px] font-bold">Google</h1>
        <div className="flex flex-col gap-4">
          <textarea
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            value={question}
            placeholder="Question"
            className="px-4 py-2 outline-none border-[1px] border-yellow-400"
          />
          <textarea
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            value={answer}
            placeholder="Answer"
            className="px-4 py-2 outline-none border-[1px] border-yellow-400"
          />
          <textarea
            onChange={(e) => {
              setPeopleAsk1(e.target.value);
            }}
            value={peopleAsk1}
            placeholder="People ask 1"
            className="px-4 py-2 outline-none border-[1px] border-yellow-400"
          />
          <textarea
            onChange={(e) => {
              setPeopleAsk2(e.target.value);
            }}
            placeholder="People ask 2"
            className="px-4 py-2 outline-none border-[1px] border-yellow-400"
          />
          <textarea
            onChange={(e) => {
              setPeopleAsk3(e.target.value);
            }}
            placeholder="People ask 3"
            className="px-4 py-2 outline-none border-[1px] border-yellow-400"
          />
        </div>
        <Google
          question={question || "Who Owned Twitter Before Elon Musk"}
          answer={
            answer ||
            "Jack Dorsey, along with Noah Glass, Biz Stone and Evan Williams, launched Twitter in 2006."
          }
          peopleAsk1={peopleAsk1 || "Who owned Twitter before Elon Musk?"}
          peopleAsk2={peopleAsk2 || " Who was Twitter owned by?"}
          peopleAsk3={peopleAsk3 || "Who sold Twitter to Musk?"}
        />
        <button
          onClick={() => {
            handleCaptureClick();
          }}
          className="mt-10 bg-blue-600 w-[200px] text-white py-4 active:scale-90"
        >
          Download!
        </button>
      </div>
    </>
  );
}
