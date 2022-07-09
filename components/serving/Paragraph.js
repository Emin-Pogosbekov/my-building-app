export default function Paragraph({text, align}) {
  return (
    <p className={`text-lg xl:text-xl font-semibold text-appLightText ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {text}
    </p>
  )
}
