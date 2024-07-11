//caracterId / btnGo / content

const caracterId = document.getElementById("caracterId");
const btnGo = document.getElementById("btnGo");
const content = document.getElementById("content");
const img = document.getElementById("img");
const btnReset = document.getElementById("btnReset");

const fetchApi = (value) => {
  const resultado = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "console de data");
      return data;
    });
  console.log(resultado, "console de resultado");
  return resultado;
};

btnGo.addEventListener("click", async (event) => {
  event.preventDefault();
  if(caracterId.value === "" ){
    return content.textContent = "Insira um indentificador válido!"
  }
  const result = await fetchApi(caracterId.value);
  content.textContent = `${JSON.stringify(result, undefined, 2)}`;
  img.src = `${result.image}`;
});

btnReset.addEventListener("click", () => location.reload())

fetchApi(1);
