select "g"."name" as "genre", count("fg"."filmId") as "starringIn"
from "genres" as "g"
join "filmGenre" as "fg" using ("genreId")
join "castMembers" as "cm" using ("filmId")
where "actorId" = 178
group by "genre"
order by "starringIn";
