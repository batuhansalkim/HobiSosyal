export const profileData = {
  user: {
    name: "Ahmet Yılmaz",
    username: "@ahmet-yilmaz",
    avatar: "/placeholder-avatar.jpg",
    bio: "Teknoloji meraklısı ve yazılım geliştirici. Sürekli yeni şeyler öğrenmeye çalışıyorum."
  },
  games: {
    current: [
      {
        id: "1",
        title: "The Witcher 3: Wild Hunt",
        platform: "PC",
        hours: 150,
        status: "Aktif oynuyor",
        lastPlayed: "2 saat önce"
      },
      {
        id: "2",
        title: "Red Dead Redemption 2",
        platform: "PS5",
        hours: 80,
        status: "Aktif oynuyor",
        lastPlayed: "Dün"
      }
    ],
    completed: [
      {
        id: "3",
        title: "God of War",
        platform: "PS5",
        hours: 45,
        completionDate: "Ocak 2024"
      },
      {
        id: "4",
        title: "Cyberpunk 2077",
        platform: "PC",
        hours: 65,
        completionDate: "Aralık 2023"
      }
    ]
  },
  series: {
    current: [
      {
        id: "1",
        title: "The Last of Us",
        platform: "HBO",
        currentSeason: "Sezon 1",
        currentEpisode: "Bölüm 5",
        status: "Devam ediyor"
      },
      {
        id: "2",
        title: "House of the Dragon",
        platform: "HBO",
        currentSeason: "Sezon 1",
        currentEpisode: "Bölüm 8",
        status: "Devam ediyor"
      }
    ],
    completed: [
      {
        id: "3",
        title: "Breaking Bad",
        platform: "Netflix",
        seasons: 5,
        rating: "10/10",
        completionDate: "2023"
      },
      {
        id: "4",
        title: "Game of Thrones",
        platform: "HBO",
        seasons: 8,
        rating: "9/10",
        completionDate: "2022"
      }
    ]
  },
  movies: {
    recentlyWatched: [
      {
        id: "1",
        title: "Oppenheimer",
        year: 2023,
        rating: "9/10",
        watchDate: "Şubat 2024"
      },
      {
        id: "2",
        title: "Dune",
        year: 2021,
        rating: "8.5/10",
        watchDate: "Ocak 2024"
      }
    ],
    favorites: [
      {
        id: "3",
        title: "Inception",
        year: 2010,
        rating: "10/10",
        director: "Christopher Nolan"
      },
      {
        id: "4",
        title: "The Dark Knight",
        year: 2008,
        rating: "10/10",
        director: "Christopher Nolan"
      }
    ]
  },
  skills: {
    technical: [
      {
        id: "1",
        name: "React.js",
        level: "İleri Seviye",
        experience: "4 yıl",
        currentlyLearning: true
      },
      {
        id: "2",
        name: "Node.js",
        level: "Orta Seviye",
        experience: "2 yıl",
        currentlyLearning: true
      },
      {
        id: "3",
        name: "Python",
        level: "İleri Seviye",
        experience: "3 yıl",
        currentlyLearning: false
      }
    ],
    learning: [
      {
        id: "4",
        name: "Machine Learning",
        startedDate: "Ocak 2024",
        currentFocus: "Derin Öğrenme Temelleri",
        resources: ["Coursera", "Udemy"]
      },
      {
        id: "5",
        name: "Cloud Computing (AWS)",
        startedDate: "Aralık 2023",
        currentFocus: "AWS Solutions Architect",
        resources: ["AWS Training", "acloud.guru"]
      }
    ]
  },
  hobbies: {
    active: [
      {
        id: "1",
        name: "Fotoğrafçılık",
        equipment: "Sony A7III",
        experience: "3 yıl",
        focus: "Doğa ve Sokak Fotoğrafçılığı",
        portfolio: "500px.com/ahmet-yilmaz"
      },
      {
        id: "2",
        name: "Müzik Prodüksiyonu",
        equipment: "Ableton Live",
        experience: "2 yıl",
        focus: "Electronic Music",
        projects: "soundcloud.com/ahmet-yilmaz"
      }
    ],
    interests: [
      {
        id: "3",
        name: "3D Modelleme",
        software: "Blender",
        status: "Öğrenmeye başlayacak",
        plannedStartDate: "Mart 2024"
      }
    ]
  },
  music: {
    favoriteGenres: ["Electronic", "Rock", "Jazz"],
    favoriteBands: [
      {
        name: "Radiohead",
        favoriteAlbum: "In Rainbows",
        topSongs: ["Weird Fishes/Arpeggi", "Reckoner"]
      },
      {
        name: "Pink Floyd",
        favoriteAlbum: "Dark Side of the Moon",
        topSongs: ["Time", "Us and Them"]
      }
    ],
    currentlyListening: [
      {
        name: "Jon Hopkins",
        album: "Immunity",
        genre: "Electronic"
      }
    ],
    instruments: ["Gitar (Başlangıç)", "Piano (Orta Seviye)"]
  }
};
