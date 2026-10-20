"use client";

import { useState, useRef, useEffect } from "react";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KonohaLeafSymbol, ShurikenIcon, KunaiIcon } from "./NarutoSymbols";

const INITIAL_LOGS = [
  "SYSTEM_INIT: Brain Drain 2026 Shinobi Kernel loaded.",
  "EVENT NODE: IEEE-CS SPIT (Hidden Leaf Chapter).",
  "STATUS: 6 Rounds [READY] | Format: Duo Only | Starts 5:00 PM Onwards | FE Only",
  "Type 'help' for available commands, or 'twists' to inspect the winning rules.",
];

export default function ShinobiTerminal() {
  const [logs, setLogs] = useState<string[]>(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState("");
  const terminalOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTo({
        top: terminalOutputRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [logs]);

  const processCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, `> ${rawCmd}`];

    switch (cmd) {
      case "help":
        newLogs.push("AVAILABLE SHINOBI COMMANDS:");
        newLogs.push("  rounds     - Breakdown of all 6 rapid quiz & logic rounds");
        newLogs.push("  twists     - Inspect the 3 big rules where logic meets chaos");
        newLogs.push("  prizes     - View the ₹4,000+ prize pool & 2nd place jackpot");
        newLogs.push("  rules      - Eligibility, Duo format & Google Forms mechanics");
        newLogs.push("  schedule   - Event date (Starts 5:00 PM Onwards) & 27 Oct deadline");
        newLogs.push("  test       - Run diagnostic logic & chakra benchmark");
        newLogs.push("  clear      - Clear terminal logs");
        break;
      case "rounds":
        newLogs.push("SIX-ROUND MISSION BREAKDOWN (Starts 5:00 PM Onwards):");
        newLogs.push("  [01] NO ESCAPE ROUND: High-intensity opening logic puzzles & reflex trivia (Naruto Uzumaki).");
        newLogs.push("  [02] Round 02: Bug spotting, output prediction & mini-code tracing (Shikamaru Nara).");
        newLogs.push("  [03] Round 03: CS concepts, tech trivia & viral tech culture (Kakashi Hatake).");
        newLogs.push("  [04] Round 04: Reverse logic & lateral thinking brain-twisters (Sasuke Uchiha).");
        newLogs.push("  [05] Round 05: Rapid-fire speed coding challenges under clock pressure (Minato Namikaze).");
        newLogs.push("  [06] Round 06: Final decider round unlocking the bottom-5 Dare Gauntlet (Might Guy & Rock Lee)!");
        break;
      case "twists":
        newLogs.push("BRAIN DRAIN TWISTS:");
        newLogs.push("  1. 🥈 The 2nd position takes the BIGGEST PRIZE of the entire event!");
        newLogs.push("  2. 🎲 A random position winner (revealed at closing) will also receive a prize.");
        newLogs.push("  3. 🔥 The last 5 players must complete a live dare; best dare wins a cash prize!");
        break;
      case "rules":
        newLogs.push("OFFICIAL RULES:");
        newLogs.push("  • Eligibility: Strictly open to First Year Students (FE Only).");
        newLogs.push("  • Team Size: Duo ONLY (Teams of 2). Individual play from each device.");
        newLogs.push("  • Platform: Google Forms. Bring your own laptops / phones.");
        newLogs.push("  • Registration: Closes 27 October 2026 on Unstop.");
        break;
      case "prizes":
        newLogs.push(`TOTAL PRIZE POOL: ${EVENT_CONFIG.prizePool}`);
        newLogs.push("  🥈 2nd Place: THE BIGGEST PRIZE (The Inversion Champion)");
        newLogs.push("  🥇 1st Place: Top Finisher Award & Recognition");
        newLogs.push("  🎲 Mystery Rank: Secret Position Prize (Revealed Live)");
        newLogs.push("  🔥 Last 5 Dare Showdown: Best Dare Award");
        break;
      case "schedule":
        newLogs.push("TIMELINE & DATE:");
        newLogs.push(`  • Registration Closes: ${EVENT_CONFIG.registrationDeadline}`);
        newLogs.push(`  • Event Date: ${EVENT_CONFIG.date} (SPIT Mumbai)`);
        newLogs.push("  • Timing: Starts 5:00 PM Onwards (Single-day showdown).");
        break;
      case "test":
        newLogs.push("RUNNING CHAKRA & LOGIC BENCHMARK...");
        newLogs.push("  [✓] Duo Synergy Check: SYNCHRONIZED (2 Ninja Nodes Connected)");
        newLogs.push("  [✓] Google Forms Connection: VERIFIED");
        newLogs.push("  [✓] Paradox & Reverse Logic Matrix: INITIALIZED");
        newLogs.push("  [✓] Dare Protocol Safety Locks: DISENGAGED (Chaos Ready)");
        newLogs.push("  ALL SYSTEMS OPERATIONAL. You are combat ready for 28 October 5:00 PM!");
        break;
      case "clear":
        setLogs(["Terminal cleared. Type 'help' for available commands."]);
        setInputVal("");
        return;
      default:
        newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for list of commands.`);
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    processCommand(inputVal);
  };

  return (
    <section
      id="terminal"
      aria-label="Shinobi Terminal"
      className="shinobi-terminal-section"
      style={{
        background: "var(--page-bg-secondary)",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }} className="reveal-on-scroll">
          <span className="chip chip-blue" style={{ marginBottom: "10px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <KonohaLeafSymbol size={14} color="var(--color-secondary-400)" />
            <span>Shinobi Kernel Console</span>
          </span>
          <h2 className="section-heading">
            Shinobi{" "}
            <span style={{ color: "var(--action-primary)" }}>Terminal</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "10px" }}>
            Query the competition kernel, inspect the 6 rounds, or check the twist winning criteria.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className="reveal-on-scroll shinobi-terminal-window"
          style={{
            background: "var(--color-neutral-900)",
            border: "1px solid rgba(74, 147, 203, 0.25)",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 24px rgba(74, 147, 203, 0.12)",
            overflow: "hidden",
            fontFamily: "monospace",
          }}
        >
          {/* Terminal Titlebar */}
          <div
            className="shinobi-terminal-titlebar"
            style={{
              padding: "12px 18px",
              background: "var(--color-neutral-800)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="shinobi-terminal-meta" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "var(--color-akatsuki-red)", display: "inline-block" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "var(--color-accent-400)", display: "inline-block" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span className="shinobi-terminal-hostname" style={{ marginLeft: "12px", fontSize: "12px", color: "var(--color-secondary-300)", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                <KunaiIcon size={14} color="var(--color-secondary-300)" rotate={-45} />
                <span>brain_drain@ieee-cs-spit:~$ (chakra-sh)</span>
              </span>
            </div>
            <span className="shinobi-terminal-live" style={{ fontSize: "11px", color: "var(--color-secondary-400)", letterSpacing: "0.05em" }}>
              ● 28 OCT · 5:00 PM ONWARDS
            </span>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalOutputRef}
            className="shinobi-terminal-output"
            style={{
              padding: "20px",
              minHeight: "220px",
              maxHeight: "340px",
              overflowY: "auto",
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--color-neutral-100)",
            }}
          >
            {logs.map((log, i) => (
              <div
                key={i}
                style={{
                  color: log.startsWith(">")
                    ? "var(--color-primary-400)"
                    : log.includes("[✓]") || log.includes("VERIFIED")
                    ? "#4ade80"
                    : log.includes("READY") || log.includes("SYNCHRONIZED")
                    ? "var(--color-secondary-400)"
                    : "var(--color-neutral-200)",
                  wordBreak: "break-word",
                }}
              >
                {log}
              </div>
            ))}
          </div>

          {/* Quick Jutsu Command Shortcuts */}
          <div
            className="shinobi-terminal-shortcuts"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              background: "var(--color-neutral-900)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "11px", color: "var(--color-neutral-600)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
              <ShurikenIcon size={10} color="var(--action-primary)" />
              <span>Quick Jutsu:</span>
            </span>
            {["help", "twists", "rounds", "prizes", "rules", "schedule", "test", "clear"].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => processCommand(cmd)}
                className="terminal-cmd-btn"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleCommand}
            className="shinobi-terminal-form"
            style={{
              display: "flex",
              alignItems: "center",
              background: "var(--color-neutral-800)",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              padding: "10px 18px",
            }}
          >
            <span style={{ color: "var(--action-primary)", fontWeight: 700, marginRight: "10px" }}>
              ❯
            </span>
            <input
              type="text"
              placeholder="Type command ('help', 'twists', 'rounds', 'prizes')..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="shinobi-terminal-input"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--color-neutral-50)",
                fontFamily: "monospace",
                fontSize: "13px",
              }}
            />
            <button
              type="submit"
              className="shinobi-terminal-submit"
              style={{
                background: "rgba(249, 109, 46, 0.18)",
                border: "1px solid rgba(249, 109, 46, 0.45)",
                color: "var(--color-primary-400)",
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
