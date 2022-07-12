export function isCloudflareWorkers(): boolean {
  return (
    // @ts-expect-error
    typeof WebSocketPair !== 'undefined' ||
    // @deno-expect-error
    (typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers') ||
    // @ts-expect-error
    (typeof EdgeRuntime !== 'undefined' && EdgeRuntime === 'vercel')
  )
}
