export default function TransitionSending() {
  return (
    <div className="fixed top-0 h-full z-10 bg-springlawn w-full flex flex-row items-center">
      <div className="flex flex-col w-full text-center font-heading font-semibold text-base">
        <h1>Sending!</h1>
        <div className="loader self-center"></div>
      </div>
  </div>
  )
}