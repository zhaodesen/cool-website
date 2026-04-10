import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react'
import Hls from 'hls.js'

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

    let hls: Hls | null = null
    const tryPlay = () => {
      video.play().catch(() => undefined)
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.addEventListener('canplay', tryPlay)
    } else if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay)
    } else {
      video.src = src
      video.addEventListener('canplay', tryPlay)
    }

    return () => {
      video.removeEventListener('canplay', tryPlay)
      hls?.destroy()
      video.removeAttribute('src')
      video.load()
    }
  }, [src])

  return <video ref={videoRef} {...props} />
}
