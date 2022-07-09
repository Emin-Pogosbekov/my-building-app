export default function Subtitle({text, align}) {
  return (
    <h2 className={`text-3xl font-bold text-zink-50 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {text}
    </h2>
  )
}
