import logo from "./logo.svg";
import "./AppStyle.css";
import React from "react";
import moment from "moment";
import AppComp from "./components/AppComp";
import { marked } from "marked";
import main_icon from "./main_icon.png";

const App = () => {
  const [response, setResponse] = React.useState({});
  const [response2, setResponse2] = React.useState({});
  const [response3, setResponse3] = React.useState({});
  React.useEffect(() => {
    fetch(
      "https://api.github.com/repos/beans-321/revanced-auto-apk/releases/latest"
    )
      .then((res) => res.json())
      .then((json) => {
        setResponse(json);
      });
  }, []);
  React.useEffect(() => {
    fetch(
      "https://api.github.com/repos/revanced/revanced-patches/releases/latest"
    )
      .then((res) => res.json())
      .then((json) => {
        setResponse2(json);
      });
  }, []);
  React.useEffect(() => {
    fetch(
      "https://api.github.com/repos/inotia00/revanced-patches/releases/latest"
    )
      .then((res) => res.json())
      .then((json) => {
        setResponse3(json);
      });
  }, []);
  return (
    <div className="overflow-hidden App flex flex-col items-center justify-center">
      <header className="overflow-hidden border-b-2 w-full pb-4 border-none">
        <h3 className="overflow-hidden text-3xl font-extrabold text-red-500">
         ReVanced APKs
        </h3>
      </header>
      <div className="overflow-hidden px-2 py-4 w-auto h-100">
        <div className="overflow-hidden flex flex-col md:flex-row ">
          <div className="overflow-hidden pt-5 md:pt-0 space-y-2 md:pl-5">
            <h1 className="overflow-hidden justify-center items-center text-2xl text-gray-200 font-extrabold pb-3">
              Downloads
            </h1>
            <h2 className="overflow-hidden text-gray-100 text-lg">
              Uploaded {" "}
              <span className="overflow-hidden">
                {response.published_at &&
                  moment(new Date(response.published_at)).fromNow()}
              </span>
            </h2>
            <div className="overflow-hidden">
              {response.assets ? (
                response.assets
                  .slice()
                  .reverse()
                  .map((asset, index) => {
                    return (
                      <AppComp
                        key={index}
                        name={asset.name}
                        download={asset.browser_download_url}
                        size={Number.parseInt(asset.size)}
                        download_count={asset.download_count}
                      />
                    );
                  })
              ) : (
                <p className="overflow-hidden text-gray-200">Loading...</p>
              )}
            <div>
            <h1>
              &nbsp;
            </h1>
            <h1 className="overflow-hidden justify-center items-center text-2xl text-gray-200 font-extrabold pb-3">
              Changelogs
            </h1>
            <h2 className="overflow-hidden text-gray-300 marked font-bold font-sans text-start whitespace-pre-wrap text-sm md:text-base p-3">
              ReVanced Patches{" "}
              <span className="overflow-hidden font-bold">
                {response2.tag_name}
                &nbsp;released&nbsp;
                {response2.published_at &&
                  moment(new Date(response2.published_at)).fromNow()}
              </span>
            </h2>
              {response2.body ? (
                <pre
                  className="overflow-hidden text-gray-300 marked font-bold font-mono text-start whitespace-pre-wrap text-sm md:text-base w-screen p-3 no-underline"
                  dangerouslySetInnerHTML={{
                    __html: marked.parseInline(
                        response2.body
                    ),
                  }}
                ></pre>
              ) : (
                <p className="overflow-hidden text-gray-300 font-bold">Loading...</p>
              )}
            <h2 className="overflow-hidden text-gray-300 marked font-bold font- text-start whitespace-pre-wrap text-sm md:text-base p-3">
              ReVanced Extended Patches{" "}
              <span className="overflow-hidden font-bold">
                {response3.tag_name}
                &nbsp;released&nbsp;
                {response3.published_at &&
                  moment(new Date(response3.published_at)).fromNow()}
              </span>
            </h2>
              {response3.body ? (
                <pre
                  className="overflow-hidden text-gray-300 marked font-bold font-mono text-start whitespace-pre-wrap text-sm md:text-base w-screen p-3"
                  dangerouslySetInnerHTML={{
                    __html: marked.parseInline(
                        response3.body
                    ),
                  }}
                ></pre>
              ) : (
                <p className="overflow-hidden text-gray-300 font-bold">Loading...</p>
              )}
            </div>
            </div>
          </div>
        </div>
          <div className="overflow-hidden flex flex-col justify-center items-center mt-6 ">
            <a
              className="overflow-hidden flex flex-row text-xs text-red-500 no-underline items-center"
              href="https://revanced.app/"
            >
              <img className="overflow-hidden h-10 w-10" src={main_icon} alt="Main Logo" />
            </a>
            <p className="overflow-hidden text-xs">
              All credits to the original developers of{" "}
              <a
                className="overflow-hidden text-xs text-red-500 no-underline"
                href="https://revanced.app/"
              >
                ReVanced
              </a>
              .
            </p>
            <p className="overflow-hidden pt-2 text-sm">
              This project is open source, based on <a className="overflow-hidden text-red-500 no-underline" href="https://github.com/j-hc/revanced-magisk-module">j-hc/revanced-magisk-module</a>, check our source at{" "}
              <a
                className="overflow-hidden text-red-500 no-underline"
                href="https://github.com/beans-321/revanced-auto-apk"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
    </div>
  );
};

export default App;
