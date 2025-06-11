// Child component (MovieCard.tsx)
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <View className="w-full">
          <Image
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.com/600x400/1a1a1a/ffffff.png",
            }}
          />
          <Text 
            className="text-sm font-bold text-white mt-2" 
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;