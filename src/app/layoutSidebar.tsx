"use client";

import * as React from "react";

import { ProjectLinks } from "@/app/projects/projectlinks";
import {
  PAGE_LINKS_MILESTONE_1,
  PAGE_LINKS_MILESTONE_2,
  PAGE_LINKS_MILESTONE_3,
  PAGE_LINKS_MILESTONE_4,
  PAGE_LINKS_MILESTONE_5,
  // PAGE_LINKS_PROJECTS,
  SITE_LINKS,
} from "@/app/sitelinks";
import { Sidebar } from "@/components/Sidebar";
import { useSelectedLayoutSegments } from "next/navigation";

interface LayoutSidebarProps {}

export function LayoutSidebar({}: LayoutSidebarProps) {
  const routeSegments = useSelectedLayoutSegments();

  const pageLinks = (() => {
    if (routeSegments.length >= 1) {
      if (routeSegments[0] === "assignments") {
        if (routeSegments.length >= 2) {
          if (routeSegments[1] === "milestone-1") {
            return PAGE_LINKS_MILESTONE_1;
          } else if (routeSegments[1] === "milestone-2") {
            return PAGE_LINKS_MILESTONE_2;
          } else if (routeSegments[1] === "milestone-3") {
            return PAGE_LINKS_MILESTONE_3;
          } else if (routeSegments[1] === "milestone-4") {
            return PAGE_LINKS_MILESTONE_4;
          } else if (routeSegments[1] === "milestone-5") {
            return PAGE_LINKS_MILESTONE_5;
          }
        }
      } 
      //  Remove projects from sidebar.
      // else if (routeSegments[0] === "projects") {
      //   if (ProjectLinks.length > 0) {
      //     return PAGE_LINKS_PROJECTS;
      //   }
      // }
    }

    return [];
  })();

  const sidebar = (
    <Sidebar siteLinks={SITE_LINKS} pageLinks={pageLinks}></Sidebar>
  );

  return sidebar;
}
