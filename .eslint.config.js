import { FlatCompat, flatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.config({
    ignorePatterns: ["node_modules/", "next/", "build/"],
  }),
];