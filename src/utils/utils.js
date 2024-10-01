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
    "/man-overall-smiling-with-crossed-arms.jpeg",
    "/portrait-craftman.jpeg",
    "/portrait-painter.jpeg",
    "/portrait-craftman-2.jpeg",
    ,
  ];
  let index = 0;

  setInterval(function () {
    if (index === 4) index = -1;
    if (index != 4) index++;
    console.log(index);
    document.getElementById(
      "home"
    ).style.backgroundImage = `url(${images[index]})`;
  }, 5000);
};
