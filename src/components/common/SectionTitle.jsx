function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>

      <p className="mt-3 text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;