import { useEffect, useRef, useState } from "react"

const suitcaseImages = [
  // Replace this
  "/SuitcasePhase1.png",
  "/SuitcasePhase2.png",
  "/SuitcasePhase3.png",
  "/SuitcasePhase4.png",
]

const getStage = (percentage: number) => {
  if (percentage >= 75) return 4
  if (percentage >= 50) return 3
  if (percentage >= 25) return 2
  return 1
}

function useInView() {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting)
        },
        { threshold: 0.4 }
      )
  
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])
  
    return { ref, isVisible }
  }

export default function AnimatedSuitcase({ percentage }: { percentage: number }) {
  const { ref, isVisible } = useInView()
  const [currentStage, setCurrentStage] = useState(1)
  const [animateBounce, setAnimateBounce] = useState(false)

  const targetStage = getStage(percentage)

  useEffect(() => {
    if (!isVisible) {
      // Reset everything when leaving viewport
      setCurrentStage(1)
      setAnimateBounce(false)
      return
    }
  
    if (targetStage === 1) {
      // No animation needed
      setCurrentStage(1)
      return
    }
  
    let stage = 1
    setCurrentStage(1)
    setAnimateBounce(false)
  
    const interval = setInterval(() => {
      stage += 1
      setCurrentStage(stage)
  
      if (stage >= targetStage) {
        clearInterval(interval)
  
        setTimeout(() => {
          setAnimateBounce(true)
        }, 300)
      }
    }, 600)
  
    return () => clearInterval(interval)
  }, [isVisible, targetStage])

  return (
    <div ref={ref} className="flex flex-col items-center">
      
      {/* Suitcase */}
      <div className="relative w-64 h-64">
        {suitcaseImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 transition-all duration-700 ease-in-out
              ${currentStage === index + 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              ${animateBounce && currentStage === targetStage ? "animate-bounce-soft" : ""}
            `}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-64 mt-6">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary transition-all duration-1000 ease-out"
            style={{ width: isVisible ? `${percentage}%` : "0%" }}
          />
        </div>
        <p className="text-sm text-foreground/70 mt-2 text-center">
          {percentage}%
        </p>
      </div>

    </div>
  )
}