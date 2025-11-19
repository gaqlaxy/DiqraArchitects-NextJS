import fs from "fs";
import path from "path";
import PreloaderClient from "./PreloaderClient";

export default function PreloaderWrapper() {
  const svgPath = path.join(process.cwd(), "public", "diqrasvg.svg");
  const svgContent = fs.readFileSync(svgPath, "utf8");

  return <PreloaderClient svg={svgContent} />;
}
