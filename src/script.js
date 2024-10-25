const fileInput = document.getElementById("fileInput");
const imageGallery = document.getElementById("imageGallery");
const deleteZone = document.getElementById("deleteZone");

// 이미지 등록 이벤트
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imgElement = document.createElement("div");
      imgElement.style.backgroundImage = `url(${event.target.result})`;
      imgElement.classList.add("circle-image");
      imgElement.draggable = true;
      imgElement.id = `img_${Date.now()}`; // 고유 ID 추가
      addDragEvents(imgElement);
      imageGallery.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
  });
});

// 드래그 이벤트 처리 함수
function addDragEvents(element) {
  element.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    e.dataTransfer.setData("text", e.target.id);
  });

  element.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
}

// 드롭 영역 이벤트 처리
const dropzones = document.querySelectorAll(".drop-zone");

dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const imageId = e.dataTransfer.getData("text");
    const image = document.getElementById(imageId);
    zone.appendChild(image); // 드롭 영역에 이미지 추가
  });
});

// 삭제 영역 드롭 이벤트 처리
deleteZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

deleteZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const imageId = e.dataTransfer.getData("text");
  const image = document.getElementById(imageId);
  image.remove(); // 이미지 삭제
});
