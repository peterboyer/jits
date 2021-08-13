export interface ScaleItem {
  css: string;
  px: number;
}

const scale = {
  px: { css: "1px", px: 1 },
  "0": { css: "0px", px: 0 },
  "0.5": { css: "0.125rem", px: 2 },
  "1": { css: "0.25rem", px: 4 },
  "1.5": { css: "0.375rem", px: 6 },
  "2": { css: "0.5rem", px: 8 },
  "2.5": { css: "0.625rem", px: 10 },
  "3": { css: "0.75rem", px: 12 },
  "3.5": { css: "0.875rem", px: 14 },
  "4": { css: "1rem", px: 16 },
  "5": { css: "1.25rem", px: 20 },
  "6": { css: "1.5rem", px: 24 },
  "7": { css: "1.75rem", px: 28 },
  "8": { css: "2rem", px: 32 },
  "9": { css: "2.25rem", px: 36 },
  "10": { css: "2.5rem", px: 40 },
  "11": { css: "2.75rem", px: 44 },
  "12": { css: "3rem", px: 48 },
  "14": { css: "3.5rem", px: 56 },
  "16": { css: "4rem", px: 64 },
  "20": { css: "5rem", px: 80 },
  "24": { css: "6rem", px: 96 },
  "28": { css: "7rem", px: 112 },
  "32": { css: "8rem", px: 128 },
  "36": { css: "9rem", px: 144 },
  "40": { css: "10rem", px: 160 },
  "44": { css: "11rem", px: 176 },
  "48": { css: "12rem", px: 192 },
  "52": { css: "13rem", px: 208 },
  "56": { css: "14rem", px: 224 },
  "60": { css: "15rem", px: 240 },
  "64": { css: "16rem", px: 256 },
  "72": { css: "18rem", px: 288 },
  "80": { css: "20rem", px: 320 },
  "96": { css: "24rem", px: 38 },
} as const;

export default scale as Record<keyof typeof scale & string, ScaleItem>;