let drop_area = document.getElementById("drop-area");
let videoArea =
  // Drag Event
  drop_area.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

// Drop a File;
drop_area.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  let [file] = files;
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
      image.style.maxWidth = "200px";
      image.style.maxHeight = "200px";
      drop_area.appendChild(image);
    };
  }
  // Drop an Video
  else if (file.type.startsWith("video/")) {
    const objectUrl = URL.createObjectURL(file);
    video.src = objectUrl;
    video.style.width = '150px'
    videopl.play();
    
  }

  e.preventDefault();
});
