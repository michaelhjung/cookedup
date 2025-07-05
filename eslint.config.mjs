import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import pluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  eslintConfigPrettier,

  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: pluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
            {
              pattern: "@api/**",
              group: "internal",
            },
            {
              pattern: "@components/**",
              group: "internal",
            },
            {
              pattern: "@context/**",
              group: "internal",
            },
            {
              pattern: "@interfaces/**",
              group: "internal",
            },
            {
              pattern: "@public/**",
              group: "internal",
            },
            {
              pattern: "@utils/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
];

export default eslintConfig;
