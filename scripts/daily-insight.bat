@echo off
REM ============================================================
REM  Wemeet - Daily Insight auto-publisher (Claude Code, no API key)
REM  Runs headless Claude Code on your Claude subscription login.
REM  Triggered by Windows Task Scheduler, daily 10:00 KST.
REM ============================================================

cd /d C:\kenny_work\000._My_company\260515_wm_web
if not exist logs mkdir logs

REM NOTE:
REM  - No --bare flag  -> Claude Code uses your keychain/subscription login (no ANTHROPIC_API_KEY needed).
REM  - acceptEdits     -> file writes + common fs commands auto-approved.
REM  - allowedTools    -> Bash (node/git), web research, file read/write auto-approved (no prompts).

claude -p "Read scripts/daily-insight-routine.md and follow its steps exactly to publish today's single Korean insight post (alternating design/AI), then git add only data/insights.json and js/insights-data.js, commit, and push to origin main. Output a one-line summary of what you published." --permission-mode acceptEdits --allowedTools "Bash,Read,Edit,Write,WebSearch,WebFetch" >> "logs\daily-insight-%date:~-4%-%date:~4,2%-%date:~7,2%.log" 2>&1

echo Exit code: %ERRORLEVEL% >> "logs\daily-insight-%date:~-4%-%date:~4,2%-%date:~7,2%.log"
