export interface DogData {
  photos: Photo[]
}

export interface Photo {
  id: number
  width: number
  height: number
  url: string

  src: Src

  alt: string
}

export interface Src {
  original: string

  large: string
  medium: string
  small: string
  portrait: string
}
