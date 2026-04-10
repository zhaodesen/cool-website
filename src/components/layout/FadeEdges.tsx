export function FadeEdges() {
  return (
    <>
      <div
        className="pointer-events-none absolute top-0 z-[1] h-[200px] w-full"
        style={{
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 z-[1] h-[200px] w-full"
        style={{
          background: 'linear-gradient(to top, black, transparent)',
        }}
      />
    </>
  )
}
