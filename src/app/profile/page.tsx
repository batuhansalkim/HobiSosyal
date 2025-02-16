'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, Film, Tv, Music, Book, Star, Brush } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profil Bilgileri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Profile"
                  className="rounded-full w-24 h-24 object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold">Kullanıcı Adı</h2>
                  <p className="text-gray-500">@kullanici_adi</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid grid-cols-7 w-full">
            <TabsTrigger value="games" className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              Oyunlar
            </TabsTrigger>
            <TabsTrigger value="movies" className="flex items-center gap-2">
              <Film className="w-4 h-4" />
              Filmler
            </TabsTrigger>
            <TabsTrigger value="series" className="flex items-center gap-2">
              <Tv className="w-4 h-4" />
              Diziler
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              Müzikler
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Yetenekler
            </TabsTrigger>
            <TabsTrigger value="hobbies" className="flex items-center gap-2">
              <Brush className="w-4 h-4" />
              Hobiler
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              Kitaplar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games">
            <Card>
              <CardHeader>
                <CardTitle>Oynadığı Oyunlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Oyun kartları buraya gelecek */}
                  <GameCard
                    title="The Witcher 3"
                    image="/game-placeholder.jpg"
                    hours="120"
                    platform="PC"
                  />
                  {/* Daha fazla oyun kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="movies">
            <Card>
              <CardHeader>
                <CardTitle>İzlediği Filmler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Film kartları buraya gelecek */}
                  <MediaCard
                    title="Inception"
                    image="/movie-placeholder.jpg"
                    rating="9/10"
                    year="2010"
                  />
                  {/* Daha fazla film kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="series">
            <Card>
              <CardHeader>
                <CardTitle>İzlediği Diziler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Dizi kartları buraya gelecek */}
                  <MediaCard
                    title="Breaking Bad"
                    image="/series-placeholder.jpg"
                    rating="10/10"
                    year="2008-2013"
                  />
                  {/* Daha fazla dizi kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music">
            <Card>
              <CardHeader>
                <CardTitle>Sevdiği Müzikler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Müzik kartları buraya gelecek */}
                  <MusicCard
                    title="Bohemian Rhapsody"
                    artist="Queen"
                    album="A Night at the Opera"
                    genre="Rock"
                  />
                  {/* Daha fazla müzik kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Yetenekler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Yetenek kartları buraya gelecek */}
                  <SkillCard
                    skill="Fotoğrafçılık"
                    level="İleri Seviye"
                    experience="5 yıl"
                  />
                  {/* Daha fazla yetenek kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hobbies">
            <Card>
              <CardHeader>
                <CardTitle>Hobiler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Hobi kartları buraya gelecek */}
                  <HobbyCard
                    hobby="Yüzme"
                    frequency="Haftada 3 kez"
                    experience="3 yıl"
                  />
                  {/* Daha fazla hobi kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="books">
            <Card>
              <CardHeader>
                <CardTitle>Okuduğu Kitaplar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Kitap kartları buraya gelecek */}
                  <BookCard
                    title="1984"
                    author="George Orwell"
                    genre="Distopya"
                    rating="5/5"
                  />
                  {/* Daha fazla kitap kartı eklenebilir */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Kart bileşenleri için interface tanımlamaları
interface GameCardProps {
  title: string;
  image: string;
  hours: string;
  platform: string;
}

interface MediaCardProps {
  title: string;
  image: string;
  rating: string;
  year: string;
}

interface MusicCardProps {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SkillCardProps {
  skill: string;
  level: string;
  experience: string;
}

interface HobbyCardProps {
  hobby: string;
  frequency: string;
  experience: string;
}

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  rating: string;
}

// Kart bileşenlerini güncelleyelim
function GameCard({ title, image, hours, platform }: GameCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Oynama Süresi: {hours} saat</p>
        <p className="text-sm text-gray-500">Platform: {platform}</p>
      </CardContent>
    </Card>
  );
}

function MediaCard({ title, image, rating, year }: MediaCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Puan: {rating}</p>
        <p className="text-sm text-gray-500">Yıl: {year}</p>
      </CardContent>
    </Card>
  );
}

function MusicCard({ title, artist, album, genre }: MusicCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Sanatçı: {artist}</p>
        <p className="text-sm text-gray-500">Albüm: {album}</p>
        <p className="text-sm text-gray-500">Tür: {genre}</p>
      </CardContent>
    </Card>
  );
}

function SkillCard({ skill, level, experience }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold">{skill}</h3>
        <p className="text-sm text-gray-500">Seviye: {level}</p>
        <p className="text-sm text-gray-500">Deneyim: {experience}</p>
      </CardContent>
    </Card>
  );
}

function HobbyCard({ hobby, frequency, experience }: HobbyCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold">{hobby}</h3>
        <p className="text-sm text-gray-500">Sıklık: {frequency}</p>
        <p className="text-sm text-gray-500">Deneyim: {experience}</p>
      </CardContent>
    </Card>
  );
}

function BookCard({ title, author, genre, rating }: BookCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Yazar: {author}</p>
        <p className="text-sm text-gray-500">Tür: {genre}</p>
        <p className="text-sm text-gray-500">Puan: {rating}</p>
      </CardContent>
    </Card>
  );
}
