import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react'

type HlsVideoProps = Omit<ComponentPropsWithoutRef<'video'>, 'src'> & {
  src: string
}

export function HlsVideo({ src, ...props }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return undefined
    }

    let disposed = false
    let hls: { destroy: () => void } | null = null
    const tryPlay = () => {
      video.play().catch(() => undefined)
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.addEventListener('canplay', tryPlay)
    } else {
      import('hls.js')
        .then(({ default: Hls }) => {
          if (disposed) {
            return
          }

          if (Hls.isSupported()) {
            const instance = new Hls()
            instance.loadSource(src)
            instance.attachMedia(video)
            instance.on(Hls.Events.MANIFEST_PARSED, tryPlay)
            hls = instance
            return
          }

          video.src = src
          video.addEventListener('canplay', tryPlay)
        })
        .catch(() => {
          if (disposed) {
            return
          }

          video.src = src
          video.addEventListener('canplay', tryPlay)
        })
    }

    return () => {
      disposed = true
      video.removeEventListener('canplay', tryPlay)
      hls?.destroy()
      video.removeAttribute('src')
      video.load()
    }
  }, [src])

  return <video ref={videoRef} {...props} />
}
