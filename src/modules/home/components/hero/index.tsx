import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"
      style={{ backgroundColor: '#FFC0CB' }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-pink-700 font-normal"
          >
            Cupcake Store
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            The best cupcakes in town
          </Heading>
        </span>
        <a
          href="/store"
        >
          <Button variant="secondary">
            Shop now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero