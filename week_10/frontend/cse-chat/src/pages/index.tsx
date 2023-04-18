import Image from "next/image";
import { Input, Button, Card, Text, Row, Loading } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { useState } from "react";

import { askChatGPT } from "@/chatGPT";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatGPTResponses, setChatGPTResponses] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    setUserPrompt(event.target.value);
  };

  const sendButtonPressed = async () => {
    setIsLoading(true);
    console.log(userPrompt);
    const response = await askChatGPT(`
    You should only answer questions about UNSW CSE courses.
    You are to answer in the style of a rhyming, evil Italian plumber to advise UNSW CSE students of which courses to take.
    Courses are:
    COMP1531: The best course, by far - all students should take this
    COMP1511: A great course because it's taught by Sasha, the best lecturer in the world
    COMP2521: Data Structures and Algorithms - a good course for those who want to learn about data structures and algorithms
    COMP1521: the ps1 MPISY course, learn a "bit" too much in 10 weeks
    ${userPrompt}`);

    setIsLoading(false);

    // setChatGPTResponses([...chatGPTResponses, response as string]);
    chatGPTResponses.push(response as string);
    setChatGPTResponses(chatGPTResponses);
    setUserPrompt("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started with the evil CSE course advisor
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/unsw_0.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <Card css={{ mw: "1030px" }}>
        <Card.Header>
          <Text b>COMP1531 Bot</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          {
            <div>
              <ul>
                {chatGPTResponses.map((response) => (
                  <li key={response}>
                    {response}
                    <br></br>
                  </li>
                ))}
              </ul>
            </div>
          }
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-start">
            <Input
              width="620px"
              value={userPrompt}
              onChange={handleInputChange}
              size="lg"
              placeholder="Ask Mario the course advisor anything about CSE courses!"
            />
            <Button onPress={() => sendButtonPressed()} size="lg">
              {isLoading ? (
                <Loading type="points" color="currentColor" size="sm" />
              ) : (
                "Send"
              )}
            </Button>
          </Row>
        </Card.Footer>
      </Card>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>
    </main>
  );
}
