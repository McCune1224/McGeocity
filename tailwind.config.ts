import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontSize: {
        smol: ["0.7rem", "0.8rem"],
      },
    },
  },

  plugins: [typography, forms],
} satisfies Config;
