import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Cupcake Store",
  description:
    "The best cupcakes in town!",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="flex flex-col items-center py-12">
        <div className="flex flex-row items-center justify-center gap-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">Welcome to Cupcake Store</h2>
            <p className="text-lg">
              Discover the best cupcakes in town! Our cupcakes are made with the finest ingredients and baked to perfection. Whether you're looking for a sweet treat or a special gift, we have something for everyone.
            </p>
          </div>
          <div>
            <img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/14/1547226531-receitas-de-cupcakes-e-muffins-para-vender.jpg" alt="Cupcake" className="w-64 h-64 object-cover" />
          </div>
        </div>
        <div className="py-12">
          <ul className="flex flex-wrap justify-center gap-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
    </>
  )
}
