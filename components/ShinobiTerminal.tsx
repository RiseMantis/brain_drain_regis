"use client";

import { useState } from "react";

const INITIAL_LOGS = [
  "SYSTEM_INIT: Brain Drain v2.6 Shinobi Kernel loaded.",
  "CONNECTING: IEEE-CS SPIT secure node established.",
  "GAUNTLET STATUS: Code Arena [ONLINE] | Tech Quiz [ONLINE] | Chaos Protocol [ACTIVE]",
  "Type 'help' for available shinobi commands, or 'test' to run algorithmic diagnostics.",
];

export default function ShinobiTerminal() {
  const [logs, setLogs] = useState<string[]>(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, `> ${inputVal}`];

    switch (cmd) {
      case "help":
        newLogs.push("AVAILABLE COMMANDS:");
        newLogs.push("  rounds     - Inspect 01 Arena, 02 Knowledge Jutsu, 03 Chaos");
        newLogs.push("  rules      - View gauntlet engagement rules");
        newLogs.push("  prizes     - Display ninja rewards & podium ranking");
        newLogs.push("  test       - Execute sample algorithm benchmark");
        newLogs.push("  clear      - Clear terminal logs");
        break;
      case "rounds":
        newLogs.push("MISSION BREAKDOWN:");
        newLogs.push("  [01] The Coding Arena: Hard algorithmic problems under clock pressure.");
        newLogs.push("  [02] Knowledge Jutsu: CS theory, systems, networking, and AI trivia.");
        newLogs.push("  [03] Chaos Protocol: Unpredictable dynamic rules and sudden-death challenges.");
        break;
      case "rules":
        newLogs.push("RULES: Solo or squad of up to 3. C++, Java, Python, JS allowed. Fair play strictly enforced.");
        break;
      case "prizes":
        newLogs.push("PODIUM:");
        newLogs.push("  🥇 1st: Grand Shinobi Champion (Cash + IEEE-CS Honor + Merch)");
        newLogs.push("  🥈 2nd: Elite Jonin (Cash + Certificate)");
        newLogs.push("  🥉 3rd: Rising Chunin (Cash + Recognition)");
        break;
      case "test":
        newLogs.push("RUNNING CHAKRA BENCHMARK...");
        newLogs.push("  [✓] Two-pointer array sweep: 0.04ms");
        newLogs.push("  [✓] Dynamic programming state matrix: 0.12ms");
        newLogs.push("  [✓] Graph topological traversal: PASS (0 bugs detected)");
        newLogs.push("  ALL ALGORITHMIC SYSTEMS OPERATIONAL. You are combat ready.");
        break;
      case "clear":
        setLogs(["Terminal cleared. Type 'help' for commands."]);
        setInputVal("");
        return;
      default:
        newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for list of commands.`);
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  return (
    <section
      id="terminal"
      aria-label="Shinobi Terminal"
      style={{
        background: "var(--page-bg-secondary)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="chip chip-blue" style={{ marginBottom: "10px" }}>
            ⚡ Interactive Gauntlet Console
          </span>
          <h2 className="section-heading">
            Shinobi{" "}
            <span style={{ color: "var(--action-primary)" }}>Terminal</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "10px" }}>
            Query the competition kernel, verify your algorithmic status, or test your readiness.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          style={{
            background: "#080c12",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 24px rgba(56, 189, 248, 0.1)",
            overflow: "hidden",
            fontFamily: "monospace",
          }}
        >
          {/* Terminal Titlebar */}
          <div
            style={{
              padding: "12px 18px",
              background: "#111824",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span style={{ marginLeft: "12px", fontSize: "12px", color: "#94a3b8", fontWeight: 600 }}>
                brain_drain@ieee-cs-spit:~$ (chakra-sh)
              </span>
            </div>
            <span style={{ fontSize: "11px", color: "#38bdf8", letterSpacing: "0.05em" }}>
              ● LIVE
            </span>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: "20px",
              minHeight: "220px",
              maxHeight: "340px",
              overflowY: "auto",
              fontSize: "13px",
              lineHeight: 1.6,
              color: "#e2e8f0",
            }}
          >
            {logs.map((log, i) => (
              <div
                key={i}
                style={{
                  color: log.startsWith(">")
                    ? "#fb923c"
                    : log.includes("[✓]") || log.includes("PASS")
                    ? "#4ade80"
                    : log.includes("ONLINE") || log.includes("ACTIVE")
                    ? "#38bdf8"
                    : "#cbd5e1",
                  wordBreak: "break-word",
                }}
              >
                {log}
              </div>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleCommand}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0c131d",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              padding: "10px 18px",
            }}
          >
            <span style={{ color: "var(--action-primary)", fontWeight: 700, marginRight: "10px" }}>
              ❯
            </span>
            <input
              type="text"
              placeholder="Type command ('help', 'test', 'rounds', 'clear')..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#f8fafc",
                fontFamily: "monospace",
                fontSize: "13px",
              }}
            />
            <button
              type="submit"
              style={{
                background: "rgba(249, 115, 22, 0.2)",
                border: "1px solid rgba(249, 115, 22, 0.4)",
                color: "#fb923c",
                borderRadius: "8px",
                padding: "4px 12px",
                fontSize: "11px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              EXECUTE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
