import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import { Layout } from "~/components";
import stylesheet from "~/styles/app.css";
import font from "~/styles/custom-font.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: font },
];

export const meta: MetaFunction = () => {
  const title = "Stash";
  const description = `hi friend! this my stash?`;
  return {
    charset: "utf-8",
    title,
    description,
    viewport: "width=device-width,initial-scale=1",
    // keywords: "Cave Club, Cave Town",
    // "twitter:image": "https://cave-club-remix.pages.dev/caveclubsoc.jpg",
    // "twitter:url": "https://cave-club-remix.pages.dev",
    // "twitter:card": "summary_large_image",
    // "twitter:creator": "@remix_run",
    // "twitter:site": "@remix_run",
    // "twitter:title": "Cave Club",
    // "twitter:description": description,
    // "og:type": "website",
    // "og:url": "https://cave-club-remix.pages.dev",
    // "og:title": title,
    // "og:description": description,
    // "og:image": "https://cave-club-remix.pages.dev/caveclubsoc.jpg",
  };
};

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <div className="bg-light dark:bg-dark flex-1 flex flex-col justify-center items-center text-2xl">
            Sorry, something seems to have gone wrong here.
          </div>
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <div className="bg-light dark:bg-dark flex-1 flex flex-col justify-center items-center text-2xl">
            {caught.status == 404 ? (
              <>Hmm, this page is not found!</>
            ) : (
              <>Sorry, something seems to have gone wrong here.</>
            )}
          </div>
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
