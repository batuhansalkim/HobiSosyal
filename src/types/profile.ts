export interface Profile {
  id: string;
  username: string;
  name: string;
  bio: string;
  hobbies: string[];
  movies: string[];
  series: string[];
  games: string[];
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileFormData {
  name: string;
  bio: string;
  hobbies: string[];
  movies: string[];
  series: string[];
  games: string[];
  skills: string[];
}

export interface User {
  username: string;
  password: string;
} 