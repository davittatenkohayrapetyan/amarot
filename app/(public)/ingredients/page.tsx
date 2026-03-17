export default function IngredientsPage(){
  const sections=[['Nuts','Almonds, peanuts, and hazelnuts provide natural fats and satisfying texture.'],['Dried fruits','Apricots, figs, and plums deliver natural sweetness and fiber.'],['Seeds','Pumpkin and sunflower seeds add crunch and nutrient density.'],['Our philosophy','Whole ingredients first. No added sugar. No artificial flavors.']];
  return <div className="container-pad py-12"><h1 className="h2">Ingredients we trust</h1><div className="grid md:grid-cols-2 gap-4 mt-6">{sections.map(([h,b])=><section key={h} className="card p-5"><h2 className="font-heading">{h}</h2><p className="mt-2">{b}</p></section>)}</div></div>
}
