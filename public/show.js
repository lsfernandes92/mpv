const drawingsAndProjects = [
  "Bo.Bô _ Foto Bolsas",
  "Bo.Bô _ Projeto Bolsas",
  "ELLUS _ Croquis",
  "ELLUS _ Desenhos Técnicos Acessórios",
  "NK _ Fichas Técnicas",
]

const collectionPhotos = [
  "ANIMALE",
  "ELLUS _ SPFW",
  "ELLUS LIMITED _ Inverno 2015",
  "ELLUS LIMITED _ Verão 2016",
  "NK _ A Mar",
  "NK _ Architectura",
  "NK _ Eletric Dreams",
  "NK _ Inner Garden",
  "NK _ MERGULHO",
  "NK _ Min!max",
  "NK _ NK Por NK",
  "NK _ Soul",
  "NK _ Wave",
  "NK _ We Are Made Of Stars",
  "NK _ Wild at Heart",
  "RIACHUELO",
]

const projectsMeterials = [
  "Aviamento _ Broche Metal",
  "Aviamento _ Fecho Metal Bolsa",
  "Aviamento _ Patch Bordado Manual",
  "Tecido _ Bordado Corrido",
]

const projectsProducts = [
  "ANIMALE _ Desenvolvimento Bordado",
  "Desenhos Tecn. Acess.Ellus ",
  "ELLUS _ Bolsas Verão 2016 - Fotos",
  "ELLUS _ Bolsas Verão 2016 - Projeto",
  "ELLUS _ Calçados Femininos Inverno 2016 - Fotos",
  "ELLUS _ Calçados Femininos Inverno 2016 - Projeto",
  "NK FICHAS TECNICAS",
  "Projeto Bolsas Bo.Bô Final",
  "Projeto Bolsas Bo.Bô",
]

const container = document.querySelector(".container")

window.onload = () => { if (document.referrer === "") self.location="./index.html" }

const appendPDFs = (category, pdfsNames) => {
  const imgElement = document.createElement("img")
  const pElement = document.createElement("p")
  const ulElement = document.createElement("ul")

  imgElement.src = "./images/folder-open-solid.svg"

  pElement.textContent = category
  pElement.style.cssText = "display:inline"

  container.append(imgElement)
  container.append(pElement)
  container.append(ulElement)

  pdfsNames.forEach(pdf => {
    const liElement = document.createElement("li")
    const aElement = document.createElement("a")

    aElement.href = `./pdfs/${pdf}.pdf#toolbar=0`
    aElement.textContent = pdf

    liElement.append(aElement)
    ulElement.append(liElement)
  })
}

appendPDFs("Desenhos, Projetos", drawingsAndProjects)
appendPDFs("Fotos Coleções", collectionPhotos)
appendPDFs("Projetos - Materiais", projectsMeterials)
appendPDFs("Projetos - Produtos", projectsProducts)