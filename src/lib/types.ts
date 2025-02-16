// Profile Types
export interface Profile {
  username: string;
  displayName: string;
  avatar: string;
  games: Game[];
  movies: Media[];
  series: Media[];
  music: Music[];
  skills: Skill[];
  hobbies: Hobby[];
  books: Book[];
}

export interface Game {
  id: string;
  title: string;
  image: string;
  hours: number;
  platform: string;
}

export interface Media {
  id: string;
  title: string;
  image: string;
  rating: number;
  year: string;
}

export interface Music {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Başlangıç' | 'Orta' | 'İleri';
  experience: string;
}

export interface Hobby {
  id: string;
  name: string;
  frequency: string;
  experience: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
}
