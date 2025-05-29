import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/assets/icon.svg" alt="Logo" width={24} height={24} />
        Dubhe101
      </>
    ),
  },
  githubUrl: "https://github.com/0xobelisk/dubhe101",
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
