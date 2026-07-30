import { useParams } from "react-router-dom";
import { useGetActorDetails } from "./../hooks/useActorDetails";
import QueryWrapper from "../components/Loading/QueryWrapper";
import ActorInfo from "../components/actors/ActorInfo";
import MovieSlider from "../components/movies/MovieSlider";
import { useActorMovies } from "../hooks/useActorMovies";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const actorId = Number(id);

  const {
    data: actorDetails,
    isLoading: isActorDetailsLoading,
    isError: isActorDetailsError,
    error: actorDetailsError,
  } = useGetActorDetails(actorId);

  const {
    data: actorMovies,
    isLoading: isActorMoviesLoading,
    isError: isActorMoviesError,
    error: actorMoviesError,
  } = useActorMovies(actorId);

  const isLoading = isActorDetailsLoading || isActorMoviesLoading;
  const isError = isActorDetailsError || isActorMoviesError;
  const error = actorDetailsError || actorMoviesError;

  if (!actorDetails || !actorMovies) return null;

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} error={error}>
      {actorDetails && actorMovies && (
        <section className="min-h-screen pt-25 md:pt-30 ">
          <ActorInfo actorDetails={actorDetails} />

          <div className="pl-4 md:pl-8 lg:pl-13 py-5 mt-8 ">
            <MovieSlider title={"Known for"} movies={actorMovies.cast} />
          </div>
        </section>
      )}
    </QueryWrapper>
  );
};

export default ActorDetailsPage;
