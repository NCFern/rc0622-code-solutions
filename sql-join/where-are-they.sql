select "a"."line1", "city"."name" as "cityName", "a"."district", "c"."name" as "countryName"
from "addresses" as "a"
join "cities" as "city" using ("cityId")
join "countries" as "c" using ("countryId")
