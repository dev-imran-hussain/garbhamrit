/**
 * Intelligent Image Resolver for Garbh Amrit
 * 
 * Supports both:
 * 1. Cloudinary CDN (when NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is provided and image is uploaded)
 * 2. Automatic Local Fallback (serves optimized WebP from /public at root domain on Vercel)
 */

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export interface ImageOptions {
  width?: number;
  quality?: "auto" | "auto:best" | "auto:good" | "auto:eco";
  crop?: "limit" | "fill" | "fit";
  dpr?: "auto" | number;
}

/**
 * Resolves an image source cleanly:
 * - If path is already http(s), returns as is
 * - If Cloudinary is configured AND publicId is specified, returns optimized Cloudinary CDN URL
 * - Otherwise returns clean relative path for local assets
 */
export function getOptimizedImage(
  localPathOrPublicId: string,
  options: ImageOptions = {}
): string {
  if (!localPathOrPublicId) return "";

  // Already an external URL
  if (
    localPathOrPublicId.startsWith("http://") ||
    localPathOrPublicId.startsWith("https://")
  ) {
    return localPathOrPublicId;
  }

  const { width, quality = "auto", crop = "limit", dpr = "auto" } = options;

  // If using Cloudinary public ID (doesn't start with / or starts with folder)
  // And Cloud Name is valid (not default placeholder)
  if (
    CLOUDINARY_CLOUD_NAME &&
    CLOUDINARY_CLOUD_NAME !== "your_cloud_name" &&
    !localPathOrPublicId.startsWith("/") &&
    !localPathOrPublicId.includes(".")
  ) {
    const transformations = [`f_auto`, `q_${quality}`, `dpr_${dpr}`];
    if (width) transformations.push(`c_${crop}`, `w_${width}`);

    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations.join(
      ","
    )}/${localPathOrPublicId}`;
  }

  // Local static file in public folder:
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = localPathOrPublicId.startsWith("/")
    ? localPathOrPublicId
    : `/${localPathOrPublicId}`;

  if (basePath && !cleanPath.startsWith(basePath)) {
    return `${basePath}${cleanPath}`;
  }

  return cleanPath;
}

