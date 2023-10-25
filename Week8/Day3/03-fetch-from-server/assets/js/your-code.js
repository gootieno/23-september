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
  return fetch("/dogs/2");
}

export function postNewDog() {
  // Your code here
  const url = "/dogs";
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const options = {
    method: "POST",
    headers,
    body: new URLSearchParams({ name: "Hachi Roku", age: 2 }),
  };

  return fetch(url, options);
}

export function postNewDogV2(name, age) {
  // Your code here
  return fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ name, age }),
  });
}

export function deleteDog(id) {
  // Your code here
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: { AUTH: "ckyut5wau0000jyv5bsrud90y" },
  });
}
