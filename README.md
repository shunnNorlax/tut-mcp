# Product Finder — Guided Integration Challenge

## Mission
Wire the existing frontend and backend together. The project deliberately contains missing connections, not missing business requirements. No solution is included.

## Setup
Requires Node.js 20+.
```bash
npm install
npm --prefix client install
npm --prefix server install
npm run dev
```
Open http://localhost:5173. Backend listens on http://localhost:3001.

## Acceptance criteria
1. Search for `phone` and see three phone products.
2. Search for `MacBook` and see one laptop.
3. Search for nonsense and see the empty-state message.
4. No errors in browser console or backend terminal.
5. Explain the complete input → function → route → service → response → UI path.

## Exploration prompts (do these before coding)
- Which component first receives the text entered by the user?
- Which function does it call, and where is that function defined?
- What URL is the backend expecting? Is the router mounted?
- What shape does the backend send, and what shape does the frontend expect?
- Which process runs on port 5173, and which on 3001?

## Rules
- Do not install an API library or change frameworks.
- Fix only the connection points.
- Test the backend independently before testing the UI.
- If stuck, ask for Hint 1, Hint 2, or a code review rather than the solution.

## Project layout
client/src/components: UI pieces
client/src/api: backend communication helper
server/src/routes: HTTP route handlers
server/src/services: application logic
server/src/data: sample catalogue
