export type RouteKey = "story" | "products" | "quality" | "pro" | "contact";

export interface RouteDef {
  key: RouteKey;
  path: string;
  index: string;
  photo: string;
  position?: string;
}

/* Ordered chapters — drives nav, footer, home index and next-chapter outros. */
export const routes: RouteDef[] = [
  { key: "story", path: "/notre-maison", index: "01", photo: "/images/story.jpg" },
  { key: "products", path: "/produits", index: "02", photo: "/images/poultry.jpg" },
  { key: "quality", path: "/qualite", index: "03", photo: "/images/logistics.jpg" },
  { key: "pro", path: "/espace-pro", index: "04", photo: "/images/eggs.jpg", position: "center 62%" },
  { key: "contact", path: "/contact", index: "05", photo: "/images/hero.jpg", position: "center 55%" },
];

export const routeByKey = (k: RouteKey) => routes.find((r) => r.key === k)!;

/** The next chapter after `key`, looping back to home at the end. */
export function nextRoute(key: RouteKey): RouteDef | null {
  const i = routes.findIndex((r) => r.key === key);
  if (i === -1 || i === routes.length - 1) return null;
  return routes[i + 1];
}
