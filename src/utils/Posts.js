export function filterPostsArray(searchValue, array, fieldsToSearch) {

  const filteredArray = [...array].filter((item) => {

    let result = false;

    fieldsToSearch.forEach((fieldToSearch) => {

      const foundStringInField =
        item.fields[fieldToSearch]
          ?.toLowerCase()
          ?.search(searchValue.toLowerCase()) !== -1;

      if (foundStringInField) {

        result = foundStringInField;

      }

    });

    return result;
  });
  return filteredArray;
}
