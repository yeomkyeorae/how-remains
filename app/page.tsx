import Timer from "@/components/timer"

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Timer targetTime={new Date('2023-11-24 20:00:00').getTime()} />
    </main>
  )
}
