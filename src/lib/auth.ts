export const ACCESS_CODES =
  process.env.NEXT_PUBLIC_WEDDING_ACCESS_CODES
    ?.split(",")
    .map(c => c.trim()) ?? []

export const QR_TOKENS =
  process.env.NEXT_PUBLIC_WEDDING_QR_TOKENS
    ?.split(",")
    .map(t => t.trim()) ?? []
