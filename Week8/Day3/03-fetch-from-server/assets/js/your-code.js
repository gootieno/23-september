export function getAllDogs() {
  // Your code here
  const url = "/dogs";
  // Use the URLSearchParams API to format your body as shown below

  const options = {
    method: "GET",
  };
  //   return fetch(url, options);
  return fetch(url);
}

export function getDogNumberTwo() {
  // Your code here
}

export function postNewDog() {
  // Your code here
}

export function postNewDogV2(name, age) {
  // Your code here
}

export function deleteDog(id) {
  // Your code here
}
