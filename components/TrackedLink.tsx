"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { pushDataLayer, type TrackingEvent } from "@/lib/tracking";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  children: ReactNode;
  eventName: string;
  eventData?: Omit<TrackingEvent, "event">;
};

export default function TrackedLink({
  children,
  eventName,
  eventData,
  ...props
}: Props) {
  return (
    <a
      {...props}
      onClick={() => {
        pushDataLayer({
          event: eventName,
          ...eventData,
        });
      }}
    >
      {children}
    </a>
  );
}
