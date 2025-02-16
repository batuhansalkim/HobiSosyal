'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Users, Sparkles } from 'lucide-react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const mockUsers = [
    {
      id: '1',
      username: 'ahmet-yilmaz',
      name: 'Ahmet Yılmaz',
      bio: 'Teknoloji meraklısı, yazılım geliştirici',
      hobbies: ['Coding', 'Gaming', 'Piyano'],
      movies: ['Inception', 'Matrix'],
      series: ['Breaking Bad'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: '2',
      username: 'ayse-demir',
      name: 'Ayşe Demir',
      bio: 'Film tutkunu ve kitap kurdu',
      hobbies: ['Movies', 'Reading', 'Yoga'],
      movies: ['Pulp Fiction', 'Fight Club'],
      series: ['Friends'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3',
      username: 'mehmet-kaya',
      name: 'Mehmet Kaya',
      bio: 'Spor tutkunu ve fotoğrafçı',
      hobbies: ['Football', 'Photography', 'Running'],
      movies: ['Rocky', 'Creed'],
      series: ['Game of Thrones'],
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const filteredUsers = mockUsers.filter((user) => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;

    switch (filterType) {
      case 'name':
        return user.name.toLowerCase().includes(query);
      case 'hobbies':
        return user.hobbies.some((hobby) => hobby.toLowerCase().includes(query));
      case 'bio':
        return user.bio.toLowerCase().includes(query);
      default:
        return (
          user.name.toLowerCase().includes(query) ||
          user.bio.toLowerCase().includes(query) ||
          user.hobbies.some((hobby) => hobby.toLowerCase().includes(query))
        );
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-background to-background/80 border-b border-border/50"
      >
        <div className="container mx-auto py-12 text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hobi Arkadaşlarını Keşfet
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İlgi alanlarına göre yeni arkadaşlar bul ve hobi topluluklarına katıl
          </p>
        </div>
      </motion.div>

      {/* Search Form */}
      <div className="container mx-auto py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex gap-4 p-4 bg-card rounded-xl shadow-lg border border-border/50">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="İsim, hobi veya ilgi alanı ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <Select
              value={filterType}
              onValueChange={setFilterType}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrele" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tümü</SelectItem>
                <SelectItem value="name">İsim</SelectItem>
                <SelectItem value="hobbies">Hobiler</SelectItem>
                <SelectItem value="bio">Biyografi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
      </div>

      {/* User List */}
      <div className="container mx-auto py-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto space-y-6"
        >
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/profile/${user.username}`}>
                <div className="group bg-card hover:bg-card/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-border/50">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${user.color} rounded-xl flex items-center justify-center text-white text-xl font-bold transform group-hover:rotate-6 transition-transform duration-300`}>
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-muted-foreground">{user.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {user.hobbies.map((hobby, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {searchQuery && filteredUsers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 bg-card rounded-xl shadow-lg border border-border/50"
            >
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <div className="text-lg font-medium">Aradığınız kriterlere uygun kullanıcı bulunamadı</div>
              <p className="text-muted-foreground mt-2">Farklı arama kriterleri deneyebilirsiniz</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}