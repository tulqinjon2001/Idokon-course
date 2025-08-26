export const presets = ["next/babel"];
export const plugins = [
  [
    "@locator/babel-jsx/dist",
    {
      env: "development",
    },
  ],
];
