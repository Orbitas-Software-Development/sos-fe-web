export const setTimeOut = (func, time) =>
  setTimeout(() => {
    func();
  }, time);

export const eliminarDiacriticos = (texto) => {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
export const validateExistedValue = (array, string, property) => {
  let existed = false;
  array.map((value) => {
    if (
      eliminarDiacriticos(value[property]).toUpperCase().replace(/ /g, "") ===
      eliminarDiacriticos(string).toUpperCase().replace(/ /g, "")
    ) {
      existed = true;
    }
  });
  return existed;
};

export const setHomeBackground = (array, string, property) => {
  const images = [
    "/step-moon-texture.jpg",
    "/top-view-steel-hammer-with-other-construction-elements-tools.jpg",
    "/tools-art-repairing-paint-space-text.jpg",

    "/portrait-craftsman.jpg",
  ];
  let index = 0;

  setInterval(function () {
    if (index === 3) index = -1;
    if (index != 3) index++;
    console.log(index);
    document.getElementById(
      "home"
    ).style.backgroundImage = `url(${images[index]})`;
  }, 5000);
};
