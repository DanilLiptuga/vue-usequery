import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";

const common = {
    plugins: [resolve(), typescript(), vue(), postcss()],
    external: [
        "vue-usequery",
        "vue",
        "vue-demi",
        "match-sorter",
    ],
    watch: {
        include: "src/**",
        exclude: ["node_modules/**", "__tests__", "__mocks__"],
    },
};
export default defineConfig([
    {
        input: "src/main.ts",
        output: {
            dir: "lib",
            format: "cjs",
            sourcemap: true,
        },
        ...common,
    },
    {
        input: "src/main.ts",
        output: {
            dir: "esm",
            format: "esm",
            sourcemap: true,
        },
        ...common,
    },

]);