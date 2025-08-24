"use client";

import { type MouseEvent, useEffect } from "react";

export function GLightboxInjector() {
  useEffect(() => {
    import("glightbox").then(({ default: GLightbox }) => {
      GLightbox({
        selector: ".glightbox",
      });
    });
  }, []);

  return <></>;
}

export enum GalleryName {
  PresentationVideo = "presentation-video",
}

export function openGlightboxVideo(
  e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  galleryName: GalleryName,
) {
  e.preventDefault();

  const trigger = document.querySelector(
    `a.glightbox[data-gallery="${galleryName}"]`,
  ) as HTMLElement;
  if (trigger) trigger.click();
}
