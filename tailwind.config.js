import { preset } from "./lib/tailwind"

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  presets: [preset],
}

export default config
