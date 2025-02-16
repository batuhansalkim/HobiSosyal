'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Gamepad2, BookOpen, Camera, Music, Code, Users2, MessageSquare, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage({ params }: { params: { username: string } }) {
  // Mock user data
  const user = {
    username: params.username,
    name: "Ahmet Yılmaz",
    bio: "Teknoloji meraklısı ve yazılım geliştirici. Sürekli yeni şeyler öğrenmeye çalışıyorum.",
    avatar: "/placeholder-avatar.jpg",
    coverImage: "/placeholder-cover.jpg",
    stats: {
      followers: 1234,
      following: 567,
      posts: 89
    },
    interests: [
      { icon: <Code className="w-4 h-4" />, name: "Yazılım Geliştirme" },
      { icon: <Gamepad2 className="w-4 h-4" />, name: "Oyun Geliştirme" },
      { icon: <Music className="w-4 h-4" />, name: "Müzik Prodüksiyon" },
      { icon: <Camera className="w-4 h-4" />, name: "Fotoğrafçılık" },
    ],
    posts: [
      {
        id: 1,
        content: "Yeni bir oyun geliştirme projesine başladım! Unity ile 2D platform oyunu yapıyorum.",
        likes: 45,
        comments: 12,
        image: "/placeholder-post1.jpg"
      },
      {
        id: 2,
        content: "Bu hafta sonu çektiğim en iyi fotoğraflardan biri. Doğal ışık muhteşemdi!",
        likes: 89,
        comments: 23,
        image: "/placeholder-post2.jpg"
      }
    ]
  };

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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Cover Image */}
      <div className="h-64 w-full relative bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
      </div>

      {/* Profile Info */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-6xl mx-auto px-4 -mt-20"
      >
        <motion.div variants={itemVariants} className="relative z-10">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  {user.name.charAt(0)}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background"></div>
              </div>

              {/* User Info */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">@{user.username}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="rounded-full">
                      <Users2 className="w-4 h-4 mr-2" />
                      Takip Et
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Mesaj
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground max-w-2xl">{user.bio}</p>

                {/* Stats */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-xl font-semibold">{user.stats.posts}</div>
                    <div className="text-sm text-muted-foreground">Gönderi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold">{user.stats.followers}</div>
                    <div className="text-sm text-muted-foreground">Takipçi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold">{user.stats.following}</div>
                    <div className="text-sm text-muted-foreground">Takip</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Interests */}
        <motion.div variants={itemVariants} className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">İlgi Alanları</h2>
              <div className="flex flex-wrap gap-3">
                {user.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary"
                  >
                    {interest.icon}
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="mt-6">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="posts"
                className="data-[state=active]:bg-transparent data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none px-6 py-3"
              >
                Gönderiler
              </TabsTrigger>
              <TabsTrigger 
                value="media"
                className="data-[state=active]:bg-transparent data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none px-6 py-3"
              >
                Medya
              </TabsTrigger>
              <TabsTrigger 
                value="likes"
                className="data-[state=active]:bg-transparent data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none px-6 py-3"
              >
                Beğeniler
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-6">
              <div className="space-y-6">
                {user.posts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    className="group"
                  >
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-foreground/90 mb-4">{post.content}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                              <MessageSquare className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </button>
                          </div>
                          <button className="text-muted-foreground hover:text-primary transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="media">
              <div className="grid grid-cols-3 gap-4">
                {/* Media content will go here */}
              </div>
            </TabsContent>
            <TabsContent value="likes">
              <div className="space-y-4">
                {/* Likes content will go here */}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}