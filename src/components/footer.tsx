export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="h-28 bg-midnightblue text-springlawn text-center">
      <p className="py-12">
        This site and all contents are  &#169;{year} Michael Grills or Affiliates.
      </p>

    </section>
  )
}