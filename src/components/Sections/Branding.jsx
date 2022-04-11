import Title from "../Text/Title"
import Logos from '../Cards/Logos'

const Branding = () => {
  const branding = [
    {
      id: 1,
      title: "Woof!",
      img: "https://dsm01pap001files.storage.live.com/y4mpF864HUuS8p7vReO01ofbUUHHMawXzTVimeD9j-29LdVndCbOcNHTCvTfQQFM10XIvwnqKnIrKnF0SI255sGM3aMNuzOgNon8e6RwEIY638FyX1AiJRloOWC-Dcexqy_FQ8hynBKMllWP5P9-rX2BZsE5VGTsDa8wHjR0tiphfUViVT6lczZapF-t_5eMXVU?width=1274&height=1283&cropmode=none",
      figma: "https://www.figma.com/file/3T4XS2HJWkzwbm5zIYIADs/Woof?node-id=1%3A3"
    },
    {
      id: 2,
      title: "GG",
      img: "https://dsm01pap001files.storage.live.com/y4mnqpkmSse5jQLYuOLz7PXcIGSro2_0V4TOM0izfoLtUbjr9jbN_4boNAIWUJYgZkUcSwBVSZ8kJ0QUseU3l1Jl_XR4tOWz67-fMt-7uMj7OfnNttcF8yi0PdpSxhZqyyA9gYv-TJGIkl5M90Da0WQljUCIFmgxXCEIfqq2OCwJYb3wEOvVtzKNPF8K5y3jiwC?width=1202&height=908&cropmode=none",
      figma: "https://www.figma.com/file/M3IoNZwKevTLbNYiMvIHI5/GG?node-id=0%3A1"
    },
    {
      id: 3,
      title: "Soul",
      img: "https://dsm01pap001files.storage.live.com/y4mjPc-BYLz4YOycTA2l9gaRQQ3q1JbdW42cyMP0ENmolWRzFOMN96FbWNYMIxKmvMKDz-efTXecHfDtucTWspFpMKrv5joezMnM2IAt4bHEYYCdhDhIZoOUC9INRRowogPT0zjzNhIwSisdFks6kwUh2fUnJpzunmZd1DY7Sl6ZlgLo7abZK8AuXcqCErOcqV2?width=852&height=845&cropmode=none",
      figma: "https://www.figma.com/file/4tSHVDc16SQWnBfbbozJCf/Soul?node-id=0%3A1"
    }
  ]
  return (
    <div className='pt-16' id='Branding'>
      <Title title="Branding"/>
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="text-xl md:text-2xl py-5">This section you could see some of my principal work in branding. I hope you like it and waiting for more</span>
        <div className='py-3 flex flex-wrap items-center justify-center gap-10'>
            <Logos branding={branding}/>
        </div>
      </div>
    </div>
  )
}

export default Branding