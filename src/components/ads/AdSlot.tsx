"use client";

/**
 * Consent-ready ad slot. Renders nothing by default.
 * Set NEXT_PUBLIC_ADS_ENABLED=1 and provide slot id to show ads.
 * Integrate with your CMP (consent management) to only render when user consents.
 */
interface AdSlotProps {
  slotId?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

export function AdSlot({ slotId, format = "auto", className = "" }: AdSlotProps) {
  const enabled = process.env.NEXT_PUBLIC_ADS_ENABLED === "1" && slotId;

  if (!enabled) return null;

  return (
    <div className={`min-h-[90px] w-full ${className}`}>
      <ins
        className="adsbygoogle"
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ""}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
        style={{ display: "block" }}
      />
    </div>
  );
}
