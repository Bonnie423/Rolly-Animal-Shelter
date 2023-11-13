interface Props {
  image: string
  className: string
}

const Slide = ({ image,className }: Props) => {
  return (
   
      <div className={`slide ${className}`}>
        <img src={image} alt="a pet" className="slides-img active" />
      </div>
    
  )
}

export default Slide
