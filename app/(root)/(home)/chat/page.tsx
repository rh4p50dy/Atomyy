"use client";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";
import Conversation from "./Conversation";


const MODEL_NAME = "gemini-1.5-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;


export default function Home() {
  const [conversationHistory, setConversationHistory] = useState<
    { role: "user" | "model"; text: string; isLoading?: boolean }[]
  >([]);

  async function runChat(prompt: string) {
    setConversationHistory([
      ...conversationHistory,
      { role: "user", text: prompt, },
      { role: "model", text: "", isLoading: true },
    ])
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "Who are you?" }],
        },
        {
          role: "model",
          parts: [{ text: "Hello there! How can I assist you today?" }],
        },
      ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    
    setConversationHistory((prevHistory) => [
      ...prevHistory.slice(0, -1), // Keep existing history
      { role: "model", text: response.text() }, // Add the model's response
    ]);
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const prompt = (event.target as HTMLFormElement)?.prompt?.value || "";
    runChat(prompt);
  };

  return (
    <main className="flex w-screen px-24 py-10 flex-col">
      
      <div className="">
        <h1 className="text-2xl ps-3 border-s-[6px] border-accent py-2 my-3">Conversation</h1>
        <ul className="h-[500px] overflow-scroll hide-scrollbar">
          <Conversation conversationHistory={conversationHistory} />
        </ul>
      </div>
      <form onSubmit={onSubmit} className="fixed top-[85%] h-full w-full bg-white">
        <p className="mb-2">Enter your prompt here</p>
        <div className="flex">
          <div className="flex-grow w-3/4 pe-[2%]">
            <input
            type="text"
            placeholder="Enter your prompt here"
            name="prompt"
            className="border-2 border-dark outline-none p-4 rounded-lg w-full text-black"
            />
          </div>
          <div className="flex-grow">
            <button
              type="submit"
              className="bg-white border w-1/2 border-dark outline-none p-4 rounded-lg text-black font-bold uppercase"
            >
              Submit
            </button>
          </div>

        </div>
      </form>
    </main>
  );
}
