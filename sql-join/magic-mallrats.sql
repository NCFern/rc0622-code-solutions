select "c"."firstName", "c"."lastName"
from "films" as "f"
join "inventory" as "i" using ("filmId")
join "rentals" as "r" using ("inventoryId")
join "customers" as "c" using ("customerId")
where "f"."title" = 'Magic Mallrats'
