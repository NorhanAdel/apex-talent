export interface Player {
  _id: string
  name: string
  position: string
  country: string
  age: number

  description: string

  images: string[]

  personalInfo: {
    fullName: string
    birthDate: string
    birthPlace: string
    nationality: string
    height: string
    weight: string
  }

  clubCareer: {
    currentClub: string
    previousClubs: string[]
    debut: string
  }

  footballInfo: {
    preferredFoot: string
    jerseyNumber: number
    playingStyle: string
    strengths: string[]
  }

  rating: number
}