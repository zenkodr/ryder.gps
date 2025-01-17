import { Stack, Input, Text, Heading } from "@chakra-ui/react";
import Switch, { sendApiRequest } from "@/components/switch";
import type { MouseEvent } from "react";

/* 2 pending functions to implement
  function handleSearch: Modify handleSearch to filter results from all Riders 
  remove sign in: when next-auth token is ready, base path would be sign-in page
*/

const handleSearch = (e: MouseEvent) => {
  return e.preventDefault();
};

export default function Dashboard({}) {
  return (
    <>
      <Switch sendApiRequest={sendApiRequest} />
      <header className="bg-grey shadow">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Stack spacing={3}>
            <form method="post">
              <Input
                id="search"
                variant="filled"
                onClick={handleSearch}
                placeholder="Search for a ryder"
              />
            </form>
          </Stack>
        </div>
      </header>
      <main className="container-fluid position-absolute h-100 bg-light">
        <img
          className="mx-auto w-full w-auto"
          alt="view rydergp on a tablet"
          src="/ryderGP-unsplash.avif"
        />
        <Text mt="5" className="index-text sm:px-6 lg:px-8">
          Learn about Ryder-GP from our{" "}
          <a href="/documentation">
            <u>documentation</u>
          </a>
        </Text>
        <a
          href="/auth/sign-in"
          className=" mt-8 mb-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Sign in
        </a>
        <a
          href="https://github.com/gicodes/ryder.gps"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Source code on Github
        </a>
      </main>
    </>
  );
}
