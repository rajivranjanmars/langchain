import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";
import { retriever } from "/utils/retriever";
import { combineDocuments } from "/utils/combineDocuments";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "langchain/schema/runnable";
import { formatConvHistory } from "/utils/formatConvHistory";

export default function Home() {






  return (
    <>
      <Head>
        <title>Scrimba Chatbot</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <main>
        <section class="chatbot-container">
          <div class="chatbot-header">
            <Image
              src="logo.svg"
              alt="logo"
              class="logo"
              width={40}
              height={40}
            />
            <h2 class="sub-heading">Technocean help Desk</h2>
          </div>
          <div
            class="chatbot-conversation-container"
            id="chatbot-conversation-container"
          ></div>
          <form id="form" class="chatbot-input-container">
            <input name="user-input" type="text" id="user-input" required />
            <button id="submit-btn" class="submit-btn">
              <Image
                src="send.svg"
                alt="send"
                class="send-btn-icon"
                width={20}
                height={20}
              />
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
