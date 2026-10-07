/**
 * Cloudinary Delivery & Optimization Utility for Garbh Amrit Landing Page
 *
 * Transformation Architecture:
 * - c_limit: Never upscales beyond original dimensions
 * - w_{width}: Exact width needed for layout (mobile vs desktop)
 * - f_auto: Dynamic WebP / AVIF format delivery based on requesting browser
 * - q_auto: Optimal compression vs visual quality balance
 * - dpr_auto: Crystal sharp retina rendering for mobile / high-DPI displays
 */

const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "garbhamrit";

export interface CloudinaryOptions {
  width?: number;
  quality?: "auto" | "auto:best" | "auto:good" | "auto:eco" | "auto:low";
  crop?: "limit" | "fill" | "fit" | "scale" | "thumb";
  dpr?: "auto" | number;
}

/**
 * Builds an optimized Cloudinary delivery URL
 *
 * @param publicId Asset identifier (e.g. "garbhamrit/hero/hero-banner")
 * @param options Delivery options (width, crop, quality, dpr)
 * @returns Fully constructed Cloudinary CDN URL or fallback path
 */
export function getCloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {}
): string {
  // If already a full URL or relative local path without Cloudinary configured, return as is
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) {
    return publicId;
  }

  const {
    width,
    quality = "auto",
    crop = "limit",
    dpr = "auto",
  } = options;

  const transformations: string[] = [
    `f_auto`,
    `q_${quality}`,
    `dpr_${dpr}`,
  ];

  if (width) {
    transformations.push(`c_${crop}`, `w_${width}`);
  }

  const transformString = transformations.join(",");
  const cleanId = publicId.replace(/^\//, "");

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${cleanId}`;
}

/**
 * Pre-mapped asset catalog for Garbh Amrit landing page
 * You can switch any asset to Cloudinary public_id seamlessly.
 */
export const ASSET_MAP = {
  hero: {
    mobileBanner: "garbhamrit/hero/hero-banner",
    desktopJar: "garbhamrit/hero/desktop-hero-jar",
  },
  product: {
    mainJar: "garbhamrit/product/product-main",
  },
  steps: {
    bowl: "garbhamrit/steps/step-bowl",
    glass: "garbhamrit/steps/step-glass",
    moon: "garbhamrit/steps/step-moon",
  },
  ingredients: {
    shatavari: "garbhamrit/ingredients/shatavari",
    ashoka: "garbhamrit/ingredients/ashoka",
    lodhra: "garbhamrit/ingredients/lodhra",
    ashwagandha: "garbhamrit/ingredients/ashwagandha",
    gokshura: "garbhamrit/ingredients/gokshura",
    guduchi: "garbhamrit/ingredients/guduchi",
    yashtimadhu: "garbhamrit/ingredients/yashtimadhu",
    shilajit: "garbhamrit/ingredients/shilajit",
  },
};
