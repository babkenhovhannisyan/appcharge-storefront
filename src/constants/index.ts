import { Metadata } from "next";

export const FALLBACK_METADATA: Metadata = { title: "Product Not Found" };

export const PRODUCT_IMAGE = {
  CARD: {
    width: 400,
    height: 400,
    aspectRatio: "aspect-square",
  },
  DETAIL: {
    width: 800,
    height: 800,
    aspectRatio: "aspect-square",
  },
  OPEN_GRAPH: {
    width: 1200,
    height: 630,
  },
};
