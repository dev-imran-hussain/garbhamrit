/**
 * Helper to get asset paths.
 * If basePath (e.g., /garbhamrit on GitHub Pages) is used, prepends it automatically.
 * When a Cloudinary URL or external URL is passed, returns it directly.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // basePath for GitHub Pages or subfolder deployments
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (basePath && !cleanPath.startsWith(basePath)) {
    return `${basePath}${cleanPath}`;
  }

  return cleanPath;
}
