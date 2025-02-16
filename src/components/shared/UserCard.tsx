import Link from 'next/link';
import { Profile } from '@/types/profile';

interface UserCardProps {
  user: Profile;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link 
      href={`/profile/${user.username}`}
      className="block"
    >
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">{user.name}</h3>
            <p className="text-gray-600 mt-1">{user.bio}</p>
            
            <div className="mt-3 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700">Hobiler:</span>
                {user.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                  >
                    {hobby}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700">Filmler:</span>
                {user.movies.map((movie, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                  >
                    {movie}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700">Diziler:</span>
                {user.series.map((series, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                  >
                    {series}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 