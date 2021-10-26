export default function SortPerson(persons) {
    persons.sort(function (a, b) {
      if (a.health > b.health) {
        return -1;
      }
      if (a.health < b.health) {
        return 1;
      }
      return 0;
    });
    return persons;
  }
  