"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroTerminal.module.css";

const commands = [
  {
    cmd: "cat org-status.txt",
    output: [
      { text: "", type: "blank" },
      { text: "  Makeshift Engineering", type: "heading" },
      { text: "  ─────────────────────", type: "muted" },
      { text: "", type: "blank" },
      { text: "  Status:    Building", type: "info", highlight: "Building" },
      { text: "  Team:      Friends", type: "info", highlight: "Friends" },
      { text: "  Projects:  1 active", type: "info", highlight: "1 active" },
      { text: "", type: "blank" },
      { text: "  ▸ PenguinDB  LSM-tree SQL DB  [active]", type: "project" },
      { text: "", type: "blank" },
    ],
  },
  {
    cmd: "makeshift --version",
    output: [
      { text: "", type: "blank" },
      { text: "  makeshift v0.1.0", type: "success" },
      { text: "  Built with Go · gRPC · HTML · CSS", type: "muted" },
      { text: "", type: "blank" },
    ],
  },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function HeroTerminal() {
  const [typedCmd, setTypedCmd] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [outputLines, setOutputLines] = useState([]);
  const [showEndCursor, setShowEndCursor] = useState(false);
  const isRunning = useRef(false);

  useEffect(() => {
    if (isRunning.current) return;
    isRunning.current = true;

    async function runSequence() {
      let cmdIndex = 0;
      while (true) {
        const { cmd, output } = commands[cmdIndex];

        // Type the command character by character
        setTypedCmd("");
        setShowCursor(true);
        setOutputLines([]);
        setShowEndCursor(false);

        for (let i = 0; i <= cmd.length; i++) {
          setTypedCmd(cmd.slice(0, i));
          await sleep(35 + Math.random() * 45);
        }

        await sleep(400);
        setShowCursor(false);

        // Show output lines one by one
        for (let i = 0; i < output.length; i++) {
          setOutputLines((prev) => [...prev, output[i]]);
          await sleep(60);
        }

        setShowEndCursor(true);
        await sleep(4000);

        cmdIndex = (cmdIndex + 1) % commands.length;
      }
    }

    const timer = setTimeout(runSequence, 800);
    return () => clearTimeout(timer);
  }, []);

  function renderLine(lineData, index) {
    if (lineData.type === "blank") {
      return <div key={index} className={styles.outputLine}><br /></div>;
    }

    let className = styles.outputLine;
    let content;

    switch (lineData.type) {
      case "heading":
        return (
          <div key={index} className={`${className} ${styles.heading}`}>
            {lineData.text}
          </div>
        );
      case "muted":
        return (
          <div key={index} className={`${className} ${styles.muted}`}>
            {lineData.text}
          </div>
        );
      case "info":
        const parts = lineData.text.split(lineData.highlight);
        return (
          <div key={index} className={`${className} ${styles.info}`}>
            {parts[0]}
            <span className={styles.accentText}>{lineData.highlight}</span>
            {parts[1] || ""}
          </div>
        );
      case "project":
        return (
          <div key={index} className={`${className} ${styles.projectLine}`}>
            {lineData.text.replace("[active]", "")}
            <span className={styles.greenText}>[active]</span>
          </div>
        );
      case "success":
        return (
          <div key={index} className={`${className} ${styles.success}`}>
            {lineData.text}
          </div>
        );
      default:
        return (
          <div key={index} className={className}>
            {lineData.text}
          </div>
        );
    }
  }

  return (
    <div className={styles.terminal}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <span className={styles.barTitle}>makeshift --status</span>
      </div>
      <div className={styles.body}>
        <div className={styles.line}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cmd}>{typedCmd}</span>
          {showCursor && <span className={styles.cursor}>█</span>}
        </div>
        <div className={styles.output}>
          {outputLines.map((line, i) => renderLine(line, i))}
          {showEndCursor && (
            <div className={styles.line}>
              <span className={styles.prompt}>$</span>{" "}
              <span className={styles.cursor}>█</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
