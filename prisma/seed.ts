import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.announcement.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.product.deleteMany();
  await prisma.announcement.createMany({ data: [
    { message: 'Free shipping on orders over AMD 8,500', sortOrder: 1 },
    { message: 'Delivered to your door in 1–3 business days', sortOrder: 2 },
    { message: 'No added sugar. No artificial flavors. Snacks - made better.', sortOrder: 3 }
  ]});

  await prisma.product.createMany({ data: [
    { title:'Peanut + Apricot Energy Bar', slug:'peanut-apricot-energy-bar', shortDescription:'Roasted peanuts and apricots.', fullDescription:'Discover clean, balanced nutrition in a bar made from roasted peanuts and naturally sweet apricots. A satisfying source of plant-based energy with no added sugar or artificial additives, designed for everyday mindful snacking.', priceAmd:4200, cartonQuantity:'1 Carton – 10 Bars', mainImage:'', galleryImages:[], category:'Energy Bars', tags:['peanut','apricot'], featured:true, inStock:true, ingredients:'Peanuts, apricots, dates, chia', nutritionAllergens:'Contains peanuts.', care:'Store in a cool dry place.', sortOrder:1 },
    { title:'Almond + Fig Energy Bar', slug:'almond-fig-energy-bar', shortDescription:'Roasted almonds and figs.', fullDescription:'Roasted almonds and soft figs come together in a naturally sweet, wholesome bar made for steady energy and simple, clean enjoyment.', priceAmd:4300, cartonQuantity:'1 Carton – 10 Bars', mainImage:'', galleryImages:[], category:'Energy Bars', tags:['almond','fig'], featured:true, inStock:true, ingredients:'Almonds, figs, dates', nutritionAllergens:'Contains almonds.', care:'Store in a cool dry place.', sortOrder:2 },
    { title:'Hazelnut + Plum Energy Bar', slug:'hazelnut-plum-energy-bar', shortDescription:'Roasted hazelnuts and plums.', fullDescription:'Roasted hazelnuts and plums create a rich, balanced snack with no added sugar and a thoughtful blend of flavor and nourishment.', priceAmd:4400, cartonQuantity:'1 Carton – 10 Bars', mainImage:'', galleryImages:[], category:'Energy Bars', tags:['hazelnut','plum'], featured:true, inStock:true, ingredients:'Hazelnuts, plums, dates', nutritionAllergens:'Contains hazelnuts.', care:'Store in a cool dry place.', sortOrder:3 },
    { title:'Pistachio + Date Energy Ball', slug:'pistachio-date-energy-ball', shortDescription:'Soft plant-based energy balls.', fullDescription:'A smooth bite of pistachio richness and date sweetness for balanced everyday snacking.', priceAmd:3900, cartonQuantity:'1 Box – 12 Balls', mainImage:'', galleryImages:[], category:'Energy Balls', tags:['pistachio','date'], featured:false, inStock:true, ingredients:'Pistachios, dates, flax', nutritionAllergens:'Contains pistachios.', care:'Reseal after opening.', sortOrder:4 },
    { title:'Walnut + Cocoa Energy Ball', slug:'walnut-cocoa-energy-ball', shortDescription:'Nutty cocoa profile.', fullDescription:'Earthy walnuts and natural cocoa create a satisfying snack without added sugar.', priceAmd:4000, cartonQuantity:'1 Box – 12 Balls', mainImage:'', galleryImages:[], category:'Energy Balls', tags:['walnut','cocoa'], featured:false, inStock:false, ingredients:'Walnuts, dates, cocoa', nutritionAllergens:'Contains walnuts.', care:'Reseal after opening.', sortOrder:5 },
    { title:'Cashew + Berry Energy Ball', slug:'cashew-berry-energy-ball', shortDescription:'Creamy with bright berry notes.', fullDescription:'Cashews and dried berries deliver a gentle sweetness and clean finish.', priceAmd:4100, cartonQuantity:'1 Box – 12 Balls', mainImage:'', galleryImages:[], category:'Energy Balls', tags:['cashew','berry'], featured:false, inStock:true, ingredients:'Cashews, berries, dates', nutritionAllergens:'Contains cashews.', care:'Reseal after opening.', sortOrder:6 }
  ]});

  await prisma.blogPost.createMany({ data: [
    { title:'How to choose healthier snacks without overthinking', slug:'choose-healthier-snacks', excerpt:'A practical framework for snack labels and ingredients.', coverImage:'', body:'Choosing healthier snacks starts with simple ingredients and clear portions...', categories:['healthy snacks'], tags:['healthy snacks','nutrition basics'], seoTitle:'How to choose healthier snacks', seoDescription:'Choose better snacks with confidence.', state:'PUBLISHED', publishDate:new Date('2026-01-10') },
    { title:'No-added-sugar snacks: what that really means', slug:'no-added-sugar-snacks', excerpt:'Understand labels and sweetness from whole foods.', coverImage:'', body:'No added sugar means sweetness can still come from dates and dried fruit...', categories:['no added sugar'], tags:['no added sugar','labels'], seoTitle:'No-added-sugar snacks explained', seoDescription:'Learn what no-added-sugar means.', state:'PUBLISHED', publishDate:new Date('2026-01-20') },
    { title:'Nuts for steady energy: almonds, peanuts, hazelnuts', slug:'nuts-for-steady-energy', excerpt:'Why nut-based snacks feel more satisfying.', coverImage:'', body:'Nuts offer fats, plant protein, and texture that can support satiety...', categories:['nuts'], tags:['nuts','plant-based'], seoTitle:'Nuts for everyday energy', seoDescription:'Explore nut-based snacking.', state:'PUBLISHED', publishDate:new Date('2026-02-01') },
    { title:'Dried fruits in modern snacking', slug:'dried-fruits-modern-snacking', excerpt:'Natural sweetness and texture in one ingredient family.', coverImage:'', body:'Dried fruits like figs, apricots, and plums can balance flavor...', categories:['dried fruits'], tags:['dried fruits','ingredients'], seoTitle:'Dried fruits in snacks', seoDescription:'How dried fruits support natural sweetness.', state:'PUBLISHED', publishDate:new Date('2026-02-10') },
    { title:'Plant-based snacking for busy days', slug:'plant-based-snacking-busy-days', excerpt:'Portable, ingredient-forward options for work and travel.', coverImage:'', body:'Plant-based snacks are practical when they are shelf-stable and ingredient-led...', categories:['plant-based'], tags:['plant-based','everyday energy'], seoTitle:'Plant-based snacking for busy days', seoDescription:'Portable plant-based snack ideas.', state:'PUBLISHED', publishDate:new Date('2026-02-18') }
  ]});
}

main().finally(() => prisma.$disconnect());
